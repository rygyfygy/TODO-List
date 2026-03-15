import TODO from "./TODO.js";
import form from "./form.js";
import renderTask from "./renderer.js";
import projectStorage from "./storage.js";
import { navBar, bindNewProject, setActiveProjectText } from "./navBar.js";
import { lightFormat } from "date-fns";

let currentProject;

function handleNewTask({ title, dueDate, priority }) {
	const task = new TODO(title);
	if (dueDate) task.setDueDate(lightFormat(new Date(dueDate), "dd.MM.yyyy"));
	if (priority) task.setPriority(priority);
	projectStorage.addTask(task, currentProject);
	renderTask(task);
}

function handleDeleteTask() {
	let deleteButtons = document.querySelectorAll(".deleteTaskButton");
	deleteButtons.forEach((button) => {
		button.addEventListener("click", () => {
			let taskContainerToDelete = button.parentNode;
			projectStorage.deleteTask(taskContainerToDelete.id);
			taskContainerToDelete.remove();
		});
	});
}

function handleAddProject() {
	let addedProject = projectStorage.addProject(
		document.querySelector("#projectInput").value,
	);
	renderProjects();
	setCurrentProject(addedProject);
}

function renderProjects() {
	let projectsList = document.querySelector("#projectsList");
	projectsList.innerHTML = null;
	projectStorage.getProjects().map((projectData) => {
		let renderedProject = document.createElement("li");
		renderedProject.className = "projectName";
		let projectButton = document.createElement("button");
		projectButton.className = "projectButton";
		projectButton.textContent = projectData.title;
		projectButton.id = projectData.id;
		renderedProject.appendChild(projectButton);
		renderedProject.addEventListener("click", (event) => {
			setCurrentProject(event.target.id);
		});
		projectsList.appendChild(renderedProject);
	});
}

function renderProjectTasks(projectID) {
	let tasksList = document.querySelector("#TODO");
	//renderProjectTasks
	tasksList.innerHTML = null;
	let toRender = projectStorage.getProject(projectID);
	toRender.forEach((task) => renderTask(task));
}

function renderAll() {
	let toRender = projectStorage.init();
	if (!toRender || toRender.length === 0) return;
	toRender.forEach((task) => renderTask(task));
}

function setCurrentProject(projectID) {
	currentProject = projectID;
	setActiveProjectText(document.getElementById(projectID).textContent);
	renderProjectTasks(projectID);
}

function initController() {
	renderAll();
	navBar();
	renderProjects();
	bindNewProject();
	document.addEventListener("newTaskPopupOpened", () => {
		form.bindAddTask(handleNewTask);
	});
	document.addEventListener("taskRendered", handleDeleteTask);
	document.addEventListener("addProject", handleAddProject);

	setCurrentProject("singleTasks");
}

export default initController;
