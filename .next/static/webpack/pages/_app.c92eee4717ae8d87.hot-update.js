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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"challengeContext\": function() { return /* binding */ challengeContext; },\n/* harmony export */   \"ChallengesProvider\": function() { return /* binding */ ChallengesProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _challenges_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../challenges.json */ \"./challenges.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _s = $RefreshSig$();\nvar challengeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n});\nfunction ChallengesProvider(param) {\n    var children = param.children;\n    var leveUp = function leveUp() {\n        setLevel(level + 1);\n    };\n    var startNewChallenges = function startNewChallenges() {\n        var randomChallengeIndex = Math.floor(Math.random() * _challenges_json__WEBPACK_IMPORTED_MODULE_2__.length);\n        var challenge = _challenges_json__WEBPACK_IMPORTED_MODULE_2__[randomChallengeIndex];\n        setActiveChallenge(challenge);\n    };\n    var resetChallenges = function resetChallenges() {\n        setActiveChallenge(null);\n    };\n    var completeChallenge = function completeChallenge() {\n        if (!activeChallenge) {\n            return;\n        }\n        setChallengesCompleted(challengesCompleted + 1);\n        setActiveChallenge(null);\n        setHasFinisheds(true);\n        var amount = activeChallenge.amount;\n        var finalExperience = currentExperiences + amount;\n        if (finalExperience > experienceToNextLevel) {\n            setCurrentExperience(finalExperience - experienceToNextLevel);\n            leveUp();\n        } else setCurrentExperience(finalExperience);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), level = ref[0], setLevel = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), currentExperiences = ref1[0], setCurrentExperience = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), challengesCompleted = ref2[0], setChallengesCompleted = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), activeChallenge = ref3[0], setActiveChallenge = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), hasFinisheds = ref4[0], setHasFinisheds = ref4[1];\n    var experienceToNextLevel = Math.pow((level + 1) * 4, 2);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(challengeContext.Provider, {\n        value: {\n            level: level,\n            leveUp: leveUp,\n            startNewChallenges: startNewChallenges,\n            resetChallenges: resetChallenges,\n            completeChallenge: completeChallenge,\n            experienceToNextLevel: experienceToNextLevel,\n            currentExperiences: currentExperiences,\n            challengesCompleted: challengesCompleted,\n            activeChallenge: activeChallenge,\n            hasFinisheds: hasFinisheds\n        },\n        __source: {\n            fileName: \"D:\\\\Programacao\\\\REACT\\\\projetos\\\\moveit-next\\\\src\\\\context\\\\ChallengesContext.tsx\",\n            lineNumber: 82,\n            columnNumber: 9\n        },\n        __self: this,\n        children: children\n    }));\n}\n_s(ChallengesProvider, \"6QyEh0i+toTaV1GTbVi3YU6ia1I=\");\n_c = ChallengesProvider;\nvar _c;\n$RefreshReg$(_c, \"ChallengesProvider\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXFCO1lBQ3JCRCxrQkFBa0IsRUFBbEJBLGtCQUFrQjtZQUNsQkosbUJBQW1CLEVBQW5CQSxtQkFBbUI7WUFDbkJGLGVBQWUsRUFBZkEsZUFBZTtZQUNmUyxZQUFZLEVBQVpBLFlBQVk7UUFDaEIsQ0FBQzs7Ozs7OztrQkFDSXZCLFFBQVE7O0FBSXJCLENBQUM7R0F0RWVELGtCQUFrQjtLQUFsQkEsa0JBQWtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb250ZXh0L0NoYWxsZW5nZXNDb250ZXh0LnRzeD9mY2E3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIFJlYWN0Tm9kZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2hhbGxlbmdlcyBmcm9tICcuLi8uLi9jaGFsbGVuZ2VzLmpzb24nO1xyXG5cclxuaW50ZXJmYWNlIENoYWxsZW5nZSB7XHJcbiAgICB0eXBlOiAnYm9keScgfCAnZXllJztcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBhbW91bnQ6IG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIENoYWxsZW5nZXNDb250ZXh0RGF0YSB7XHJcbiAgICBsZXZlbDogbnVtYmVyO1xyXG4gICAgY3VycmVudEV4cGVyaWVuY2VzOiBudW1iZXI7XHJcbiAgICBjaGFsbGVuZ2VzQ29tcGxldGVkOiBudW1iZXI7XHJcbiAgICBhY3RpdmVDaGFsbGVuZ2U6IENoYWxsZW5nZTtcclxuICAgIGV4cGVyaWVuY2VUb05leHRMZXZlbDogbnVtYmVyO1xyXG4gICAgaGFzRmluaXNoZWRzOiBib29sZWFuO1xyXG4gICAgbGV2ZVVwOiAoKSA9PiB2b2lkO1xyXG4gICAgc3RhcnROZXdDaGFsbGVuZ2VzOiAoKSA9PiB2b2lkO1xyXG4gICAgcmVzZXRDaGFsbGVuZ2VzOigpPT52b2lkO1xyXG4gICAgY29tcGxldGVDaGFsbGVuZ2U6KCk9PnZvaWQ7XHJcbn1cclxuXHJcbmludGVyZmFjZSBDaGFsbGVuZ2VzUHJvdmlkZXJQcm9wc3tcclxuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjaGFsbGVuZ2VDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBDaGFsbGVuZ2VzQ29udGV4dERhdGEpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENoYWxsZW5nZXNQcm92aWRlcih7Y2hpbGRyZW59OiBDaGFsbGVuZ2VzUHJvdmlkZXJQcm9wcyApe1xyXG5cclxuICAgIGNvbnN0IFtsZXZlbCwgc2V0TGV2ZWxdID0gdXNlU3RhdGUoMSk7XHJcbiAgICBjb25zdCBbY3VycmVudEV4cGVyaWVuY2VzLCBzZXRDdXJyZW50RXhwZXJpZW5jZV0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtjaGFsbGVuZ2VzQ29tcGxldGVkLCBzZXRDaGFsbGVuZ2VzQ29tcGxldGVkXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICAgIGNvbnN0IFthY3RpdmVDaGFsbGVuZ2UsIHNldEFjdGl2ZUNoYWxsZW5nZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICBjb25zdCBbaGFzRmluaXNoZWRzLCBzZXRIYXNGaW5pc2hlZHNdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgZXhwZXJpZW5jZVRvTmV4dExldmVsID0gTWF0aC5wb3coKGxldmVsICsxKSogNCwgMik7XHJcblxyXG4gICAgZnVuY3Rpb24gbGV2ZVVwKCl7XHJcbiAgICAgICAgc2V0TGV2ZWwobGV2ZWwgKyAxKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzdGFydE5ld0NoYWxsZW5nZXMoKXtcclxuICAgICAgICBjb25zdCByYW5kb21DaGFsbGVuZ2VJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYWxsZW5nZXMubGVuZ3RoKTtcclxuICAgICAgICBjb25zdCBjaGFsbGVuZ2UgPSBjaGFsbGVuZ2VzW3JhbmRvbUNoYWxsZW5nZUluZGV4XTtcclxuXHJcbiAgICAgICAgc2V0QWN0aXZlQ2hhbGxlbmdlKGNoYWxsZW5nZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVzZXRDaGFsbGVuZ2VzKCl7XHJcbiAgICAgICAgc2V0QWN0aXZlQ2hhbGxlbmdlKG51bGwpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNvbXBsZXRlQ2hhbGxlbmdlKCl7XHJcbiAgICAgICAgaWYoIWFjdGl2ZUNoYWxsZW5nZSl7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldENoYWxsZW5nZXNDb21wbGV0ZWQoY2hhbGxlbmdlc0NvbXBsZXRlZCArIDEpXHJcbiAgICAgICAgc2V0QWN0aXZlQ2hhbGxlbmdlKG51bGwpXHJcbiAgICAgICAgc2V0SGFzRmluaXNoZWRzKHRydWUpXHJcblxyXG4gICAgICAgIGNvbnN0IHthbW91bnR9ID0gYWN0aXZlQ2hhbGxlbmdlO1xyXG5cclxuICAgICAgICBsZXQgZmluYWxFeHBlcmllbmNlID0gY3VycmVudEV4cGVyaWVuY2VzICsgYW1vdW50O1xyXG5cclxuICAgICAgICBpZihmaW5hbEV4cGVyaWVuY2UgPiBleHBlcmllbmNlVG9OZXh0TGV2ZWwpe1xyXG4gICAgICAgICAgICBzZXRDdXJyZW50RXhwZXJpZW5jZShmaW5hbEV4cGVyaWVuY2UgLSBleHBlcmllbmNlVG9OZXh0TGV2ZWwpXHJcbiAgICAgICAgICAgIGxldmVVcCgpO1xyXG5cclxuICAgICAgICB9ZWxzZShcclxuICAgICAgICAgICAgc2V0Q3VycmVudEV4cGVyaWVuY2UoZmluYWxFeHBlcmllbmNlKVxyXG4gICAgICAgIClcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8Y2hhbGxlbmdlQ29udGV4dC5Qcm92aWRlciBcclxuICAgICAgICB2YWx1ZT17e1xyXG4gICAgICAgICAgICBsZXZlbCxcclxuICAgICAgICAgICAgbGV2ZVVwLFxyXG4gICAgICAgICAgICBzdGFydE5ld0NoYWxsZW5nZXMsXHJcbiAgICAgICAgICAgIHJlc2V0Q2hhbGxlbmdlcyxcclxuICAgICAgICAgICAgY29tcGxldGVDaGFsbGVuZ2UsXHJcbiAgICAgICAgICAgIGV4cGVyaWVuY2VUb05leHRMZXZlbCxcclxuICAgICAgICAgICAgY3VycmVudEV4cGVyaWVuY2VzLFxyXG4gICAgICAgICAgICBjaGFsbGVuZ2VzQ29tcGxldGVkLFxyXG4gICAgICAgICAgICBhY3RpdmVDaGFsbGVuZ2UsXHJcbiAgICAgICAgICAgIGhhc0ZpbmlzaGVkc1xyXG4gICAgICAgIH19PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9jaGFsbGVuZ2VDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG5cclxufVxyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwiY2hhbGxlbmdlcyIsImNoYWxsZW5nZUNvbnRleHQiLCJDaGFsbGVuZ2VzUHJvdmlkZXIiLCJjaGlsZHJlbiIsImxldmVVcCIsInNldExldmVsIiwibGV2ZWwiLCJzdGFydE5ld0NoYWxsZW5nZXMiLCJyYW5kb21DaGFsbGVuZ2VJbmRleCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsImNoYWxsZW5nZSIsInNldEFjdGl2ZUNoYWxsZW5nZSIsInJlc2V0Q2hhbGxlbmdlcyIsImNvbXBsZXRlQ2hhbGxlbmdlIiwiYWN0aXZlQ2hhbGxlbmdlIiwic2V0Q2hhbGxlbmdlc0NvbXBsZXRlZCIsImNoYWxsZW5nZXNDb21wbGV0ZWQiLCJzZXRIYXNGaW5pc2hlZHMiLCJhbW91bnQiLCJmaW5hbEV4cGVyaWVuY2UiLCJjdXJyZW50RXhwZXJpZW5jZXMiLCJleHBlcmllbmNlVG9OZXh0TGV2ZWwiLCJzZXRDdXJyZW50RXhwZXJpZW5jZSIsImhhc0ZpbmlzaGVkcyIsInBvdyIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/context/ChallengesContext.tsx\n");

/***/ })

});