// Project item
const Project = function (title) {
  this.title = title;
  this.tasks = [];

  // Add/set property methods
  Project.prototype.description = function (value) {
    this.description = value;
    return this;
  };
  Project.prototype.addTask = function (task) {
    this.tasks.push(task);
    return this;
  };
};
export default Project;
