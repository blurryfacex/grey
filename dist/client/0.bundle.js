(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./config/index.js":
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var config = {
  debug: false,
  name: 'b&b',
  contactEmail: '***@163.com',
  ICPNumber: '',
  port: 4000,
  domainName: 'http://localhost:4000',
  authCookieName: 'b_b',
  classScopedName: '[hash.base64:8]',
  publicPath: '//localhost:4000',
  APIDomainName: 'https://api.xiapduyu.com',
  graphqlUrl: 'https://www.xiaoduyu.com/graphql',
  head: "\n    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0\">\n    <link rel=\"apple-touch-icon\" href=\"//www.xiaoduyu.com/icon-512x512.png\">\n    <meta content=\"yes\" name=\"apple-touch-fullscreen\">\n    <meta content=\"yes\" name=\"apple-mobile-web-app-capable\">\n    <meta data-react-helmet=\"true\" name=\"apple-itunes-app\" content=\"app-id=1261181004\">\n    <script async src=\"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script>\n  "
};
module.exports = config;

/***/ }),

/***/ "./src/app/common/parse-url.js":
/*!*************************************!*\
  !*** ./src/app/common/parse-url.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var parseUrl = function parseUrl(search) {
  var paramPart = search.substr(1).split('&');
  return paramPart.reduce(function (res, item) {
    if (item) {
      var parts = item.split('=');
      res[parts[0]] = parts[1] || '';
    }

    return res;
  }, {});
};

var _default = parseUrl;
exports["default"] = _default;

/***/ }),

/***/ "./src/app/components/meta/index.js":
/*!******************************************!*\
  !*** ./src/app/components/meta/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/_react@16.8.6@react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.7.2@prop-types/index.js"));

var _reactMetaTags = _interopRequireWildcard(__webpack_require__(/*! react-meta-tags */ "./node_modules/_react-meta-tags@0.7.4@react-meta-tags/lib/index.js"));

var _config = __webpack_require__(/*! @config */ "./config/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Meta =
/*#__PURE__*/
function (_Component) {
  _inherits(Meta, _Component);

  function Meta(props) {
    _classCallCheck(this, Meta);

    return _possibleConstructorReturn(this, _getPrototypeOf(Meta).call(this, props));
  }

  _createClass(Meta, [{
    key: "render",
    value: function render() {
      var title = this.props.title;
      var _title = '';
      _title += title || _config.name;
      if (title) _title += " - ".concat(_config.name);
      return _react["default"].createElement(_react.Fragment, null, _react["default"].createElement(_reactMetaTags.ReactTitle, {
        title: _title
      }), this.props.children ? _react["default"].createElement(_reactMetaTags["default"], null, this.props.children) : null);
    }
  }]);

  return Meta;
}(_react.Component);

exports["default"] = Meta;
Meta.propTypes = {
  title: _propTypes["default"].string,
  children: _propTypes["default"].any
};

/***/ }),

/***/ "./src/app/components/shell.js":
/*!*************************************!*\
  !*** ./src/app/components/shell.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/_react@16.8.6@react/index.js"));

var _redux = __webpack_require__(/*! redux */ "./node_modules/_redux@4.0.1@redux/es/redux.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/_react-redux@6.0.1@react-redux/es/index.js");

var _parseUrl = _interopRequireDefault(__webpack_require__(/*! @utils/parse-url */ "./src/app/common/parse-url.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Shell = function Shell(Component) {
  if (!Component.loadData) {
    Component.loadData = function (_ref) {
      var store = _ref.store,
          match = _ref.match;
      return new Promise(
      /*#__PURE__*/
      function () {
        var _ref2 = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee(resolve, reject) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  resolve({
                    code: 200
                  });

                case 1:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x, _x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    };
  }

  var Shell =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(Shell, _React$Component);

    function Shell(props) {
      var _this;

      _classCallCheck(this, Shell);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Shell).call(this, props));
      var search = props.location.search;
      _this.props.location.params = search ? (0, _parseUrl["default"])(search) : null;
      return _this;
    }

    _createClass(Shell, [{
      key: "render",
      value: function render() {
        return _react["default"].createElement("div", null, _react["default"].createElement(Component, this.props));
      }
    }]);

    return Shell;
  }(_react["default"].Component);

  Shell.defaultProps = {
    loadData: Component.loadData || null
  };
  Shell.contextTypes = {};
  Shell.propTypes = {};

  var mapStateToProps = function mapStateToProps(state) {
    return {};
  };

  var mapDispatchToProps = function mapDispatchToProps(dispatch, props) {
    return {};
  };

  return (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Shell);
};

