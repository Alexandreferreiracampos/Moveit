"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/context/ChallengesContext.tsx":
/*!*******************************************!*\
  !*** ./src/context/ChallengesContext.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"challengeContext\": function() { return /* binding */ challengeContext; },\n/* harmony export */   \"ChallengesProvider\": function() { return /* binding */ ChallengesProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _challenges_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../challenges.json */ \"./challenges.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _s = $RefreshSig$();\nvar challengeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n});\nfunction ChallengesProvider(param) {\n    var children = param.children;\n    var leveUp = function leveUp() {\n        setLevel(level + 1);\n    };\n    var startNewChallenges = function startNewChallenges() {\n        var randomChallengeIndex = Math.floor(Math.random() * _challenges_json__WEBPACK_IMPORTED_MODULE_2__.length);\n        var challenge = _challenges_json__WEBPACK_IMPORTED_MODULE_2__[randomChallengeIndex];\n        setActiveChallenge(challenge);\n    };\n    var resetChallenges = function resetChallenges() {\n        setActiveChallenge(null);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), level = ref[0], setLevel = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(10), currentExperiences = ref1[0], setCurrentExperience = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), challengesCompleted = ref2[0], setChallengesCompleted = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), activeChallenge = ref3[0], setActiveChallenge = ref3[1];\n    var experienceToNextLevel = Math.pow((level + 1) * 4, 2);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(challengeContext.Provider, {\n        value: {\n            level: level,\n            leveUp: leveUp,\n            startNewChallenges: startNewChallenges,\n            resetChallenges: resetChallenges,\n            experienceToNextLevel: experienceToNextLevel,\n            currentExperiences: currentExperiences,\n            challengesCompleted: challengesCompleted,\n            activeChallenge: activeChallenge\n        },\n        __source: {\n            fileName: \"D:\\\\Programacao\\\\REACT\\\\projetos\\\\moveit-next\\\\src\\\\context\\\\ChallengesContext.tsx\",\n            lineNumber: 54,\n            columnNumber: 9\n        },\n        __self: this,\n        children: children\n    }));\n}\n_s(ChallengesProvider, \"B+6LIhR7bFS/c/PGiHWdDe95Bjo=\");\n_c = ChallengesProvider;\nvar _c;\n$RefreshReg$(_c, \"ChallengesProvider\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9DaGFsbGVuZ2VzQ29udGV4dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXdEO0FBQ1Y7O0FBdUJ2QyxHQUFLLENBQUNHLGdCQUFnQixpQkFBR0gsb0RBQWEsQ0FBQyxDQUFDO0FBQUEsQ0FBQztBQUV6QyxTQUFTSSxrQkFBa0IsQ0FBQyxLQUFtQyxFQUFFLENBQUM7UUFBckNDLFFBQVEsR0FBVCxLQUFtQyxDQUFsQ0EsUUFBUTtRQVUvQkMsTUFBTSxHQUFmLFFBQVEsQ0FBQ0EsTUFBTSxHQUFFLENBQUM7UUFDZEMsUUFBUSxDQUFDQyxLQUFLLEdBQUcsQ0FBQztJQUN0QixDQUFDO1FBRVFDLGtCQUFrQixHQUEzQixRQUFRLENBQUNBLGtCQUFrQixHQUFFLENBQUM7UUFDMUIsR0FBSyxDQUFDQyxvQkFBb0IsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxLQUFLWCxvREFBaUI7UUFDekUsR0FBSyxDQUFDYSxTQUFTLEdBQUdiLDZDQUFVLENBQUNRLG9CQUFvQjtRQUVqRE0sa0JBQWtCLENBQUNELFNBQVM7SUFDaEMsQ0FBQztRQUVRRSxlQUFlLEdBQXhCLFFBQVEsQ0FBQ0EsZUFBZSxHQUFFLENBQUM7UUFDdkJELGtCQUFrQixDQUFDLElBQUk7SUFFM0IsQ0FBQzs7SUF0QkQsR0FBSyxDQUFxQmYsR0FBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsR0FBN0JPLEtBQUssR0FBY1AsR0FBVyxLQUF2Qk0sUUFBUSxHQUFJTixHQUFXO0lBQ3JDLEdBQUssQ0FBOENBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLEdBQXZEaUIsa0JBQWtCLEdBQTBCakIsSUFBWSxLQUFwQ2tCLG9CQUFvQixHQUFJbEIsSUFBWTtJQUMvRCxHQUFLLENBQWlEQSxJQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxHQUF6RG1CLG1CQUFtQixHQUE0Qm5CLElBQVcsS0FBckNvQixzQkFBc0IsR0FBSXBCLElBQVc7SUFFakUsR0FBSyxDQUF5Q0EsSUFBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksR0FBcERxQixlQUFlLEdBQXdCckIsSUFBYyxLQUFwQ2Usa0JBQWtCLEdBQUlmLElBQWM7SUFFNUQsR0FBSyxDQUFDc0IscUJBQXFCLEdBQUdaLElBQUksQ0FBQ2EsR0FBRyxFQUFFaEIsS0FBSyxHQUFFLENBQUMsSUFBRyxDQUFDLEVBQUUsQ0FBQztJQWtCdkQsTUFBTSxzRUFDREwsZ0JBQWdCLENBQUNzQixRQUFRO1FBQzFCQyxLQUFLLEVBQUUsQ0FBQztZQUNKbEIsS0FBSyxFQUFMQSxLQUFLO1lBQ0xGLE1BQU0sRUFBTkEsTUFBTTtZQUNORyxrQkFBa0IsRUFBbEJBLGtCQUFrQjtZQUNsQlEsZUFBZSxFQUFmQSxlQUFlO1lBQ2ZNLHFCQUFxQixFQUFyQkEscUJBQXFCO1lBQ3JCTCxrQkFBa0IsRUFBbEJBLGtCQUFrQjtZQUNsQkUsbUJBQW1CLEVBQW5CQSxtQkFBbUI7WUFDbkJFLGVBQWUsRUFBZkEsZUFBZTtRQUNuQixDQUFDOzs7Ozs7O2tCQUNJakIsUUFBUTs7QUFJckIsQ0FBQztHQTFDZUQsa0JBQWtCO0tBQWxCQSxrQkFBa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHQvQ2hhbGxlbmdlc0NvbnRleHQudHN4P2ZjYTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgUmVhY3ROb2RlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjaGFsbGVuZ2VzIGZyb20gJy4uLy4uL2NoYWxsZW5nZXMuanNvbic7XHJcblxyXG5pbnRlcmZhY2UgQ2hhbGxlbmdlIHtcclxuICAgIHR5cGU6ICdib2R5JyB8ICdleWUnO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIGFtb3VudDogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ2hhbGxlbmdlc0NvbnRleHREYXRhIHtcclxuICAgIGxldmVsOiBudW1iZXI7XHJcbiAgICBjdXJyZW50RXhwZXJpZW5jZXM6IG51bWJlcjtcclxuICAgIGNoYWxsZW5nZXNDb21wbGV0ZWQ6IG51bWJlcjtcclxuICAgIGFjdGl2ZUNoYWxsZW5nZTogQ2hhbGxlbmdlO1xyXG4gICAgZXhwZXJpZW5jZVRvTmV4dExldmVsOiBudW1iZXI7XHJcbiAgICBsZXZlVXA6ICgpID0+IHZvaWQ7XHJcbiAgICBzdGFydE5ld0NoYWxsZW5nZXM6ICgpID0+IHZvaWQ7XHJcbiAgICByZXNldENoYWxsZW5nZXM6KCk9PnZvaWQ7XHJcbn1cclxuXHJcbmludGVyZmFjZSBDaGFsbGVuZ2VzUHJvdmlkZXJQcm9wc3tcclxuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjaGFsbGVuZ2VDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBDaGFsbGVuZ2VzQ29udGV4dERhdGEpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENoYWxsZW5nZXNQcm92aWRlcih7Y2hpbGRyZW59OiBDaGFsbGVuZ2VzUHJvdmlkZXJQcm9wcyApe1xyXG5cclxuICAgIGNvbnN0IFtsZXZlbCwgc2V0TGV2ZWxdID0gdXNlU3RhdGUoMSk7XHJcbiAgICBjb25zdCBbY3VycmVudEV4cGVyaWVuY2VzLCBzZXRDdXJyZW50RXhwZXJpZW5jZV0gPSB1c2VTdGF0ZSgxMCk7XHJcbiAgICBjb25zdCBbY2hhbGxlbmdlc0NvbXBsZXRlZCwgc2V0Q2hhbGxlbmdlc0NvbXBsZXRlZF0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgICBjb25zdCBbYWN0aXZlQ2hhbGxlbmdlLCBzZXRBY3RpdmVDaGFsbGVuZ2VdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgY29uc3QgZXhwZXJpZW5jZVRvTmV4dExldmVsID0gTWF0aC5wb3coKGxldmVsICsxKSogNCwgMik7XHJcblxyXG4gICAgZnVuY3Rpb24gbGV2ZVVwKCl7XHJcbiAgICAgICAgc2V0TGV2ZWwobGV2ZWwgKyAxKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzdGFydE5ld0NoYWxsZW5nZXMoKXtcclxuICAgICAgICBjb25zdCByYW5kb21DaGFsbGVuZ2VJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYWxsZW5nZXMubGVuZ3RoKTtcclxuICAgICAgICBjb25zdCBjaGFsbGVuZ2UgPSBjaGFsbGVuZ2VzW3JhbmRvbUNoYWxsZW5nZUluZGV4XTtcclxuXHJcbiAgICAgICAgc2V0QWN0aXZlQ2hhbGxlbmdlKGNoYWxsZW5nZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVzZXRDaGFsbGVuZ2VzKCl7XHJcbiAgICAgICAgc2V0QWN0aXZlQ2hhbGxlbmdlKG51bGwpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8Y2hhbGxlbmdlQ29udGV4dC5Qcm92aWRlciBcclxuICAgICAgICB2YWx1ZT17e1xyXG4gICAgICAgICAgICBsZXZlbCxcclxuICAgICAgICAgICAgbGV2ZVVwLFxyXG4gICAgICAgICAgICBzdGFydE5ld0NoYWxsZW5nZXMsXHJcbiAgICAgICAgICAgIHJlc2V0Q2hhbGxlbmdlcyxcclxuICAgICAgICAgICAgZXhwZXJpZW5jZVRvTmV4dExldmVsLFxyXG4gICAgICAgICAgICBjdXJyZW50RXhwZXJpZW5jZXMsXHJcbiAgICAgICAgICAgIGNoYWxsZW5nZXNDb21wbGV0ZWQsXHJcbiAgICAgICAgICAgIGFjdGl2ZUNoYWxsZW5nZSxcclxuICAgICAgICB9fT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvY2hhbGxlbmdlQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxuXHJcbn1cclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsImNoYWxsZW5nZXMiLCJjaGFsbGVuZ2VDb250ZXh0IiwiQ2hhbGxlbmdlc1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJsZXZlVXAiLCJzZXRMZXZlbCIsImxldmVsIiwic3RhcnROZXdDaGFsbGVuZ2VzIiwicmFuZG9tQ2hhbGxlbmdlSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJjaGFsbGVuZ2UiLCJzZXRBY3RpdmVDaGFsbGVuZ2UiLCJyZXNldENoYWxsZW5nZXMiLCJjdXJyZW50RXhwZXJpZW5jZXMiLCJzZXRDdXJyZW50RXhwZXJpZW5jZSIsImNoYWxsZW5nZXNDb21wbGV0ZWQiLCJzZXRDaGFsbGVuZ2VzQ29tcGxldGVkIiwiYWN0aXZlQ2hhbGxlbmdlIiwiZXhwZXJpZW5jZVRvTmV4dExldmVsIiwicG93IiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/context/ChallengesContext.tsx\n");

/***/ })

});