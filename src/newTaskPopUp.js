import form from "./form.js";

const newTaskPopUp = function () {
  if (document.querySelector("#newTask") === null) {
    let newTaskContainer = document.createElement("div");
    newTaskContainer.id = "newTaskContainer";
    newTaskContainer.innerHTML = `<form id="newTask">
            <label for="newTaskName">Task name: </label>
            <input
            type="text"
            name="newTaskName"
            placeholder="Enter task name"
            required
            />
            <label for="ewTaskDue">Due: </label>
            <input
            type="date"
            name="newTaskDue"
            value="2026-04-14"
            />
            <fieldset>
            <legend>Priority:</legend>
            <div id="priority">
                <div>
                <label for="newTaskPriorityL">Low</label>
                <input type="radio" name="newTaskPriority" value="Low" />
                </div>
                <div>
                <label for="newTaskPriorityM">Medium</label>
                <input type="radio" name="newTaskPriority" value="Medium" />
                </div>
                <div>
                <label for="newTaskPriorityH">High</label>
                <input type="radio" name="newTaskPriority" value="High" />
                </div>
            </div>
            </fieldset>
            <button type="submit">add</button>
        </form>`;
    let blank = document.createElement("div");
    blank.id = "blank";
    blank.appendChild(newTaskContainer);

    document.body.insertBefore(blank, document.querySelector("#TODO"));
     document.querySelector("#TODO").style.filter = 'blur(5px)';
      form();
  } else {
      document.querySelector("#blank").remove();
      document.querySelector("#TODO").style.removeProperty('filter');
  }
};

export default newTaskPopUp;
