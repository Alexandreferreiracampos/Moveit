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

/***/ "./src/context/CountdownContext.tsx":
/*!******************************************!*\
  !*** ./src/context/CountdownContext.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CountdownContext\": function() { return /* binding */ CountdownContext; },\n/* harmony export */   \"CountdownProvider\": function() { return /* binding */ CountdownProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/ChallengesContext */ \"./src/context/ChallengesContext.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _s = $RefreshSig$();\nvar CountdownContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n});\nvar countdownTimeout;\nfunction CountdownProvider(param) {\n    var children = param.children;\n    var startCountdown = function startCountdown() {\n        setActive(true);\n        setHasFinished(false);\n    };\n    var resetCountdown = function resetCountdown() {\n        clearTimeout(countdownTimeout);\n        setActive(false);\n        setHasFinished(false);\n        setTime(valueTime);\n        setStatusBar(0);\n    };\n    _s();\n    var startNewChallenges = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__.challengeContext).startNewChallenges;\n    var valueTime = 0.5 * 60;\n    var porcentagem = 100 / valueTime;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(porcentagem - porcentagem), statusBar = ref[0], setStatusBar = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(valueTime), time = ref1[0], setTime = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), active = ref2[0], setActive = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), hasFinished = ref3[0], setHasFinished = ref3[1];\n    var minutes = Math.floor(time / 60);\n    var seconds = time % 60;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (active && time > 0) {\n            countdownTimeout = setTimeout(function() {\n                setStatusBar(statusBar + porcentagem);\n                setTime(time - 1);\n            }, 100);\n        } else if (active && time == 0) {\n            setHasFinished(true);\n            setActive(false);\n            startNewChallenges();\n        }\n    }, [\n        active,\n        time\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CountdownContext.Provider, {\n        value: {\n            minutes: minutes,\n            seconds: seconds,\n            hasFinished: hasFinished,\n            statusBar: statusBar,\n            active: active,\n            resetCountdown: resetCountdown,\n            startCountdown: startCountdown\n        },\n        __source: {\n            fileName: \"D:\\\\Programacao\\\\REACT\\\\projetos\\\\moveit-next\\\\src\\\\context\\\\CountdownContext.tsx\",\n            lineNumber: 69,\n            columnNumber: 9\n        },\n        __self: this,\n        children: children\n    }));\n}\n_s(CountdownProvider, \"xVxfoFoEw7JXtt46YjZQhV6k2Cw=\");\n_c = CountdownProvider;\nvar _c;\n$RefreshReg$(_c, \"CountdownProvider\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQzs7Ozs7OztrQkFDSUQsUUFBUTs7QUFHckIsQ0FBQztHQTFEZUQsaUJBQWlCO0tBQWpCQSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHQvQ291bnRkb3duQ29udGV4dC50c3g/MTdjZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBSZWFjdE5vZGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY2hhbGxlbmdlQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvQ2hhbGxlbmdlc0NvbnRleHQnO1xyXG5cclxuXHJcbmludGVyZmFjZSBDb3VudGRvd25Db250ZXh0RGF0ZXtcclxuICAgICAgICAgICAgbWludXRlczogbnVtYmVyO1xyXG4gICAgICAgICAgICBzZWNvbmRzOiBudW1iZXI7XHJcbiAgICAgICAgICAgIGhhc0ZpbmlzaGVkOiBib29sZWFuO1xyXG4gICAgICAgICAgICBzdGF0dXNCYXI6IG51bWJlcjtcclxuICAgICAgICAgICAgYWN0aXZlOmJvb2xlYW47XHJcbiAgICAgICAgICAgIHJlc2V0Q291bnRkb3duOigpPT52b2lkO1xyXG4gICAgICAgICAgICBzdGFydENvdW50ZG93bjooKT0+dm9pZDtcclxuXHJcbn1cclxuXHJcbmludGVyZmFjZSBDb3VudGRvd25Qcm92aWRlclByb3Bze1xyXG4gICAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcclxufVxyXG5leHBvcnQgY29uc3QgQ291bnRkb3duQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQ291bnRkb3duQ29udGV4dERhdGUpXHJcblxyXG5sZXQgY291bnRkb3duVGltZW91dDogTm9kZUpTLlRpbWVvdXQ7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ291bnRkb3duUHJvdmlkZXIoe2NoaWxkcmVufTogQ291bnRkb3duUHJvdmlkZXJQcm9wcyl7XHJcbiAgICBjb25zdCB7c3RhcnROZXdDaGFsbGVuZ2VzfSA9IHVzZUNvbnRleHQoY2hhbGxlbmdlQ29udGV4dCk7XHJcblxyXG4gICAgY29uc3QgdmFsdWVUaW1lID0gMC41ICogNjA7XHJcblxyXG4gICAgY29uc3QgcG9yY2VudGFnZW0gPSAxMDAgLyB2YWx1ZVRpbWVcclxuICAgIGNvbnN0IFtzdGF0dXNCYXIsIHNldFN0YXR1c0Jhcl0gPSB1c2VTdGF0ZShwb3JjZW50YWdlbSAtIHBvcmNlbnRhZ2VtKTtcclxuXHJcbiAgICBjb25zdCBbdGltZSwgc2V0VGltZV0gPSB1c2VTdGF0ZSh2YWx1ZVRpbWUpO1xyXG4gICAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtoYXNGaW5pc2hlZCwgc2V0SGFzRmluaXNoZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgXHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcih0aW1lIC8gNjApO1xyXG4gICAgY29uc3Qgc2Vjb25kcyA9IHRpbWUgJSA2MDtcclxuXHJcbiAgICBmdW5jdGlvbiBzdGFydENvdW50ZG93bigpe1xyXG4gICAgICAgIHNldEFjdGl2ZSh0cnVlKTtcclxuICAgICAgICBzZXRIYXNGaW5pc2hlZChmYWxzZSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlc2V0Q291bnRkb3duKCkge1xyXG4gICAgICAgIGNsZWFyVGltZW91dChjb3VudGRvd25UaW1lb3V0KTtcclxuICAgICAgICBzZXRBY3RpdmUoZmFsc2UpO1xyXG4gICAgICAgIHNldEhhc0ZpbmlzaGVkKGZhbHNlKTtcclxuICAgICAgICBzZXRUaW1lKHZhbHVlVGltZSk7XHJcbiAgICAgICAgc2V0U3RhdHVzQmFyKDApXHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYoYWN0aXZlICYmIHRpbWUgPiAwKXtcclxuICAgICAgICAgICAgY291bnRkb3duVGltZW91dCA9IHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgICAgIHNldFN0YXR1c0JhcihzdGF0dXNCYXIgKyBwb3JjZW50YWdlbSlcclxuICAgICAgICAgICAgICAgIHNldFRpbWUodGltZSAtIDEpICBcclxuICAgICAgICAgICAgfSwgMTAwKTsgXHJcbiAgICAgICAgfWVsc2UgaWYoYWN0aXZlICYmIHRpbWUgPT0gMCl7XHJcbiAgICAgICAgICAgIHNldEhhc0ZpbmlzaGVkKHRydWUpO1xyXG4gICAgICAgICAgICBzZXRBY3RpdmUoZmFsc2UpO1xyXG4gICAgICAgICAgICBzdGFydE5ld0NoYWxsZW5nZXMoKTtcclxuICAgICAgICB9XHJcbiBcclxuICAgIH0sW2FjdGl2ZSwgdGltZV0pXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxDb3VudGRvd25Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7XHJcbiAgICAgICAgICAgIG1pbnV0ZXMsXHJcbiAgICAgICAgICAgIHNlY29uZHMsXHJcbiAgICAgICAgICAgIGhhc0ZpbmlzaGVkLFxyXG4gICAgICAgICAgICBzdGF0dXNCYXIsXHJcbiAgICAgICAgICAgIGFjdGl2ZSxcclxuICAgICAgICAgICAgcmVzZXRDb3VudGRvd24sXHJcbiAgICAgICAgICAgIHN0YXJ0Q291bnRkb3duLFxyXG4gICAgICAgIH19PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9Db3VudGRvd25Db250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjaGFsbGVuZ2VDb250ZXh0IiwiQ291bnRkb3duQ29udGV4dCIsImNvdW50ZG93blRpbWVvdXQiLCJDb3VudGRvd25Qcm92aWRlciIsImNoaWxkcmVuIiwic3RhcnRDb3VudGRvd24iLCJzZXRBY3RpdmUiLCJzZXRIYXNGaW5pc2hlZCIsInJlc2V0Q291bnRkb3duIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZSIsInZhbHVlVGltZSIsInNldFN0YXR1c0JhciIsInN0YXJ0TmV3Q2hhbGxlbmdlcyIsInBvcmNlbnRhZ2VtIiwic3RhdHVzQmFyIiwidGltZSIsImFjdGl2ZSIsImhhc0ZpbmlzaGVkIiwibWludXRlcyIsIk1hdGgiLCJmbG9vciIsInNlY29uZHMiLCJzZXRUaW1lb3V0IiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/context/CountdownContext.tsx\n");

/***/ })

});