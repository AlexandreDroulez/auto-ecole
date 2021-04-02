webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Navbar/styledComponents.js":
/*!***************************************************!*\
  !*** ./src/components/Navbar/styledComponents.js ***!
  \***************************************************/
/*! exports provided: AnimationOpen, AnimationClose, ContainerNavbar, ContainerLinksDesktop, ContainerLinksTablet, Logo, LinkForBurger, ContainerForWidth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AnimationOpen\", function() { return AnimationOpen; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AnimationClose\", function() { return AnimationClose; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContainerNavbar\", function() { return ContainerNavbar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContainerLinksDesktop\", function() { return ContainerLinksDesktop; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContainerLinksTablet\", function() { return ContainerLinksTablet; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Logo\", function() { return Logo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LinkForBurger\", function() { return LinkForBurger; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContainerForWidth\", function() { return ContainerForWidth; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/helper */ \"./styles/helper.js\");\n\n\nfunction _templateObject6() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n      display: flex;\\n      height: calc(100vh - 86px);\\n      width: 100%;\\n      height: ;\\n      position: absolute;\\n      \", \";\\n      \", \";\\n      transition: 1s;\\n      flex-direction: column;\\n      text-align: center;\\n      background: \", \";\\n  \"]);\n\n  _templateObject6 = function _templateObject6() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject5() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    display: none;\\n  \"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  animation: \", \" 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  animation: \", \" 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n 0% {\\n    left:0px\\n  }\\n\\n  100% {\\n    left: 1000px;\\n    display:none;\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n 0% {\\n    left:-1000px\\n  }\\n\\n  100% {\\n    left: 0px\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\nvar AnimationOpen = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"keyframes\"])(_templateObject());\nvar AnimationClose = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"keyframes\"])(_templateObject2());\nvar complexMixinAnimationLinkOn = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"css\"])(_templateObject3(), AnimationOpen);\nvar complexMixinAnimationLinkOff = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"css\"])(_templateObject4(), AnimationClose);\nvar ContainerNavbar = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].nav.withConfig({\n  displayName: \"styledComponents__ContainerNavbar\",\n  componentId: \"sc-1dhc1ha-0\"\n})([\"padding:1rem 2rem;background-color:\", \";\"], function (props) {\n  return props.theme.palette.darkBlue;\n});\nvar ContainerLinksDesktop = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"styledComponents__ContainerLinksDesktop\",\n  componentId: \"sc-1dhc1ha-1\"\n})([\"display:flex;align-items:center;\", \";\"], _styles_helper__WEBPACK_IMPORTED_MODULE_2__[\"deviceMedia\"].tablet(_templateObject5()));\nvar ContainerLinksTablet = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"styledComponents__ContainerLinksTablet\",\n  componentId: \"sc-1dhc1ha-2\"\n})([\"display:none;left:-1000px;\", \";\"], _styles_helper__WEBPACK_IMPORTED_MODULE_2__[\"deviceMedia\"].tablet(_templateObject6(), function (props) {\n  return props.show === true && complexMixinAnimationLinkOn;\n}, function (props) {\n  return props.show === false && complexMixinAnimationLinkOff;\n}, function (props) {\n  return props.theme.palette.lightGrey;\n}));\nvar Logo = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"styledComponents__Logo\",\n  componentId: \"sc-1dhc1ha-3\"\n})([\"display:flex;justify-content:center;flex-direction:column;font-size:2rem;color:\", \";font-weight:bold;\"], function (props) {\n  return props.theme.palette.lightGrey;\n});\nvar LinkForBurger = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].a.withConfig({\n  displayName: \"styledComponents__LinkForBurger\",\n  componentId: \"sc-1dhc1ha-4\"\n})([\"color:\", \";font-weight:bold;margin-top:1rem;\"], function (props) {\n  return props.theme.palette.darkBlue;\n});\nvar ContainerForWidth = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"styledComponents__ContainerForWidth\",\n  componentId: \"sc-1dhc1ha-5\"\n})([\"display:flex;justify-content:space-between;width:100%;\"]);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2YmFyL3N0eWxlZENvbXBvbmVudHMuanM/OTM5MSJdLCJuYW1lcyI6WyJBbmltYXRpb25PcGVuIiwia2V5ZnJhbWVzIiwiQW5pbWF0aW9uQ2xvc2UiLCJjb21wbGV4TWl4aW5BbmltYXRpb25MaW5rT24iLCJjc3MiLCJjb21wbGV4TWl4aW5BbmltYXRpb25MaW5rT2ZmIiwiQ29udGFpbmVyTmF2YmFyIiwic3R5bGVkIiwibmF2IiwicHJvcHMiLCJ0aGVtZSIsInBhbGV0dGUiLCJkYXJrQmx1ZSIsIkNvbnRhaW5lckxpbmtzRGVza3RvcCIsImRpdiIsImRldmljZU1lZGlhIiwidGFibGV0IiwiQ29udGFpbmVyTGlua3NUYWJsZXQiLCJzaG93IiwibGlnaHRHcmV5IiwiTG9nbyIsIkxpbmtGb3JCdXJnZXIiLCJhIiwiQ29udGFpbmVyRm9yV2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLElBQU1BLGFBQWEsR0FBR0MsbUVBQUgsbUJBQW5CO0FBVUEsSUFBTUMsY0FBYyxHQUFHRCxtRUFBSCxvQkFBcEI7QUFXUCxJQUFNRSwyQkFBMkIsR0FBR0MsNkRBQUgscUJBQ2xCSixhQURrQixDQUFqQztBQUlBLElBQU1LLDRCQUE0QixHQUFHRCw2REFBSCxxQkFDbkJGLGNBRG1CLENBQWxDO0FBSU8sSUFBTUksZUFBZSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGlEQUVOLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsT0FBWixDQUFvQkMsUUFBeEI7QUFBQSxDQUZDLENBQXJCO0FBS0EsSUFBTUMscUJBQXFCLEdBQUdOLHlEQUFNLENBQUNPLEdBQVY7QUFBQTtBQUFBO0FBQUEsOENBRzlCQywwREFBVyxDQUFDQyxNQUhrQixxQkFBM0I7QUFPQSxJQUFNQyxvQkFBb0IsR0FBR1YseURBQU0sQ0FBQ08sR0FBVjtBQUFBO0FBQUE7QUFBQSx3Q0FHN0JDLDBEQUFXLENBQUNDLE1BSGlCLHFCQVN6QixVQUFBUCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDUyxJQUFOLEtBQWUsSUFBZixJQUF1QmYsMkJBQTNCO0FBQUEsQ0FUb0IsRUFVekIsVUFBQU0sS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ1MsSUFBTixLQUFlLEtBQWYsSUFBd0JiLDRCQUE1QjtBQUFBLENBVm9CLEVBY2IsVUFBQUksS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxPQUFaLENBQW9CUSxTQUF4QjtBQUFBLENBZFEsRUFBMUI7QUFrQkEsSUFBTUMsSUFBSSxHQUFHYix5REFBTSxDQUFDTyxHQUFWO0FBQUE7QUFBQTtBQUFBLDhHQUtOLFVBQUFMLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsT0FBWixDQUFvQlEsU0FBeEI7QUFBQSxDQUxDLENBQVY7QUFRQSxJQUFNRSxhQUFhLEdBQUdkLHlEQUFNLENBQUNlLENBQVY7QUFBQTtBQUFBO0FBQUEscURBQ2YsVUFBQWIsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxPQUFaLENBQW9CQyxRQUF4QjtBQUFBLENBRFUsQ0FBbkI7QUFNQSxJQUFNVyxpQkFBaUIsR0FBR2hCLHlEQUFNLENBQUNPLEdBQVY7QUFBQTtBQUFBO0FBQUEsOERBQXZCIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvTmF2YmFyL3N0eWxlZENvbXBvbmVudHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkLCB7IGNzcywga2V5ZnJhbWVzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgZGV2aWNlTWVkaWEgfSBmcm9tICcuLi8uLi8uLi9zdHlsZXMvaGVscGVyJztcblxuZXhwb3J0IGNvbnN0IEFuaW1hdGlvbk9wZW4gPSBrZXlmcmFtZXNgXG4gMCUge1xuICAgIGxlZnQ6LTEwMDBweFxuICB9XG5cbiAgMTAwJSB7XG4gICAgbGVmdDogMHB4XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBBbmltYXRpb25DbG9zZSA9IGtleWZyYW1lc2BcbiAwJSB7XG4gICAgbGVmdDowcHhcbiAgfVxuXG4gIDEwMCUge1xuICAgIGxlZnQ6IDEwMDBweDtcbiAgICBkaXNwbGF5Om5vbmU7XG4gIH1cbmA7XG5cbmNvbnN0IGNvbXBsZXhNaXhpbkFuaW1hdGlvbkxpbmtPbiA9IGNzc2BcbiAgYW5pbWF0aW9uOiAke0FuaW1hdGlvbk9wZW59IDFzIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KSBib3RoO1xuYDtcblxuY29uc3QgY29tcGxleE1peGluQW5pbWF0aW9uTGlua09mZiA9IGNzc2BcbiAgYW5pbWF0aW9uOiAke0FuaW1hdGlvbkNsb3NlfSAxcyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCkgYm90aDtcbmA7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXJOYXZiYXIgPSBzdHlsZWQubmF2YFxuICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucGFsZXR0ZS5kYXJrQmx1ZX07XG5gO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyTGlua3NEZXNrdG9wID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgJHtkZXZpY2VNZWRpYS50YWJsZXRgXG4gICAgZGlzcGxheTogbm9uZTtcbiAgYH07XG5gO1xuZXhwb3J0IGNvbnN0IENvbnRhaW5lckxpbmtzVGFibGV0ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogbm9uZTtcbiAgbGVmdDogLTEwMDBweDtcbiAgJHtkZXZpY2VNZWRpYS50YWJsZXRgXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gODZweCk7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgJHtwcm9wcyA9PiBwcm9wcy5zaG93ID09PSB0cnVlICYmIGNvbXBsZXhNaXhpbkFuaW1hdGlvbkxpbmtPbn07XG4gICAgICAke3Byb3BzID0+IHByb3BzLnNob3cgPT09IGZhbHNlICYmIGNvbXBsZXhNaXhpbkFuaW1hdGlvbkxpbmtPZmZ9O1xuICAgICAgdHJhbnNpdGlvbjogMXM7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wYWxldHRlLmxpZ2h0R3JleX07XG4gIGB9O1xuYDtcblxuZXhwb3J0IGNvbnN0IExvZ28gPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZm9udC1zaXplOiAycmVtO1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wYWxldHRlLmxpZ2h0R3JleX07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuYDtcbmV4cG9ydCBjb25zdCBMaW5rRm9yQnVyZ2VyID0gc3R5bGVkLmFgXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbGV0dGUuZGFya0JsdWV9O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbmA7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXJGb3JXaWR0aCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Navbar/styledComponents.js\n");

/***/ })

})