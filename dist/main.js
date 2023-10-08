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

/***/ "./src/creatingPtoject.js":
/*!********************************!*\
  !*** ./src/creatingPtoject.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createEventlistener: () => (/* binding */ createEventlistener)\n/* harmony export */ });\n\r\n\r\nconst createEventlistener = () =>{\r\n    // event listener for creating a form for adding projects\r\n    const cancel = document.querySelector('.projectCancelBtn');\r\n    // cancel.addEventListener('click', hideProjectForm);\r\n\r\n    const add = document.getElementById('addProject');\r\n    add.addEventListener('click', showProjectForm);\r\n\r\n    const submit = document.getElementById('projectForm');\r\n    submit.addEventListener('submit', processProjectInput);\r\n\r\n    const leftPanel = document.querySelector('.leftPanel');\r\n    leftPanel.addEventListener('click', checkTile);\r\n\r\n    displayProject(projectList);\r\n}\r\n// get project list of objects from the local Storage or []\r\nlet defaultProjectList = [];\r\nlet projectList = localStorage.getItem('myProjectList');\r\nprojectList = JSON.parse(projectList || JSON.stringify(defaultProjectList));\r\n\r\nfunction saveToLocalStorage(){\r\n    localStorage.setItem('myProjectList', JSON.stringify(projectList));\r\n    localStorage.setItem(\"currentId\", (id).toString());\r\n}\r\n\r\n// Create project factory function\r\nfunction createProject(dataProject, name){\r\n    const taskList = [];\r\n    const taskNum = taskList.length;\r\n    return{\r\n        dataProject,\r\n        name,\r\n        taskList,\r\n        taskNum\r\n    }\r\n}\r\n\r\n\r\n\r\nfunction showProjectForm(){\r\n    const projectForm = document.querySelector('#projectForm');\r\n    projectForm.classList.remove('hidden');\r\n}\r\n\r\n \n\n//# sourceURL=webpack://task-list/./src/creatingPtoject.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _creatingPtoject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creatingPtoject */ \"./src/creatingPtoject.js\");\n\r\n\r\n(0,_creatingPtoject__WEBPACK_IMPORTED_MODULE_0__.createEventlistener)();\r\n// menu button \r\nconst menuIcon = document.querySelector('.hamMenu')\r\nmenuIcon.addEventListener('click', ()=>{\r\n    const leftPanel = document.querySelector('.leftPanel');\r\n    leftPanel.classList.toggle(\"hidden\");\r\n    \r\n})\r\n\r\n//on start up checked wether its on light mode or dark mode\r\nconst checkbox = document.getElementById(\"inputCbox\");\r\nif(checkbox.checked === true){\r\n    document.body.classList.add(\"light\");\r\n}\r\nelse{\r\n    document.body.classList.remove(\"light\");\r\n}\r\n\r\n//event listener for every time the dark mode toggle change\r\ncheckbox.addEventListener(\"change\", () =>{\r\n    document.body.classList.toggle(\"light\");\r\n})\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://task-list/./src/index.js?");

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