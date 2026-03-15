// TODO item
class TODO {
	constructor(title) {
		this.title = title;
		this.id = crypto.randomUUID();
	}

	setDescription(descriptionArg) {
		this.description = descriptionArg;
		return this;
	}

	setDueDate(dueDateArg) {
		this.dueDate = dueDateArg;
		return this;
	}

	setPriority(priorityArg) {
		this.priority = priorityArg;
		return this;
	}
}

export default TODO;
