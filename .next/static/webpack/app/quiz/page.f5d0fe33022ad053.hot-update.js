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

/***/ "(app-client)/./components/QuestionCard/QuestionCard.tsx":
/*!**************************************************!*\
  !*** ./components/QuestionCard/QuestionCard.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ \"(app-client)/./components/QuestionCard/helpers.ts\");\n// Helpers\n\n\nconst QuestionCard = (param)=>{\n    let { currentQuestionIndex , question , answers , userAnswer , onClick , correctAnswer  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"hover:scale-105  duration-300\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-[20px] max-w-[400px]\",\n                dangerouslySetInnerHTML: {\n                    __html: question\n                }\n            }, void 0, false, {\n                fileName: \"D:\\\\Workspace\\\\next_workspace\\\\react-quiz-2023\\\\react-quiz-2023\\\\components\\\\QuestionCard\\\\QuestionCard.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center pt-8\",\n                children: answers.map((answer)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: ()=>onClick(answer, currentQuestionIndex),\n                        className: \"\".concat((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.getBGColor)(userAnswer, correctAnswer, answer), \" cursor-pointer flex items-center justify-center select-none font-bold min-h-[45px] max-w-[400] w-full my-2 rounded-[15px]\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"truncate\",\n                            dangerouslySetInnerHTML: {\n                                __html: answer\n                            }\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Workspace\\\\next_workspace\\\\react-quiz-2023\\\\react-quiz-2023\\\\components\\\\QuestionCard\\\\QuestionCard.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 13\n                        }, undefined)\n                    }, answer, false, {\n                        fileName: \"D:\\\\Workspace\\\\next_workspace\\\\react-quiz-2023\\\\react-quiz-2023\\\\components\\\\QuestionCard\\\\QuestionCard.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"D:\\\\Workspace\\\\next_workspace\\\\react-quiz-2023\\\\react-quiz-2023\\\\components\\\\QuestionCard\\\\QuestionCard.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Workspace\\\\next_workspace\\\\react-quiz-2023\\\\react-quiz-2023\\\\components\\\\QuestionCard\\\\QuestionCard.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_c = QuestionCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (QuestionCard);\nvar _c;\n$RefreshReg$(_c, \"QuestionCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9RdWVzdGlvbkNhcmQvUXVlc3Rpb25DYXJkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQSxVQUFVOztBQUM2QjtBQVd2QyxNQUFNQyxlQUFnQyxTQU9oQztRQVBpQyxFQUNyQ0MscUJBQW9CLEVBQ3BCQyxTQUFRLEVBQ1JDLFFBQU8sRUFDUEMsV0FBVSxFQUNWQyxRQUFPLEVBQ1BDLGNBQWEsRUFDZDtJQUNDLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUVELFdBQVU7Z0JBQTRCRSx5QkFBeUI7b0JBQUVDLFFBQVFUO2dCQUFTOzs7Ozs7MEJBQ3JGLDhEQUFDSztnQkFBSUMsV0FBVTswQkFDWkwsUUFBUVMsR0FBRyxDQUFDQyxDQUFBQSx1QkFDWCw4REFBQ047d0JBRUNGLFNBQVMsSUFBTUEsUUFBUVEsUUFBUVo7d0JBQy9CTyxXQUFXLEdBSVQsT0FKWVQsb0RBQVVBLENBQ3RCSyxZQUNBRSxlQUNBTyxTQUNBO2tDQUVGLDRFQUFDQzs0QkFBS04sV0FBVTs0QkFBV0UseUJBQXlCO2dDQUFFQyxRQUFRRTs0QkFBTzs7Ozs7O3VCQVJoRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjakI7S0E1Qk1iO0FBOEJOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUXVlc3Rpb25DYXJkL1F1ZXN0aW9uQ2FyZC50c3g/YWUxYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBIZWxwZXJzXHJcbmltcG9ydCB7IGdldEJHQ29sb3IgfSBmcm9tICcuL2hlbHBlcnMnO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBjdXJyZW50UXVlc3Rpb25JbmRleDogbnVtYmVyO1xyXG4gIHF1ZXN0aW9uOiBzdHJpbmc7XHJcbiAgYW5zd2Vyczogc3RyaW5nW107XHJcbiAgdXNlckFuc3dlcjogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gIGNvcnJlY3RBbnN3ZXI6IHN0cmluZztcclxuICBvbkNsaWNrOiAoYW5zd2VyOiBzdHJpbmcsIGN1cnJlbnRRdWVzdGlvbkluZGV4OiBudW1iZXIpID0+IHZvaWQ7XHJcbn07XHJcblxyXG5jb25zdCBRdWVzdGlvbkNhcmQ6IFJlYWN0LkZDPFByb3BzPiA9ICh7XHJcbiAgY3VycmVudFF1ZXN0aW9uSW5kZXgsXHJcbiAgcXVlc3Rpb24sXHJcbiAgYW5zd2VycyxcclxuICB1c2VyQW5zd2VyLFxyXG4gIG9uQ2xpY2ssXHJcbiAgY29ycmVjdEFuc3dlclxyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdob3ZlcjpzY2FsZS0xMDUgIGR1cmF0aW9uLTMwMCc+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1bMjBweF0gbWF4LXctWzQwMHB4XScgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBxdWVzdGlvbiB9fSAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgcHQtOCc+XHJcbiAgICAgICAge2Fuc3dlcnMubWFwKGFuc3dlciA9PiAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGtleT17YW5zd2VyfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKGFuc3dlciwgY3VycmVudFF1ZXN0aW9uSW5kZXgpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake2dldEJHQ29sb3IoXHJcbiAgICAgICAgICAgICAgdXNlckFuc3dlcixcclxuICAgICAgICAgICAgICBjb3JyZWN0QW5zd2VyLFxyXG4gICAgICAgICAgICAgIGFuc3dlclxyXG4gICAgICAgICAgICApfSBjdXJzb3ItcG9pbnRlciBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBzZWxlY3Qtbm9uZSBmb250LWJvbGQgbWluLWgtWzQ1cHhdIG1heC13LVs0MDBdIHctZnVsbCBteS0yIHJvdW5kZWQtWzE1cHhdYH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0cnVuY2F0ZScgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBhbnN3ZXIgfX0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBRdWVzdGlvbkNhcmQ7XHJcbiJdLCJuYW1lcyI6WyJnZXRCR0NvbG9yIiwiUXVlc3Rpb25DYXJkIiwiY3VycmVudFF1ZXN0aW9uSW5kZXgiLCJxdWVzdGlvbiIsImFuc3dlcnMiLCJ1c2VyQW5zd2VyIiwib25DbGljayIsImNvcnJlY3RBbnN3ZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJtYXAiLCJhbnN3ZXIiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./components/QuestionCard/QuestionCard.tsx\n"));

/***/ })

});