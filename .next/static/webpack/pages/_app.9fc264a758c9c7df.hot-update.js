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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"challengeContext\": function() { return /* binding */ challengeContext; },\n/* harmony export */   \"ChallengesProvider\": function() { return /* binding */ ChallengesProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _challenges_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../challenges.json */ \"./challenges.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _s = $RefreshSig$();\nvar challengeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n});\nfunction ChallengesProvider(param) {\n    var children = param.children;\n    var leveUp = function leveUp() {\n        setLevel(level + 1);\n    };\n    var startNewChallenges = function startNewChallenges() {\n        var randomChallengeIndex = Math.floor(Math.random() * _challenges_json__WEBPACK_IMPORTED_MODULE_2__.length);\n        var challenge = _challenges_json__WEBPACK_IMPORTED_MODULE_2__[randomChallengeIndex];\n        setActiveChallenge(challenge);\n    };\n    var resetChallenges = function resetChallenges() {\n        setActiveChallenge(null);\n    };\n    var completeChallenge = function completeChallenge() {\n        if (!activeChallenge) {\n            return;\n        }\n        var amount = activeChallenge.amount;\n        var finalExperience = currentExperiences + amount;\n        setCurrentExperience(finalExperience);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), level = ref[0], setLevel = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(10), currentExperiences = ref1[0], setCurrentExperience = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), challengesCompleted = ref2[0], setChallengesCompleted = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), activeChallenge = ref3[0], setActiveChallenge = ref3[1];\n    var experienceToNextLevel = Math.pow((level + 1) * 4, 2);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(challengeContext.Provider, {\n        value: {\n            level: level,\n            leveUp: leveUp,\n            startNewChallenges: startNewChallenges,\n            resetChallenges: resetChallenges,\n            completeChallenge: completeChallenge,\n            experienceToNextLevel: experienceToNextLevel,\n            currentExperiences: currentExperiences,\n            challengesCompleted: challengesCompleted,\n            activeChallenge: activeChallenge\n        },\n        __source: {\n            fileName: \"D:\\\\Programacao\\\\REACT\\\\projetos\\\\moveit-next\\\\src\\\\context\\\\ChallengesContext.tsx\",\n            lineNumber: 68,\n            columnNumber: 9\n        },\n        __self: this,\n        children: children\n    }));\n}\n_s(ChallengesProvider, \"B+6LIhR7bFS/c/PGiHWdDe95Bjo=\");\n_c = ChallengesProvider;\nvar _c;\n$RefreshReg$(_c, \"ChallengesProvider\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9DaGFsbGVuZ2VzQ29udGV4dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXdEO0FBQ1Y7O0FBd0J2QyxHQUFLLENBQUNHLGdCQUFnQixpQkFBR0gsb0RBQWEsQ0FBQyxDQUFDO0FBQUEsQ0FBQztBQUV6QyxTQUFTSSxrQkFBa0IsQ0FBQyxLQUFtQyxFQUFFLENBQUM7UUFBckNDLFFBQVEsR0FBVCxLQUFtQyxDQUFsQ0EsUUFBUTtRQVUvQkMsTUFBTSxHQUFmLFFBQVEsQ0FBQ0EsTUFBTSxHQUFFLENBQUM7UUFDZEMsUUFBUSxDQUFDQyxLQUFLLEdBQUcsQ0FBQztJQUN0QixDQUFDO1FBRVFDLGtCQUFrQixHQUEzQixRQUFRLENBQUNBLGtCQUFrQixHQUFFLENBQUM7UUFDMUIsR0FBSyxDQUFDQyxvQkFBb0IsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxLQUFLWCxvREFBaUI7UUFDekUsR0FBSyxDQUFDYSxTQUFTLEdBQUdiLDZDQUFVLENBQUNRLG9CQUFvQjtRQUVqRE0sa0JBQWtCLENBQUNELFNBQVM7SUFDaEMsQ0FBQztRQUVRRSxlQUFlLEdBQXhCLFFBQVEsQ0FBQ0EsZUFBZSxHQUFFLENBQUM7UUFDdkJELGtCQUFrQixDQUFDLElBQUk7SUFFM0IsQ0FBQztRQUVRRSxpQkFBaUIsR0FBMUIsUUFBUSxDQUFDQSxpQkFBaUIsR0FBRSxDQUFDO1FBQ3pCLEVBQUUsR0FBRUMsZUFBZSxFQUFDLENBQUM7WUFDakIsTUFBTTtRQUNWLENBQUM7UUFFRCxHQUFLLENBQUVDLE1BQU0sR0FBSUQsZUFBZSxDQUF6QkMsTUFBTTtRQUViLEdBQUcsQ0FBQ0MsZUFBZSxHQUFHQyxrQkFBa0IsR0FBR0YsTUFBTTtRQUVqREcsb0JBQW9CLENBQUNGLGVBQWU7SUFFeEMsQ0FBQzs7SUFuQ0QsR0FBSyxDQUFxQnBCLEdBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLEdBQTdCTyxLQUFLLEdBQWNQLEdBQVcsS0FBdkJNLFFBQVEsR0FBSU4sR0FBVztJQUNyQyxHQUFLLENBQThDQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxHQUF2RHFCLGtCQUFrQixHQUEwQnJCLElBQVksS0FBcENzQixvQkFBb0IsR0FBSXRCLElBQVk7SUFDL0QsR0FBSyxDQUFpREEsSUFBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsR0FBekR1QixtQkFBbUIsR0FBNEJ2QixJQUFXLEtBQXJDd0Isc0JBQXNCLEdBQUl4QixJQUFXO0lBRWpFLEdBQUssQ0FBeUNBLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQXBEa0IsZUFBZSxHQUF3QmxCLElBQWMsS0FBcENlLGtCQUFrQixHQUFJZixJQUFjO0lBRTVELEdBQUssQ0FBQ3lCLHFCQUFxQixHQUFHZixJQUFJLENBQUNnQixHQUFHLEVBQUVuQixLQUFLLEdBQUUsQ0FBQyxJQUFHLENBQUMsRUFBRSxDQUFDO0lBK0J2RCxNQUFNLHNFQUNETCxnQkFBZ0IsQ0FBQ3lCLFFBQVE7UUFDMUJDLEtBQUssRUFBRSxDQUFDO1lBQ0pyQixLQUFLLEVBQUxBLEtBQUs7WUFDTEYsTUFBTSxFQUFOQSxNQUFNO1lBQ05HLGtCQUFrQixFQUFsQkEsa0JBQWtCO1lBQ2xCUSxlQUFlLEVBQWZBLGVBQWU7WUFDZkMsaUJBQWlCLEVBQWpCQSxpQkFBaUI7WUFDakJRLHFCQUFxQixFQUFyQkEscUJBQXFCO1lBQ3JCSixrQkFBa0IsRUFBbEJBLGtCQUFrQjtZQUNsQkUsbUJBQW1CLEVBQW5CQSxtQkFBbUI7WUFDbkJMLGVBQWUsRUFBZkEsZUFBZTtRQUNuQixDQUFDOzs7Ozs7O2tCQUNJZCxRQUFROztBQUlyQixDQUFDO0dBeERlRCxrQkFBa0I7S0FBbEJBLGtCQUFrQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29udGV4dC9DaGFsbGVuZ2VzQ29udGV4dC50c3g/ZmNhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNoYWxsZW5nZXMgZnJvbSAnLi4vLi4vY2hhbGxlbmdlcy5qc29uJztcclxuXHJcbmludGVyZmFjZSBDaGFsbGVuZ2Uge1xyXG4gICAgdHlwZTogJ2JvZHknIHwgJ2V5ZSc7XHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgYW1vdW50OiBudW1iZXI7XHJcbn1cclxuXHJcbmludGVyZmFjZSBDaGFsbGVuZ2VzQ29udGV4dERhdGEge1xyXG4gICAgbGV2ZWw6IG51bWJlcjtcclxuICAgIGN1cnJlbnRFeHBlcmllbmNlczogbnVtYmVyO1xyXG4gICAgY2hhbGxlbmdlc0NvbXBsZXRlZDogbnVtYmVyO1xyXG4gICAgYWN0aXZlQ2hhbGxlbmdlOiBDaGFsbGVuZ2U7XHJcbiAgICBleHBlcmllbmNlVG9OZXh0TGV2ZWw6IG51bWJlcjtcclxuICAgIGxldmVVcDogKCkgPT4gdm9pZDtcclxuICAgIHN0YXJ0TmV3Q2hhbGxlbmdlczogKCkgPT4gdm9pZDtcclxuICAgIHJlc2V0Q2hhbGxlbmdlczooKT0+dm9pZDtcclxuICAgIGNvbXBsZXRlQ2hhbGxlbmdlOigpPT52b2lkO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ2hhbGxlbmdlc1Byb3ZpZGVyUHJvcHN7XHJcbiAgICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY2hhbGxlbmdlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQ2hhbGxlbmdlc0NvbnRleHREYXRhKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDaGFsbGVuZ2VzUHJvdmlkZXIoe2NoaWxkcmVufTogQ2hhbGxlbmdlc1Byb3ZpZGVyUHJvcHMgKXtcclxuXHJcbiAgICBjb25zdCBbbGV2ZWwsIHNldExldmVsXSA9IHVzZVN0YXRlKDEpO1xyXG4gICAgY29uc3QgW2N1cnJlbnRFeHBlcmllbmNlcywgc2V0Q3VycmVudEV4cGVyaWVuY2VdID0gdXNlU3RhdGUoMTApO1xyXG4gICAgY29uc3QgW2NoYWxsZW5nZXNDb21wbGV0ZWQsIHNldENoYWxsZW5nZXNDb21wbGV0ZWRdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gICAgY29uc3QgW2FjdGl2ZUNoYWxsZW5nZSwgc2V0QWN0aXZlQ2hhbGxlbmdlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IGV4cGVyaWVuY2VUb05leHRMZXZlbCA9IE1hdGgucG93KChsZXZlbCArMSkqIDQsIDIpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGxldmVVcCgpe1xyXG4gICAgICAgIHNldExldmVsKGxldmVsICsgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3RhcnROZXdDaGFsbGVuZ2VzKCl7XHJcbiAgICAgICAgY29uc3QgcmFuZG9tQ2hhbGxlbmdlSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFsbGVuZ2VzLmxlbmd0aCk7XHJcbiAgICAgICAgY29uc3QgY2hhbGxlbmdlID0gY2hhbGxlbmdlc1tyYW5kb21DaGFsbGVuZ2VJbmRleF07XHJcblxyXG4gICAgICAgIHNldEFjdGl2ZUNoYWxsZW5nZShjaGFsbGVuZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlc2V0Q2hhbGxlbmdlcygpe1xyXG4gICAgICAgIHNldEFjdGl2ZUNoYWxsZW5nZShudWxsKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjb21wbGV0ZUNoYWxsZW5nZSgpe1xyXG4gICAgICAgIGlmKCFhY3RpdmVDaGFsbGVuZ2Upe1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB7YW1vdW50fSA9IGFjdGl2ZUNoYWxsZW5nZTtcclxuXHJcbiAgICAgICAgbGV0IGZpbmFsRXhwZXJpZW5jZSA9IGN1cnJlbnRFeHBlcmllbmNlcyArIGFtb3VudDtcclxuXHJcbiAgICAgICAgc2V0Q3VycmVudEV4cGVyaWVuY2UoZmluYWxFeHBlcmllbmNlKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxjaGFsbGVuZ2VDb250ZXh0LlByb3ZpZGVyIFxyXG4gICAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgICAgIGxldmVsLFxyXG4gICAgICAgICAgICBsZXZlVXAsXHJcbiAgICAgICAgICAgIHN0YXJ0TmV3Q2hhbGxlbmdlcyxcclxuICAgICAgICAgICAgcmVzZXRDaGFsbGVuZ2VzLFxyXG4gICAgICAgICAgICBjb21wbGV0ZUNoYWxsZW5nZSxcclxuICAgICAgICAgICAgZXhwZXJpZW5jZVRvTmV4dExldmVsLFxyXG4gICAgICAgICAgICBjdXJyZW50RXhwZXJpZW5jZXMsXHJcbiAgICAgICAgICAgIGNoYWxsZW5nZXNDb21wbGV0ZWQsXHJcbiAgICAgICAgICAgIGFjdGl2ZUNoYWxsZW5nZSxcclxuICAgICAgICB9fT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvY2hhbGxlbmdlQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxuXHJcbn1cclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsImNoYWxsZW5nZXMiLCJjaGFsbGVuZ2VDb250ZXh0IiwiQ2hhbGxlbmdlc1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJsZXZlVXAiLCJzZXRMZXZlbCIsImxldmVsIiwic3RhcnROZXdDaGFsbGVuZ2VzIiwicmFuZG9tQ2hhbGxlbmdlSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJjaGFsbGVuZ2UiLCJzZXRBY3RpdmVDaGFsbGVuZ2UiLCJyZXNldENoYWxsZW5nZXMiLCJjb21wbGV0ZUNoYWxsZW5nZSIsImFjdGl2ZUNoYWxsZW5nZSIsImFtb3VudCIsImZpbmFsRXhwZXJpZW5jZSIsImN1cnJlbnRFeHBlcmllbmNlcyIsInNldEN1cnJlbnRFeHBlcmllbmNlIiwiY2hhbGxlbmdlc0NvbXBsZXRlZCIsInNldENoYWxsZW5nZXNDb21wbGV0ZWQiLCJleHBlcmllbmNlVG9OZXh0TGV2ZWwiLCJwb3ciLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/ChallengesContext.tsx\n");

/***/ })

});