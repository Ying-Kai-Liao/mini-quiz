"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/quiz/page",{

/***/ "(app-client)/./components/QuestionCard/helpers.ts":
/*!********************************************!*\
  !*** ./components/QuestionCard/helpers.ts ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getBGColor\": function() { return /* binding */ getBGColor; }\n/* harmony export */ });\nconst getBGColor = (userAnswer, correctAnswer, answer)=>{\n    const isAnswerCorrect = userAnswer ? userAnswer === correctAnswer : undefined;\n    if (isAnswerCorrect === true && answer === userAnswer || isAnswerCorrect === false && answer === correctAnswer) return \"bg-[#55AC78] text-white\";\n    if (isAnswerCorrect === false && answer === userAnswer) return \"bg-[#AC5050] text-white\";\n    return \"bg-white text-[#]\";\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9RdWVzdGlvbkNhcmQvaGVscGVycy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEsYUFBYSxDQUFDQyxZQUFnQ0MsZUFBdUJDLFNBQTJCO0lBQzNHLE1BQU1DLGtCQUFrQkgsYUFBYUEsZUFBZUMsZ0JBQWdCRyxTQUFTO0lBRTdFLElBQUksb0JBQXFCLElBQUksSUFBSUYsV0FBV0YsY0FBZ0JHLG9CQUFvQixLQUFLLElBQUlELFdBQVdELGVBQ2xHLE9BQU87SUFFVCxJQUFJRSxvQkFBb0IsS0FBSyxJQUFJRCxXQUFXRixZQUFZLE9BQU87SUFFL0QsT0FBTztBQUNULEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9RdWVzdGlvbkNhcmQvaGVscGVycy50cz9lNzA3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBnZXRCR0NvbG9yID0gKHVzZXJBbnN3ZXI6IHN0cmluZyB8IHVuZGVmaW5lZCwgY29ycmVjdEFuc3dlcjogc3RyaW5nLCBhbnN3ZXI6IHN0cmluZyk6IHN0cmluZyA9PiB7XHJcbiAgY29uc3QgaXNBbnN3ZXJDb3JyZWN0ID0gdXNlckFuc3dlciA/IHVzZXJBbnN3ZXIgPT09IGNvcnJlY3RBbnN3ZXIgOiB1bmRlZmluZWQ7XHJcblxyXG4gIGlmICgoaXNBbnN3ZXJDb3JyZWN0ID09PSB0cnVlICYmIGFuc3dlciA9PT0gdXNlckFuc3dlcikgfHwgKGlzQW5zd2VyQ29ycmVjdCA9PT0gZmFsc2UgJiYgYW5zd2VyID09PSBjb3JyZWN0QW5zd2VyKSlcclxuICAgIHJldHVybiAnYmctWyM1NUFDNzhdIHRleHQtd2hpdGUnO1xyXG5cclxuICBpZiAoaXNBbnN3ZXJDb3JyZWN0ID09PSBmYWxzZSAmJiBhbnN3ZXIgPT09IHVzZXJBbnN3ZXIpIHJldHVybiAnYmctWyNBQzUwNTBdIHRleHQtd2hpdGUnO1xyXG5cclxuICByZXR1cm4gJ2JnLXdoaXRlIHRleHQtWyNdJztcclxufTsiXSwibmFtZXMiOlsiZ2V0QkdDb2xvciIsInVzZXJBbnN3ZXIiLCJjb3JyZWN0QW5zd2VyIiwiYW5zd2VyIiwiaXNBbnN3ZXJDb3JyZWN0IiwidW5kZWZpbmVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./components/QuestionCard/helpers.ts\n"));

/***/ })

});