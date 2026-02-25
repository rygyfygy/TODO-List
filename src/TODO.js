// TODO item
const TODO = function (title) {
  this.title = title;
};

TODO.prototype.description = function (value) {
  Object.assign(this, { description: value });
};
TODO.prototype.dueDate = function (value) {
  Object.assign(this, { dueDate: value });
};
TODO.prototype.priority = function (value) {
  Object.assign(this, { priority: value });
};

export default TODO;