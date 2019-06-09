exports.id = "app";
exports.modules = {

/***/ "./src/app/init-data.js":
/*!******************************!*\
  !*** ./src/app/init-data.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _topic = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module '@actions/topic'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\nvar _user = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module '@actions/user'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar _default = function _default(store, accessTokent) {\n  return new Promise(\n  /*#__PURE__*/\n  function () {\n    var _ref = _asyncToGenerator(\n    /*#__PURE__*/\n    regeneratorRuntime.mark(function _callee(resolve) {\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return (0, _topic.loadTopicList)({\n                id: 'recommend-topics',\n                filters: {\n                  variables: {\n                    types: 'parent',\n                    recommend: recommend\n                  }\n                }\n              });\n\n            case 2:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function (_x) {\n      return _ref.apply(this, arguments);\n    };\n  }());\n};\n\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./src/app/init-data.js?");

/***/ })

};