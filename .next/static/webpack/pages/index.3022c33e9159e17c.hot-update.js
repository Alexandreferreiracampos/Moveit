"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Countdown.tsx":
/*!**************************************!*\
  !*** ./src/components/Countdown.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Countdown\": function() { return /* binding */ Countdown; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/components/Countdown.module.css */ \"./src/styles/components/Countdown.module.css\");\n/* harmony import */ var _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _s1 = $RefreshSig$();\nfunction Countdown() {\n    var startCountdown = function startCountdown() {\n    };\n    _s1();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(25 * 60), time = ref[0], setTime = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), active = ref1[0], setActive = ref1[1];\n    var minutes = Math.floor(time / 60);\n    var seconds = time % 60;\n    var ref2 = _slicedToArray(String(minutes).padStart(2, '0').split(''), 2), minuteLeft = ref2[0], minuteRight = ref2[1];\n    var ref3 = _slicedToArray(String(seconds).padStart(2, '0').split(''), 2), secondsLeft = ref3[0], secondsRight = ref3[1];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"D:\\\\Programacao\\\\REACT\\\\projetos\\\\moveit-next\\\\src\\\\components\\\\Countdown.tsx\",\n            lineNumber: 22,\n            columnNumber: 9\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: (_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_2___default().countdownContainer),\n                __source: {\n                    fileName: \"D:\\\\Programacao\\\\REACT\\\\projetos\\\\moveit-next\\\\src\\\\components\\\\Countdown.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 13\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        __source: {\n                            fileName: \"D:\\\\Programacao\\\\REACT\\\\projetos\\\\moveit-next\\\\src\\\\components\\\\Countdown.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 17\n                        },\n                        __self: this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                __source: {\n                                    fileName: \"D:\\\\Programacao\\\\REACT\\\\projetos\\\\moveit-next\\\\src\\\\components\\\\Countdown.tsx\",\n                                    lineNumber: 25,\n                                    columnNumber: 21\n                                },\n                                __self: this,\n                                children: minuteLeft\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                __source: {\n                                    fileName: \"D:\\\\Programacao\\\\REACT\\\\projetos\\\\moveit-next\\\\src\\\\components\\\\Countdown.tsx\",\n                                    lineNumber: 26,\n                                    columnNumber: 21\n                                },\n                                __self: this,\n                                children: minuteRight\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                        __source: {\n                            fileName: \"D:\\\\Programacao\\\\REACT\\\\projetos\\\\moveit-next\\\\src\\\\components\\\\Countdown.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 17\n                        },\n                        __self: this,\n                        children: \":\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        __source: {\n                            fileName: \"D:\\\\Programacao\\\\REACT\\\\projetos\\\\moveit-next\\\\src\\\\components\\\\Countdown.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 17\n                        },\n                        __self: this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                __source: {\n                                    fileName: \"D:\\\\Programacao\\\\REACT\\\\projetos\\\\moveit-next\\\\src\\\\components\\\\Countdown.tsx\",\n                                    lineNumber: 30,\n                                    columnNumber: 21\n                                },\n                                __self: this,\n                                children: secondsLeft\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                __source: {\n                                    fileName: \"D:\\\\Programacao\\\\REACT\\\\projetos\\\\moveit-next\\\\src\\\\components\\\\Countdown.tsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 21\n                                },\n                                __self: this,\n                                children: secondsRight\n                            })\n                        ]\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                onClick: startCountdown,\n                type: \"button\",\n                className: (_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_2___default().countdownButton),\n                __source: {\n                    fileName: \"D:\\\\Programacao\\\\REACT\\\\projetos\\\\moveit-next\\\\src\\\\components\\\\Countdown.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 13\n                },\n                __self: this,\n                children: \"Iniciar um ciclo\"\n            })\n        ]\n    }));\n}\n_s1(Countdown, \"xh6bNwGYHTT5r/TeaQ3D7r+VpY4=\");\n_c = Countdown;\nvar _c;\n$RefreshReg$(_c, \"Countdown\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Db3VudGRvd24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFnQztBQUM4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZELFNBQVNFLFNBQVMsR0FBRSxDQUFDO1FBWWZDLGNBQWMsR0FBdkIsUUFBUSxDQUFDQSxjQUFjLEdBQUUsQ0FBQztJQUcxQixDQUFDOztJQWJELEdBQUssQ0FBbUJILEdBQWlCLEdBQWpCQSwrQ0FBUSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQWpDSSxJQUFJLEdBQWFKLEdBQWlCLEtBQTVCSyxPQUFPLEdBQUlMLEdBQWlCO0lBQ3pDLEdBQUssQ0FBdUJBLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLEdBQW5DTSxNQUFNLEdBQWVOLElBQWUsS0FBNUJPLFNBQVMsR0FBSVAsSUFBZTtJQUUzQyxHQUFLLENBQUNRLE9BQU8sR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNOLElBQUksR0FBRyxFQUFFO0lBQ3BDLEdBQUssQ0FBQ08sT0FBTyxHQUFHUCxJQUFJLEdBQUcsRUFBRTtJQUV6QixHQUFLLENBQTZCUSxJQUEwQyxrQkFBMUNBLE1BQU0sQ0FBQ0osT0FBTyxFQUFFSyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUcsSUFBRUMsS0FBSyxDQUFDLENBQUUsUUFBcEVDLFVBQVUsR0FBaUJILElBQTBDLEtBQXpESSxXQUFXLEdBQUlKLElBQTBDO0lBQzVFLEdBQUssQ0FBK0JBLElBQTBDLGtCQUExQ0EsTUFBTSxDQUFDRCxPQUFPLEVBQUVFLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBRyxJQUFFQyxLQUFLLENBQUMsQ0FBRSxRQUF0RUcsV0FBVyxHQUFrQkwsSUFBMEMsS0FBMURNLFlBQVksR0FBSU4sSUFBMEM7SUFROUUsTUFBTSx1RUFDRE8sQ0FBRzs7Ozs7Ozs7a0ZBQ0NBLENBQUc7Z0JBQUNDLFNBQVMsRUFBRW5CLG1HQUF5Qjs7Ozs7Ozs7MEZBQ3BDa0IsQ0FBRzs7Ozs7Ozs7aUdBQ0NHLENBQUk7Ozs7Ozs7MENBQUVQLFVBQVU7O2lHQUNoQk8sQ0FBSTs7Ozs7OzswQ0FBRU4sV0FBVzs7Ozt5RkFFckJNLENBQUk7Ozs7Ozs7a0NBQUMsQ0FBQzs7MEZBQ05ILENBQUc7Ozs7Ozs7O2lHQUNDRyxDQUFJOzs7Ozs7OzBDQUFFTCxXQUFXOztpR0FDakJLLENBQUk7Ozs7Ozs7MENBQUVKLFlBQVk7Ozs7OztpRkFHMUJLLENBQU07Z0JBQUNDLE9BQU8sRUFBRXJCLGNBQWM7Z0JBQUVzQixJQUFJLEVBQUMsQ0FBUTtnQkFBQ0wsU0FBUyxFQUFFbkIsZ0dBQXNCOzs7Ozs7OzBCQUFFLENBRWxGOzs7O0FBSVosQ0FBQztJQXBDZUMsU0FBUztLQUFUQSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NvdW50ZG93bi50c3g/NTUxZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvY29tcG9uZW50cy9Db3VudGRvd24ubW9kdWxlLmNzcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ291bnRkb3duKCl7XHJcblxyXG4gICAgY29uc3QgW3RpbWUsIHNldFRpbWVdID0gdXNlU3RhdGUoMjUgKiA2MCk7XHJcbiAgICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKHRpbWUgLyA2MCk7XHJcbiAgICBjb25zdCBzZWNvbmRzID0gdGltZSAlIDYwO1xyXG5cclxuICAgIGNvbnN0IFttaW51dGVMZWZ0LCBtaW51dGVSaWdodF0gPSBTdHJpbmcobWludXRlcykucGFkU3RhcnQoMiwgJzAnKS5zcGxpdCgnJylcclxuICAgIGNvbnN0IFtzZWNvbmRzTGVmdCwgc2Vjb25kc1JpZ2h0XSA9IFN0cmluZyhzZWNvbmRzKS5wYWRTdGFydCgyLCAnMCcpLnNwbGl0KCcnKVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBzdGFydENvdW50ZG93bigpe1xyXG4gICAgICAgIFxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb3VudGRvd25Db250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57bWludXRlTGVmdH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e21pbnV0ZVJpZ2h0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+Ojwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3NlY29uZHNMZWZ0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57c2Vjb25kc1JpZ2h0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzdGFydENvdW50ZG93bn0gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17c3R5bGVzLmNvdW50ZG93bkJ1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICBJbmljaWFyIHVtIGNpY2xvXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJzdHlsZXMiLCJDb3VudGRvd24iLCJzdGFydENvdW50ZG93biIsInRpbWUiLCJzZXRUaW1lIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwibWludXRlcyIsIk1hdGgiLCJmbG9vciIsInNlY29uZHMiLCJTdHJpbmciLCJwYWRTdGFydCIsInNwbGl0IiwibWludXRlTGVmdCIsIm1pbnV0ZVJpZ2h0Iiwic2Vjb25kc0xlZnQiLCJzZWNvbmRzUmlnaHQiLCJkaXYiLCJjbGFzc05hbWUiLCJjb3VudGRvd25Db250YWluZXIiLCJzcGFuIiwiYnV0dG9uIiwib25DbGljayIsInR5cGUiLCJjb3VudGRvd25CdXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Countdown.tsx\n");

/***/ })

});