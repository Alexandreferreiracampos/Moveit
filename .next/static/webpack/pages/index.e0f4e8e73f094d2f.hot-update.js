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

/***/ "./src/components/ChallengeBox.tsx":
/*!*****************************************!*\
  !*** ./src/components/ChallengeBox.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ChallengeBox\": function() { return /* binding */ ChallengeBox; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/ChallengesContext */ \"./src/context/ChallengesContext.tsx\");\n/* harmony import */ var _context_CountdownContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/CountdownContext */ \"./src/context/CountdownContext.tsx\");\n/* harmony import */ var _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/components/ChallengeBox.module.css */ \"./src/styles/components/ChallengeBox.module.css\");\n/* harmony import */ var _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction ChallengeBox() {\n    var handleChallengeSuccess = function handleChallengeSuccess() {\n        startCountdown();\n        resetCountdown();\n    };\n    var handleChallengeFailed = function handleChallengeFailed() {\n        startCountdown();\n        resetCountdown();\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__.challengeContext), activeChallenge = ref.activeChallenge, resetChallenges = ref.resetChallenges, completeChallenge = ref.completeChallenge;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_CountdownContext__WEBPACK_IMPORTED_MODULE_3__.CountdownContext), startCountdown = ref1.startCountdown, resetCountdown = ref1.resetCountdown;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: (_styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default().challengeContainer),\n        __source: {\n            fileName: \"D:\\\\Programacao\\\\REACT\\\\projetos\\\\moveit-next\\\\src\\\\components\\\\ChallengeBox.tsx\",\n            lineNumber: 27,\n            columnNumber: 9\n        },\n        __self: this,\n        children: activeChallenge ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: (_styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default().challengeActive),\n            __source: {\n                fileName: \"D:\\\\Programacao\\\\REACT\\\\projetos\\\\moveit-next\\\\src\\\\components\\\\ChallengeBox.tsx\",\n                lineNumber: 31,\n                columnNumber: 17\n            },\n            __self: this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"header\", {\n                    __source: {\n                        fileName: \"D:\\\\Programacao\\\\REACT\\\\projetos\\\\moveit-next\\\\src\\\\components\\\\ChallengeBox.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 21\n                    },\n                    __self: this,\n                    children: [\n                        \"Ganhe \",\n                        activeChallenge.amount,\n                        \" xp\"\n                    ]\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"main\", {\n                    __source: {\n                        fileName: \"D:\\\\Programacao\\\\REACT\\\\projetos\\\\moveit-next\\\\src\\\\components\\\\ChallengeBox.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 21\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                            src: \"icons/\".concat(activeChallenge.type, \".svg\"),\n                            __source: {\n                                fileName: \"D:\\\\Programacao\\\\REACT\\\\projetos\\\\moveit-next\\\\src\\\\components\\\\ChallengeBox.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 25\n                            },\n                            __self: this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"strong\", {\n                            __source: {\n                                fileName: \"D:\\\\Programacao\\\\REACT\\\\projetos\\\\moveit-next\\\\src\\\\components\\\\ChallengeBox.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 25\n                            },\n                            __self: this,\n                            children: \"Novo desafio\"\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                            __source: {\n                                fileName: \"D:\\\\Programacao\\\\REACT\\\\projetos\\\\moveit-next\\\\src\\\\components\\\\ChallengeBox.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 25\n                            },\n                            __self: this,\n                            children: activeChallenge.description\n                        })\n                    ]\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"footer\", {\n                    __source: {\n                        fileName: \"D:\\\\Programacao\\\\REACT\\\\projetos\\\\moveit-next\\\\src\\\\components\\\\ChallengeBox.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 21\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                            className: (_styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default().challengeFaileButton),\n                            type: \"button\",\n                            onClick: resetChallenges,\n                            __source: {\n                                fileName: \"D:\\\\Programacao\\\\REACT\\\\projetos\\\\moveit-next\\\\src\\\\components\\\\ChallengeBox.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 25\n                            },\n                            __self: this,\n                            children: \"Falhei\"\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                            className: (_styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default().challengeSucceededButton),\n                            type: \"button\",\n                            onClick: completeChallenge,\n                            __source: {\n                                fileName: \"D:\\\\Programacao\\\\REACT\\\\projetos\\\\moveit-next\\\\src\\\\components\\\\ChallengeBox.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 25\n                            },\n                            __self: this,\n                            children: \"Completei\"\n                        })\n                    ]\n                })\n            ]\n        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: (_styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default().challengeNotActive),\n            __source: {\n                fileName: \"D:\\\\Programacao\\\\REACT\\\\projetos\\\\moveit-next\\\\src\\\\components\\\\ChallengeBox.tsx\",\n                lineNumber: 45,\n                columnNumber: 21\n            },\n            __self: this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"strong\", {\n                    __source: {\n                        fileName: \"D:\\\\Programacao\\\\REACT\\\\projetos\\\\moveit-next\\\\src\\\\components\\\\ChallengeBox.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 21\n                    },\n                    __self: this,\n                    children: \"Finalize um ciclo para receber um desafio\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                    __source: {\n                        fileName: \"D:\\\\Programacao\\\\REACT\\\\projetos\\\\moveit-next\\\\src\\\\components\\\\ChallengeBox.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 17\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                            src: \"icons/level-up.svg\",\n                            alt: \"Level Up\",\n                            __source: {\n                                fileName: \"D:\\\\Programacao\\\\REACT\\\\projetos\\\\moveit-next\\\\src\\\\components\\\\ChallengeBox.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 21\n                            },\n                            __self: this\n                        }),\n                        \"Avance de level completando desafios.\"\n                    ]\n                })\n            ]\n        })\n    }));\n}\n_s(ChallengeBox, \"KKE3XVf6XkRTU2WSTFFORj6zKJY=\");\n_c = ChallengeBox;\nvar _c;\n$RefreshReg$(_c, \"ChallengeBox\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DaGFsbGVuZ2VCb3gudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWtDO0FBQzZCO0FBQ0Q7QUFDRzs7QUFFMUQsU0FBU0ksWUFBWSxHQUFFLENBQUM7UUFNbEJDLHNCQUFzQixHQUEvQixRQUFRLENBQUNBLHNCQUFzQixHQUFFLENBQUM7UUFDOUJDLGNBQWM7UUFDZEMsY0FBYztJQUVsQixDQUFDO1FBRVFDLHFCQUFxQixHQUE5QixRQUFRLENBQUNBLHFCQUFxQixHQUFFLENBQUM7UUFDN0JGLGNBQWM7UUFDZEMsY0FBYztJQUVsQixDQUFDOztJQWJELEdBQUssQ0FBeURQLEdBQTRCLEdBQTVCQSxpREFBVSxDQUFDQyx3RUFBZ0IsR0FBbEZRLGVBQWUsR0FBd0NULEdBQTRCLENBQW5GUyxlQUFlLEVBQUVDLGVBQWUsR0FBdUJWLEdBQTRCLENBQWxFVSxlQUFlLEVBQUVDLGlCQUFpQixHQUFJWCxHQUE0QixDQUFqRFcsaUJBQWlCO0lBQzFELEdBQUssQ0FBb0NYLElBQTRCLEdBQTVCQSxpREFBVSxDQUFDRSx1RUFBZ0IsR0FBN0RJLGNBQWMsR0FBb0JOLElBQTRCLENBQTlETSxjQUFjLEVBQUVDLGNBQWMsR0FBSVAsSUFBNEIsQ0FBOUNPLGNBQWM7SUFnQnJDLE1BQU0sc0VBQ0RLLENBQUc7UUFBQ0MsU0FBUyxFQUFFVixzR0FBeUI7Ozs7Ozs7a0JBR2hDTSxlQUFlLHlFQUNmRyxDQUFHO1lBQUNDLFNBQVMsRUFBRVYsbUdBQXNCOzs7Ozs7OztzRkFDakNhLENBQU07Ozs7Ozs7O3dCQUFDLENBQU07d0JBQUNQLGVBQWUsQ0FBQ1EsTUFBTTt3QkFBQyxDQUFHOzs7c0ZBQ3hDQyxDQUFJOzs7Ozs7Ozs2RkFDQUMsQ0FBRzs0QkFBQ0MsR0FBRyxFQUFHLENBQU0sUUFBdUIsTUFBSSxDQUF6QlgsZUFBZSxDQUFDWSxJQUFJLEVBQUMsQ0FBSTs7Ozs7Ozs7NkZBQzNDQyxDQUFNOzs7Ozs7O3NDQUFDLENBQVk7OzZGQUNuQkMsQ0FBQzs7Ozs7OztzQ0FBRWQsZUFBZSxDQUFDZSxXQUFXOzs7O3NGQUVsQ0MsQ0FBTTs7Ozs7Ozs7NkZBQ0ZDLENBQU07NEJBQUNiLFNBQVMsRUFBRVYsd0dBQTJCOzRCQUFFa0IsSUFBSSxFQUFDLENBQVE7NEJBQUNPLE9BQU8sRUFBRWxCLGVBQWU7Ozs7Ozs7c0NBQUUsQ0FBTTs7NkZBQzdGZ0IsQ0FBTTs0QkFBQ2IsU0FBUyxFQUFFViw0R0FBK0I7NEJBQUNrQixJQUFJLEVBQUMsQ0FBUTs0QkFBQ08sT0FBTyxFQUFFakIsaUJBQWlCOzs7Ozs7O3NDQUFFLENBQVM7Ozs7O21GQUt6R0MsQ0FBRztZQUFDQyxTQUFTLEVBQUVWLHNHQUF5Qjs7Ozs7Ozs7cUZBQ3hDbUIsQ0FBTTs7Ozs7Ozs4QkFBQyxDQUVaOztzRkFDQ0MsQ0FBQzs7Ozs7Ozs7NkZBQ0dKLENBQUc7NEJBQUNDLEdBQUcsRUFBQyxDQUFvQjs0QkFBQ1csR0FBRyxFQUFDLENBQVU7Ozs7Ozs7O3dCQUFFLENBRWxEOzs7Ozs7QUFNaEIsQ0FBQztHQXBEZTNCLFlBQVk7S0FBWkEsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DaGFsbGVuZ2VCb3gudHN4P2M4YjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY2hhbGxlbmdlQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvQ2hhbGxlbmdlc0NvbnRleHQnO1xyXG5pbXBvcnQgeyBDb3VudGRvd25Db250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9Db3VudGRvd25Db250ZXh0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvY29tcG9uZW50cy9DaGFsbGVuZ2VCb3gubW9kdWxlLmNzcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDaGFsbGVuZ2VCb3goKXtcclxuXHJcblxyXG4gICAgY29uc3Qge2FjdGl2ZUNoYWxsZW5nZSwgcmVzZXRDaGFsbGVuZ2VzLCBjb21wbGV0ZUNoYWxsZW5nZX0gPSB1c2VDb250ZXh0KGNoYWxsZW5nZUNvbnRleHQpO1xyXG4gICAgY29uc3Qge3N0YXJ0Q291bnRkb3duLCByZXNldENvdW50ZG93bn0gPSB1c2VDb250ZXh0KENvdW50ZG93bkNvbnRleHQpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNoYWxsZW5nZVN1Y2Nlc3MoKXtcclxuICAgICAgICBzdGFydENvdW50ZG93bigpXHJcbiAgICAgICAgcmVzZXRDb3VudGRvd24oKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDaGFsbGVuZ2VGYWlsZWQoKXtcclxuICAgICAgICBzdGFydENvdW50ZG93bigpXHJcbiAgICAgICAgcmVzZXRDb3VudGRvd24oKVxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYWxsZW5nZUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHthY3RpdmVDaGFsbGVuZ2UgPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYWxsZW5nZUFjdGl2ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhlYWRlcj5HYW5oZSB7YWN0aXZlQ2hhbGxlbmdlLmFtb3VudH0geHA8L2hlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8bWFpbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BpY29ucy8ke2FjdGl2ZUNoYWxsZW5nZS50eXBlfS5zdmdgfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+Tm92byBkZXNhZmlvPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPnthY3RpdmVDaGFsbGVuZ2UuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmNoYWxsZW5nZUZhaWxlQnV0dG9ufSB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17cmVzZXRDaGFsbGVuZ2VzfT5GYWxoZWk8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5jaGFsbGVuZ2VTdWNjZWVkZWRCdXR0b259dHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2NvbXBsZXRlQ2hhbGxlbmdlfT5Db21wbGV0ZWk8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvb3Rlcj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGFsbGVuZ2VOb3RBY3RpdmV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgRmluYWxpemUgdW0gY2ljbG8gcGFyYSByZWNlYmVyIHVtIGRlc2FmaW9cclxuICAgICAgICAgICAgICAgIDwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpY29ucy9sZXZlbC11cC5zdmdcIiBhbHQ9XCJMZXZlbCBVcFwiLz5cclxuICAgICAgICAgICAgICAgICAgICBBdmFuY2UgZGUgbGV2ZWwgY29tcGxldGFuZG8gZGVzYWZpb3MuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwiY2hhbGxlbmdlQ29udGV4dCIsIkNvdW50ZG93bkNvbnRleHQiLCJzdHlsZXMiLCJDaGFsbGVuZ2VCb3giLCJoYW5kbGVDaGFsbGVuZ2VTdWNjZXNzIiwic3RhcnRDb3VudGRvd24iLCJyZXNldENvdW50ZG93biIsImhhbmRsZUNoYWxsZW5nZUZhaWxlZCIsImFjdGl2ZUNoYWxsZW5nZSIsInJlc2V0Q2hhbGxlbmdlcyIsImNvbXBsZXRlQ2hhbGxlbmdlIiwiZGl2IiwiY2xhc3NOYW1lIiwiY2hhbGxlbmdlQ29udGFpbmVyIiwiY2hhbGxlbmdlQWN0aXZlIiwiaGVhZGVyIiwiYW1vdW50IiwibWFpbiIsImltZyIsInNyYyIsInR5cGUiLCJzdHJvbmciLCJwIiwiZGVzY3JpcHRpb24iLCJmb290ZXIiLCJidXR0b24iLCJjaGFsbGVuZ2VGYWlsZUJ1dHRvbiIsIm9uQ2xpY2siLCJjaGFsbGVuZ2VTdWNjZWVkZWRCdXR0b24iLCJjaGFsbGVuZ2VOb3RBY3RpdmUiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ChallengeBox.tsx\n");

/***/ })

});