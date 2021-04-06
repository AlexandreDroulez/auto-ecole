webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/LinksWithHover/styledComponents.js":
/*!***********************************************************!*\
  !*** ./src/components/LinksWithHover/styledComponents.js ***!
  \***********************************************************/
/*! exports provided: LinkNavBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LinkNavBar\", function() { return LinkNavBar; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar AnimationLinkOn = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"keyframes\"])([\"0%{transform:translateX(-100px);}100%{transform:translateX(0px);}\"]);\nvar AnimationLinkOff = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"keyframes\"])([\"0%{transform:translateX(0);}100%{transform:translateX(100px);}\"]);\nvar complexMixinAnimationLinkOn = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])([\"animation:\", \" 0.5s cubic-bezier(0.25,0.46,0.45,0.94) both;\"], AnimationLinkOn);\nvar complexMixinAnimationLinkOff = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])([\"animation:\", \" 1s cubic-bezier(0.25,0.46,0.45,0.94) both;\"], AnimationLinkOff);\nvar LinkNavBar = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].a.withConfig({\n  displayName: \"styledComponents__LinkNavBar\",\n  componentId: \"sc-1hk70zy-0\"\n})([\"position:relative;overflow:hidden;margin-left:1rem;color:\", \";transition:0.4s;:before{\", \";\", \";\", \";}:hover{transform:scale(1.2);}\"], function (props) {\n  return props.theme.palette.lightGrey;\n}, function (props) {\n  return props.show === true || props.show === false && \" border: 1px solid \".concat(function (props) {\n    return props.theme.palette.lightGrey;\n  }, \";\\n  position: absolute;\\n  bottom: 0;\\n  content: '';\\n  width: 100%;\");\n}, function (props) {\n  return props.show === true && complexMixinAnimationLinkOn;\n}, function (props) {\n  return props.show === false && complexMixinAnimationLinkOff;\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGlua3NXaXRoSG92ZXIvc3R5bGVkQ29tcG9uZW50cy5qcz9jM2IzIl0sIm5hbWVzIjpbIkFuaW1hdGlvbkxpbmtPbiIsImtleWZyYW1lcyIsIkFuaW1hdGlvbkxpbmtPZmYiLCJjb21wbGV4TWl4aW5BbmltYXRpb25MaW5rT24iLCJjc3MiLCJjb21wbGV4TWl4aW5BbmltYXRpb25MaW5rT2ZmIiwiTGlua05hdkJhciIsInN0eWxlZCIsImEiLCJwcm9wcyIsInRoZW1lIiwicGFsZXR0ZSIsImxpZ2h0R3JleSIsInNob3ciXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsSUFBTUEsZUFBZSxHQUFHQyxtRUFBSCx1RUFBckI7QUFTQSxJQUFNQyxnQkFBZ0IsR0FBR0QsbUVBQUgsb0VBQXRCO0FBU0EsSUFBTUUsMkJBQTJCLEdBQUdDLDZEQUFILGtFQUNsQkosZUFEa0IsQ0FBakM7QUFJQSxJQUFNSyw0QkFBNEIsR0FBR0QsNkRBQUgsZ0VBQ25CRixnQkFEbUIsQ0FBbEM7QUFJTyxJQUFNSSxVQUFVLEdBQUdDLHlEQUFNLENBQUNDLENBQVY7QUFBQTtBQUFBO0FBQUEsNElBSVosVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxPQUFaLENBQW9CQyxTQUF4QjtBQUFBLENBSk8sRUFPakIsVUFBQUgsS0FBSztBQUFBLFNBQ0xBLEtBQUssQ0FBQ0ksSUFBTixLQUFlLElBQWYsSUFDQ0osS0FBSyxDQUFDSSxJQUFOLEtBQWUsS0FBZixpQ0FDdUIsVUFBQUosS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxPQUFaLENBQW9CQyxTQUF4QjtBQUFBLEdBRDVCLDJFQUZJO0FBQUEsQ0FQWSxFQWVqQixVQUFBSCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDSSxJQUFOLEtBQWUsSUFBZixJQUF1QlYsMkJBQTNCO0FBQUEsQ0FmWSxFQWdCakIsVUFBQU0sS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0ksSUFBTixLQUFlLEtBQWYsSUFBd0JSLDRCQUE1QjtBQUFBLENBaEJZLENBQWhCIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvTGlua3NXaXRoSG92ZXIvc3R5bGVkQ29tcG9uZW50cy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQsIHsgY3NzLCBrZXlmcmFtZXMgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IEFuaW1hdGlvbkxpbmtPbiA9IGtleWZyYW1lc2BcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICB9XG5gO1xuXG5jb25zdCBBbmltYXRpb25MaW5rT2ZmID0ga2V5ZnJhbWVzYFxuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDBweCk7XG4gIH1cbmA7XG5cbmNvbnN0IGNvbXBsZXhNaXhpbkFuaW1hdGlvbkxpbmtPbiA9IGNzc2BcbiAgYW5pbWF0aW9uOiAke0FuaW1hdGlvbkxpbmtPbn0gMC41cyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCkgYm90aDtcbmA7XG5cbmNvbnN0IGNvbXBsZXhNaXhpbkFuaW1hdGlvbkxpbmtPZmYgPSBjc3NgXG4gIGFuaW1hdGlvbjogJHtBbmltYXRpb25MaW5rT2ZmfSAxcyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCkgYm90aDtcbmA7XG5cbmV4cG9ydCBjb25zdCBMaW5rTmF2QmFyID0gc3R5bGVkLmFgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbGV0dGUubGlnaHRHcmV5fTtcbiAgdHJhbnNpdGlvbjogMC40cztcbiAgOmJlZm9yZSB7XG4gICAgJHtwcm9wcyA9PlxuICAgICAgcHJvcHMuc2hvdyA9PT0gdHJ1ZSB8fFxuICAgICAgKHByb3BzLnNob3cgPT09IGZhbHNlICYmXG4gICAgICAgIGAgYm9yZGVyOiAxcHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wYWxldHRlLmxpZ2h0R3JleX07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBjb250ZW50OiAnJztcbiAgd2lkdGg6IDEwMCU7YCl9O1xuICAgICR7cHJvcHMgPT4gcHJvcHMuc2hvdyA9PT0gdHJ1ZSAmJiBjb21wbGV4TWl4aW5BbmltYXRpb25MaW5rT259O1xuICAgICR7cHJvcHMgPT4gcHJvcHMuc2hvdyA9PT0gZmFsc2UgJiYgY29tcGxleE1peGluQW5pbWF0aW9uTGlua09mZn07XG4gIH1cbiAgOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gIH1cbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/LinksWithHover/styledComponents.js\n");

/***/ })

})