/* eslint-disable no-unused-vars */
import "./template.html";
import newTaskPopUp from "./newTaskPopUp.js";

const DOMTasks = (() => {
  const plusButtonAddTask = (() => {
    let plus = document.querySelector("#plus");
    let newTask = document.querySelector("#newTask");
    plus.addEventListener("click", newTaskPopUp);
  })();
})();

export default DOMTasks;
