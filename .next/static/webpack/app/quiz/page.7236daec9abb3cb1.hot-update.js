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

/***/ "(app-client)/./app/quiz/Quiz.tsx":
/*!***************************!*\
  !*** ./app/quiz/Quiz.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_QuestionCard_QuestionCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/QuestionCard/QuestionCard */ \"(app-client)/./components/QuestionCard/QuestionCard.tsx\");\n/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Button/Button */ \"(app-client)/./components/Button/Button.tsx\");\n/* __next_internal_client_entry_do_not_use__  auto */ \nvar _s = $RefreshSig$();\n\n\n// Components\n\n\nconst Quiz = (param)=>{\n    let { questions , totalQuestions  } = param;\n    _s();\n    const [currentQuestionIndex, setCurrentQuestionIndex] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);\n    const [score, setScore] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);\n    const [userAnswers, setUserAnswers] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({});\n    const isQuestionAnswered = userAnswers[currentQuestionIndex] ? true : false;\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleOnAnswerClick = (answer, currentQuestionIndex)=>{\n        // If user has already answered, do nothing\n        if (isQuestionAnswered) return;\n        // Check answer against correct answer\n        const isCorrect = questions[currentQuestionIndex].correct_answer === answer;\n        // Add score if answer is correct\n        if (isCorrect) setScore((prev)=>prev + 1);\n        // Save the answer in the object for user answers\n        setUserAnswers((prev)=>({\n                ...prev,\n                [currentQuestionIndex]: answer\n            }));\n    };\n    const handleChangeQuestion = (step)=>{\n        const newQuestionIndex = currentQuestionIndex + step;\n        if (newQuestionIndex < 0 || newQuestionIndex >= totalQuestions) return;\n        setCurrentQuestionIndex(newQuestionIndex);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-black text-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"p-8 font-bold text-[20px]\",\n                children: [\n                    \"分數: \",\n                    score\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Workspace\\\\next_workspace\\\\react-quiz-2023\\\\react-quiz-2023\\\\app\\\\quiz\\\\Quiz.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-black font-bold pb-2 text-[14px]\",\n                children: [\n                    \"當前第 \",\n                    currentQuestionIndex + 1,\n                    \" 題 共 \",\n                    totalQuestions,\n                    \" 題\"\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Workspace\\\\next_workspace\\\\react-quiz-2023\\\\react-quiz-2023\\\\app\\\\quiz\\\\Quiz.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_QuestionCard_QuestionCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                currentQuestionIndex: currentQuestionIndex,\n                question: questions[currentQuestionIndex].question,\n                answers: questions[currentQuestionIndex].answers,\n                userAnswer: userAnswers[currentQuestionIndex],\n                correctAnswer: questions[currentQuestionIndex].correct_answer,\n                onClick: handleOnAnswerClick\n            }, void 0, false, {\n                fileName: \"D:\\\\Workspace\\\\next_workspace\\\\react-quiz-2023\\\\react-quiz-2023\\\\app\\\\quiz\\\\Quiz.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between mt-16 gap-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        text: \"上一題\",\n                        onClick: ()=>handleChangeQuestion(-1)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Workspace\\\\next_workspace\\\\react-quiz-2023\\\\react-quiz-2023\\\\app\\\\quiz\\\\Quiz.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        text: currentQuestionIndex === totalQuestions - 1 ? \"結束\" : \"下一題\",\n                        onClick: currentQuestionIndex === totalQuestions - 1 ? ()=>router.push(\"/finish\") : ()=>handleChangeQuestion(1)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Workspace\\\\next_workspace\\\\react-quiz-2023\\\\react-quiz-2023\\\\app\\\\quiz\\\\Quiz.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Workspace\\\\next_workspace\\\\react-quiz-2023\\\\react-quiz-2023\\\\app\\\\quiz\\\\Quiz.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Workspace\\\\next_workspace\\\\react-quiz-2023\\\\react-quiz-2023\\\\app\\\\quiz\\\\Quiz.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Quiz, \"dB/RaZOIY5zUpkBLZ9ZUQod/bq4=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Quiz;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Quiz);\nvar _c;\n$RefreshReg$(_c, \"Quiz\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3F1aXovUXVpei50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUUwQjtBQUNrQjtBQUM1QyxhQUFhO0FBQ3FEO0FBQ2xCO0FBU2hELE1BQU1JLE9BQU8sU0FBMEM7UUFBekMsRUFBRUMsVUFBUyxFQUFFQyxlQUFjLEVBQVM7O0lBQ2hELE1BQU0sQ0FBQ0Msc0JBQXNCQyx3QkFBd0IsR0FBR1IscURBQWMsQ0FBQztJQUN2RSxNQUFNLENBQUNVLE9BQU9DLFNBQVMsR0FBR1gscURBQWMsQ0FBQztJQUN6QyxNQUFNLENBQUNZLGFBQWFDLGVBQWUsR0FBR2IscURBQWMsQ0FBeUIsQ0FBQztJQUU5RSxNQUFNYyxxQkFBcUJGLFdBQVcsQ0FBQ0wscUJBQXFCLEdBQUcsSUFBSSxHQUFHLEtBQUs7SUFFM0UsTUFBTVEsU0FBU2QsMERBQVNBO0lBRXhCLE1BQU1lLHNCQUFzQixDQUFDQyxRQUFnQlYsdUJBQWlDO1FBQzVFLDJDQUEyQztRQUMzQyxJQUFJTyxvQkFBb0I7UUFDeEIsc0NBQXNDO1FBQ3RDLE1BQU1JLFlBQVliLFNBQVMsQ0FBQ0UscUJBQXFCLENBQUNZLGNBQWMsS0FBS0Y7UUFDckUsaUNBQWlDO1FBQ2pDLElBQUlDLFdBQVdQLFNBQVNTLENBQUFBLE9BQVFBLE9BQU87UUFDdkMsaURBQWlEO1FBQ2pEUCxlQUFlTyxDQUFBQSxPQUFTO2dCQUFFLEdBQUdBLElBQUk7Z0JBQUUsQ0FBQ2IscUJBQXFCLEVBQUVVO1lBQU87SUFDcEU7SUFFQSxNQUFNSSx1QkFBdUIsQ0FBQ0MsT0FBaUI7UUFDN0MsTUFBTUMsbUJBQW1CaEIsdUJBQXVCZTtRQUNoRCxJQUFJQyxtQkFBbUIsS0FBS0Esb0JBQW9CakIsZ0JBQWdCO1FBQ2hFRSx3QkFBd0JlO0lBQzFCO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBRUQsV0FBVTs7b0JBQTRCO29CQUFLZjs7Ozs7OzswQkFDOUMsOERBQUNnQjtnQkFBRUQsV0FBVTs7b0JBQXdDO29CQUM5Q2xCLHVCQUF1QjtvQkFBRTtvQkFBTUQ7b0JBQWU7Ozs7Ozs7MEJBRXJELDhEQUFDSiw2RUFBWUE7Z0JBQ1hLLHNCQUFzQkE7Z0JBQ3RCb0IsVUFBVXRCLFNBQVMsQ0FBQ0UscUJBQXFCLENBQUNvQixRQUFRO2dCQUNsREMsU0FBU3ZCLFNBQVMsQ0FBQ0UscUJBQXFCLENBQUNxQixPQUFPO2dCQUNoREMsWUFBWWpCLFdBQVcsQ0FBQ0wscUJBQXFCO2dCQUM3Q3VCLGVBQWV6QixTQUFTLENBQUNFLHFCQUFxQixDQUFDWSxjQUFjO2dCQUM3RFksU0FBU2Y7Ozs7OzswQkFFWCw4REFBQ1E7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDdEIsaUVBQU1BO3dCQUFDNkIsTUFBSzt3QkFBTUQsU0FBUyxJQUFNVixxQkFBcUIsQ0FBQzs7Ozs7O2tDQUN4RCw4REFBQ2xCLGlFQUFNQTt3QkFDTDZCLE1BQU16Qix5QkFBeUJELGlCQUFpQixJQUFJLE9BQU8sS0FBSzt3QkFDaEV5QixTQUFTeEIseUJBQXlCRCxpQkFBaUIsSUFBSSxJQUFNUyxPQUFPa0IsSUFBSSxDQUFDLGFBQWEsSUFBTVoscUJBQXFCLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs3SDtHQWpETWpCOztRQU9XSCxzREFBU0E7OztLQVBwQkc7QUFtRE4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3F1aXovUXVpei50c3g/N2YyOCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xyXG4vLyBDb21wb25lbnRzXHJcbmltcG9ydCBRdWVzdGlvbkNhcmQgZnJvbSAnQC9jb21wb25lbnRzL1F1ZXN0aW9uQ2FyZC9RdWVzdGlvbkNhcmQnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0AvY29tcG9uZW50cy9CdXR0b24vQnV0dG9uJztcclxuLy8gVHlwZXNcclxuaW1wb3J0IHsgUXVlc3Rpb25zU3RhdGUgfSBmcm9tICdAL3R5cGVzL3F1aXonO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBxdWVzdGlvbnM6IFF1ZXN0aW9uc1N0YXRlO1xyXG4gIHRvdGFsUXVlc3Rpb25zOiBudW1iZXI7XHJcbn07XHJcblxyXG5jb25zdCBRdWl6ID0gKHsgcXVlc3Rpb25zLCB0b3RhbFF1ZXN0aW9ucyB9OiBQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtjdXJyZW50UXVlc3Rpb25JbmRleCwgc2V0Q3VycmVudFF1ZXN0aW9uSW5kZXhdID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3Njb3JlLCBzZXRTY29yZV0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbdXNlckFuc3dlcnMsIHNldFVzZXJBbnN3ZXJzXSA9IFJlYWN0LnVzZVN0YXRlPFJlY29yZDxudW1iZXIsIHN0cmluZz4+KHt9KTtcclxuXHJcbiAgY29uc3QgaXNRdWVzdGlvbkFuc3dlcmVkID0gdXNlckFuc3dlcnNbY3VycmVudFF1ZXN0aW9uSW5kZXhdID8gdHJ1ZSA6IGZhbHNlO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT25BbnN3ZXJDbGljayA9IChhbnN3ZXI6IHN0cmluZywgY3VycmVudFF1ZXN0aW9uSW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgLy8gSWYgdXNlciBoYXMgYWxyZWFkeSBhbnN3ZXJlZCwgZG8gbm90aGluZ1xyXG4gICAgaWYgKGlzUXVlc3Rpb25BbnN3ZXJlZCkgcmV0dXJuO1xyXG4gICAgLy8gQ2hlY2sgYW5zd2VyIGFnYWluc3QgY29ycmVjdCBhbnN3ZXJcclxuICAgIGNvbnN0IGlzQ29ycmVjdCA9IHF1ZXN0aW9uc1tjdXJyZW50UXVlc3Rpb25JbmRleF0uY29ycmVjdF9hbnN3ZXIgPT09IGFuc3dlcjtcclxuICAgIC8vIEFkZCBzY29yZSBpZiBhbnN3ZXIgaXMgY29ycmVjdFxyXG4gICAgaWYgKGlzQ29ycmVjdCkgc2V0U2NvcmUocHJldiA9PiBwcmV2ICsgMSk7XHJcbiAgICAvLyBTYXZlIHRoZSBhbnN3ZXIgaW4gdGhlIG9iamVjdCBmb3IgdXNlciBhbnN3ZXJzXHJcbiAgICBzZXRVc2VyQW5zd2VycyhwcmV2ID0+ICh7IC4uLnByZXYsIFtjdXJyZW50UXVlc3Rpb25JbmRleF06IGFuc3dlciB9KSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlUXVlc3Rpb24gPSAoc3RlcDogbnVtYmVyKSA9PiB7XHJcbiAgICBjb25zdCBuZXdRdWVzdGlvbkluZGV4ID0gY3VycmVudFF1ZXN0aW9uSW5kZXggKyBzdGVwO1xyXG4gICAgaWYgKG5ld1F1ZXN0aW9uSW5kZXggPCAwIHx8IG5ld1F1ZXN0aW9uSW5kZXggPj0gdG90YWxRdWVzdGlvbnMpIHJldHVybjtcclxuICAgIHNldEN1cnJlbnRRdWVzdGlvbkluZGV4KG5ld1F1ZXN0aW9uSW5kZXgpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1ibGFjayB0ZXh0LWNlbnRlcic+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT0ncC04IGZvbnQtYm9sZCB0ZXh0LVsyMHB4XSc+5YiG5pW4OiB7c2NvcmV9PC9wPlxyXG4gICAgICA8cCBjbGFzc05hbWU9J3RleHQtYmxhY2sgZm9udC1ib2xkIHBiLTIgdGV4dC1bMTRweF0nPlxyXG4gICAgICAgIOeVtuWJjeesrCB7Y3VycmVudFF1ZXN0aW9uSW5kZXggKyAxfSDpoYwg5YWxIHt0b3RhbFF1ZXN0aW9uc30g6aGMXHJcbiAgICAgIDwvcD5cclxuICAgICAgPFF1ZXN0aW9uQ2FyZFxyXG4gICAgICAgIGN1cnJlbnRRdWVzdGlvbkluZGV4PXtjdXJyZW50UXVlc3Rpb25JbmRleH1cclxuICAgICAgICBxdWVzdGlvbj17cXVlc3Rpb25zW2N1cnJlbnRRdWVzdGlvbkluZGV4XS5xdWVzdGlvbn1cclxuICAgICAgICBhbnN3ZXJzPXtxdWVzdGlvbnNbY3VycmVudFF1ZXN0aW9uSW5kZXhdLmFuc3dlcnN9XHJcbiAgICAgICAgdXNlckFuc3dlcj17dXNlckFuc3dlcnNbY3VycmVudFF1ZXN0aW9uSW5kZXhdfVxyXG4gICAgICAgIGNvcnJlY3RBbnN3ZXI9e3F1ZXN0aW9uc1tjdXJyZW50UXVlc3Rpb25JbmRleF0uY29ycmVjdF9hbnN3ZXJ9XHJcbiAgICAgICAgb25DbGljaz17aGFuZGxlT25BbnN3ZXJDbGlja31cclxuICAgICAgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1iZXR3ZWVuIG10LTE2IGdhcC02Jz5cclxuICAgICAgICA8QnV0dG9uIHRleHQ9J+S4iuS4gOmhjCcgb25DbGljaz17KCkgPT4gaGFuZGxlQ2hhbmdlUXVlc3Rpb24oLTEpfSAvPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIHRleHQ9e2N1cnJlbnRRdWVzdGlvbkluZGV4ID09PSB0b3RhbFF1ZXN0aW9ucyAtIDEgPyAn57WQ5p2fJyA6ICfkuIvkuIDpoYwnfVxyXG4gICAgICAgICAgb25DbGljaz17Y3VycmVudFF1ZXN0aW9uSW5kZXggPT09IHRvdGFsUXVlc3Rpb25zIC0gMSA/ICgpID0+IHJvdXRlci5wdXNoKCcvZmluaXNoJykgOiAoKSA9PiBoYW5kbGVDaGFuZ2VRdWVzdGlvbigxKX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBRdWl6O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSb3V0ZXIiLCJRdWVzdGlvbkNhcmQiLCJCdXR0b24iLCJRdWl6IiwicXVlc3Rpb25zIiwidG90YWxRdWVzdGlvbnMiLCJjdXJyZW50UXVlc3Rpb25JbmRleCIsInNldEN1cnJlbnRRdWVzdGlvbkluZGV4IiwidXNlU3RhdGUiLCJzY29yZSIsInNldFNjb3JlIiwidXNlckFuc3dlcnMiLCJzZXRVc2VyQW5zd2VycyIsImlzUXVlc3Rpb25BbnN3ZXJlZCIsInJvdXRlciIsImhhbmRsZU9uQW5zd2VyQ2xpY2siLCJhbnN3ZXIiLCJpc0NvcnJlY3QiLCJjb3JyZWN0X2Fuc3dlciIsInByZXYiLCJoYW5kbGVDaGFuZ2VRdWVzdGlvbiIsInN0ZXAiLCJuZXdRdWVzdGlvbkluZGV4IiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsInF1ZXN0aW9uIiwiYW5zd2VycyIsInVzZXJBbnN3ZXIiLCJjb3JyZWN0QW5zd2VyIiwib25DbGljayIsInRleHQiLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/quiz/Quiz.tsx\n"));

/***/ })

});