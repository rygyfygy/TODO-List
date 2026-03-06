/* eslint-disable no-unused-vars */
import form from "./form.js";
import TODO from "./TODO.js";
import Project from "./projects.js";
import renderTask from "./renderer.js";
import projectStorage from "./storage.js";
import domTasks from "./domEvents.js";
import { lightFormat } from "date-fns";
import navBar from "./navBar.js";

const controller = (() => {
  //  const renderAllTasksSavedInTheMemory = (() => {
  //    projectStorage.init.foreach((task) => renderTask(task));
  //  })();
  

  const handleNewTask = ({ title, dueDate, priority }) => {
    const task = new TODO(title);
    if (dueDate) task.setDueDate(lightFormat(new Date(dueDate), "dd.MM.yyyy"));
    if (priority) task.setPriority(priority);
    projectStorage.addTask(task, "defaultProject");
    renderTask(task);
  };
  document.addEventListener("newTaskPopupOpened", () => {
    form.bindAddTask(handleNewTask);
  });

  const handleDeleteTask = () => {
    let deleteButtons = document.querySelectorAll(".deleteTaskButton");
    deleteButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        let taskContainerToDelete = button.parentNode;
        projectStorage.deleteTask(taskContainerToDelete.id);
        taskContainerToDelete.remove();
      });
    });
  }; 
  document.addEventListener("taskRendered", () => handleDeleteTask());

  const renderAll = (() => {
    let toRender = projectStorage.init();
    toRender.forEach((task) => renderTask(task));
  })(); 

  const renderProjects = (() => {
    let projectsList = document.querySelector("#projectsList");
    projectStorage.getProjects().map((projectData) => {
      let renderedProject = document.createElement("li");
      renderedProject.textContent = projectData.title;
      projectsList.appendChild(renderedProject);
    })
  })();

  const newProject = (() => {
    let newProject = document.querySelector("#addProject");
    newProject.addEventListener("click", () => {
      let newProjectPrompt = document.createElement("div");
      newProjectPrompt.id = "newProjectContainer";
      newProjectPrompt.innerHTML = `<form id="newProject">
        <label for="projectInput">Add a new project:</label>
        <input
          type="text"
          id="projectInput"
          name="projectInput"
          placeholder="Enter project name"
          required
        />
        <button type="submit">add</button>
      </form>`;
      document.body.append(newProjectPrompt);
    });
  })();


})();
export default controller;
