import "./styles.css";
import TODO from "./TODO.js";
import Project from "./projects.js";

let test = new TODO('Test');
test.description('Testing');
test.dueDate('28.02.2026');
test.priority('High');
let testNode = document.createElement('div');
testNode.className = 'task';
testNode.textContent = Object.values(test);

let test2 = new TODO('test2');
test2.description('testing2');
test2.dueDate('28.02.2026');
test2.priority('High');
let test2Node = document.createElement('div');
test2Node.className = 'task';
test2Node.textContent = Object.values(test2);

let test3 = new TODO('Test3');
test3.description('Testing3');
test3.dueDate('28.02.2026');
test3.priority('High');
let test3Node = document.createElement('div');
test3Node.className = 'task';
test3Node.textContent = JSON.stringify(test3);

document.querySelector('#TODO').appendChild(testNode);
document.querySelector('#TODO').appendChild(test2Node);
document.querySelector('#TODO').appendChild(test3Node);

const domAddTODO = function (task) {
  if (task instanceof TODO) {
    let addedNode = document.createElement('div');
    addedNode.className = 'task';

    let header = document.createElement('h3');
    header.textContent = task.title;

    let info = document.createElement('p');
    let dueDate = document.createElement('p');
    let priority = document.createElement('p');
    info.textContent = task.description;
    dueDate.textContent = `due: ${task.dueDate}`;
    priority.textContent = `priority: ${task.priority}`;

    addedNode.appendChild(header);
    addedNode.appendChild(info);
    addedNode.appendChild(dueDate);
    addedNode.appendChild(priority);
    document.querySelector('#TODO').appendChild(addedNode);
  }
};

domAddTODO(test);

// let defaultProject = new Project();
// defaultProject.addTODO(test);
// defaultProject.addTODO(test2);
// defaultProject.addTODO(test3);

// let defaultProjectNode = document.createElement('div');
// defaultProjectNode.textContent = JSON.stringify(defaultProject.todos);
// document.querySelector('#TODO').appendChild(defaultProjectNode);
