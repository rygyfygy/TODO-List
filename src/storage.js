import Project from "./projects.js";

const projectStorage = {
  init: function () {
    if (!localStorage.getItem("projects")) {
      let defaultProject = new Project("defaultProject");
      defaultProject.title = 'defaultProject';
      localStorage.setItem("projects", JSON.stringify([defaultProject]));
    }
  },

  getProjects: function () {
    return JSON.parse(localStorage.getItem("projects"));
  },

  addTask: function (task, projectName) {
    const projects = this.getProjects();
    const changedProject = projects.find((item) => item.title === projectName);
    changedProject.todos.push(task);
    localStorage.setItem("projects", JSON.stringify(projects));
  },
};

export default projectStorage;
