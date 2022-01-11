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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Countdown\": function() { return /* binding */ Countdown; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/Countdown.module.css */ \"./src/styles/components/Countdown.module.css\");\n/* harmony import */ var _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/ChallengesContext */ \"./src/context/ChallengesContext.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _s1 = $RefreshSig$();\nvar countdownTimeout;\nfunction Countdown() {\n    var startCountdown = function startCountdown() {\n        setActive(true);\n    };\n    var resetCountdown = function resetCountdown() {\n        clearTimeout(countdownTimeout);\n        setActive(false);\n        setTime(valueTime);\n        setStatusBar(0);\n    };\n    _s1();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__.challengeContext), startNewChallenges = ref.startNewChallenges, hasFinisheds = ref.hasFinisheds;\n    var valueTime = 0.5 * 60;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(valueTime), time = ref1[0], setTime = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), active = ref2[0], setActive = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(hasFinisheds), hasFinished = ref3[0], setHasFinished = ref3[1];\n    var minutes = Math.floor(time / 60);\n    var seconds = time % 60;\n    var porcentagem = 100 / valueTime;\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(porcentagem - porcentagem), statusBar = ref4[0], setStatusBar = ref4[1];\n    var ref5 = _slicedToArray(String(minutes).padStart(2, '0').split(''), 2), minuteLeft = ref5[0], minuteRight = ref5[1];\n    var ref6 = _slicedToArray(String(seconds).padStart(2, '0').split(''), 2), secondsLeft = ref6[0], secondsRight = ref6[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (active && time > 0) {\n            countdownTimeout = setTimeout(function() {\n                setStatusBar(statusBar + porcentagem);\n                setTime(time - 1);\n            }, 100);\n        } else if (active && time == 0) {\n            setHasFinished(true);\n            setActive(false);\n            startNewChallenges();\n        }\n    }, [\n        active,\n        time\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"D:\\\\Programacao\\\\REACT\\\\projetos\\\\moveit-next\\\\src\\\\components\\\\Countdown.tsx\",\n            lineNumber: 55,\n            columnNumber: 9\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: (_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default().countdownContainer),\n                __source: {\n                    fileName: \"D:\\\\Programacao\\\\REACT\\\\projetos\\\\moveit-next\\\\src\\\\components\\\\Countdown.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 13\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: (_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default().teste),\n                        __source: {\n                            fileName: \"D:\\\\Programacao\\\\REACT\\\\projetos\\\\moveit-next\\\\src\\\\components\\\\Countdown.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 17\n                        },\n                        __self: this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                __source: {\n                                    fileName: \"D:\\\\Programacao\\\\REACT\\\\projetos\\\\moveit-next\\\\src\\\\components\\\\Countdown.tsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 21\n                                },\n                                __self: this,\n                                children: minuteLeft\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                __source: {\n                                    fileName: \"D:\\\\Programacao\\\\REACT\\\\projetos\\\\moveit-next\\\\src\\\\components\\\\Countdown.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 21\n                                },\n                                __self: this,\n                                children: minuteRight\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                        __source: {\n                            fileName: \"D:\\\\Programacao\\\\REACT\\\\projetos\\\\moveit-next\\\\src\\\\components\\\\Countdown.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 17\n                        },\n                        __self: this,\n                        children: \":\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        __source: {\n                            fileName: \"D:\\\\Programacao\\\\REACT\\\\projetos\\\\moveit-next\\\\src\\\\components\\\\Countdown.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 17\n                        },\n                        __self: this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                __source: {\n                                    fileName: \"D:\\\\Programacao\\\\REACT\\\\projetos\\\\moveit-next\\\\src\\\\components\\\\Countdown.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 21\n                                },\n                                __self: this,\n                                children: secondsLeft\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                __source: {\n                                    fileName: \"D:\\\\Programacao\\\\REACT\\\\projetos\\\\moveit-next\\\\src\\\\components\\\\Countdown.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 21\n                                },\n                                __self: this,\n                                children: secondsRight\n                            })\n                        ]\n                    })\n                ]\n            }),\n            hasFinished ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"button\", {\n                disabled: true,\n                type: \"button\",\n                className: (_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default().countdownButton),\n                __source: {\n                    fileName: \"D:\\\\Programacao\\\\REACT\\\\projetos\\\\moveit-next\\\\src\\\\components\\\\Countdown.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 17\n                },\n                __self: this,\n                children: [\n                    \"Ciclo encerrado \",\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                        src: \"icons/ok.svg\",\n                        alt: \"Finalizado\",\n                        __source: {\n                            fileName: \"D:\\\\Programacao\\\\REACT\\\\projetos\\\\moveit-next\\\\src\\\\components\\\\Countdown.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 33\n                        },\n                        __self: this\n                    })\n                ]\n            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: active ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"button\", {\n                    onClick: resetCountdown,\n                    type: \"button\",\n                    className: \"\".concat((_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default().countdownButton), \" \").concat((_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default().countdownButtonStart)),\n                    __source: {\n                        fileName: \"D:\\\\Programacao\\\\REACT\\\\projetos\\\\moveit-next\\\\src\\\\components\\\\Countdown.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 32\n                    },\n                    __self: this,\n                    children: [\n                        \"Abandonar ciclo\",\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            style: {\n                                width: statusBar + \"%\",\n                                height: 5,\n                                borderRadius: 8,\n                                top: 25,\n                                background: \"green\",\n                                position: \"relative\"\n                            },\n                            __source: {\n                                fileName: \"D:\\\\Programacao\\\\REACT\\\\projetos\\\\moveit-next\\\\src\\\\components\\\\Countdown.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 17\n                            },\n                            __self: this\n                        })\n                    ]\n                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                    onClick: startCountdown,\n                    type: \"button\",\n                    className: (_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default().countdownButton),\n                    __source: {\n                        fileName: \"D:\\\\Programacao\\\\REACT\\\\projetos\\\\moveit-next\\\\src\\\\components\\\\Countdown.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 26\n                    },\n                    __self: this,\n                    children: \"Iniciar um Ciclo\"\n                })\n            })\n        ]\n    }));\n}\n_s1(Countdown, \"9AEFIvABf+iZAAJXLSQzI0pC0bI=\");\n_c = Countdown;\nvar _c;\n$RefreshReg$(_c, \"Countdown\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRXZDLGNBQWM7b0JBQUVrQyxJQUFJLEVBQUMsQ0FBUTtvQkFBQ04sU0FBUyxFQUFFaEMsZ0dBQXNCOzs7Ozs7OzhCQUFFLENBRy9GOzs7OztBQVFaLENBQUM7SUFsRmVHLFNBQVM7S0FBVEEsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Db3VudGRvd24udHN4PzU1MWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvY29tcG9uZW50cy9Db3VudGRvd24ubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB7IGNoYWxsZW5nZUNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L0NoYWxsZW5nZXNDb250ZXh0JztcclxuXHJcbmxldCBjb3VudGRvd25UaW1lb3V0OiBOb2RlSlMuVGltZW91dDtcclxuZXhwb3J0IGZ1bmN0aW9uIENvdW50ZG93bigpe1xyXG5cclxuICAgIGNvbnN0IHtzdGFydE5ld0NoYWxsZW5nZXMsIGhhc0ZpbmlzaGVkc30gPSB1c2VDb250ZXh0KGNoYWxsZW5nZUNvbnRleHQpO1xyXG5cclxuICAgIGNvbnN0IHZhbHVlVGltZSA9IDAuNSAqIDYwO1xyXG5cclxuICAgIGNvbnN0IFt0aW1lLCBzZXRUaW1lXSA9IHVzZVN0YXRlKHZhbHVlVGltZSk7XHJcbiAgICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2hhc0ZpbmlzaGVkLCBzZXRIYXNGaW5pc2hlZF0gPSB1c2VTdGF0ZShoYXNGaW5pc2hlZHMpO1xyXG4gICAgXHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcih0aW1lIC8gNjApO1xyXG4gICAgY29uc3Qgc2Vjb25kcyA9IHRpbWUgJSA2MDtcclxuICAgIGNvbnN0IHBvcmNlbnRhZ2VtID0gMTAwIC8gdmFsdWVUaW1lXHJcbiAgICBjb25zdCBbc3RhdHVzQmFyLCBzZXRTdGF0dXNCYXJdID0gdXNlU3RhdGUocG9yY2VudGFnZW0gLSBwb3JjZW50YWdlbSk7XHJcblxyXG4gICAgY29uc3QgW21pbnV0ZUxlZnQsIG1pbnV0ZVJpZ2h0XSA9IFN0cmluZyhtaW51dGVzKS5wYWRTdGFydCgyLCAnMCcpLnNwbGl0KCcnKTtcclxuICAgIGNvbnN0IFtzZWNvbmRzTGVmdCwgc2Vjb25kc1JpZ2h0XSA9IFN0cmluZyhzZWNvbmRzKS5wYWRTdGFydCgyLCAnMCcpLnNwbGl0KCcnKTtcclxuICAgIFxyXG5cclxuICAgIGZ1bmN0aW9uIHN0YXJ0Q291bnRkb3duKCl7XHJcbiAgICAgICAgc2V0QWN0aXZlKHRydWUpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZXNldENvdW50ZG93bigpIHtcclxuICAgICAgICBjbGVhclRpbWVvdXQoY291bnRkb3duVGltZW91dCk7XHJcbiAgICAgICAgc2V0QWN0aXZlKGZhbHNlKTtcclxuICAgICAgICBzZXRUaW1lKHZhbHVlVGltZSk7XHJcbiAgICAgICAgc2V0U3RhdHVzQmFyKDApXHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYoYWN0aXZlICYmIHRpbWUgPiAwKXtcclxuICAgICAgICAgICAgY291bnRkb3duVGltZW91dCA9IHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgICAgIHNldFN0YXR1c0JhcihzdGF0dXNCYXIgKyBwb3JjZW50YWdlbSlcclxuICAgICAgICAgICAgICAgIHNldFRpbWUodGltZSAtIDEpICBcclxuICAgICAgICAgICAgfSwgMTAwKTsgXHJcbiAgICAgICAgfWVsc2UgaWYoYWN0aXZlICYmIHRpbWUgPT0gMCl7XHJcbiAgICAgICAgICAgIHNldEhhc0ZpbmlzaGVkKHRydWUpO1xyXG4gICAgICAgICAgICBzZXRBY3RpdmUoZmFsc2UpO1xyXG4gICAgICAgICAgICBzdGFydE5ld0NoYWxsZW5nZXMoKTtcclxuICAgICAgICB9XHJcbiBcclxuICAgIH0sW2FjdGl2ZSwgdGltZV0pXHJcblxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvdW50ZG93bkNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRlc3RlfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57bWludXRlTGVmdH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e21pbnV0ZVJpZ2h0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+Ojwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3NlY29uZHNMZWZ0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57c2Vjb25kc1JpZ2h0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHtoYXNGaW5pc2hlZCA/IChcclxuICAgICAgICAgICAgICAgIDxidXR0b24gZGlzYWJsZWQgdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17c3R5bGVzLmNvdW50ZG93bkJ1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICBDaWNsbyBlbmNlcnJhZG8gPGltZyBzcmM9XCJpY29ucy9vay5zdmdcIiBhbHQ9XCJGaW5hbGl6YWRvXCIvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAge2FjdGl2ZSA/ICg8YnV0dG9uIG9uQ2xpY2s9e3Jlc2V0Q291bnRkb3dufSB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY291bnRkb3duQnV0dG9ufSAke3N0eWxlcy5jb3VudGRvd25CdXR0b25TdGFydH1gfT5cclxuICAgICAgICAgICAgICAgIEFiYW5kb25hciBjaWNsb1xyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOnN0YXR1c0JhcitcIiVcIixoZWlnaHQ6IDUsIGJvcmRlclJhZGl1czogOCwgdG9wOjI1LCBiYWNrZ3JvdW5kOiBcImdyZWVuXCIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCJ9fT48L2Rpdj5cclxuICAgICAgICAgICAgPC9idXR0b24+KTogKDxidXR0b24gb25DbGljaz17c3RhcnRDb3VudGRvd259IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e3N0eWxlcy5jb3VudGRvd25CdXR0b259PlxyXG4gICAgICAgICAgICAgICAgSW5pY2lhciB1bSBDaWNsb1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPil9XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDb250ZXh0Iiwic3R5bGVzIiwiY2hhbGxlbmdlQ29udGV4dCIsImNvdW50ZG93blRpbWVvdXQiLCJDb3VudGRvd24iLCJzdGFydENvdW50ZG93biIsInNldEFjdGl2ZSIsInJlc2V0Q291bnRkb3duIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZSIsInZhbHVlVGltZSIsInNldFN0YXR1c0JhciIsInN0YXJ0TmV3Q2hhbGxlbmdlcyIsImhhc0ZpbmlzaGVkcyIsInRpbWUiLCJhY3RpdmUiLCJoYXNGaW5pc2hlZCIsInNldEhhc0ZpbmlzaGVkIiwibWludXRlcyIsIk1hdGgiLCJmbG9vciIsInNlY29uZHMiLCJwb3JjZW50YWdlbSIsInN0YXR1c0JhciIsIlN0cmluZyIsInBhZFN0YXJ0Iiwic3BsaXQiLCJtaW51dGVMZWZ0IiwibWludXRlUmlnaHQiLCJzZWNvbmRzTGVmdCIsInNlY29uZHNSaWdodCIsInNldFRpbWVvdXQiLCJkaXYiLCJjbGFzc05hbWUiLCJjb3VudGRvd25Db250YWluZXIiLCJ0ZXN0ZSIsInNwYW4iLCJidXR0b24iLCJkaXNhYmxlZCIsInR5cGUiLCJjb3VudGRvd25CdXR0b24iLCJpbWciLCJzcmMiLCJhbHQiLCJvbkNsaWNrIiwiY291bnRkb3duQnV0dG9uU3RhcnQiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwidG9wIiwiYmFja2dyb3VuZCIsInBvc2l0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Countdown.tsx\n");

/***/ })

});