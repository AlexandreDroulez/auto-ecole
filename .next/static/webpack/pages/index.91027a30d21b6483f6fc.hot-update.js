webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/ImageAndText/styledComponents.js":
/*!*********************************************************!*\
  !*** ./src/components/ImageAndText/styledComponents.js ***!
  \*********************************************************/
/*! exports provided: ContainerImageAndText, Image, Text, Title, ContainerText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContainerImageAndText\", function() { return ContainerImageAndText; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Image\", function() { return Image; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Text\", function() { return Text; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Title\", function() { return Title; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContainerText\", function() { return ContainerText; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/helper */ \"./styles/helper.js\");\n\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n        width: 100%;\\n  \"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n        width: 100%;\\n  \"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n        flex-direction: \", \";\\n  \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\nvar ContainerImageAndText = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"styledComponents__ContainerImageAndText\",\n  componentId: \"orrh1s-0\"\n})([\"display:flex;justify-content:space-between;flex-direction:\", \";\", \";\"], function (props) {\n  return props.flexDirectonDesktopReverse ? 'row-reverse' : 'row';\n}, _styles_helper__WEBPACK_IMPORTED_MODULE_2__[\"deviceMedia\"].tablet(_templateObject(), function (props) {\n  return props.flexDirectonPhoneReverse ? 'column-reverse' : 'column;';\n}));\nvar Image = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].img.withConfig({\n  displayName: \"styledComponents__Image\",\n  componentId: \"orrh1s-1\"\n})([\"width:50%;\", \";\"], _styles_helper__WEBPACK_IMPORTED_MODULE_2__[\"deviceMedia\"].tablet(_templateObject2()));\nvar Text = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"styledComponents__Text\",\n  componentId: \"orrh1s-2\"\n})([\"\", \";\"], _styles_helper__WEBPACK_IMPORTED_MODULE_2__[\"deviceMedia\"].tablet(_templateObject3()));\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h2.withConfig({\n  displayName: \"styledComponents__Title\",\n  componentId: \"orrh1s-3\"\n})([\"\"]);\nvar ContainerText = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"styledComponents__ContainerText\",\n  componentId: \"orrh1s-4\"\n})([\"width:100%;text-align:center;\"]);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSW1hZ2VBbmRUZXh0L3N0eWxlZENvbXBvbmVudHMuanM/N2YwMiJdLCJuYW1lcyI6WyJDb250YWluZXJJbWFnZUFuZFRleHQiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsImZsZXhEaXJlY3RvbkRlc2t0b3BSZXZlcnNlIiwiZGV2aWNlTWVkaWEiLCJ0YWJsZXQiLCJmbGV4RGlyZWN0b25QaG9uZVJldmVyc2UiLCJJbWFnZSIsImltZyIsIlRleHQiLCJUaXRsZSIsImgyIiwiQ29udGFpbmVyVGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sSUFBTUEscUJBQXFCLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsNkVBR2QsVUFBQUMsS0FBSztBQUFBLFNBQUtBLEtBQUssQ0FBQ0MsMEJBQU4sR0FBbUMsYUFBbkMsR0FBbUQsS0FBeEQ7QUFBQSxDQUhTLEVBSTlCQywwREFBVyxDQUFDQyxNQUprQixvQkFLUixVQUFBSCxLQUFLO0FBQUEsU0FBS0EsS0FBSyxDQUFDSSx3QkFBTixHQUFpQyxnQkFBakMsR0FBb0QsU0FBekQ7QUFBQSxDQUxHLEVBQTNCO0FBUUEsSUFBTUMsS0FBSyxHQUFHUCx5REFBTSxDQUFDUSxHQUFWO0FBQUE7QUFBQTtBQUFBLHdCQUVkSiwwREFBVyxDQUFDQyxNQUZFLHFCQUFYO0FBTUEsSUFBTUksSUFBSSxHQUFHVCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGNBQ2JHLDBEQUFXLENBQUNDLE1BREMscUJBQVY7QUFNQSxJQUFNSyxLQUFLLEdBQUdWLHlEQUFNLENBQUNXLEVBQVY7QUFBQTtBQUFBO0FBQUEsUUFBWDtBQUVBLElBQU1DLGFBQWEsR0FBR1oseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxxQ0FBbkIiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9JbWFnZUFuZFRleHQvc3R5bGVkQ29tcG9uZW50cy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgZGV2aWNlTWVkaWEgfSBmcm9tICcuLi8uLi8uLi9zdHlsZXMvaGVscGVyJztcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lckltYWdlQW5kVGV4dCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleC1kaXJlY3Rpb246ICR7cHJvcHMgPT4gKHByb3BzLmZsZXhEaXJlY3RvbkRlc2t0b3BSZXZlcnNlID8gJ3Jvdy1yZXZlcnNlJyA6ICdyb3cnKX07XG4gICR7ZGV2aWNlTWVkaWEudGFibGV0YFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogJHtwcm9wcyA9PiAocHJvcHMuZmxleERpcmVjdG9uUGhvbmVSZXZlcnNlID8gJ2NvbHVtbi1yZXZlcnNlJyA6ICdjb2x1bW47Jyl9O1xuICBgfTtcbmA7XG5leHBvcnQgY29uc3QgSW1hZ2UgPSBzdHlsZWQuaW1nYFxuICB3aWR0aDogNTAlO1xuICAke2RldmljZU1lZGlhLnRhYmxldGBcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gIGB9O1xuYDtcbmV4cG9ydCBjb25zdCBUZXh0ID0gc3R5bGVkLmRpdmBcbiAgJHtkZXZpY2VNZWRpYS50YWJsZXRgXG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICBgfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBUaXRsZSA9IHN0eWxlZC5oMmBgO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyVGV4dCA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ImageAndText/styledComponents.js\n");

/***/ })

})