/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/context/ChallengesContext.tsx":
/*!*******************************************!*\
  !*** ./src/context/ChallengesContext.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"challengeContext\": () => (/* binding */ challengeContext),\n/* harmony export */   \"ChallengesProvider\": () => (/* binding */ ChallengesProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _challenges_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../challenges.json */ \"./challenges.json\");\n\n\n\nconst challengeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n});\nfunction ChallengesProvider({ children  }) {\n    const { 0: level , 1: setLevel  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const { 0: currentExperiences , 1: setCurrentExperience  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const { 0: challengesCompleted , 1: setChallengesCompleted  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const { 0: activeChallenge , 1: setActiveChallenge  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const experienceToNextLevel = Math.pow((level + 1) * 4, 2);\n    function leveUp() {\n        setLevel(level + 1);\n    }\n    function startNewChallenges() {\n        const randomChallengeIndex = Math.floor(Math.random() * _challenges_json__WEBPACK_IMPORTED_MODULE_2__.length);\n        const challenge = _challenges_json__WEBPACK_IMPORTED_MODULE_2__[randomChallengeIndex];\n        setActiveChallenge(challenge);\n    }\n    function resetChallenges() {\n        setActiveChallenge(null);\n    }\n    function completeChallenge() {\n        if (!activeChallenge) {\n            return;\n        }\n        setChallengesCompleted(challengesCompleted + 1);\n        setActiveChallenge(null);\n        const { amount  } = activeChallenge;\n        let finalExperience = currentExperiences + amount;\n        if (finalExperience > experienceToNextLevel) {\n            setCurrentExperience(finalExperience - experienceToNextLevel);\n            leveUp();\n        } else setCurrentExperience(finalExperience);\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(challengeContext.Provider, {\n        value: {\n            level,\n            leveUp,\n            startNewChallenges,\n            resetChallenges,\n            completeChallenge,\n            experienceToNextLevel,\n            currentExperiences,\n            challengesCompleted,\n            activeChallenge\n        },\n        __source: {\n            fileName: \"D:\\\\Programacao\\\\REACT\\\\projetos\\\\moveit-next\\\\src\\\\context\\\\ChallengesContext.tsx\",\n            lineNumber: 78,\n            columnNumber: 9\n        },\n        __self: this,\n        children: children\n    }));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9DaGFsbGVuZ2VzQ29udGV4dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBd0Q7QUFDVjtBQXdCdkMsS0FBSyxDQUFDRyxnQkFBZ0IsaUJBQUdILG9EQUFhLENBQUMsQ0FBQztBQUFBLENBQUM7QUFFekMsU0FBU0ksa0JBQWtCLENBQUMsQ0FBQ0MsQ0FBQUEsUUFBUSxFQUF5QixDQUFDLEVBQUUsQ0FBQztJQUVyRSxLQUFLLE1BQUVDLEtBQUssTUFBRUMsUUFBUSxNQUFJTiwrQ0FBUSxDQUFDLENBQUM7SUFDcEMsS0FBSyxNQUFFTyxrQkFBa0IsTUFBRUMsb0JBQW9CLE1BQUlSLCtDQUFRLENBQUMsQ0FBQztJQUM3RCxLQUFLLE1BQUVTLG1CQUFtQixNQUFFQyxzQkFBc0IsTUFBSVYsK0NBQVEsQ0FBQyxDQUFDO0lBRWhFLEtBQUssTUFBRVcsZUFBZSxNQUFFQyxrQkFBa0IsTUFBSVosK0NBQVEsQ0FBQyxJQUFJO0lBRTNELEtBQUssQ0FBQ2EscUJBQXFCLEdBQUdDLElBQUksQ0FBQ0MsR0FBRyxFQUFFVixLQUFLLEdBQUUsQ0FBQyxJQUFHLENBQUMsRUFBRSxDQUFDO2FBRTlDVyxNQUFNLEdBQUUsQ0FBQztRQUNkVixRQUFRLENBQUNELEtBQUssR0FBRyxDQUFDO0lBQ3RCLENBQUM7YUFFUVksa0JBQWtCLEdBQUUsQ0FBQztRQUMxQixLQUFLLENBQUNDLG9CQUFvQixHQUFHSixJQUFJLENBQUNLLEtBQUssQ0FBQ0wsSUFBSSxDQUFDTSxNQUFNLEtBQUtuQixvREFBaUI7UUFDekUsS0FBSyxDQUFDcUIsU0FBUyxHQUFHckIsNkNBQVUsQ0FBQ2lCLG9CQUFvQjtRQUVqRE4sa0JBQWtCLENBQUNVLFNBQVM7SUFDaEMsQ0FBQzthQUVRQyxlQUFlLEdBQUUsQ0FBQztRQUN2Qlgsa0JBQWtCLENBQUMsSUFBSTtJQUUzQixDQUFDO2FBRVFZLGlCQUFpQixHQUFFLENBQUM7UUFDekIsRUFBRSxHQUFFYixlQUFlLEVBQUMsQ0FBQztZQUNqQixNQUFNO1FBQ1YsQ0FBQztRQUVERCxzQkFBc0IsQ0FBQ0QsbUJBQW1CLEdBQUcsQ0FBQztRQUM5Q0csa0JBQWtCLENBQUMsSUFBSTtRQUV2QixLQUFLLENBQUMsQ0FBQ2EsQ0FBQUEsTUFBTSxHQUFDLEdBQUdkLGVBQWU7UUFFaEMsR0FBRyxDQUFDZSxlQUFlLEdBQUduQixrQkFBa0IsR0FBR2tCLE1BQU07UUFFakQsRUFBRSxFQUFDQyxlQUFlLEdBQUdiLHFCQUFxQixFQUFDLENBQUM7WUFDeENMLG9CQUFvQixDQUFDa0IsZUFBZSxHQUFHYixxQkFBcUI7WUFDNURHLE1BQU07UUFFVixDQUFDLE1BQ0dSLG9CQUFvQixDQUFDa0IsZUFBZTtJQUk1QyxDQUFDO0lBRUQsTUFBTSxzRUFDRHhCLGdCQUFnQixDQUFDeUIsUUFBUTtRQUMxQkMsS0FBSyxFQUFFLENBQUM7WUFDSnZCLEtBQUs7WUFDTFcsTUFBTTtZQUNOQyxrQkFBa0I7WUFDbEJNLGVBQWU7WUFDZkMsaUJBQWlCO1lBQ2pCWCxxQkFBcUI7WUFDckJOLGtCQUFrQjtZQUNsQkUsbUJBQW1CO1lBQ25CRSxlQUFlO1FBQ25CLENBQUM7Ozs7Ozs7a0JBQ0lQLFFBQVE7O0FBSXJCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3ZlaXQtbmV4dC8uL3NyYy9jb250ZXh0L0NoYWxsZW5nZXNDb250ZXh0LnRzeD9mY2E3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIFJlYWN0Tm9kZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2hhbGxlbmdlcyBmcm9tICcuLi8uLi9jaGFsbGVuZ2VzLmpzb24nO1xyXG5cclxuaW50ZXJmYWNlIENoYWxsZW5nZSB7XHJcbiAgICB0eXBlOiAnYm9keScgfCAnZXllJztcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBhbW91bnQ6IG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIENoYWxsZW5nZXNDb250ZXh0RGF0YSB7XHJcbiAgICBsZXZlbDogbnVtYmVyO1xyXG4gICAgY3VycmVudEV4cGVyaWVuY2VzOiBudW1iZXI7XHJcbiAgICBjaGFsbGVuZ2VzQ29tcGxldGVkOiBudW1iZXI7XHJcbiAgICBhY3RpdmVDaGFsbGVuZ2U6IENoYWxsZW5nZTtcclxuICAgIGV4cGVyaWVuY2VUb05leHRMZXZlbDogbnVtYmVyO1xyXG4gICAgbGV2ZVVwOiAoKSA9PiB2b2lkO1xyXG4gICAgc3RhcnROZXdDaGFsbGVuZ2VzOiAoKSA9PiB2b2lkO1xyXG4gICAgcmVzZXRDaGFsbGVuZ2VzOigpPT52b2lkO1xyXG4gICAgY29tcGxldGVDaGFsbGVuZ2U6KCk9PnZvaWQ7XHJcbn1cclxuXHJcbmludGVyZmFjZSBDaGFsbGVuZ2VzUHJvdmlkZXJQcm9wc3tcclxuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjaGFsbGVuZ2VDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBDaGFsbGVuZ2VzQ29udGV4dERhdGEpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENoYWxsZW5nZXNQcm92aWRlcih7Y2hpbGRyZW59OiBDaGFsbGVuZ2VzUHJvdmlkZXJQcm9wcyApe1xyXG5cclxuICAgIGNvbnN0IFtsZXZlbCwgc2V0TGV2ZWxdID0gdXNlU3RhdGUoMSk7XHJcbiAgICBjb25zdCBbY3VycmVudEV4cGVyaWVuY2VzLCBzZXRDdXJyZW50RXhwZXJpZW5jZV0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtjaGFsbGVuZ2VzQ29tcGxldGVkLCBzZXRDaGFsbGVuZ2VzQ29tcGxldGVkXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICAgIGNvbnN0IFthY3RpdmVDaGFsbGVuZ2UsIHNldEFjdGl2ZUNoYWxsZW5nZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICBjb25zdCBleHBlcmllbmNlVG9OZXh0TGV2ZWwgPSBNYXRoLnBvdygobGV2ZWwgKzEpKiA0LCAyKTtcclxuXHJcbiAgICBmdW5jdGlvbiBsZXZlVXAoKXtcclxuICAgICAgICBzZXRMZXZlbChsZXZlbCArIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHN0YXJ0TmV3Q2hhbGxlbmdlcygpe1xyXG4gICAgICAgIGNvbnN0IHJhbmRvbUNoYWxsZW5nZUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhbGxlbmdlcy5sZW5ndGgpO1xyXG4gICAgICAgIGNvbnN0IGNoYWxsZW5nZSA9IGNoYWxsZW5nZXNbcmFuZG9tQ2hhbGxlbmdlSW5kZXhdO1xyXG5cclxuICAgICAgICBzZXRBY3RpdmVDaGFsbGVuZ2UoY2hhbGxlbmdlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZXNldENoYWxsZW5nZXMoKXtcclxuICAgICAgICBzZXRBY3RpdmVDaGFsbGVuZ2UobnVsbClcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY29tcGxldGVDaGFsbGVuZ2UoKXtcclxuICAgICAgICBpZighYWN0aXZlQ2hhbGxlbmdlKXtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0Q2hhbGxlbmdlc0NvbXBsZXRlZChjaGFsbGVuZ2VzQ29tcGxldGVkICsgMSlcclxuICAgICAgICBzZXRBY3RpdmVDaGFsbGVuZ2UobnVsbClcclxuXHJcbiAgICAgICAgY29uc3Qge2Ftb3VudH0gPSBhY3RpdmVDaGFsbGVuZ2U7XHJcblxyXG4gICAgICAgIGxldCBmaW5hbEV4cGVyaWVuY2UgPSBjdXJyZW50RXhwZXJpZW5jZXMgKyBhbW91bnQ7XHJcblxyXG4gICAgICAgIGlmKGZpbmFsRXhwZXJpZW5jZSA+IGV4cGVyaWVuY2VUb05leHRMZXZlbCl7XHJcbiAgICAgICAgICAgIHNldEN1cnJlbnRFeHBlcmllbmNlKGZpbmFsRXhwZXJpZW5jZSAtIGV4cGVyaWVuY2VUb05leHRMZXZlbClcclxuICAgICAgICAgICAgbGV2ZVVwKCk7XHJcblxyXG4gICAgICAgIH1lbHNlKFxyXG4gICAgICAgICAgICBzZXRDdXJyZW50RXhwZXJpZW5jZShmaW5hbEV4cGVyaWVuY2UpXHJcbiAgICAgICAgKVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxjaGFsbGVuZ2VDb250ZXh0LlByb3ZpZGVyIFxyXG4gICAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgICAgIGxldmVsLFxyXG4gICAgICAgICAgICBsZXZlVXAsXHJcbiAgICAgICAgICAgIHN0YXJ0TmV3Q2hhbGxlbmdlcyxcclxuICAgICAgICAgICAgcmVzZXRDaGFsbGVuZ2VzLFxyXG4gICAgICAgICAgICBjb21wbGV0ZUNoYWxsZW5nZSxcclxuICAgICAgICAgICAgZXhwZXJpZW5jZVRvTmV4dExldmVsLFxyXG4gICAgICAgICAgICBjdXJyZW50RXhwZXJpZW5jZXMsXHJcbiAgICAgICAgICAgIGNoYWxsZW5nZXNDb21wbGV0ZWQsXHJcbiAgICAgICAgICAgIGFjdGl2ZUNoYWxsZW5nZSxcclxuICAgICAgICB9fT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvY2hhbGxlbmdlQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxuXHJcbn1cclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsImNoYWxsZW5nZXMiLCJjaGFsbGVuZ2VDb250ZXh0IiwiQ2hhbGxlbmdlc1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJsZXZlbCIsInNldExldmVsIiwiY3VycmVudEV4cGVyaWVuY2VzIiwic2V0Q3VycmVudEV4cGVyaWVuY2UiLCJjaGFsbGVuZ2VzQ29tcGxldGVkIiwic2V0Q2hhbGxlbmdlc0NvbXBsZXRlZCIsImFjdGl2ZUNoYWxsZW5nZSIsInNldEFjdGl2ZUNoYWxsZW5nZSIsImV4cGVyaWVuY2VUb05leHRMZXZlbCIsIk1hdGgiLCJwb3ciLCJsZXZlVXAiLCJzdGFydE5ld0NoYWxsZW5nZXMiLCJyYW5kb21DaGFsbGVuZ2VJbmRleCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwiY2hhbGxlbmdlIiwicmVzZXRDaGFsbGVuZ2VzIiwiY29tcGxldGVDaGFsbGVuZ2UiLCJhbW91bnQiLCJmaW5hbEV4cGVyaWVuY2UiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/ChallengesContext.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/global.css */ \"./src/styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/ChallengesContext */ \"./src/context/ChallengesContext.tsx\");\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_context_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__.ChallengesProvider, {\n        __source: {\n            fileName: \"D:\\\\Programacao\\\\REACT\\\\projetos\\\\moveit-next\\\\src\\\\pages\\\\_app.tsx\",\n            lineNumber: 7,\n            columnNumber: 5\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {\n            ...pageProps,\n            __source: {\n                fileName: \"D:\\\\Programacao\\\\REACT\\\\projetos\\\\moveit-next\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            },\n            __self: this\n        })\n    }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUM2QjtBQUNvQztTQUV4REMsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxHQUFFQyxTQUFTLEVBQUMsQ0FBQyxFQUFFLENBQUM7SUFDeEMsTUFBTSxzRUFDSEgsMEVBQWtCOzs7Ozs7O3VGQUVoQkUsU0FBUztlQUFLQyxTQUFTOzs7Ozs7Ozs7QUFJOUIsQ0FBQztBQUVELGlFQUFlRixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW92ZWl0LW5leHQvLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbC5jc3MnO1xuaW1wb3J0IHsgQ2hhbGxlbmdlc1Byb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dC9DaGFsbGVuZ2VzQ29udGV4dCdcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPENoYWxsZW5nZXNQcm92aWRlcj5cbiAgICAgIFxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIFxuICAgIDwvQ2hhbGxlbmdlc1Byb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwibmFtZXMiOlsiQ2hhbGxlbmdlc1Byb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/global.css":
