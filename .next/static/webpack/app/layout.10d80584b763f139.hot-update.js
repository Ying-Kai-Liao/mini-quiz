"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-client)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"92195018e567\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2dsb2JhbHMuY3NzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvZ2xvYmFscy5jc3M/ZTI2YSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjkyMTk1MDE4ZTU2N1wiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/globals.css\n"));

/***/ }),

/***/ "(app-client)/./components/navbar/UserMenu.tsx":
/*!****************************************!*\
  !*** ./components/navbar/UserMenu.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MenuItem */ \"(app-client)/./components/navbar/MenuItem.tsx\");\n/* __next_internal_client_entry_do_not_use__  auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst UserMenu = ()=>{\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleOpen = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        setIsOpen((value)=>!value);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row items-center gap-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    onClick: ()=>{},\n                    className: \"   hidden   md:block   text-sm    font-semibold    py-3    px-4    rounded-full    hover:bg-neutral-100    transition    cursor-pointer   \",\n                    children: \"返回\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Workspace\\\\next_workspace\\\\react-quiz-2023\\\\react-quiz-2023\\\\components\\\\navbar\\\\UserMenu.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Workspace\\\\next_workspace\\\\react-quiz-2023\\\\react-quiz-2023\\\\components\\\\navbar\\\\UserMenu.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"   absolute    rounded-xl    shadow-md   w-[80vw]   lg:w-4/5   md:w-3/4    sm:w-3/4   bg-white    overflow-hidden    right-0    top-12    text-sm   \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col cursor-pointer\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MenuItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                label: \"首頁\",\n                                onClick: ()=>router.push(\"/\")\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Workspace\\\\next_workspace\\\\react-quiz-2023\\\\react-quiz-2023\\\\components\\\\navbar\\\\UserMenu.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MenuItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                label: \"My Profile\",\n                                onClick: ()=>router.push(\"/\")\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Workspace\\\\next_workspace\\\\react-quiz-2023\\\\react-quiz-2023\\\\components\\\\navbar\\\\UserMenu.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MenuItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                label: \"My Reservations\",\n                                onClick: ()=>router.push(\"/\")\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Workspace\\\\next_workspace\\\\react-quiz-2023\\\\react-quiz-2023\\\\components\\\\navbar\\\\UserMenu.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MenuItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                label: \"My History\",\n                                onClick: ()=>router.push(\"/\")\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Workspace\\\\next_workspace\\\\react-quiz-2023\\\\react-quiz-2023\\\\components\\\\navbar\\\\UserMenu.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                                fileName: \"D:\\\\Workspace\\\\next_workspace\\\\react-quiz-2023\\\\react-quiz-2023\\\\components\\\\navbar\\\\UserMenu.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MenuItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                label: \"Logout\",\n                                onClick: ()=>{}\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Workspace\\\\next_workspace\\\\react-quiz-2023\\\\react-quiz-2023\\\\components\\\\navbar\\\\UserMenu.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Workspace\\\\next_workspace\\\\react-quiz-2023\\\\react-quiz-2023\\\\components\\\\navbar\\\\UserMenu.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Workspace\\\\next_workspace\\\\react-quiz-2023\\\\react-quiz-2023\\\\components\\\\navbar\\\\UserMenu.tsx\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Workspace\\\\next_workspace\\\\react-quiz-2023\\\\react-quiz-2023\\\\components\\\\navbar\\\\UserMenu.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_s(UserMenu, \"ugsF9XP9JpffVuUBcoL/jRa5GVQ=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = UserMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserMenu);\nvar _c;\n$RefreshReg$(_c, \"UserMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9uYXZiYXIvVXNlck1lbnUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUU4QztBQUVGO0FBRVY7QUFHbEMsTUFBTUksV0FBVyxJQUFNOztJQUNyQixNQUFNQyxTQUFTSCwwREFBU0E7SUFFeEIsTUFBTSxDQUFDSSxRQUFRQyxVQUFVLEdBQUdOLCtDQUFRQSxDQUFDLEtBQUs7SUFFMUMsTUFBTU8sYUFBYVIsa0RBQVdBLENBQUMsSUFBTTtRQUNuQ08sVUFBVSxDQUFDRSxRQUFVLENBQUNBO0lBQ3hCLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNEO29CQUNDRSxTQUFTLElBQU0sQ0FBQztvQkFDaEJELFdBQVU7OEJBWVg7Ozs7Ozs7Ozs7O1lBSUZMLHdCQUNDLDhEQUFDSTtnQkFDQ0MsV0FBVTswQkFlViw0RUFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ1g7OzBDQUNFLDhEQUFDUixpREFBUUE7Z0NBQ1BVLE9BQU07Z0NBQ05ELFNBQVMsSUFBTVAsT0FBT1MsSUFBSSxDQUFDOzs7Ozs7MENBRTdCLDhEQUFDWCxpREFBUUE7Z0NBQ1BVLE9BQU07Z0NBQ05ELFNBQVMsSUFBTVAsT0FBT1MsSUFBSSxDQUFDOzs7Ozs7MENBRTdCLDhEQUFDWCxpREFBUUE7Z0NBQ1BVLE9BQU07Z0NBQ05ELFNBQVMsSUFBTVAsT0FBT1MsSUFBSSxDQUFDOzs7Ozs7MENBRTdCLDhEQUFDWCxpREFBUUE7Z0NBQ1BVLE9BQU07Z0NBQ05ELFNBQVMsSUFBTVAsT0FBT1MsSUFBSSxDQUFDOzs7Ozs7MENBRTdCLDhEQUFDQzs7Ozs7MENBQ0QsOERBQUNaLGlEQUFRQTtnQ0FDUFUsT0FBTTtnQ0FDTkQsU0FBUyxJQUFNLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFsQztHQTVFTVI7O1FBQ1dGLHNEQUFTQTs7O0tBRHBCRTtBQThFTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL25hdmJhci9Vc2VyTWVudS50c3g/NzE4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcblxyXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQWlPdXRsaW5lTWVudSB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcblxyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSBcIi4vTWVudUl0ZW1cIjtcclxuXHJcblxyXG5jb25zdCBVc2VyTWVudSA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlT3BlbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldElzT3BlbigodmFsdWUpID0+ICF2YWx1ZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGdhcC0zXCI+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge319XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJcclxuICAgICAgICAgICAgaGlkZGVuXHJcbiAgICAgICAgICAgIG1kOmJsb2NrXHJcbiAgICAgICAgICAgIHRleHQtc20gXHJcbiAgICAgICAgICAgIGZvbnQtc2VtaWJvbGQgXHJcbiAgICAgICAgICAgIHB5LTMgXHJcbiAgICAgICAgICAgIHB4LTQgXHJcbiAgICAgICAgICAgIHJvdW5kZWQtZnVsbCBcclxuICAgICAgICAgICAgaG92ZXI6YmctbmV1dHJhbC0xMDAgXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24gXHJcbiAgICAgICAgICAgIGN1cnNvci1wb2ludGVyXHJcbiAgICAgICAgICBcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIOi/lOWbnlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge2lzT3BlbiAmJiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiXHJcbiAgICAgICAgICAgIGFic29sdXRlIFxyXG4gICAgICAgICAgICByb3VuZGVkLXhsIFxyXG4gICAgICAgICAgICBzaGFkb3ctbWRcclxuICAgICAgICAgICAgdy1bODB2d11cclxuICAgICAgICAgICAgbGc6dy00LzVcclxuICAgICAgICAgICAgbWQ6dy0zLzQgXHJcbiAgICAgICAgICAgIHNtOnctMy80XHJcbiAgICAgICAgICAgIGJnLXdoaXRlIFxyXG4gICAgICAgICAgICBvdmVyZmxvdy1oaWRkZW4gXHJcbiAgICAgICAgICAgIHJpZ2h0LTAgXHJcbiAgICAgICAgICAgIHRvcC0xMiBcclxuICAgICAgICAgICAgdGV4dC1zbVxyXG4gICAgICAgICAgXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwi6aaW6aCBXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvXCIpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIk15IFByb2ZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9cIil9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTXkgUmVzZXJ2YXRpb25zXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvXCIpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIk15IEhpc3RvcnlcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9cIil9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICA8TWVudUl0ZW1cclxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJMb2dvdXRcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7fX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJNZW51OyJdLCJuYW1lcyI6WyJ1c2VDYWxsYmFjayIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiTWVudUl0ZW0iLCJVc2VyTWVudSIsInJvdXRlciIsImlzT3BlbiIsInNldElzT3BlbiIsInRvZ2dsZU9wZW4iLCJ2YWx1ZSIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJsYWJlbCIsInB1c2giLCJociJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/navbar/UserMenu.tsx\n"));

/***/ })

});