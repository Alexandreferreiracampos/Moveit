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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Countdown\": function() { return /* binding */ Countdown; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/components/Countdown.module.css */ \"./src/styles/components/Countdown.module.css\");\n/* harmony import */ var _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _s1 = $RefreshSig$();\nfunction Countdown() {\n    _s1();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(25 * 60), time = ref[0], setTime = ref[1];\n    var minutes = Math.floor(time / 60);\n    var seconds = time % 60;\n    var ref1 = _slicedToArray(String(minutes).padStart(2, '0').split(''), 2), minuteLeft = ref1[0], minuteRigh = ref1[1];\n    var ref2 = _slicedToArray(String(minutes).padStart(2, '0').split(''), 2), secondsLeft = ref2[0], secondsRigh = ref2[1];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"D:\\\\Programacao\\\\REACT\\\\projetos\\\\moveit-next\\\\src\\\\components\\\\Countdown.tsx\",\n            lineNumber: 13,\n            columnNumber: 9\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: (_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_2___default().countdownContainer),\n                __source: {\n                    fileName: \"D:\\\\Programacao\\\\REACT\\\\projetos\\\\moveit-next\\\\src\\\\components\\\\Countdown.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 13\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        __source: {\n                            fileName: \"D:\\\\Programacao\\\\REACT\\\\projetos\\\\moveit-next\\\\src\\\\components\\\\Countdown.tsx\",\n                            lineNumber: 15,\n                            columnNumber: 17\n                        },\n                        __self: this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                __source: {\n                                    fileName: \"D:\\\\Programacao\\\\REACT\\\\projetos\\\\moveit-next\\\\src\\\\components\\\\Countdown.tsx\",\n                                    lineNumber: 16,\n                                    columnNumber: 21\n                                },\n                                __self: this,\n                                children: \"2\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                __source: {\n                                    fileName: \"D:\\\\Programacao\\\\REACT\\\\projetos\\\\moveit-next\\\\src\\\\components\\\\Countdown.tsx\",\n                                    lineNumber: 17,\n                                    columnNumber: 21\n                                },\n                                __self: this,\n                                children: \"5\"\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                        __source: {\n                            fileName: \"D:\\\\Programacao\\\\REACT\\\\projetos\\\\moveit-next\\\\src\\\\components\\\\Countdown.tsx\",\n                            lineNumber: 19,\n                            columnNumber: 17\n                        },\n                        __self: this,\n                        children: \":\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        __source: {\n                            fileName: \"D:\\\\Programacao\\\\REACT\\\\projetos\\\\moveit-next\\\\src\\\\components\\\\Countdown.tsx\",\n                            lineNumber: 20,\n                            columnNumber: 17\n                        },\n                        __self: this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                __source: {\n                                    fileName: \"D:\\\\Programacao\\\\REACT\\\\projetos\\\\moveit-next\\\\src\\\\components\\\\Countdown.tsx\",\n                                    lineNumber: 21,\n                                    columnNumber: 21\n                                },\n                                __self: this,\n                                children: \"0\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                __source: {\n                                    fileName: \"D:\\\\Programacao\\\\REACT\\\\projetos\\\\moveit-next\\\\src\\\\components\\\\Countdown.tsx\",\n                                    lineNumber: 22,\n                                    columnNumber: 21\n                                },\n                                __self: this,\n                                children: \"0\"\n                            })\n                        ]\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                type: \"button\",\n                className: (_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_2___default().countdownButton),\n                __source: {\n                    fileName: \"D:\\\\Programacao\\\\REACT\\\\projetos\\\\moveit-next\\\\src\\\\components\\\\Countdown.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 13\n                },\n                __self: this,\n                children: \"Iniciar um ciclo\"\n            })\n        ]\n    }));\n}\n_s1(Countdown, \"yFx9mCZeNzO+kJyfxYuPDhftJvo=\");\n_c = Countdown;\nvar _c;\n$RefreshReg$(_c, \"Countdown\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Db3VudGRvd24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFnQztBQUM4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ3ZELFNBQVNFLFNBQVMsR0FBRSxDQUFDOztJQUV4QixHQUFLLENBQW1CRixHQUFpQixHQUFqQkEsK0NBQVEsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFqQ0csSUFBSSxHQUFhSCxHQUFpQixLQUE1QkksT0FBTyxHQUFJSixHQUFpQjtJQUN6QyxHQUFLLENBQUNLLE9BQU8sR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNKLElBQUksR0FBRyxFQUFFO0lBQ3BDLEdBQUssQ0FBQ0ssT0FBTyxHQUFHTCxJQUFJLEdBQUcsRUFBRTtJQUV6QixHQUFLLENBQTRCTSxJQUEwQyxrQkFBMUNBLE1BQU0sQ0FBQ0osT0FBTyxFQUFFSyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUcsSUFBRUMsS0FBSyxDQUFDLENBQUUsUUFBbkVDLFVBQVUsR0FBZ0JILElBQTBDLEtBQXhESSxVQUFVLEdBQUlKLElBQTBDO0lBQzNFLEdBQUssQ0FBOEJBLElBQTBDLGtCQUExQ0EsTUFBTSxDQUFDSixPQUFPLEVBQUVLLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBRyxJQUFFQyxLQUFLLENBQUMsQ0FBRSxRQUFyRUcsV0FBVyxHQUFpQkwsSUFBMEMsS0FBekRNLFdBQVcsR0FBSU4sSUFBMEM7SUFFN0UsTUFBTSx1RUFDRE8sQ0FBRzs7Ozs7Ozs7a0ZBQ0NBLENBQUc7Z0JBQUNDLFNBQVMsRUFBRWhCLG1HQUF5Qjs7Ozs7Ozs7MEZBQ3BDZSxDQUFHOzs7Ozs7OztpR0FDQ0csQ0FBSTs7Ozs7OzswQ0FBQyxDQUFDOztpR0FDTkEsQ0FBSTs7Ozs7OzswQ0FBQyxDQUFDOzs7O3lGQUVWQSxDQUFJOzs7Ozs7O2tDQUFDLENBQUM7OzBGQUNOSCxDQUFHOzs7Ozs7OztpR0FDQ0csQ0FBSTs7Ozs7OzswQ0FBQyxDQUFDOztpR0FDTkEsQ0FBSTs7Ozs7OzswQ0FBQyxDQUFDOzs7Ozs7aUZBR2RDLENBQU07Z0JBQUNDLElBQUksRUFBQyxDQUFRO2dCQUFDSixTQUFTLEVBQUVoQixnR0FBc0I7Ozs7Ozs7MEJBQUUsQ0FFekQ7Ozs7QUFJWixDQUFDO0lBNUJlQyxTQUFTO0tBQVRBLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ291bnRkb3duLnRzeD81NTFmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9jb21wb25lbnRzL0NvdW50ZG93bi5tb2R1bGUuY3NzJztcclxuZXhwb3J0IGZ1bmN0aW9uIENvdW50ZG93bigpe1xyXG5cclxuICAgIGNvbnN0IFt0aW1lLCBzZXRUaW1lXSA9IHVzZVN0YXRlKDI1ICogNjApO1xyXG4gICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IodGltZSAvIDYwKTtcclxuICAgIGNvbnN0IHNlY29uZHMgPSB0aW1lICUgNjA7XHJcblxyXG4gICAgY29uc3QgW21pbnV0ZUxlZnQsIG1pbnV0ZVJpZ2hdID0gU3RyaW5nKG1pbnV0ZXMpLnBhZFN0YXJ0KDIsICcwJykuc3BsaXQoJycpXHJcbiAgICBjb25zdCBbc2Vjb25kc0xlZnQsIHNlY29uZHNSaWdoXSA9IFN0cmluZyhtaW51dGVzKS5wYWRTdGFydCgyLCAnMCcpLnNwbGl0KCcnKVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvdW50ZG93bkNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+NTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+Ojwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+MDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4wPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e3N0eWxlcy5jb3VudGRvd25CdXR0b259PlxyXG4gICAgICAgICAgICAgICAgSW5pY2lhciB1bSBjaWNsb1xyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwic3R5bGVzIiwiQ291bnRkb3duIiwidGltZSIsInNldFRpbWUiLCJtaW51dGVzIiwiTWF0aCIsImZsb29yIiwic2Vjb25kcyIsIlN0cmluZyIsInBhZFN0YXJ0Iiwic3BsaXQiLCJtaW51dGVMZWZ0IiwibWludXRlUmlnaCIsInNlY29uZHNMZWZ0Iiwic2Vjb25kc1JpZ2giLCJkaXYiLCJjbGFzc05hbWUiLCJjb3VudGRvd25Db250YWluZXIiLCJzcGFuIiwiYnV0dG9uIiwidHlwZSIsImNvdW50ZG93bkJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Countdown.tsx\n");

/***/ })

});