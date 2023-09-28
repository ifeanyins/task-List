/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// alert('maker')\r\n\r\n\r\n// menu button \r\nconst menuIcon = document.querySelector('.hamburgerMenu')\r\nmenuIcon.addEventListener('click', ()=>{\r\n    const leftPanel = document.querySelector('.leftPanel');\r\n    leftPanel.classList.toggle(\"hidden\");\r\n    \r\n})\r\n\r\n//on start up checked wether its on light mode or dark mode\r\nconst checkbox = document.getElementById(\"inputCbox\");\r\nif(checkbox.checked === true){\r\n    document.body.classList.add(\"light\");\r\n}\r\nelse{\r\n    document.body.classList.remove(\"light\");\r\n}\r\n\r\n//event listener for every time the dark mode toggle change\r\ncheckbox.addEventListener(\"change\", () =>{\r\n    document.body.classList.toggle(\"light\");\r\n})\r\n\n\n//# sourceURL=webpack://task-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;