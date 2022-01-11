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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"challengeContext\": function() { return /* binding */ challengeContext; },\n/* harmony export */   \"ChallengesProvider\": function() { return /* binding */ ChallengesProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _challenges_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../challenges.json */ \"./challenges.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _s = $RefreshSig$();\nvar challengeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n});\nfunction ChallengesProvider(param) {\n    var children = param.children;\n    var leveUp = function leveUp() {\n        setLevel(level + 1);\n    };\n    var startNewChallenges = function startNewChallenges() {\n        var randomChallengeIndex = Math.floor(Math.random() * _challenges_json__WEBPACK_IMPORTED_MODULE_2__.length);\n        var challenge = _challenges_json__WEBPACK_IMPORTED_MODULE_2__[randomChallengeIndex];\n        setActiveChallenge(challenge);\n    };\n    var resetChallenges = function resetChallenges() {\n        setActiveChallenge(null);\n    };\n    var completeChallenge = function completeChallenge() {\n        if (!activeChallenge) {\n            return;\n        }\n        setChallengesCompleted(challengesCompleted + 1);\n        setActiveChallenge(null);\n        setHasFinisheds(false);\n        var amount = activeChallenge.amount;\n        var finalExperience = currentExperiences + amount;\n        if (finalExperience > experienceToNextLevel) {\n            setCurrentExperience(finalExperience - experienceToNextLevel);\n            leveUp();\n        } else setCurrentExperience(finalExperience);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), level = ref[0], setLevel = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), currentExperiences = ref1[0], setCurrentExperience = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), challengesCompleted = ref2[0], setChallengesCompleted = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), activeChallenge = ref3[0], setActiveChallenge = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), hasFinisheds = ref4[0], setHasFinisheds = ref4[1];\n    var experienceToNextLevel = Math.pow((level + 1) * 4, 2);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(challengeContext.Provider, {\n        value: {\n            level: level,\n            leveUp: leveUp,\n            startNewChallenges: startNewChallenges,\n            resetChallenges: resetChallenges,\n            completeChallenge: completeChallenge,\n            experienceToNextLevel: experienceToNextLevel,\n            currentExperiences: currentExperiences,\n            challengesCompleted: challengesCompleted,\n            activeChallenge: activeChallenge,\n            hasFinisheds: hasFinisheds\n        },\n        __source: {\n            fileName: \"D:\\\\Programacao\\\\REACT\\\\projetos\\\\moveit-next\\\\src\\\\context\\\\ChallengesContext.tsx\",\n            lineNumber: 82,\n            columnNumber: 9\n        },\n        __self: this,\n        children: children\n    }));\n}\n_s(ChallengesProvider, \"v68bkntJ0ZLpnbWWz4YwgMFmhB0=\");\n_c = ChallengesProvider;\nvar _c;\n$RefreshReg$(_c, \"ChallengesProvider\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXFCO1lBQ3JCRCxrQkFBa0IsRUFBbEJBLGtCQUFrQjtZQUNsQkosbUJBQW1CLEVBQW5CQSxtQkFBbUI7WUFDbkJGLGVBQWUsRUFBZkEsZUFBZTtZQUNmUyxZQUFZLEVBQVpBLFlBQVk7UUFDaEIsQ0FBQzs7Ozs7OztrQkFDSXZCLFFBQVE7O0FBSXJCLENBQUM7R0F0RWVELGtCQUFrQjtLQUFsQkEsa0JBQWtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb250ZXh0L0NoYWxsZW5nZXNDb250ZXh0LnRzeD9mY2E3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIFJlYWN0Tm9kZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2hhbGxlbmdlcyBmcm9tICcuLi8uLi9jaGFsbGVuZ2VzLmpzb24nO1xyXG5cclxuaW50ZXJmYWNlIENoYWxsZW5nZSB7XHJcbiAgICB0eXBlOiAnYm9keScgfCAnZXllJztcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBhbW91bnQ6IG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIENoYWxsZW5nZXNDb250ZXh0RGF0YSB7XHJcbiAgICBsZXZlbDogbnVtYmVyO1xyXG4gICAgY3VycmVudEV4cGVyaWVuY2VzOiBudW1iZXI7XHJcbiAgICBjaGFsbGVuZ2VzQ29tcGxldGVkOiBudW1iZXI7XHJcbiAgICBhY3RpdmVDaGFsbGVuZ2U6IENoYWxsZW5nZTtcclxuICAgIGV4cGVyaWVuY2VUb05leHRMZXZlbDogbnVtYmVyO1xyXG4gICAgaGFzRmluaXNoZWRzOiBib29sZWFuO1xyXG4gICAgbGV2ZVVwOiAoKSA9PiB2b2lkO1xyXG4gICAgc3RhcnROZXdDaGFsbGVuZ2VzOiAoKSA9PiB2b2lkO1xyXG4gICAgcmVzZXRDaGFsbGVuZ2VzOigpPT52b2lkO1xyXG4gICAgY29tcGxldGVDaGFsbGVuZ2U6KCk9PnZvaWQ7XHJcbn1cclxuXHJcbmludGVyZmFjZSBDaGFsbGVuZ2VzUHJvdmlkZXJQcm9wc3tcclxuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjaGFsbGVuZ2VDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBDaGFsbGVuZ2VzQ29udGV4dERhdGEpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENoYWxsZW5nZXNQcm92aWRlcih7Y2hpbGRyZW59OiBDaGFsbGVuZ2VzUHJvdmlkZXJQcm9wcyApe1xyXG5cclxuICAgIGNvbnN0IFtsZXZlbCwgc2V0TGV2ZWxdID0gdXNlU3RhdGUoMSk7XHJcbiAgICBjb25zdCBbY3VycmVudEV4cGVyaWVuY2VzLCBzZXRDdXJyZW50RXhwZXJpZW5jZV0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtjaGFsbGVuZ2VzQ29tcGxldGVkLCBzZXRDaGFsbGVuZ2VzQ29tcGxldGVkXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICAgIGNvbnN0IFthY3RpdmVDaGFsbGVuZ2UsIHNldEFjdGl2ZUNoYWxsZW5nZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICBjb25zdCBbaGFzRmluaXNoZWRzLCBzZXRIYXNGaW5pc2hlZHNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGV4cGVyaWVuY2VUb05leHRMZXZlbCA9IE1hdGgucG93KChsZXZlbCArMSkqIDQsIDIpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGxldmVVcCgpe1xyXG4gICAgICAgIHNldExldmVsKGxldmVsICsgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3RhcnROZXdDaGFsbGVuZ2VzKCl7XHJcbiAgICAgICAgY29uc3QgcmFuZG9tQ2hhbGxlbmdlSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFsbGVuZ2VzLmxlbmd0aCk7XHJcbiAgICAgICAgY29uc3QgY2hhbGxlbmdlID0gY2hhbGxlbmdlc1tyYW5kb21DaGFsbGVuZ2VJbmRleF07XHJcblxyXG4gICAgICAgIHNldEFjdGl2ZUNoYWxsZW5nZShjaGFsbGVuZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlc2V0Q2hhbGxlbmdlcygpe1xyXG4gICAgICAgIHNldEFjdGl2ZUNoYWxsZW5nZShudWxsKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjb21wbGV0ZUNoYWxsZW5nZSgpe1xyXG4gICAgICAgIGlmKCFhY3RpdmVDaGFsbGVuZ2Upe1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRDaGFsbGVuZ2VzQ29tcGxldGVkKGNoYWxsZW5nZXNDb21wbGV0ZWQgKyAxKVxyXG4gICAgICAgIHNldEFjdGl2ZUNoYWxsZW5nZShudWxsKVxyXG4gICAgICAgIHNldEhhc0ZpbmlzaGVkcyhmYWxzZSlcclxuXHJcbiAgICAgICAgY29uc3Qge2Ftb3VudH0gPSBhY3RpdmVDaGFsbGVuZ2U7XHJcblxyXG4gICAgICAgIGxldCBmaW5hbEV4cGVyaWVuY2UgPSBjdXJyZW50RXhwZXJpZW5jZXMgKyBhbW91bnQ7XHJcblxyXG4gICAgICAgIGlmKGZpbmFsRXhwZXJpZW5jZSA+IGV4cGVyaWVuY2VUb05leHRMZXZlbCl7XHJcbiAgICAgICAgICAgIHNldEN1cnJlbnRFeHBlcmllbmNlKGZpbmFsRXhwZXJpZW5jZSAtIGV4cGVyaWVuY2VUb05leHRMZXZlbClcclxuICAgICAgICAgICAgbGV2ZVVwKCk7XHJcblxyXG4gICAgICAgIH1lbHNlKFxyXG4gICAgICAgICAgICBzZXRDdXJyZW50RXhwZXJpZW5jZShmaW5hbEV4cGVyaWVuY2UpXHJcbiAgICAgICAgKVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxjaGFsbGVuZ2VDb250ZXh0LlByb3ZpZGVyIFxyXG4gICAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgICAgIGxldmVsLFxyXG4gICAgICAgICAgICBsZXZlVXAsXHJcbiAgICAgICAgICAgIHN0YXJ0TmV3Q2hhbGxlbmdlcyxcclxuICAgICAgICAgICAgcmVzZXRDaGFsbGVuZ2VzLFxyXG4gICAgICAgICAgICBjb21wbGV0ZUNoYWxsZW5nZSxcclxuICAgICAgICAgICAgZXhwZXJpZW5jZVRvTmV4dExldmVsLFxyXG4gICAgICAgICAgICBjdXJyZW50RXhwZXJpZW5jZXMsXHJcbiAgICAgICAgICAgIGNoYWxsZW5nZXNDb21wbGV0ZWQsXHJcbiAgICAgICAgICAgIGFjdGl2ZUNoYWxsZW5nZSxcclxuICAgICAgICAgICAgaGFzRmluaXNoZWRzXHJcbiAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L2NoYWxsZW5nZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcblxyXG59XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJjaGFsbGVuZ2VzIiwiY2hhbGxlbmdlQ29udGV4dCIsIkNoYWxsZW5nZXNQcm92aWRlciIsImNoaWxkcmVuIiwibGV2ZVVwIiwic2V0TGV2ZWwiLCJsZXZlbCIsInN0YXJ0TmV3Q2hhbGxlbmdlcyIsInJhbmRvbUNoYWxsZW5nZUluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwiY2hhbGxlbmdlIiwic2V0QWN0aXZlQ2hhbGxlbmdlIiwicmVzZXRDaGFsbGVuZ2VzIiwiY29tcGxldGVDaGFsbGVuZ2UiLCJhY3RpdmVDaGFsbGVuZ2UiLCJzZXRDaGFsbGVuZ2VzQ29tcGxldGVkIiwiY2hhbGxlbmdlc0NvbXBsZXRlZCIsInNldEhhc0ZpbmlzaGVkcyIsImFtb3VudCIsImZpbmFsRXhwZXJpZW5jZSIsImN1cnJlbnRFeHBlcmllbmNlcyIsImV4cGVyaWVuY2VUb05leHRMZXZlbCIsInNldEN1cnJlbnRFeHBlcmllbmNlIiwiaGFzRmluaXNoZWRzIiwicG93IiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/context/ChallengesContext.tsx\n");

/***/ })

});