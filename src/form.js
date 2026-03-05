const form = {
  bindAddTask(handler) {
    const taskForm = document.querySelector("#newTask");
    if (!taskForm) return;

    taskForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const title = taskForm.elements.newTaskName.value;
      const dueDate = taskForm.elements.newTaskDue.value;
      const priority = taskForm.elements.newTaskPriority.value;

      if (!title) return;

      handler({ title, dueDate, priority });

      const blank = document.querySelector("#blank");
      if (blank) blank.remove();
      const todoNode = document.querySelector("#TODO");
      if (todoNode) todoNode.style.removeProperty("filter");
    });
  },
};
export default form;
