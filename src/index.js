import "./styles.css";
import TODO from "./TODO.js";
import Project from "./projects.js";
import renderTask from "./renderer.js";
import projectStorage from "./storage.js";
import form from "./form.js";

form();
projectStorage.init();


let test = new TODO("Test");
test.setDescription("Testing");
test.setDueDate("28.02.2026");
test.setPriority("High");

renderTask(test);

console.log(projectStorage.getProjects());

projectStorage.addTask(test, "defaultProject");

console.log(projectStorage.getProjects());
