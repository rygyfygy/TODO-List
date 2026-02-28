import Project from "./projects.js";
import TODO from "./TODO.js";
import renderTask from "./renderer.js";

const projectStorage = {
  init: function () {
    if (localStorage.getItem("projects") === null) {
      let defaultProject = new Project("defaultProject");
      defaultProject.title = "defaultProject";
      localStorage.setItem("projects", JSON.stringify([defaultProject]));
    } else {
      this.getProjects().forEach((projectData) => {
        // Recreate Project instance from plain object
        const project = new Project(projectData.title);
        project.tasks = projectData.tasks;
        project.tasks.forEach((task) => {
          // Recreate TODO instance from plain object
          let todo = new TODO(task.title);
            const { description, dueDate, priority } = task;
            todo.setDescription(description);
            todo.setDueDate(dueDate);
            todo.setPriority(priority);
          renderTask(todo);
        });
      });
    }
  },

  getProjects: function () {
    return JSON.parse(localStorage.getItem("projects"));
  },

  updateTask: function (task, projectName) {
    const projects = this.getProjects();
    const changedProject = projects.find((item) => item.title === projectName);
    changedProject.tasks.push(task);
    localStorage.setItem("projects", JSON.stringify(projects));
  },
};

export default projectStorage;
