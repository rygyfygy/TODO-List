import "./styles.css";
import TODO from "./TODO.js";


let test = new TODO('Test');
test.description('Testing');
test.dueDate('30.02.2026');
test.priority('High');

let testNode = document.createElement('div');
testNode.textContent = Object.values(test);

document.querySelector('#TODO').appendChild(testNode);

