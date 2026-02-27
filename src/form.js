import TODO from "./TODO.js";
import renderTask from "./renderer.js";
import projectStorage from "./storage.js";
import { lightFormat } from "date-fns";

const form = function () {
  const taskForm = document.querySelector("#newTask");

  taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const newTaskName = taskForm.elements.newTaskName.value;
    const newTaskDue = taskForm.elements.newTaskDue.value;
    const newTaskPriority = taskForm.elements.newTaskPriority.value;
    
    const added = new TODO(newTaskName);
    added.dueDate = lightFormat(new Date(newTaskDue), "dd.MM.yyyy");
    added.priority = newTaskPriority;
    renderTask(added);
    projectStorage.addTask(added, "defaultProject");
  });
};

export default form;
