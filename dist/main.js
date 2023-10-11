/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/creatingProject.js":
/*!********************************!*\
  !*** ./src/creatingProject.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createEventlistener: () => (/* binding */ createEventlistener)\n/* harmony export */ });\n\r\n\r\nconst createEventlistener = () =>{\r\n    // event listener for creating a form for adding projects\r\n    const cancel = document.querySelector('.projectCancelBtn');\r\n    cancel.addEventListener('click', hideProjectForm);\r\n\r\n    const add = document.getElementById('addProject');\r\n    add.addEventListener('click', showProjectForm);\r\n\r\n    const submit = document.getElementById('projectForm');\r\n    submit.addEventListener('submit', processProjectInput);\r\n\r\n    // const leftPanel = document.querySelector('.leftPanel');\r\n    // leftPanel.addEventListener('click', checkTile);\r\n\r\n    displayProject(projectList);\r\n}\r\n// get project list of objects from the local Storage or []\r\nlet defaultProjectList = [];\r\nlet projectList = localStorage.getItem('myProjectList');\r\nprojectList = JSON.parse(projectList || JSON.stringify(defaultProjectList));\r\n\r\n// save project and last id data on local storage\r\nfunction saveToLocalStorage(){\r\n    localStorage.setItem('myProjectList', JSON.stringify(projectList)); //the right hand side should b input.value, we use project list to push the now created input.value in the procces func\r\n    localStorage.setItem(\"currentId\", (id).toString());\r\n}\r\n\r\n// find next data-set (to locate the next tile)\r\nfunction findNextDataset(){\r\n    const allProjects = document.querySelectorAll('[data-project]'); // we would use this data project to target all the newly created project and locate the clicked tile / the next tile\r\n    return allProjects.length;\r\n}\r\n\r\nconst hideProjectForm = () => {\r\n    const projectForm = document.querySelector('#projectForm');\r\n    const projectInput = document.querySelector('#projectInput');\r\n\r\n    projectInput.value = \"\";\r\n    projectForm.classList.add(\"hidden\");\r\n}\r\n\r\n// Create project factory function\r\nfunction createProject(dataProject, name){\r\n    const taskList = [];\r\n    const taskNum = taskList.length;\r\n    return{\r\n        dataProject,\r\n        name,\r\n        taskList,\r\n        taskNum\r\n    }\r\n}\r\n\r\n// process the input and prepare to create element project\r\nfunction processProjectInput(e){\r\n    let dataProject = findNextDataset();\r\n    let projectName = document.getElementById(\"projectInput\").value;\r\n    const newProject = createProject(dataProject, projectName);\r\n\r\n    // push the item to local storage using project list\r\n    projectList.push(newProject);\r\n    saveToLocalStorage();\r\n\r\n    addProject(dataProject, projectName);\r\n    hideProjectForm();\r\n    e.preventDefault();\r\n}\r\n\r\n// create a span icon of google material icons\r\nconst createSpanIcon = (name) => {\r\n    const icon = document.createElement('span'); \r\n    icon.classList.add(\"material-icons-round\");\r\n    icon.textContent = name; // i call my icons from google fonts, (you need a class containing the font and span containing the name)\r\n    return icon;\r\n}\r\n\r\n// create a project and add it to the lst of projects in html\r\nconst addProject = (dataProject, textInput) => {\r\n    const project = document.querySelector('.projects'); //used to target the main project head for inserion of the form\r\n    const form = document.querySelector('#projectForm'); //to insert the form\r\n\r\n    const container = document.createElement('div');\r\n    container.setAttribute('data-project', `${dataProject}`);\r\n    container.classList.add('tile');\r\n    project.insertBefore(container, form) //insert the menu icon before the project name\r\n\r\n    // menu three lines icon\r\n    const menuIcon = createSpanIcon('menu'); // using the span icon to give it a name hten adding the corresponding class \r\n    menuIcon.classList.add(\"material-symbols-outlined\");\r\n    menuIcon.setAttribute('data-drag', '');\r\n    container.appendChild(menuIcon)\r\n    // name and number status (div for the project name)\r\n    const projectInfo = document.createElement('div');\r\n    projectInfo.classList.add('projectInfo');\r\n    container.appendChild(projectInfo);\r\n\r\n    const projectName = document.createElement('div');\r\n    projectName.classList.add('projectName');\r\n    projectName.textContent = textInput;\r\n\r\n    projectInfo.appendChild(projectName);\r\n    \r\n    //three dots on the right\r\n    const editdiv = document.createElement('div');\r\n    editdiv.classList.add('editContainer');\r\n    editdiv.setAttribute(\"data-dropdown\", \"\");\r\n    container.appendChild(editdiv);\r\n    // call function to create a span icon from google\r\n    const editIcon = createSpanIcon(\"more_vert\"); //find the google icons for three dots and substitute \r\n    editIcon.classList.add(\"material-symbols-outlined\");\r\n    editIcon.setAttribute(\"data-dropdown-button\",\"\");\r\n    editdiv.appendChild(editIcon);\r\n}\r\n\r\n// display the list of all projects in the left panel\r\nconst displayProject = (arr) =>{\r\n    arr.forEach(project => {\r\n        addProject(project.dataProject, project.name);\r\n    });\r\n}\r\n\r\nfunction showProjectForm(){\r\n    const projectForm = document.querySelector('#projectForm');\r\n    projectForm.classList.remove('hidden');\r\n}\r\n\r\n \n\n//# sourceURL=webpack://task-list/./src/creatingProject.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _creatingProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creatingProject */ \"./src/creatingProject.js\");\n\r\n\r\n(0,_creatingProject__WEBPACK_IMPORTED_MODULE_0__.createEventlistener)();\r\n// menu button \r\nconst menuIcon = document.querySelector('.hamMenu')\r\nmenuIcon.addEventListener('click', ()=>{\r\n    const leftPanel = document.querySelector('.leftPanel');\r\n    leftPanel.classList.toggle(\"hidden\");\r\n    \r\n})\r\n\r\n//on start up checked wether its on light mode or dark mode\r\nconst checkbox = document.getElementById(\"inputCbox\");\r\nif(checkbox.checked === true){\r\n    document.body.classList.add(\"light\");\r\n}\r\nelse{\r\n    document.body.classList.remove(\"light\");\r\n}\r\n\r\n//event listener for every time the dark mode toggle change\r\ncheckbox.addEventListener(\"change\", () =>{\r\n    document.body.classList.toggle(\"light\");\r\n})\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://task-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;