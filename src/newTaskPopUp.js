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
            <label for="newTaskDue">Due: </label>
            <input
            type="date"
            name="newTaskDue"
            value="2026-04-14"
            />
            <fieldset>
            <legend>Priority:</legend>
            <div id="priority">
                <div>
                <label for="newTaskPriorityL"><input id="newTaskPriorityL" type="radio" name="newTaskPriority" value="Low" hidden/>Low</label>
                </div>
                <div>
                <label for="newTaskPriorityM"><input id="newTaskPriorityM" type="radio" name="newTaskPriority" value="Medium" hidden/>Medium</label>
                </div>
                <div>
                <label for="newTaskPriorityH"><input id="newTaskPriorityH" type="radio" name="newTaskPriority" value="High" hidden/>High</label>
                </div>
            </div>
            </fieldset>
            <button type="submit">confirm</button>
        </form>`;
    // white-blur overlay
    let blank = document.createElement("div");
    blank.id = "blank";
    blank.appendChild(newTaskContainer);
    blank.addEventListener("click", (event) => {
      if (event.target !== event.currentTarget) return;
      blank.remove();
      document.querySelector("#TODO").style.removeProperty("filter");
    });

    document.body.insertBefore(blank, document.querySelector("#TODO"));
    document.querySelector("#TODO").style.filter = "blur(5px)";

    document.dispatchEvent(new CustomEvent("newTaskPopupOpened"));
  } else {
    document.querySelector("#blank").remove();
    document.querySelector("#TODO").style.removeProperty("filter");
  }
};

export default newTaskPopUp;
