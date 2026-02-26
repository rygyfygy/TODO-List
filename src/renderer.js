import TODO from "./TODO.js";

const domAddTODO = function (task) {
  if (task instanceof TODO) {
    let addedNode = document.createElement('div');
    addedNode.className = 'task';

    let header = document.createElement('h3');
    header.textContent = task.title;
    addedNode.appendChild(header);
    
    let info = document.createElement('p');
    info.textContent = task.description;
    
    let dueDate = document.createElement('p');
    dueDate.textContent = `Due: ${task.dueDate}`;
    
    let priority = document.createElement('p');
    priority.textContent = `Priority: ${task.priority}`;

    addedNode.appendChild(info);
    addedNode.appendChild(dueDate);
    addedNode.appendChild(priority);
    document.querySelector('#TODO').appendChild(addedNode);
  }
};
export default domAddTODO;