import Project from "./projects.js";
import TODO from "./TODO.js";

const projectStorage = {
	getProjects: function () {
		return JSON.parse(localStorage.getItem("projects")) || [];
	},

	init: function () {
		const projects = this.getProjects(); // already [] fallback in your code

		if (projects.length === 0) {
			let singleTasks = new Project("singleTasks");
			singleTasks.title = "Single Tasks";
			singleTasks.id = "singleTasks";
			localStorage.setItem("projects", JSON.stringify([singleTasks]));
			return [];
		} else {
			let toRender = [];
			projects.forEach((projectData) => {
				// Recreate Project instance from plain object
				let project = new Project(projectData.title);
				project.tasks = (projectData.tasks || []).map((task) => {
					// Recreate TODO instance from plain object
					let todo = new TODO(task.title);
					const { description, dueDate, priority, id } = task;
					todo.setDescription(description);
					todo.setDueDate(dueDate);
					todo.setPriority(priority);
					todo.id = id;
					return todo;
				});
				project.id = projectData.id;

				toRender.push(...project.tasks);
			});
			document.dispatchEvent(new CustomEvent("renderAll"));
			return toRender;
		}
	},

	addProject: function (projectName) {
		let addedProject = new Project(projectName);
		let projects = this.getProjects();
		projects.push(addedProject);
		localStorage.setItem("projects", JSON.stringify(projects));
		return addedProject.id
	},

	addTask: function (task, projectID) {
		let projects = this.getProjects();
		let changedProject = projects.find(
			(project) => project.id === projectID,
		);
		if (!changedProject) return;
		changedProject.tasks.push(task);
		localStorage.setItem("projects", JSON.stringify(projects));
	},

	deleteTask: function (taskID) {
		let projects = this.getProjects();
		let changedProject = projects.find((project) =>
			project.tasks.some((task) => task.id === taskID),
		);
		if (!changedProject) return;

		changedProject.tasks = changedProject.tasks.filter(
			(task) => task.id !== taskID,
		);

		localStorage.setItem("projects", JSON.stringify(projects));
	},

	getProject: function (projectID) {
		let projectData = this.getProjects().find(
			(project) => project.id === projectID,
		);
		if (!projectData) return [];

		// Recreate Project instance from plain object
		let toRender = new Project(projectData.title);
		toRender.id = projectData.id;
		toRender.tasks = (projectData.tasks || []).map((task) => {
			// Recreate TODO instance from plain object
			let todo = new TODO(task.title);
			const { description, dueDate, priority, id } = task;
			todo.setDescription(description);
			todo.setDueDate(dueDate);
			todo.setPriority(priority);
			todo.id = id;
			return todo;
		});
		return toRender.tasks;
	},
};

export default projectStorage;
