import Project from "./projects.js";
import TODO from "./TODO.js";

const projectStorage = {
  init: function () {
    if (localStorage.getItem("projects") === null) {
      let defaultProject = new Project("defaultProject");
      defaultProject.title = "defaultProject";
      localStorage.setItem("projects", JSON.stringify([defaultProject]));
    } else {
      let toRender = []; 
      this.getProjects().forEach((projectData) => {
        // Recreate Project instance from plain object
        const project = new Project(projectData.title);
        project.tasks = projectData.tasks;
        
        toRender = project.tasks.map((task) => {
          // Recreate TODO instance from plain object
          let todo = new TODO(task.title);
          const { description, dueDate, priority, id } = task;
          todo.setDescription(description);
          todo.setDueDate(dueDate);
          todo.setPriority(priority); 
          todo.id = id;
          return todo;
        });
      });
      document.dispatchEvent(new CustomEvent("renderAll"));
      return toRender;
    }
  },

  getProjects: function () {
    return JSON.parse(localStorage.getItem("projects"));
  },

  addTask: function (task, projectName) {
    let projects = this.getProjects();
    let changedProject = projects.find(
      (project) => project.title === projectName,
    );
    changedProject.tasks.push(task);
    localStorage.setItem("projects", JSON.stringify(projects));
  },

  deleteTask: function (taskID) {
    let projects = this.getProjects();
    let changedProject = projects.find((project) =>
      project.tasks.some((task) => task.id === taskID),
    );
    // changedProject.tasks.splice(changedProject.tasks.indexOf(task), 1);
    if (!changedProject) return;

    changedProject.tasks = changedProject.tasks.filter(
      (task) => task.id !== taskID,
    );

    localStorage.setItem("projects", JSON.stringify(projects));
  },
};

export default projectStorage;
