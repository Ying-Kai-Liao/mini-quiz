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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"8315251c0bb0\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2dsb2JhbHMuY3NzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvZ2xvYmFscy5jc3M/ZTI2YSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjgzMTUyNTFjMGJiMFwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/globals.css\n"));

/***/ }),

/***/ "(app-client)/./components/navbar/UserMenu.tsx":
/*!****************************************!*\
  !*** ./components/navbar/UserMenu.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ \"(app-client)/../node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MenuItem */ \"(app-client)/./components/navbar/MenuItem.tsx\");\n/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Avatar */ \"(app-client)/./components/Avatar.tsx\");\n/* __next_internal_client_entry_do_not_use__  auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst UserMenu = (param)=>{\n    let { currentUser  } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const loginModal = useLoginModal();\n    const registerModal = useRegisterModal();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleOpen = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        setIsOpen((value)=>!value);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row items-center gap-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: ()=>{},\n                        className: \"   hidden   md:block   text-sm    font-semibold    py-3    px-4    rounded-full    hover:bg-neutral-100    transition    cursor-pointer   \",\n                        children: \"Asia Miracle\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Workspace\\\\next_workspace\\\\react-quiz-2023\\\\react-quiz-2023\\\\components\\\\navbar\\\\UserMenu.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: toggleOpen,\n                        className: \"   p-4   md:py-1   md:px-2   border-[1px]    border-neutral-200    flex    flex-row    items-center    gap-3    rounded-full    cursor-pointer    hover:shadow-md    transition   \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlineMenu, {}, void 0, false, {\n                                fileName: \"D:\\\\Workspace\\\\next_workspace\\\\react-quiz-2023\\\\react-quiz-2023\\\\components\\\\navbar\\\\UserMenu.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"hidden md:block\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Avatar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    src: currentUser === null || currentUser === void 0 ? void 0 : currentUser.image\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Workspace\\\\next_workspace\\\\react-quiz-2023\\\\react-quiz-2023\\\\components\\\\navbar\\\\UserMenu.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Workspace\\\\next_workspace\\\\react-quiz-2023\\\\react-quiz-2023\\\\components\\\\navbar\\\\UserMenu.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Workspace\\\\next_workspace\\\\react-quiz-2023\\\\react-quiz-2023\\\\components\\\\navbar\\\\UserMenu.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Workspace\\\\next_workspace\\\\react-quiz-2023\\\\react-quiz-2023\\\\components\\\\navbar\\\\UserMenu.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"   absolute    rounded-xl    shadow-md   w-[80vw]   lg:w-4/5   md:w-3/4    sm:w-3/4   bg-white    overflow-hidden    right-0    top-12    text-sm   \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col cursor-pointer\",\n                    children: currentUser ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MenuItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                label: \"首頁\",\n                                onClick: ()=>router.push(\"/\")\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Workspace\\\\next_workspace\\\\react-quiz-2023\\\\react-quiz-2023\\\\components\\\\navbar\\\\UserMenu.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MenuItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                label: \"My Profile\",\n                                onClick: ()=>router.push(\"/profile\")\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Workspace\\\\next_workspace\\\\react-quiz-2023\\\\react-quiz-2023\\\\components\\\\navbar\\\\UserMenu.tsx\",\n                                lineNumber: 93,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MenuItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                label: \"My Reservations\",\n                                onClick: ()=>router.push(\"/reservations\")\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Workspace\\\\next_workspace\\\\react-quiz-2023\\\\react-quiz-2023\\\\components\\\\navbar\\\\UserMenu.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MenuItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                label: \"My History\",\n                                onClick: ()=>router.push(\"/history\")\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Workspace\\\\next_workspace\\\\react-quiz-2023\\\\react-quiz-2023\\\\components\\\\navbar\\\\UserMenu.tsx\",\n                                lineNumber: 101,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                                fileName: \"D:\\\\Workspace\\\\next_workspace\\\\react-quiz-2023\\\\react-quiz-2023\\\\components\\\\navbar\\\\UserMenu.tsx\",\n                                lineNumber: 105,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MenuItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                label: \"Logout\",\n                                onClick: ()=>signOut()\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Workspace\\\\next_workspace\\\\react-quiz-2023\\\\react-quiz-2023\\\\components\\\\navbar\\\\UserMenu.tsx\",\n                                lineNumber: 106,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MenuItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                label: \"Login\",\n                                onClick: loginModal.onOpen\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Workspace\\\\next_workspace\\\\react-quiz-2023\\\\react-quiz-2023\\\\components\\\\navbar\\\\UserMenu.tsx\",\n                                lineNumber: 113,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MenuItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                label: \"Sign up\",\n                                onClick: registerModal.onOpen\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Workspace\\\\next_workspace\\\\react-quiz-2023\\\\react-quiz-2023\\\\components\\\\navbar\\\\UserMenu.tsx\",\n                                lineNumber: 117,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Workspace\\\\next_workspace\\\\react-quiz-2023\\\\react-quiz-2023\\\\components\\\\navbar\\\\UserMenu.tsx\",\n                    lineNumber: 86,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Workspace\\\\next_workspace\\\\react-quiz-2023\\\\react-quiz-2023\\\\components\\\\navbar\\\\UserMenu.tsx\",\n                lineNumber: 70,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Workspace\\\\next_workspace\\\\react-quiz-2023\\\\react-quiz-2023\\\\components\\\\navbar\\\\UserMenu.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n_s(UserMenu, \"FClCuHVjbCKH6vgY4mai997fCYg=\", true, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = UserMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserMenu);\nvar _c;\n$RefreshReg$(_c, \"UserMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9uYXZiYXIvVXNlck1lbnUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRThDO0FBQ0M7QUFDSDtBQUVWO0FBQ0g7QUFHL0IsTUFBTU0sV0FBVyxTQUVYO1FBRlksRUFDaEJDLFlBQVcsRUFDWjs7SUFDQyxNQUFNQyxTQUFTTCwwREFBU0E7SUFFeEIsTUFBTU0sYUFBYUM7SUFDbkIsTUFBTUMsZ0JBQWdCQztJQUV0QixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR2IsK0NBQVFBLENBQUMsS0FBSztJQUUxQyxNQUFNYyxhQUFhZixrREFBV0EsQ0FBQyxJQUFNO1FBQ25DYyxVQUFVLENBQUNFLFFBQVUsQ0FBQ0E7SUFDeEIsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUNDRSxTQUFTLElBQU0sQ0FBQzt3QkFDaEJELFdBQVU7a0NBWVg7Ozs7OztrQ0FHRCw4REFBQ0Q7d0JBQ0NFLFNBQVNKO3dCQUNURyxXQUFVOzswQ0FnQlYsOERBQUNoQix5REFBYUE7Ozs7OzBDQUNkLDhEQUFDZTtnQ0FBSUMsV0FBVTswQ0FDYiw0RUFBQ2IsK0NBQU1BO29DQUFDZSxLQUFLYix3QkFBQUEseUJBQUFBLEtBQUFBLElBQUFBLFlBQWFjLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSXBDUix3QkFDQyw4REFBQ0k7Z0JBQ0NDLFdBQVU7MEJBZVYsNEVBQUNEO29CQUFJQyxXQUFVOzhCQUNaWCw0QkFDQzs7MENBQ0UsOERBQUNILGlEQUFRQTtnQ0FDUGtCLE9BQU07Z0NBQ05ILFNBQVMsSUFBTVgsT0FBT2UsSUFBSSxDQUFDOzs7Ozs7MENBRTdCLDhEQUFDbkIsaURBQVFBO2dDQUNQa0IsT0FBTTtnQ0FDTkgsU0FBUyxJQUFNWCxPQUFPZSxJQUFJLENBQUM7Ozs7OzswQ0FFN0IsOERBQUNuQixpREFBUUE7Z0NBQ1BrQixPQUFNO2dDQUNOSCxTQUFTLElBQU1YLE9BQU9lLElBQUksQ0FBQzs7Ozs7OzBDQUU3Qiw4REFBQ25CLGlEQUFRQTtnQ0FDUGtCLE9BQU07Z0NBQ05ILFNBQVMsSUFBTVgsT0FBT2UsSUFBSSxDQUFDOzs7Ozs7MENBRTdCLDhEQUFDQzs7Ozs7MENBQ0QsOERBQUNwQixpREFBUUE7Z0NBQ1BrQixPQUFNO2dDQUNOSCxTQUFTLElBQU1NOzs7Ozs7O3FEQUluQjs7MENBQ0UsOERBQUNyQixpREFBUUE7Z0NBQ1BrQixPQUFNO2dDQUNOSCxTQUFTVixXQUFXaUIsTUFBTTs7Ozs7OzBDQUU1Qiw4REFBQ3RCLGlEQUFRQTtnQ0FDUGtCLE9BQU07Z0NBQ05ILFNBQVNSLGNBQWNlLE1BQU07Ozs7Ozs7b0NBR2xDOzs7Ozs7Ozs7Ozs7Ozs7OztBQU1iO0dBckhNcEI7O1FBR1dILHNEQUFTQTs7O0tBSHBCRztBQXVITiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL25hdmJhci9Vc2VyTWVudS50c3g/NzE4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcblxyXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQWlPdXRsaW5lTWVudSB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcblxyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSBcIi4vTWVudUl0ZW1cIjtcclxuaW1wb3J0IEF2YXRhciBmcm9tIFwiLi4vQXZhdGFyXCI7XHJcblxyXG5cclxuY29uc3QgVXNlck1lbnUgPSAoe1xyXG4gIGN1cnJlbnRVc2VyXHJcbn0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgbG9naW5Nb2RhbCA9IHVzZUxvZ2luTW9kYWwoKTtcclxuICBjb25zdCByZWdpc3Rlck1vZGFsID0gdXNlUmVnaXN0ZXJNb2RhbCgpO1xyXG5cclxuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCB0b2dnbGVPcGVuID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0SXNPcGVuKCh2YWx1ZSkgPT4gIXZhbHVlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIgZ2FwLTNcIj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7fX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cIlxyXG4gICAgICAgICAgICBoaWRkZW5cclxuICAgICAgICAgICAgbWQ6YmxvY2tcclxuICAgICAgICAgICAgdGV4dC1zbSBcclxuICAgICAgICAgICAgZm9udC1zZW1pYm9sZCBcclxuICAgICAgICAgICAgcHktMyBcclxuICAgICAgICAgICAgcHgtNCBcclxuICAgICAgICAgICAgcm91bmRlZC1mdWxsIFxyXG4gICAgICAgICAgICBob3ZlcjpiZy1uZXV0cmFsLTEwMCBcclxuICAgICAgICAgICAgdHJhbnNpdGlvbiBcclxuICAgICAgICAgICAgY3Vyc29yLXBvaW50ZXJcclxuICAgICAgICAgIFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQXNpYSBNaXJhY2xlXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgb25DbGljaz17dG9nZ2xlT3Blbn1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cIlxyXG4gICAgICAgICAgcC00XHJcbiAgICAgICAgICBtZDpweS0xXHJcbiAgICAgICAgICBtZDpweC0yXHJcbiAgICAgICAgICBib3JkZXItWzFweF0gXHJcbiAgICAgICAgICBib3JkZXItbmV1dHJhbC0yMDAgXHJcbiAgICAgICAgICBmbGV4IFxyXG4gICAgICAgICAgZmxleC1yb3cgXHJcbiAgICAgICAgICBpdGVtcy1jZW50ZXIgXHJcbiAgICAgICAgICBnYXAtMyBcclxuICAgICAgICAgIHJvdW5kZWQtZnVsbCBcclxuICAgICAgICAgIGN1cnNvci1wb2ludGVyIFxyXG4gICAgICAgICAgaG92ZXI6c2hhZG93LW1kIFxyXG4gICAgICAgICAgdHJhbnNpdGlvblxyXG4gICAgICAgICAgXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8QWlPdXRsaW5lTWVudSAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6YmxvY2tcIj5cclxuICAgICAgICAgICAgPEF2YXRhciBzcmM9e2N1cnJlbnRVc2VyPy5pbWFnZX0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge2lzT3BlbiAmJiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiXHJcbiAgICAgICAgICAgIGFic29sdXRlIFxyXG4gICAgICAgICAgICByb3VuZGVkLXhsIFxyXG4gICAgICAgICAgICBzaGFkb3ctbWRcclxuICAgICAgICAgICAgdy1bODB2d11cclxuICAgICAgICAgICAgbGc6dy00LzVcclxuICAgICAgICAgICAgbWQ6dy0zLzQgXHJcbiAgICAgICAgICAgIHNtOnctMy80XHJcbiAgICAgICAgICAgIGJnLXdoaXRlIFxyXG4gICAgICAgICAgICBvdmVyZmxvdy1oaWRkZW4gXHJcbiAgICAgICAgICAgIHJpZ2h0LTAgXHJcbiAgICAgICAgICAgIHRvcC0xMiBcclxuICAgICAgICAgICAgdGV4dC1zbVxyXG4gICAgICAgICAgXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgICAge2N1cnJlbnRVc2VyID8gKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8TWVudUl0ZW1cclxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCLpppbpoIFcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9cIil9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTXkgUHJvZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL3Byb2ZpbGVcIil9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTXkgUmVzZXJ2YXRpb25zXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvcmVzZXJ2YXRpb25zXCIpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIk15IEhpc3RvcnlcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9oaXN0b3J5XCIpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTG9nb3V0XCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2lnbk91dCgpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTG9naW5cIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtsb2dpbk1vZGFsLm9uT3Blbn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8TWVudUl0ZW1cclxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTaWduIHVwXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17cmVnaXN0ZXJNb2RhbC5vbk9wZW59XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyTWVudTsiXSwibmFtZXMiOlsidXNlQ2FsbGJhY2siLCJ1c2VTdGF0ZSIsIkFpT3V0bGluZU1lbnUiLCJ1c2VSb3V0ZXIiLCJNZW51SXRlbSIsIkF2YXRhciIsIlVzZXJNZW51IiwiY3VycmVudFVzZXIiLCJyb3V0ZXIiLCJsb2dpbk1vZGFsIiwidXNlTG9naW5Nb2RhbCIsInJlZ2lzdGVyTW9kYWwiLCJ1c2VSZWdpc3Rlck1vZGFsIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwidG9nZ2xlT3BlbiIsInZhbHVlIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsInNyYyIsImltYWdlIiwibGFiZWwiLCJwdXNoIiwiaHIiLCJzaWduT3V0Iiwib25PcGVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./components/navbar/UserMenu.tsx\n"));

/***/ })

});