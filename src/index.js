/* eslint-disable no-unused-vars */
import form from "./form.js";
import "./styles.css";
import TODO from "./TODO.js";
import Project from "./projects.js";
import renderTask from "./renderer.js";
import projectStorage from "./storage.js";
import domTasks from "./domEvents.js";



projectStorage.init();


// let test = new TODO("Test");
// test.setDescription("Testing");
// test.setDueDate("28.02.2026");
// test.setPriority("High");

// renderTask(test);


// projectStorage.addTask(test, "defaultProject");

