webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Navbar/styledComponents.js":
/*!***************************************************!*\
  !*** ./src/components/Navbar/styledComponents.js ***!
  \***************************************************/
/*! exports provided: AnimationOpen, AnimationClose, ContainerNavbar, ContainerLinksDesktop, ContainerLinksTablet, Logo, LinkForBurger, ContainerForWidth, ContainerAllNavBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AnimationOpen\", function() { return AnimationOpen; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AnimationClose\", function() { return AnimationClose; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContainerNavbar\", function() { return ContainerNavbar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContainerLinksDesktop\", function() { return ContainerLinksDesktop; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContainerLinksTablet\", function() { return ContainerLinksTablet; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Logo\", function() { return Logo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LinkForBurger\", function() { return LinkForBurger; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContainerForWidth\", function() { return ContainerForWidth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContainerAllNavBar\", function() { return ContainerAllNavBar; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/helper */ \"./styles/helper.js\");\n\n\nfunction _templateObject6() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n      display: flex;\\n      height: calc(100vh - 86px);\\n      position: absolute;\\n      \", \";\\n      \", \";\\n      transition: 1s;\\n      flex-direction: column;\\n      text-align: center;\\n      background: \", \";\\n  \"]);\n\n  _templateObject6 = function _templateObject6() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject5() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    display: none;\\n  \"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  animation: \", \" 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  animation: \", \" 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n 0% {\\n    transform: translateX(0);\\n  }\\n\\n  100% {\\n    transform: translateX(500px);\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n 0% {\\n    transform: translateX(-1000px);\\n  }\\n\\n  100% {\\n    transform: translateX(0);\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\nvar AnimationOpen = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"keyframes\"])(_templateObject());\nvar AnimationClose = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"keyframes\"])(_templateObject2());\nvar complexMixinAnimationLinkOn = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"css\"])(_templateObject3(), AnimationOpen);\nvar complexMixinAnimationLinkOff = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"css\"])(_templateObject4(), AnimationClose);\nvar ContainerNavbar = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].nav.withConfig({\n  displayName: \"styledComponents__ContainerNavbar\",\n  componentId: \"sc-1dhc1ha-0\"\n})([\"padding:1rem 2rem;background-color:\", \";\"], function (props) {\n  return props.theme.palette.darkBlue;\n});\nvar ContainerLinksDesktop = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"styledComponents__ContainerLinksDesktop\",\n  componentId: \"sc-1dhc1ha-1\"\n})([\"display:flex;align-items:center;\", \";\"], _styles_helper__WEBPACK_IMPORTED_MODULE_2__[\"deviceMedia\"].tablet(_templateObject5()));\nvar ContainerLinksTablet = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"styledComponents__ContainerLinksTablet\",\n  componentId: \"sc-1dhc1ha-2\"\n})([\"display:none;\", \";\"], _styles_helper__WEBPACK_IMPORTED_MODULE_2__[\"deviceMedia\"].tablet(_templateObject6(), function (props) {\n  return props.show === true && complexMixinAnimationLinkOn;\n}, function (props) {\n  return props.show === false && complexMixinAnimationLinkOff;\n}, function (props) {\n  return props.theme.palette.lightGrey;\n}));\nvar Logo = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"styledComponents__Logo\",\n  componentId: \"sc-1dhc1ha-3\"\n})([\"display:flex;justify-content:center;flex-direction:column;font-size:2rem;color:\", \";font-weight:bold;\"], function (props) {\n  return props.theme.palette.lightGrey;\n});\nvar LinkForBurger = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].a.withConfig({\n  displayName: \"styledComponents__LinkForBurger\",\n  componentId: \"sc-1dhc1ha-4\"\n})([\"color:\", \";font-weight:bold;margin-top:1rem;\"], function (props) {\n  return props.theme.palette.darkBlue;\n});\nvar ContainerForWidth = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"styledComponents__ContainerForWidth\",\n  componentId: \"sc-1dhc1ha-5\"\n})([\"display:flex;justify-content:space-between;width:100%;\"]);\nvar ContainerAllNavBar = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"styledComponents__ContainerAllNavBar\",\n  componentId: \"sc-1dhc1ha-6\"\n})([\"width:100vw;overflow:hidden;\"]);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2YmFyL3N0eWxlZENvbXBvbmVudHMuanM/OTM5MSJdLCJuYW1lcyI6WyJBbmltYXRpb25PcGVuIiwia2V5ZnJhbWVzIiwiQW5pbWF0aW9uQ2xvc2UiLCJjb21wbGV4TWl4aW5BbmltYXRpb25MaW5rT24iLCJjc3MiLCJjb21wbGV4TWl4aW5BbmltYXRpb25MaW5rT2ZmIiwiQ29udGFpbmVyTmF2YmFyIiwic3R5bGVkIiwibmF2IiwicHJvcHMiLCJ0aGVtZSIsInBhbGV0dGUiLCJkYXJrQmx1ZSIsIkNvbnRhaW5lckxpbmtzRGVza3RvcCIsImRpdiIsImRldmljZU1lZGlhIiwidGFibGV0IiwiQ29udGFpbmVyTGlua3NUYWJsZXQiLCJzaG93IiwibGlnaHRHcmV5IiwiTG9nbyIsIkxpbmtGb3JCdXJnZXIiLCJhIiwiQ29udGFpbmVyRm9yV2lkdGgiLCJDb250YWluZXJBbGxOYXZCYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxJQUFNQSxhQUFhLEdBQUdDLG1FQUFILG1CQUFuQjtBQVVBLElBQU1DLGNBQWMsR0FBR0QsbUVBQUgsb0JBQXBCO0FBVVAsSUFBTUUsMkJBQTJCLEdBQUdDLDZEQUFILHFCQUNsQkosYUFEa0IsQ0FBakM7QUFJQSxJQUFNSyw0QkFBNEIsR0FBR0QsNkRBQUgscUJBQ25CRixjQURtQixDQUFsQztBQUlPLElBQU1JLGVBQWUsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxpREFFTixVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE9BQVosQ0FBb0JDLFFBQXhCO0FBQUEsQ0FGQyxDQUFyQjtBQUtBLElBQU1DLHFCQUFxQixHQUFHTix5REFBTSxDQUFDTyxHQUFWO0FBQUE7QUFBQTtBQUFBLDhDQUc5QkMsMERBQVcsQ0FBQ0MsTUFIa0IscUJBQTNCO0FBT0EsSUFBTUMsb0JBQW9CLEdBQUdWLHlEQUFNLENBQUNPLEdBQVY7QUFBQTtBQUFBO0FBQUEsMkJBRTdCQywwREFBVyxDQUFDQyxNQUZpQixxQkFNekIsVUFBQVAsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ1MsSUFBTixLQUFlLElBQWYsSUFBdUJmLDJCQUEzQjtBQUFBLENBTm9CLEVBT3pCLFVBQUFNLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNTLElBQU4sS0FBZSxLQUFmLElBQXdCYiw0QkFBNUI7QUFBQSxDQVBvQixFQVdiLFVBQUFJLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsT0FBWixDQUFvQlEsU0FBeEI7QUFBQSxDQVhRLEVBQTFCO0FBZUEsSUFBTUMsSUFBSSxHQUFHYix5REFBTSxDQUFDTyxHQUFWO0FBQUE7QUFBQTtBQUFBLDhHQUtOLFVBQUFMLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsT0FBWixDQUFvQlEsU0FBeEI7QUFBQSxDQUxDLENBQVY7QUFRQSxJQUFNRSxhQUFhLEdBQUdkLHlEQUFNLENBQUNlLENBQVY7QUFBQTtBQUFBO0FBQUEscURBQ2YsVUFBQWIsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxPQUFaLENBQW9CQyxRQUF4QjtBQUFBLENBRFUsQ0FBbkI7QUFNQSxJQUFNVyxpQkFBaUIsR0FBR2hCLHlEQUFNLENBQUNPLEdBQVY7QUFBQTtBQUFBO0FBQUEsOERBQXZCO0FBS0EsSUFBTVUsa0JBQWtCLEdBQUdqQix5REFBTSxDQUFDTyxHQUFWO0FBQUE7QUFBQTtBQUFBLG9DQUF4QiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL05hdmJhci9zdHlsZWRDb21wb25lbnRzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCwgeyBjc3MsIGtleWZyYW1lcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IGRldmljZU1lZGlhIH0gZnJvbSAnLi4vLi4vLi4vc3R5bGVzL2hlbHBlcic7XG5cbmV4cG9ydCBjb25zdCBBbmltYXRpb25PcGVuID0ga2V5ZnJhbWVzYFxuIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMDBweCk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBBbmltYXRpb25DbG9zZSA9IGtleWZyYW1lc2BcbiAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwMHB4KTtcbiAgfVxuYDtcblxuY29uc3QgY29tcGxleE1peGluQW5pbWF0aW9uTGlua09uID0gY3NzYFxuICBhbmltYXRpb246ICR7QW5pbWF0aW9uT3Blbn0gMXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpIGJvdGg7XG5gO1xuXG5jb25zdCBjb21wbGV4TWl4aW5BbmltYXRpb25MaW5rT2ZmID0gY3NzYFxuICBhbmltYXRpb246ICR7QW5pbWF0aW9uQ2xvc2V9IDFzIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KSBib3RoO1xuYDtcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lck5hdmJhciA9IHN0eWxlZC5uYXZgXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wYWxldHRlLmRhcmtCbHVlfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXJMaW5rc0Rlc2t0b3AgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAke2RldmljZU1lZGlhLnRhYmxldGBcbiAgICBkaXNwbGF5OiBub25lO1xuICBgfTtcbmA7XG5leHBvcnQgY29uc3QgQ29udGFpbmVyTGlua3NUYWJsZXQgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBub25lO1xuICAke2RldmljZU1lZGlhLnRhYmxldGBcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA4NnB4KTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICR7cHJvcHMgPT4gcHJvcHMuc2hvdyA9PT0gdHJ1ZSAmJiBjb21wbGV4TWl4aW5BbmltYXRpb25MaW5rT259O1xuICAgICAgJHtwcm9wcyA9PiBwcm9wcy5zaG93ID09PSBmYWxzZSAmJiBjb21wbGV4TWl4aW5BbmltYXRpb25MaW5rT2ZmfTtcbiAgICAgIHRyYW5zaXRpb246IDFzO1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucGFsZXR0ZS5saWdodEdyZXl9O1xuICBgfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBMb2dvID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucGFsZXR0ZS5saWdodEdyZXl9O1xuICBmb250LXdlaWdodDogYm9sZDtcbmA7XG5leHBvcnQgY29uc3QgTGlua0ZvckJ1cmdlciA9IHN0eWxlZC5hYFxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wYWxldHRlLmRhcmtCbHVlfTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDFyZW07XG5gO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyRm9yV2lkdGggPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlO1xuYDtcbmV4cG9ydCBjb25zdCBDb250YWluZXJBbGxOYXZCYXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwdnc7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Navbar/styledComponents.js\n");

/***/ })

})