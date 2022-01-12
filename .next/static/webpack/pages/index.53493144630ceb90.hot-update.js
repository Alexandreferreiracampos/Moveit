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

/***/ "./src/context/ChallengesContext.tsx":
/*!*******************************************!*\
  !*** ./src/context/ChallengesContext.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"challengeContext\": function() { return /* binding */ challengeContext; },\n/* harmony export */   \"ChallengesProvider\": function() { return /* binding */ ChallengesProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _challenges_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../challenges.json */ \"./challenges.json\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _components_LevelUpModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/LevelUpModal */ \"./src/components/LevelUpModal.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _objectWithoutProperties(source, excluded) {\n    if (source == null) return {\n    };\n    var target = _objectWithoutPropertiesLoose(source, excluded);\n    var key, i;\n    if (Object.getOwnPropertySymbols) {\n        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n        for(i = 0; i < sourceSymbolKeys.length; i++){\n            key = sourceSymbolKeys[i];\n            if (excluded.indexOf(key) >= 0) continue;\n            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n            target[key] = source[key];\n        }\n    }\n    return target;\n}\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n    if (source == null) return {\n    };\n    var target = {\n    };\n    var sourceKeys = Object.keys(source);\n    var key, i;\n    for(i = 0; i < sourceKeys.length; i++){\n        key = sourceKeys[i];\n        if (excluded.indexOf(key) >= 0) continue;\n        target[key] = source[key];\n    }\n    return target;\n}\nvar _s = $RefreshSig$();\nvar challengeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n});\nfunction ChallengesProvider(_param) {\n    var leveUp = function leveUp() {\n        setLevel(level + 1);\n        setModalLevelUp(true);\n    };\n    var closeModal = function closeModal() {\n        setModalLevelUp(false);\n    };\n    var startNewChallenges = function startNewChallenges() {\n        var randomChallengeIndex = Math.floor(Math.random() * _challenges_json__WEBPACK_IMPORTED_MODULE_2__.length);\n        var challenge = _challenges_json__WEBPACK_IMPORTED_MODULE_2__[randomChallengeIndex];\n        setActiveChallenge(challenge);\n        new Audio('/notification.mp3').play();\n        if (Notification.permission === 'granted') {\n            new Notification('Nova desafio', {\n                body: \"Valendo \".concat(challenge.amount, \"xp\")\n            });\n        }\n    };\n    var resetChallenges = function resetChallenges() {\n        setActiveChallenge(null);\n    };\n    var completeChallenge = function completeChallenge() {\n        if (!activeChallenge) {\n            return;\n        }\n        setChallengesCompleted(challengesCompleted + 1);\n        setActiveChallenge(null);\n        var amount = activeChallenge.amount;\n        var finalExperience = currentExperiences + amount;\n        if (finalExperience > experienceToNextLevel) {\n            setCurrentExperience(finalExperience - experienceToNextLevel);\n            leveUp();\n        } else setCurrentExperience(finalExperience);\n    };\n    var children = _param.children, rest = _objectWithoutProperties(_param, [\n        \"children\"\n    ]);\n    _s();\n    var _level;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((_level = rest.level) !== null && _level !== void 0 ? _level : 1), level = ref[0], setLevel = ref[1];\n    var _currentExperiences;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((_currentExperiences = rest.currentExperiences) !== null && _currentExperiences !== void 0 ? _currentExperiences : 0), currentExperiences = ref1[0], setCurrentExperience = ref1[1];\n    var _challengesCompleted;\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((_challengesCompleted = rest.challengesCompleted) !== null && _challengesCompleted !== void 0 ? _challengesCompleted : 0), challengesCompleted = ref2[0], setChallengesCompleted = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), modalLevelUp = ref3[0], setModalLevelUp = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), activeChallenge = ref4[0], setActiveChallenge = ref4[1];\n    var experienceToNextLevel = Math.pow((level + 1) * 4, 2);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        Notification.requestPermission();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].set('level', String(level));\n        js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].set('currentExperiences', String(currentExperiences));\n        js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].set('challengesCompleted', String(challengesCompleted));\n    }, [\n        level,\n        currentExperiences,\n        challengesCompleted\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(challengeContext.Provider, {\n        value: {\n            level: level,\n            leveUp: leveUp,\n            startNewChallenges: startNewChallenges,\n            resetChallenges: resetChallenges,\n            completeChallenge: completeChallenge,\n            experienceToNextLevel: experienceToNextLevel,\n            currentExperiences: currentExperiences,\n            challengesCompleted: challengesCompleted,\n            activeChallenge: activeChallenge\n        },\n        __source: {\n            fileName: \"D:\\\\Programacao\\\\REACT\\\\projetos\\\\moveit-next\\\\src\\\\context\\\\ChallengesContext.tsx\",\n            lineNumber: 113,\n            columnNumber: 9\n        },\n        __self: this,\n        children: [\n            children,\n            modalLevelUp && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_LevelUpModal__WEBPACK_IMPORTED_MODULE_4__.LevelUpModal, {\n                __source: {\n                    fileName: \"D:\\\\Programacao\\\\REACT\\\\projetos\\\\moveit-next\\\\src\\\\context\\\\ChallengesContext.tsx\",\n                    lineNumber: 126,\n                    columnNumber: 26\n                },\n                __self: this\n            })\n        ]\n    }));\n}\n_s(ChallengesProvider, \"uVlzd109k0NvH0Us+Rpm/87hf4c=\");\n_c = ChallengesProvider;\nvar _c;\n$RefreshReg$(_c, \"ChallengesProvider\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9DaGFsbGVuZ2VzQ29udGV4dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBbUU7QUFDckI7QUFDZjtBQUMwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2QmxELEdBQUssQ0FBQ00sZ0JBQWdCLGlCQUFHTixvREFBYSxDQUFDLENBQUM7QUFBQSxDQUFDO0FBRXpDLFNBQVNPLGtCQUFrQixDQUFDLE1BQTRDLEVBQUUsQ0FBQztRQXVCckVDLE1BQU0sR0FBZixRQUFRLENBQUNBLE1BQU0sR0FBRSxDQUFDO1FBQ2RDLFFBQVEsQ0FBQ0MsS0FBSyxHQUFHLENBQUM7UUFDbEJDLGVBQWUsQ0FBQyxJQUFJO0lBQ3hCLENBQUM7UUFFUUMsVUFBVSxHQUFuQixRQUFRLENBQUNBLFVBQVUsR0FBRSxDQUFDO1FBQ2xCRCxlQUFlLENBQUMsS0FBSztJQUN6QixDQUFDO1FBRVFFLGtCQUFrQixHQUEzQixRQUFRLENBQUNBLGtCQUFrQixHQUFFLENBQUM7UUFDMUIsR0FBSyxDQUFDQyxvQkFBb0IsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxLQUFLZCxvREFBaUI7UUFDekUsR0FBSyxDQUFDZ0IsU0FBUyxHQUFHaEIsNkNBQVUsQ0FBQ1csb0JBQW9CO1FBRWpETSxrQkFBa0IsQ0FBQ0QsU0FBUztRQUU1QixHQUFHLENBQUNFLEtBQUssQ0FBQyxDQUFtQixvQkFBRUMsSUFBSTtRQUVuQyxFQUFFLEVBQUNDLFlBQVksQ0FBQ0MsVUFBVSxLQUFLLENBQVMsVUFBQyxDQUFDO1lBQ3RDLEdBQUcsQ0FBQ0QsWUFBWSxDQUFDLENBQWMsZUFBRSxDQUFDO2dCQUM5QkUsSUFBSSxFQUFHLENBQVEsVUFBbUIsTUFBRSxDQUFuQk4sU0FBUyxDQUFDTyxNQUFNLEVBQUMsQ0FBRTtZQUN4QyxDQUFDO1FBRUwsQ0FBQztJQUNMLENBQUM7UUFFUUMsZUFBZSxHQUF4QixRQUFRLENBQUNBLGVBQWUsR0FB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QUNsQmMsZUFBZSxFQUFmQSxlQUFlO1lBQ2ZDLGlCQUFpQixFQUFqQkEsaUJBQWlCO1lBQ2pCTSxxQkFBcUIsRUFBckJBLHFCQUFxQjtZQUNyQkQsa0JBQWtCLEVBQWxCQSxrQkFBa0I7WUFDbEJGLG1CQUFtQixFQUFuQkEsbUJBQW1CO1lBQ25CRixlQUFlLEVBQWZBLGVBQWU7UUFDbkIsQ0FBQzs7Ozs7Ozs7WUFDSU8sUUFBUTtZQUNaRSxZQUFZLHlFQUFLakMsa0VBQVk7Ozs7Ozs7Ozs7QUFJdEMsQ0FBQztHQS9GZUUsa0JBQWtCO0tBQWxCQSxrQkFBa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHQvQ2hhbGxlbmdlc0NvbnRleHQudHN4P2ZjYTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgUmVhY3ROb2RlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNoYWxsZW5nZXMgZnJvbSAnLi4vLi4vY2hhbGxlbmdlcy5qc29uJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJ1xyXG5pbXBvcnQgeyBMZXZlbFVwTW9kYWwgfSBmcm9tICcuLi9jb21wb25lbnRzL0xldmVsVXBNb2RhbCc7XHJcblxyXG5cclxuaW50ZXJmYWNlIENoYWxsZW5nZSB7XHJcbiAgICB0eXBlOiAnYm9keScgfCAnZXllJztcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBhbW91bnQ6IG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIENoYWxsZW5nZXNDb250ZXh0RGF0YSB7XHJcbiAgICBsZXZlbDogbnVtYmVyO1xyXG4gICAgY3VycmVudEV4cGVyaWVuY2VzOiBudW1iZXI7XHJcbiAgICBjaGFsbGVuZ2VzQ29tcGxldGVkOiBudW1iZXI7XHJcbiAgICBhY3RpdmVDaGFsbGVuZ2U6IENoYWxsZW5nZTtcclxuICAgIGV4cGVyaWVuY2VUb05leHRMZXZlbDogbnVtYmVyO1xyXG4gICAgbGV2ZVVwOiAoKSA9PiB2b2lkO1xyXG4gICAgc3RhcnROZXdDaGFsbGVuZ2VzOiAoKSA9PiB2b2lkO1xyXG4gICAgcmVzZXRDaGFsbGVuZ2VzOigpPT52b2lkO1xyXG4gICAgY29tcGxldGVDaGFsbGVuZ2U6KCk9PnZvaWQ7XHJcbn1cclxuXHJcbmludGVyZmFjZSBDaGFsbGVuZ2VzUHJvdmlkZXJQcm9wc3tcclxuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGU7XHJcbiAgICAgbGV2ZWw6IG51bWJlcixcclxuICAgICBjdXJyZW50RXhwZXJpZW5jZXM6IG51bWJlcixcclxuICAgICBjaGFsbGVuZ2VzQ29tcGxldGVkOiBudW1iZXIsXHJcbiAgICAgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjaGFsbGVuZ2VDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBDaGFsbGVuZ2VzQ29udGV4dERhdGEpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENoYWxsZW5nZXNQcm92aWRlcih7Y2hpbGRyZW4sIC4uLnJlc3R9OiBDaGFsbGVuZ2VzUHJvdmlkZXJQcm9wcyApe1xyXG5cclxuICAgIGNvbnN0IFtsZXZlbCwgc2V0TGV2ZWxdID0gdXNlU3RhdGUocmVzdC5sZXZlbCA/PyAxKTtcclxuICAgIGNvbnN0IFtjdXJyZW50RXhwZXJpZW5jZXMsIHNldEN1cnJlbnRFeHBlcmllbmNlXSA9IHVzZVN0YXRlKHJlc3QuY3VycmVudEV4cGVyaWVuY2VzID8/IDApO1xyXG4gICAgY29uc3QgW2NoYWxsZW5nZXNDb21wbGV0ZWQsIHNldENoYWxsZW5nZXNDb21wbGV0ZWRdID0gdXNlU3RhdGUocmVzdC5jaGFsbGVuZ2VzQ29tcGxldGVkID8/IDApO1xyXG4gICAgY29uc3QgW21vZGFsTGV2ZWxVcCwgc2V0TW9kYWxMZXZlbFVwXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBbYWN0aXZlQ2hhbGxlbmdlLCBzZXRBY3RpdmVDaGFsbGVuZ2VdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgY29uc3QgZXhwZXJpZW5jZVRvTmV4dExldmVsID0gTWF0aC5wb3coKGxldmVsICsxKSogNCwgMik7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgTm90aWZpY2F0aW9uLnJlcXVlc3RQZXJtaXNzaW9uKCk7XHJcbiAgICAgICAgXHJcblxyXG4gICAgfSxbXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBDb29raWVzLnNldCgnbGV2ZWwnLCBTdHJpbmcobGV2ZWwpKTtcclxuICAgICAgICBDb29raWVzLnNldCgnY3VycmVudEV4cGVyaWVuY2VzJywgU3RyaW5nKGN1cnJlbnRFeHBlcmllbmNlcykpO1xyXG4gICAgICAgIENvb2tpZXMuc2V0KCdjaGFsbGVuZ2VzQ29tcGxldGVkJywgU3RyaW5nKGNoYWxsZW5nZXNDb21wbGV0ZWQpKTtcclxuICAgIH0sIFtsZXZlbCwgY3VycmVudEV4cGVyaWVuY2VzLCBjaGFsbGVuZ2VzQ29tcGxldGVkXSlcclxuXHJcbiAgICBmdW5jdGlvbiBsZXZlVXAoKXtcclxuICAgICAgICBzZXRMZXZlbChsZXZlbCArIDEpO1xyXG4gICAgICAgIHNldE1vZGFsTGV2ZWxVcCh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjbG9zZU1vZGFsKCl7XHJcbiAgICAgICAgc2V0TW9kYWxMZXZlbFVwKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzdGFydE5ld0NoYWxsZW5nZXMoKXtcclxuICAgICAgICBjb25zdCByYW5kb21DaGFsbGVuZ2VJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYWxsZW5nZXMubGVuZ3RoKTtcclxuICAgICAgICBjb25zdCBjaGFsbGVuZ2UgPSBjaGFsbGVuZ2VzW3JhbmRvbUNoYWxsZW5nZUluZGV4XTtcclxuXHJcbiAgICAgICAgc2V0QWN0aXZlQ2hhbGxlbmdlKGNoYWxsZW5nZSk7XHJcblxyXG4gICAgICAgIG5ldyBBdWRpbygnL25vdGlmaWNhdGlvbi5tcDMnKS5wbGF5KCk7XHJcblxyXG4gICAgICAgIGlmKE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uID09PSAnZ3JhbnRlZCcpe1xyXG4gICAgICAgICAgICBuZXcgTm90aWZpY2F0aW9uKCdOb3ZhIGRlc2FmaW8nLCB7XHJcbiAgICAgICAgICAgICAgICBib2R5OiBgVmFsZW5kbyAke2NoYWxsZW5nZS5hbW91bnR9eHBgXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZXNldENoYWxsZW5nZXMoKXtcclxuICAgICAgICBzZXRBY3RpdmVDaGFsbGVuZ2UobnVsbClcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY29tcGxldGVDaGFsbGVuZ2UoKXtcclxuICAgICAgICBpZighYWN0aXZlQ2hhbGxlbmdlKXtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0Q2hhbGxlbmdlc0NvbXBsZXRlZChjaGFsbGVuZ2VzQ29tcGxldGVkICsgMSlcclxuICAgICAgICBzZXRBY3RpdmVDaGFsbGVuZ2UobnVsbClcclxuXHJcbiAgICAgICAgY29uc3Qge2Ftb3VudH0gPSBhY3RpdmVDaGFsbGVuZ2U7XHJcblxyXG4gICAgICAgIGxldCBmaW5hbEV4cGVyaWVuY2UgPSBjdXJyZW50RXhwZXJpZW5jZXMgKyBhbW91bnQ7XHJcblxyXG5cclxuICAgICAgICBpZihmaW5hbEV4cGVyaWVuY2UgPiBleHBlcmllbmNlVG9OZXh0TGV2ZWwpe1xyXG4gICAgICAgICAgICBzZXRDdXJyZW50RXhwZXJpZW5jZShmaW5hbEV4cGVyaWVuY2UgLSBleHBlcmllbmNlVG9OZXh0TGV2ZWwpXHJcbiAgICAgICAgICAgIGxldmVVcCgpO1xyXG5cclxuICAgICAgICB9ZWxzZShcclxuICAgICAgICAgICAgc2V0Q3VycmVudEV4cGVyaWVuY2UoZmluYWxFeHBlcmllbmNlKVxyXG4gICAgICAgIClcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8Y2hhbGxlbmdlQ29udGV4dC5Qcm92aWRlciBcclxuICAgICAgICB2YWx1ZT17e1xyXG4gICAgICAgICAgICBsZXZlbCxcclxuICAgICAgICAgICAgbGV2ZVVwLFxyXG4gICAgICAgICAgICBzdGFydE5ld0NoYWxsZW5nZXMsXHJcbiAgICAgICAgICAgIHJlc2V0Q2hhbGxlbmdlcyxcclxuICAgICAgICAgICAgY29tcGxldGVDaGFsbGVuZ2UsXHJcbiAgICAgICAgICAgIGV4cGVyaWVuY2VUb05leHRMZXZlbCxcclxuICAgICAgICAgICAgY3VycmVudEV4cGVyaWVuY2VzLFxyXG4gICAgICAgICAgICBjaGFsbGVuZ2VzQ29tcGxldGVkLFxyXG4gICAgICAgICAgICBhY3RpdmVDaGFsbGVuZ2UsXHJcbiAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICB7bW9kYWxMZXZlbFVwICYmIDxMZXZlbFVwTW9kYWwvPn1cclxuICAgICAgICA8L2NoYWxsZW5nZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcblxyXG59XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJjaGFsbGVuZ2VzIiwiQ29va2llcyIsIkxldmVsVXBNb2RhbCIsImNoYWxsZW5nZUNvbnRleHQiLCJDaGFsbGVuZ2VzUHJvdmlkZXIiLCJsZXZlVXAiLCJzZXRMZXZlbCIsImxldmVsIiwic2V0TW9kYWxMZXZlbFVwIiwiY2xvc2VNb2RhbCIsInN0YXJ0TmV3Q2hhbGxlbmdlcyIsInJhbmRvbUNoYWxsZW5nZUluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwiY2hhbGxlbmdlIiwic2V0QWN0aXZlQ2hhbGxlbmdlIiwiQXVkaW8iLCJwbGF5IiwiTm90aWZpY2F0aW9uIiwicGVybWlzc2lvbiIsImJvZHkiLCJhbW91bnQiLCJyZXNldENoYWxsZW5nZXMiLCJjb21wbGV0ZUNoYWxsZW5nZSIsImFjdGl2ZUNoYWxsZW5nZSIsInNldENoYWxsZW5nZXNDb21wbGV0ZWQiLCJjaGFsbGVuZ2VzQ29tcGxldGVkIiwiZmluYWxFeHBlcmllbmNlIiwiY3VycmVudEV4cGVyaWVuY2VzIiwiZXhwZXJpZW5jZVRvTmV4dExldmVsIiwic2V0Q3VycmVudEV4cGVyaWVuY2UiLCJjaGlsZHJlbiIsInJlc3QiLCJtb2RhbExldmVsVXAiLCJwb3ciLCJyZXF1ZXN0UGVybWlzc2lvbiIsInNldCIsIlN0cmluZyIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/context/ChallengesContext.tsx\n");

/***/ })

});