import TODO from "./TODO.js";
import renderTask from "./renderer.js";
import projectStorage from "./storage.js";
import { lightFormat } from "date-fns";

const form = function () {
  const taskForm = document.querySelector("#newTask");

  taskForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const newTaskName =  taskForm.elements.newTaskName.value;
    const newTaskDue = taskForm.elements.newTaskDue.value;
    const newTaskPriority = taskForm.elements.newTaskPriority.value;
    
    const added = new TODO(newTaskName);
    added.setDueDate(lightFormat(new Date(newTaskDue), "dd.MM.yyyy"));
    added.setPriority(newTaskPriority);
    
    renderTask(added);
    projectStorage.updateTask(added, "defaultProject");
    evt.target.parentNode.parentNode.removeChild(evt.target.parentNode);
    document.querySelector("#blank").remove();
    document.querySelector("#TODO").style.removeProperty("filter");
  });
};

export default form;
