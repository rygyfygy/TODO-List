import "./styles.css";
import TODO from "./TODO.js";
import Project from "./projects.js";
import domAddTODO from "./renderer.js";
import projectStorage from "./storage.js";

projectStorage.init()

let test = new TODO('Test');
test.description('Testing');
test.dueDate('28.02.2026');
test.priority('High');

domAddTODO(test);

console.log(projectStorage.getProjects());


projectStorage.addTask('defaultProject', test);

console.log(projectStorage.getProjects());






