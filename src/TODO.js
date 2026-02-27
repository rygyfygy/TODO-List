// TODO item
const TODO = function (title) {
  this.title = title;

  // Add/set property methods
  TODO.prototype.setDescription = function (value) {
    this.description = value;
    return this;
  };
  TODO.prototype.setDueDate = function (value) {
    this.dueDate = value;
    return this;
  };
  TODO.prototype.setPriority = function (value) {
    this.priority = value;
    return this;
  };
};
export default TODO;
