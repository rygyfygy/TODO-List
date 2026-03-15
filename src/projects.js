// Project item
class Project {
	constructor(title) {
		this.title = title;
		this.tasks = [];
		this.id = crypto.randomUUID();
	}
	// Add/set property methods
	description(value) {
		this.description = value;
		return this;
	}
	addTask(taskName) {
		this.tasks.push(taskName);
		return this;
	}
	removeTask(taskID) {
		this.tasks = this.tasks.filter((task) => task.id != taskID);
	}
}

export default Project;
