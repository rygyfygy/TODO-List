/* eslint-disable no-unused-vars */
import form from "./form.js";
import TODO from "./TODO.js";
import Project from "./projects.js";
import renderTask from "./renderer.js";
import projectStorage from "./storage.js";
import domTasks from "./domEvents.js";
import { lightFormat } from "date-fns";


const controller = (() => {

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
})();

export default controller;
