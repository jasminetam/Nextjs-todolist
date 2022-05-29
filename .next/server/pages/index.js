"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Index = ()=>{\n    const { 0: userInput , 1: setUserInput  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: todoList , 1: setTodoList  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleChange = (e)=>{\n        e.preventDefault();\n        setUserInput(e.target.value);\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        setTodoList([\n            userInput,\n            ...todoList\n        ]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Next JS Todo List\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\virgo\\\\Documents\\\\developer\\\\todolist\\\\pages\\\\index.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\virgo\\\\Documents\\\\developer\\\\todolist\\\\pages\\\\index.js\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleSubmit,\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\virgo\\\\Documents\\\\developer\\\\todolist\\\\pages\\\\index.js\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\virgo\\\\Documents\\\\developer\\\\todolist\\\\pages\\\\index.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: todoList.length >= 1 ? todoList.map((todo, idx)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: todo\n                    }, idx, false, {\n                        fileName: \"C:\\\\Users\\\\virgo\\\\Documents\\\\developer\\\\todolist\\\\pages\\\\index.js\",\n                        lineNumber: 25,\n                        columnNumber: 22\n                    }, undefined);\n                }) : \"Enter a todo item\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\virgo\\\\Documents\\\\developer\\\\todolist\\\\pages\\\\index.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\virgo\\\\Documents\\\\developer\\\\todolist\\\\pages\\\\index.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQXdDO0FBRXhDLE1BQU1FLEtBQUssR0FBRyxJQUFNO0lBQ2xCLE1BQU0sRUFIUixHQUdTQyxTQUFTLEdBSGxCLEdBR29CQyxZQUFZLE1BQUlILCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQzlDLE1BQU0sRUFKUixHQUlTSSxRQUFRLEdBSmpCLEdBSW1CQyxXQUFXLE1BQUlMLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQzVDLE1BQU1NLFlBQVksR0FBRyxDQUFDQyxDQUFDLEdBQUs7UUFDMUJBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFLENBQUM7UUFDbkJMLFlBQVksQ0FBQ0ksQ0FBQyxDQUFDRSxNQUFNLENBQUNDLEtBQUssQ0FBQyxDQUFDO0tBQzlCO0lBQ0QsTUFBTUMsWUFBWSxHQUFHLENBQUNKLENBQUMsR0FBSztRQUMxQkEsQ0FBQyxDQUFDQyxjQUFjLEVBQUUsQ0FBQztRQUVuQkgsV0FBVyxDQUFDO1lBQUNILFNBQVM7ZUFBS0UsUUFBUTtTQUFDLENBQUMsQ0FBQztLQUN2QztJQUNELHFCQUNFLDhEQUFDUSxLQUFHOzswQkFDRiw4REFBQ0MsSUFBRTswQkFBQyxtQkFBaUI7Ozs7O3lCQUFLOzBCQUMxQiw4REFBQ0MsTUFBSTs7a0NBQ0gsOERBQUNDLE9BQUs7d0JBQUNDLElBQUksRUFBQyxNQUFNO3dCQUFDQyxRQUFRLEVBQUVYLFlBQVk7Ozs7O2lDQUFJO2tDQUM3Qyw4REFBQ1ksUUFBTTt3QkFBQ0MsT0FBTyxFQUFFUixZQUFZO2tDQUFFLFFBQU07Ozs7O2lDQUFTOzs7Ozs7eUJBQ3pDOzBCQUNQLDhEQUFDUyxJQUFFOzBCQUNBaEIsUUFBUSxDQUFDaUIsTUFBTSxJQUFJLENBQUMsR0FDakJqQixRQUFRLENBQUNrQixHQUFHLENBQUMsQ0FBQ0MsSUFBSSxFQUFFQyxHQUFHLEdBQUs7b0JBQzFCLHFCQUFPLDhEQUFDQyxJQUFFO2tDQUFZRixJQUFJO3VCQUFWQyxHQUFHOzs7O2lDQUFhLENBQUM7aUJBQ2xDLENBQUMsR0FDRixtQkFBbUI7Ozs7O3lCQUNwQjs7Ozs7O2lCQUNELENBQ047Q0FDSDtBQUVELGlFQUFldkIsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcbiAgY29uc3QgW3VzZXJJbnB1dCwgc2V0VXNlcklucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt0b2RvTGlzdCwgc2V0VG9kb0xpc3RdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRVc2VySW5wdXQoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBzZXRUb2RvTGlzdChbdXNlcklucHV0LCAuLi50b2RvTGlzdF0pO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMT5OZXh0IEpTIFRvZG8gTGlzdDwvaDE+XHJcbiAgICAgIDxmb3JtPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7dG9kb0xpc3QubGVuZ3RoID49IDFcclxuICAgICAgICAgID8gdG9kb0xpc3QubWFwKCh0b2RvLCBpZHgpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aWR4fT57dG9kb308L2xpPjtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIDogXCJFbnRlciBhIHRvZG8gaXRlbVwifVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkluZGV4IiwidXNlcklucHV0Iiwic2V0VXNlcklucHV0IiwidG9kb0xpc3QiLCJzZXRUb2RvTGlzdCIsImhhbmRsZUNoYW5nZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwiZGl2IiwiaDEiLCJmb3JtIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJidXR0b24iLCJvbkNsaWNrIiwidWwiLCJsZW5ndGgiLCJtYXAiLCJ0b2RvIiwiaWR4IiwibGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();