var _default = Shell;
exports["default"] = _default;

/***/ }),

/***/ "./src/app/pages/front/index/index.js":
/*!********************************************!*\
  !*** ./src/app/pages/front/index/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/_react@16.8.6@react/index.js"));

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/_react-router-dom@4.3.1@react-router-dom/es/index.js");

var _shell = _interopRequireDefault(__webpack_require__(/*! @components/shell */ "./src/app/components/shell.js"));

var _meta = _interopRequireDefault(__webpack_require__(/*! @components/meta */ "./src/app/components/meta/index.js"));

var _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var index = (0, _shell["default"])(_class = (0, _reactRouterDom.withRouter)(_class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(index, _React$Component);

  function index(props) {
    _classCallCheck(this, index);

    return _possibleConstructorReturn(this, _getPrototypeOf(index).call(this, props));
  }

  _createClass(index, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", null, _react["default"].createElement("meta", {
        title: "\u9996\u9875"
      }), _react["default"].createElement("p", null, "123124"));
    }
  }]);

  return index;
}(_react["default"].Component)) || _class) || _class;

exports["default"] = index;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5idW5kbGUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb25maWcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21tb24vcGFyc2UtdXJsLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9tZXRhL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9zaGVsbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL2Zyb250L2luZGV4L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBjb25maWcgPSB7XHJcbiAgZGVidWc6IGZhbHNlLFxyXG4gIG5hbWU6ICdiJmInLFxyXG4gIGNvbnRhY3RFbWFpbDogJyoqKkAxNjMuY29tJyxcclxuICBJQ1BOdW1iZXI6ICcnLFxyXG4gIHBvcnQ6IDQwMDAsXHJcbiAgZG9tYWluTmFtZTogJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMCcsXHJcbiAgYXV0aENvb2tpZU5hbWU6ICdiX2InLFxyXG4gIGNsYXNzU2NvcGVkTmFtZTogJ1toYXNoLmJhc2U2NDo4XScsXHJcbiAgcHVibGljUGF0aDogJy8vbG9jYWxob3N0OjQwMDAnLFxyXG4gIEFQSURvbWFpbk5hbWU6ICdodHRwczovL2FwaS54aWFwZHV5dS5jb20nLFxyXG4gIGdyYXBocWxVcmw6ICdodHRwczovL3d3dy54aWFvZHV5dS5jb20vZ3JhcGhxbCcsXHJcbiAgaGVhZDogYFxyXG4gICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTEsbWF4aW11bS1zY2FsZT0xLHVzZXItc2NhbGFibGU9MFwiPlxyXG4gICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIGhyZWY9XCIvL3d3dy54aWFvZHV5dS5jb20vaWNvbi01MTJ4NTEyLnBuZ1wiPlxyXG4gICAgPG1ldGEgY29udGVudD1cInllc1wiIG5hbWU9XCJhcHBsZS10b3VjaC1mdWxsc2NyZWVuXCI+XHJcbiAgICA8bWV0YSBjb250ZW50PVwieWVzXCIgbmFtZT1cImFwcGxlLW1vYmlsZS13ZWItYXBwLWNhcGFibGVcIj5cclxuICAgIDxtZXRhIGRhdGEtcmVhY3QtaGVsbWV0PVwidHJ1ZVwiIG5hbWU9XCJhcHBsZS1pdHVuZXMtYXBwXCIgY29udGVudD1cImFwcC1pZD0xMjYxMTgxMDA0XCI+XHJcbiAgICA8c2NyaXB0IGFzeW5jIHNyYz1cIi8vcGFnZWFkMi5nb29nbGVzeW5kaWNhdGlvbi5jb20vcGFnZWFkL2pzL2Fkc2J5Z29vZ2xlLmpzXCI+PC9zY3JpcHQ+XHJcbiAgYCxcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBjb25maWciLCJjb25zdCBwYXJzZVVybCA9IChzZWFyY2gpID0+IHtcclxuICBjb25zdCBwYXJhbVBhcnQgPSBzZWFyY2guc3Vic3RyKDEpLnNwbGl0KCcmJylcclxuICByZXR1cm4gcGFyYW1QYXJ0LnJlZHVjZShmdW5jdGlvbiAocmVzLCBpdGVtKSB7XHJcbiAgICBpZiAoaXRlbSkge1xyXG4gICAgICBsZXQgcGFydHMgPSBpdGVtLnNwbGl0KCc9JylcclxuICAgICAgcmVzW3BhcnRzWzBdXSA9IHBhcnRzWzFdIHx8ICcnXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzXHJcbiAgfSwge30pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBhcnNlVXJsIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgTWV0YVRhZ3MsIHsgUmVhY3RUaXRsZSB9IGZyb20gJ3JlYWN0LW1ldGEtdGFncydcclxuXHJcbmltcG9ydCB7IG5hbWUgfSBmcm9tICdAY29uZmlnJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWV0YSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnlcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgdGl0bGUgfSA9IHRoaXMucHJvcHNcclxuICAgIGxldCBfdGl0bGUgPSAnJ1xyXG4gICAgX3RpdGxlICs9IHRpdGxlIHx8IG5hbWVcclxuICAgIGlmICh0aXRsZSkgX3RpdGxlICs9IGAgLSAke25hbWV9YFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICA8UmVhY3RUaXRsZSB0aXRsZT17X3RpdGxlfSAvPlxyXG4gICAgICAgIHsgdGhpcy5wcm9wcy5jaGlsZHJlbiA/IDxNZXRhVGFncz57dGhpcy5wcm9wcy5jaGlsZHJlbn08L01ldGFUYWdzPiA6IG51bGwgfVxyXG4gICAgICA8L0ZyYWdtZW50PlxyXG4gICAgKVxyXG4gIH1cclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuXHJcbmltcG9ydCBwYXJzZVVybCAgZnJvbSAnQHV0aWxzL3BhcnNlLXVybCdcclxuXHJcbmNvbnN0IFNoZWxsID0gQ29tcG9uZW50ID0+IHtcclxuICBpZiAoIUNvbXBvbmVudC5sb2FkRGF0YSkge1xyXG4gICAgQ29tcG9uZW50LmxvYWREYXRhID0gKHsgc3RvcmUsIG1hdGNoIH0pID0+IHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIHJlc29sdmUoeyBjb2RlOiAyMDB9KVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2xhc3MgU2hlbGwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgICAgbG9hZERhdGE6IENvbXBvbmVudC5sb2FkRGF0YSB8fCBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgIGNvbnN0IHsgc2VhcmNoIH0gPSBwcm9wcy5sb2NhdGlvblxyXG4gICAgICB0aGlzLnByb3BzLmxvY2F0aW9uLnBhcmFtcyA9IHNlYXJjaCA/IHBhcnNlVXJsKHNlYXJjaCkgOiBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8Q29tcG9uZW50IHsgLi4udGhpcy5wcm9wcyB9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgU2hlbGwuY29udGV4dFR5cGVzID0ge31cclxuICBTaGVsbC5wcm9wVHlwZXMgPSB7fVxyXG5cclxuICBjb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XHJcbiAgICByZXR1cm4ge31cclxuICB9XHJcblxyXG4gIGNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCwgcHJvcHMpID0+IHtcclxuICAgIHJldHVybiB7fVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNvbm5lY3QoXHJcbiAgICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgICBtYXBEaXNwYXRjaFRvUHJvcHNcclxuICApKFNoZWxsKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaGVsbCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcblxyXG5cclxuaW1wb3J0IFNoZWxsIGZyb20gJ0Bjb21wb25lbnRzL3NoZWxsJ1xyXG5pbXBvcnQgTWV0YSBmcm9tICdAY29tcG9uZW50cy9tZXRhJ1xyXG5cclxuXHJcbkBTaGVsbFxyXG5Ad2l0aFJvdXRlclxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBpbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8bWV0YSB0aXRsZT1cIummlumhtVwiIC8+XHJcbiAgICAgICAgPHA+MTIzMTI0PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkE7QUFzQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7OztBQU1BO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFJQTs7OztBQXRCQTtBQUNBOztBQURBO0FBTUE7QUFDQTtBQUZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBUkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQURBO0FBR0E7QUFIQTtBQUlBO0FBQ0E7QUFuQkE7QUFBQTtBQUFBO0FBcUJBO0FBS0E7QUExQkE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQVFBO0FBRUE7QUFEQTtBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcERBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUE7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUNBOzs7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUlBOzs7O0FBWkE7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==