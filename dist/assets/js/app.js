/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/slider.js":
/*!*********************************!*\
  !*** ./src/assets/js/slider.js ***!
  \*********************************/
/***/ (function() {

eval("\r\n\r\n\r\n\r\nlet position = 0\r\nlet slidesToShow = 1\r\nlet slidesToScroll = 1\r\n\r\nconst sliderTrack = document.querySelector('.services__box')\r\nconst sliderItem = document.querySelectorAll('.box__wrapper')\r\n\r\n\r\n\r\nconst itemCount = sliderItem.length;\r\n\r\n\r\n\r\nconst arrowPrev = document.querySelector('#arrowPrev')\r\nconst arrowNext = document.querySelector('#arrowNext')\r\n\r\nconst itemWidth = sliderTrack.clientWidth / slidesToShow\r\n\r\nconst movePosition = slidesToScroll * itemWidth\r\n\r\nsliderItem.forEach(el => {\r\n    el.style.maxWidth = `${itemWidth}px`\r\n});\r\n\r\narrowNext.addEventListener('click', () => {\r\n    const itemLeft = itemCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;\r\n\r\n    position -= itemLeft >= slidesToScroll ? movePosition : itemLeft * itemWidth;\r\n\r\n    setPosition()\r\n    checkBtn()\r\n})\r\n\r\narrowPrev.addEventListener('click', () => {\r\n    const itemLeft = Math.abs(position) / itemWidth;\r\n\r\n    position += itemLeft >= slidesToScroll ? movePosition : itemLeft * itemWidth;\r\n    setPosition()\r\n    checkBtn()\r\n})\r\n\r\n\r\nconst setPosition = () => {\r\n    sliderItem.forEach(el => {\r\n        el.style.transform = `translateX(${position}px)`\r\n    });\r\n}\r\n\r\nconst checkBtn = () => {\r\n    arrowPrev.disabled = position === 0\r\n    arrowNext.disabled = position <= -(itemCount - slidesToShow) * itemWidth\r\n}\r\n\r\ncheckBtn()\r\n\n\n//# sourceURL=webpack://feedback/./src/assets/js/slider.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/slider.js"]();
/******/ 	
/******/ })()
;