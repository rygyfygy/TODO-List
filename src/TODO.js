// TODO item
const TODO = function (title) {
  this.title = title;

  // Add/set property methods
  TODO.prototype.description = function (value) {
    this.description = value;
    return this;
  };
  TODO.prototype.dueDate = function (value) {
    this.dueDate = value;
    return this;
  };
  TODO.prototype.priority = function (value) {
    this.priority = value;
    return this;
  };
};

export default TODO;
