// Project item
const Project = function (title) {
  this.title = title;
  this.todos = [];

  // Add/set property methods
  Project.prototype.description = function (value) {
    this.description = value;
    return this;
  };
  Project.prototype.addTODO = function (todo) {
    this.todos.push(todo);
    return this;
  };
};
export default Project;
