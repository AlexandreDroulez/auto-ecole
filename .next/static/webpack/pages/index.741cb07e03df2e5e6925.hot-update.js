webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Navbar/styledComponents.js":
/*!***************************************************!*\
  !*** ./src/components/Navbar/styledComponents.js ***!
  \***************************************************/
/*! exports provided: ContainerNavbar, ContainerLinksDesktop, ContainerLinksTablet, Logo, LinkForBurger, ContainerForWidth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContainerNavbar\", function() { return ContainerNavbar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContainerLinksDesktop\", function() { return ContainerLinksDesktop; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContainerLinksTablet\", function() { return ContainerLinksTablet; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Logo\", function() { return Logo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LinkForBurger\", function() { return LinkForBurger; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContainerForWidth\", function() { return ContainerForWidth; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/helper */ \"./styles/helper.js\");\n\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\nleft: \", \";\\n  \"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n      display: flex;\\n      border-bottom-left-radius: 20px;\\n      border-bottom-right-radius: 20px;\\n      width: 100%;\\n      transition: 1s;\\n      position: absolute;\\n      left: \", \";\\n      transition: 1s;\\n      flex-direction: column;\\n      text-align: center;\\n      background: \", \";\\n  \"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    display: none;\\n  \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\nvar ContainerNavbar = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].nav.withConfig({\n  displayName: \"styledComponents__ContainerNavbar\",\n  componentId: \"sc-1dhc1ha-0\"\n})([\"padding:1rem 2rem;background-color:\", \";\"], function (props) {\n  return props.theme.palette.darkBlue;\n});\nvar ContainerLinksDesktop = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"styledComponents__ContainerLinksDesktop\",\n  componentId: \"sc-1dhc1ha-1\"\n})([\"display:flex;align-items:center;\", \";\"], _styles_helper__WEBPACK_IMPORTED_MODULE_2__[\"deviceMedia\"].tablet(_templateObject()));\nvar ContainerLinksTablet = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"styledComponents__ContainerLinksTablet\",\n  componentId: \"sc-1dhc1ha-2\"\n})([\"display:none;\", \";\", \";\"], _styles_helper__WEBPACK_IMPORTED_MODULE_2__[\"deviceMedia\"].tablet(_templateObject2(), function (props) {\n  return props.show === true ? '0px' : '-1000px';\n}, function (props) {\n  return props.theme.palette.lightGrey;\n}), _styles_helper__WEBPACK_IMPORTED_MODULE_2__[\"deviceMedia\"].phone(_templateObject3(), function (props) {\n  return props.show === true ? '0px' : '-600px';\n}));\nvar Logo = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"styledComponents__Logo\",\n  componentId: \"sc-1dhc1ha-3\"\n})([\"display:flex;justify-content:center;flex-direction:column;font-size:2rem;color:\", \";font-weight:bold;transition:1s;cursor:pointer;:hover{transform:scale(1.2);}\"], function (props) {\n  return props.theme.palette.lightGrey;\n});\nvar LinkForBurger = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].a.withConfig({\n  displayName: \"styledComponents__LinkForBurger\",\n  componentId: \"sc-1dhc1ha-4\"\n})([\"color:\", \";font-weight:bold;margin-top:1rem;\"], function (props) {\n  return props.theme.palette.darkBlue;\n});\nvar ContainerForWidth = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"styledComponents__ContainerForWidth\",\n  componentId: \"sc-1dhc1ha-5\"\n})([\"display:flex;justify-content:space-between;width:100%;\"]);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2YmFyL3N0eWxlZENvbXBvbmVudHMuanM/OTM5MSJdLCJuYW1lcyI6WyJDb250YWluZXJOYXZiYXIiLCJzdHlsZWQiLCJuYXYiLCJwcm9wcyIsInRoZW1lIiwicGFsZXR0ZSIsImRhcmtCbHVlIiwiQ29udGFpbmVyTGlua3NEZXNrdG9wIiwiZGl2IiwiZGV2aWNlTWVkaWEiLCJ0YWJsZXQiLCJDb250YWluZXJMaW5rc1RhYmxldCIsInNob3ciLCJsaWdodEdyZXkiLCJwaG9uZSIsIkxvZ28iLCJMaW5rRm9yQnVyZ2VyIiwiYSIsIkNvbnRhaW5lckZvcldpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sSUFBTUEsZUFBZSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGlEQUVOLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsT0FBWixDQUFvQkMsUUFBeEI7QUFBQSxDQUZDLENBQXJCO0FBS0EsSUFBTUMscUJBQXFCLEdBQUdOLHlEQUFNLENBQUNPLEdBQVY7QUFBQTtBQUFBO0FBQUEsOENBSTlCQywwREFBVyxDQUFDQyxNQUprQixvQkFBM0I7QUFRQSxJQUFNQyxvQkFBb0IsR0FBR1YseURBQU0sQ0FBQ08sR0FBVjtBQUFBO0FBQUE7QUFBQSxnQ0FFN0JDLDBEQUFXLENBQUNDLE1BRmlCLHFCQVNuQixVQUFBUCxLQUFLO0FBQUEsU0FBS0EsS0FBSyxDQUFDUyxJQUFOLEtBQWUsSUFBZixHQUFzQixLQUF0QixHQUE4QixTQUFuQztBQUFBLENBVGMsRUFhYixVQUFBVCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE9BQVosQ0FBb0JRLFNBQXhCO0FBQUEsQ0FiUSxHQWU3QkosMERBQVcsQ0FBQ0ssS0FmaUIscUJBZ0J6QixVQUFBWCxLQUFLO0FBQUEsU0FBS0EsS0FBSyxDQUFDUyxJQUFOLEtBQWUsSUFBZixHQUFzQixLQUF0QixHQUE4QixRQUFuQztBQUFBLENBaEJvQixFQUExQjtBQW9CQSxJQUFNRyxJQUFJLEdBQUdkLHlEQUFNLENBQUNPLEdBQVY7QUFBQTtBQUFBO0FBQUEsd0tBS04sVUFBQUwsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxPQUFaLENBQW9CUSxTQUF4QjtBQUFBLENBTEMsQ0FBVjtBQWFBLElBQU1HLGFBQWEsR0FBR2YseURBQU0sQ0FBQ2dCLENBQVY7QUFBQTtBQUFBO0FBQUEscURBQ2YsVUFBQWQsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxPQUFaLENBQW9CQyxRQUF4QjtBQUFBLENBRFUsQ0FBbkI7QUFNQSxJQUFNWSxpQkFBaUIsR0FBR2pCLHlEQUFNLENBQUNPLEdBQVY7QUFBQTtBQUFBO0FBQUEsOERBQXZCIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvTmF2YmFyL3N0eWxlZENvbXBvbmVudHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IGRldmljZU1lZGlhIH0gZnJvbSAnLi4vLi4vLi4vc3R5bGVzL2hlbHBlcic7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXJOYXZiYXIgPSBzdHlsZWQubmF2YFxuICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucGFsZXR0ZS5kYXJrQmx1ZX07XG5gO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyTGlua3NEZXNrdG9wID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAke2RldmljZU1lZGlhLnRhYmxldGBcbiAgICBkaXNwbGF5OiBub25lO1xuICBgfTtcbmA7XG5leHBvcnQgY29uc3QgQ29udGFpbmVyTGlua3NUYWJsZXQgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBub25lO1xuICAke2RldmljZU1lZGlhLnRhYmxldGBcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHRyYW5zaXRpb246IDFzO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogJHtwcm9wcyA9PiAocHJvcHMuc2hvdyA9PT0gdHJ1ZSA/ICcwcHgnIDogJy0xMDAwcHgnKX07XG4gICAgICB0cmFuc2l0aW9uOiAxcztcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbGV0dGUubGlnaHRHcmV5fTtcbiAgYH07XG4gICR7ZGV2aWNlTWVkaWEucGhvbmVgXG5sZWZ0OiAke3Byb3BzID0+IChwcm9wcy5zaG93ID09PSB0cnVlID8gJzBweCcgOiAnLTYwMHB4Jyl9O1xuICBgfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBMb2dvID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucGFsZXR0ZS5saWdodEdyZXl9O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdHJhbnNpdGlvbjogMXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gIH1cbmA7XG5leHBvcnQgY29uc3QgTGlua0ZvckJ1cmdlciA9IHN0eWxlZC5hYFxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wYWxldHRlLmRhcmtCbHVlfTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDFyZW07XG5gO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyRm9yV2lkdGggPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlO1xuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Navbar/styledComponents.js\n");

/***/ })

})