// TODO item
const TODO = function (title) {
  this.title = title;
  this.id = crypto.randomUUID();

  // Add/set property methods
  TODO.prototype.setDescription = function (descriptionArg) {
    this.description = descriptionArg;
    return this;
  };
  TODO.prototype.setDueDate = function (dueDateArg) {
    this.dueDate = dueDateArg;
    return this;
  };
  TODO.prototype.setPriority = function (priorityArg) {
    this.priority = priorityArg;
    return this;
  };
};
export default TODO;