/*!*******************************!*\
  !*** ./src/styles/global.css ***!
  \*******************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "./challenges.json":
/*!*************************!*\
  !*** ./challenges.json ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"type":"body","description":"Estique um de seus braços com a palma da mão virada para frente e puxe os dedos para cima por 10 segundos por mão.","amount":80},{"type":"body","description":"Estique seu braço contra o peito e puxe-o utilizando o outro braço por 10 segundos por braço.","amount":60},{"type":"body","description":"Puxe seu pescoço com a ajuda da mão para a direita e para a esquerda, permanecendo na posição por alguns segundos.","amount":70},{"type":"body","description":"Com as duas mãos na parte de trás da cabeça, leve-a para baixo, alongando a parte de trás da região.","amount":60},{"type":"body","description":"Cruze as pernas e desça com as mãos esticadas em direção ao chão. Repita o movimento com a outra perna na frente.","amount":100},{"type":"body","description":"Sentado, abra as pernas e tente encostar as palmas das mãos no chão, repita 3 vezes por 5 segundos.","amount":80},{"type":"body","description":"Puxe o joelho de encontro ao peito e segure, troque de perna após 10 segundos.","amount":50},{"type":"body","description":"Sentado, cruze uma perna e incline seu tronco à frente, troque de perna após 10 segundos.","amount":80},{"type":"eye","description":"Sentado, feche os olhos e cubra-os com as palmas da mão durante 2 minutos, depois abra normalmente.","amount":90},{"type":"eye","description":"Em algum ambiente aberto, olhe o mais longe que puder em quatro direções por 3s, mexa apenas os olhos. Repita 3 vezes.","amount":140},{"type":"eye","description":"Usando os polegares, massage a área abaixo das sobrancelhas em movimentos circulares por 15 segundos.","amount":70},{"type":"body","description":"Em pé, gire a cintura o máximo que puder para a esquerda, segure por cinco segundos. Repita para a direita.","amount":90}]');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();