import TODO from "./TODO.js";
import { differenceInCalendarDays, parse, isToday } from "date-fns";

const renderTask = function (task) {
  if (task instanceof TODO) {
    let addedNode = document.createElement("div");
    addedNode.className = "task";
    addedNode.id = task.id; // DOM-STORAGE LINK
    let header = document.createElement("h3");
    header.textContent = task.title;
    addedNode.appendChild(header);

    let info = document.createElement("p");
    if (task.description) {
      info.textContent = task.description;
    }

    let dueDate = document.createElement("p");
    if (task.dueDate) {
      let rawDate = parse(task.dueDate, "dd.MM.yyyy", new Date());
      let daysLeft;
      if (isToday(rawDate)) {
        daysLeft = "Today!";
      } else {
        const diff = differenceInCalendarDays(rawDate, new Date());
        daysLeft =
          diff > 0 ? `${diff} days left` : `${Math.abs(diff)} days ago`;
      }
      dueDate.textContent = `Due: ${task.dueDate} (${daysLeft})`;
    }

    let priority = document.createElement("p");
    if (task.priority) {
      priority.textContent = `Priority: ${task.priority}`;
    }

    addedNode.appendChild(info);
    addedNode.appendChild(dueDate);
    addedNode.appendChild(priority);

    // delete button // TO REFACTOR
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "delete";
    deleteButton.className = "deleteTaskButton";
    deleteButton.type = "button";
    addedNode.appendChild(deleteButton);

    // deleteButton.addEventListener("click", (evt) => {
    //   evt.target.parentNode.parentNode.removeChild(evt.target.parentNode);
    //   // TEMPORARY / TODO: ID / link
    //   projectStorage.deleteTask(task, "defaultProject");
    // });
    // TODO add edit button // TO REFACTOR

    document.querySelector("#TODO").appendChild(addedNode);
    document.dispatchEvent(new CustomEvent("taskRendered"));
  }
};
export default renderTask;
