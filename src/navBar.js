function bindNewProject() {
	let newProjectButton = document.querySelector("#newProjectButton");
	if (!newProjectButton) return;

	newProjectButton.addEventListener("click", () => {
		let existingContainer = document.querySelector("#newProjectContainer");
		if (existingContainer) {
			existingContainer.remove();
			return;
		}

		let newProjectContainer = document.createElement("div");
		newProjectContainer.id = "newProjectContainer";

		let newProjectForm = document.createElement("form");
		newProjectForm.id = "newProjectForm";

		let newProjectFormInput = Object.assign(document.createElement("input"), {
			type: "text",
			id: "projectInput",
			name: "projectInput",
			placeholder: "New Project name",
			required: true,
		});
		let newProjectFormSubmit = Object.assign(document.createElement("button"), {
			type: "submit",
			textContent: "add",
		});

		newProjectForm.appendChild(newProjectFormInput);
		newProjectForm.appendChild(newProjectFormSubmit);
		newProjectContainer.appendChild(newProjectForm);

		newProjectForm.addEventListener("submit", (event) => {
			event.preventDefault();
			document.dispatchEvent(new CustomEvent("addProject"));
		});

		document.querySelector("nav").appendChild(newProjectContainer);
	});
}

function navBar() {
	let nav = document.createElement("nav");

	let header = document.createElement("h1");
	header.textContent = "TODO";
	nav.appendChild(header);

	let projects = document.createElement("div");

	let projectsHeader = document.createElement("span");

	let projectsHeaderElement = document.createElement("h3");
	projectsHeaderElement.textContent = "Projects";
	projectsHeader.appendChild(projectsHeaderElement);

	let newProjectButton = document.createElement("button");
	newProjectButton.id = "newProjectButton";

	newProjectButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>`;
	projectsHeader.appendChild(newProjectButton);
	projects.appendChild(projectsHeader);

	let projectsList = document.createElement("ul");
	projectsList.id = "projectsList";
	projects.appendChild(projectsList);

	nav.appendChild(projects);
	document.body.appendChild(nav);
}

function setActiveProjectText(projectName) {
	let activeProjectText= document.querySelector("#activeProject");
	activeProjectText.textContent = projectName;
}

export { navBar, bindNewProject, setActiveProjectText };
