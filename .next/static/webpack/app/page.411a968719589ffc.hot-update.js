"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./components/QuestionCard/QuestionCard.tsx":
/*!**************************************************!*\
  !*** ./components/QuestionCard/QuestionCard.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ \"(app-client)/./components/QuestionCard/helpers.ts\");\n// Helpers\n\n\nconst QuestionCard = (param)=>{\n    let { currentQuestionIndex , question , answers , userAnswer , onClick , correctAnswer  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-[20px] max-w-[400px]\",\n                dangerouslySetInnerHTML: {\n                    __html: question\n                }\n            }, void 0, false, {\n                fileName: \"D:\\\\Workspace\\\\next_workspace\\\\react-quiz-2023\\\\react-quiz-2023\\\\components\\\\QuestionCard\\\\QuestionCard.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center pt-8\",\n                children: answers.map((answer)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: ()=>onClick(answer, currentQuestionIndex),\n                        className: \"\".concat((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.getBGColor)(userAnswer, correctAnswer, answer), \" cursor-pointer flex items-center justify-center select-none font-bold min-h-[45px] max-w-[400] w-full my-2 rounded-[15px] hover:opacity-60 transition duration-300 delay-150 focus:ring \"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"truncate\",\n                            dangerouslySetInnerHTML: {\n                                __html: answer\n                            }\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Workspace\\\\next_workspace\\\\react-quiz-2023\\\\react-quiz-2023\\\\components\\\\QuestionCard\\\\QuestionCard.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 13\n                        }, undefined)\n                    }, answer, false, {\n                        fileName: \"D:\\\\Workspace\\\\next_workspace\\\\react-quiz-2023\\\\react-quiz-2023\\\\components\\\\QuestionCard\\\\QuestionCard.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"D:\\\\Workspace\\\\next_workspace\\\\react-quiz-2023\\\\react-quiz-2023\\\\components\\\\QuestionCard\\\\QuestionCard.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Workspace\\\\next_workspace\\\\react-quiz-2023\\\\react-quiz-2023\\\\components\\\\QuestionCard\\\\QuestionCard.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_c = QuestionCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (QuestionCard);\nvar _c;\n$RefreshReg$(_c, \"QuestionCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9RdWVzdGlvbkNhcmQvUXVlc3Rpb25DYXJkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQSxVQUFVOztBQUM2QjtBQVd2QyxNQUFNQyxlQUFnQyxTQU9oQztRQVBpQyxFQUNyQ0MscUJBQW9CLEVBQ3BCQyxTQUFRLEVBQ1JDLFFBQU8sRUFDUEMsV0FBVSxFQUNWQyxRQUFPLEVBQ1BDLGNBQWEsRUFDZDtJQUNDLHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNDO2dCQUFFQyxXQUFVO2dCQUE0QkMseUJBQXlCO29CQUFFQyxRQUFRVDtnQkFBUzs7Ozs7OzBCQUNyRiw4REFBQ0s7Z0JBQUlFLFdBQVU7MEJBQ1pOLFFBQVFTLEdBQUcsQ0FBQ0MsQ0FBQUEsdUJBQ1gsOERBQUNOO3dCQUVDRixTQUFTLElBQU1BLFFBQVFRLFFBQVFaO3dCQUMvQlEsV0FBVyxHQUlULE9BSllWLG9EQUFVQSxDQUN0QkssWUFDQUUsZUFDQU8sU0FDQTtrQ0FFRiw0RUFBQ0M7NEJBQUtMLFdBQVU7NEJBQVdDLHlCQUF5QjtnQ0FBRUMsUUFBUUU7NEJBQU87Ozs7Ozt1QkFSaEVBOzs7Ozs7Ozs7Ozs7Ozs7O0FBY2pCO0tBNUJNYjtBQThCTiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1F1ZXN0aW9uQ2FyZC9RdWVzdGlvbkNhcmQudHN4P2FlMWEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSGVscGVyc1xyXG5pbXBvcnQgeyBnZXRCR0NvbG9yIH0gZnJvbSAnLi9oZWxwZXJzJztcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgY3VycmVudFF1ZXN0aW9uSW5kZXg6IG51bWJlcjtcclxuICBxdWVzdGlvbjogc3RyaW5nO1xyXG4gIGFuc3dlcnM6IHN0cmluZ1tdO1xyXG4gIHVzZXJBbnN3ZXI6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICBjb3JyZWN0QW5zd2VyOiBzdHJpbmc7XHJcbiAgb25DbGljazogKGFuc3dlcjogc3RyaW5nLCBjdXJyZW50UXVlc3Rpb25JbmRleDogbnVtYmVyKSA9PiB2b2lkO1xyXG59O1xyXG5cclxuY29uc3QgUXVlc3Rpb25DYXJkOiBSZWFjdC5GQzxQcm9wcz4gPSAoe1xyXG4gIGN1cnJlbnRRdWVzdGlvbkluZGV4LFxyXG4gIHF1ZXN0aW9uLFxyXG4gIGFuc3dlcnMsXHJcbiAgdXNlckFuc3dlcixcclxuICBvbkNsaWNrLFxyXG4gIGNvcnJlY3RBbnN3ZXJcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8cCBjbGFzc05hbWU9J3RleHQtWzIwcHhdIG1heC13LVs0MDBweF0nIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcXVlc3Rpb24gfX0gLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHB0LTgnPlxyXG4gICAgICAgIHthbnN3ZXJzLm1hcChhbnN3ZXIgPT4gKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBrZXk9e2Fuc3dlcn1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DbGljayhhbnN3ZXIsIGN1cnJlbnRRdWVzdGlvbkluZGV4KX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtnZXRCR0NvbG9yKFxyXG4gICAgICAgICAgICAgIHVzZXJBbnN3ZXIsXHJcbiAgICAgICAgICAgICAgY29ycmVjdEFuc3dlcixcclxuICAgICAgICAgICAgICBhbnN3ZXJcclxuICAgICAgICAgICAgKX0gY3Vyc29yLXBvaW50ZXIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc2VsZWN0LW5vbmUgZm9udC1ib2xkIG1pbi1oLVs0NXB4XSBtYXgtdy1bNDAwXSB3LWZ1bGwgbXktMiByb3VuZGVkLVsxNXB4XSBob3ZlcjpvcGFjaXR5LTYwIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGRlbGF5LTE1MCBmb2N1czpyaW5nIGB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndHJ1bmNhdGUnIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogYW5zd2VyIH19IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUXVlc3Rpb25DYXJkO1xyXG4iXSwibmFtZXMiOlsiZ2V0QkdDb2xvciIsIlF1ZXN0aW9uQ2FyZCIsImN1cnJlbnRRdWVzdGlvbkluZGV4IiwicXVlc3Rpb24iLCJhbnN3ZXJzIiwidXNlckFuc3dlciIsIm9uQ2xpY2siLCJjb3JyZWN0QW5zd2VyIiwiZGl2IiwicCIsImNsYXNzTmFtZSIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwibWFwIiwiYW5zd2VyIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/QuestionCard/QuestionCard.tsx\n"));

/***/ })

});