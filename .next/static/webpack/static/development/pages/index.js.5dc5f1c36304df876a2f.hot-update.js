webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index/index.js":
/*!******************************!*\
  !*** ./pages/index/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Widget__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Widget */ "./components/Widget/index.js");
/* harmony import */ var _components_Widget_WidgetItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Widget/WidgetItem */ "./components/Widget/WidgetItem.js");
/* harmony import */ var _utils_widgetConstructor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/widgetConstructor */ "./utils/widgetConstructor.js");
/* harmony import */ var _components_SearchForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/SearchForm */ "./components/SearchForm/index.js");













var Head = function Head() {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("title", null, "Blogs Page"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
    name: "description",
    description: "A test app for looking up weather in Danish cities"
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
    name: "keywords",
    description: "weather widget react tv2"
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
    name: "author",
    description: "Patrick Goethe"
  }));
};

var Index = function Index(_ref) {
  var data = _ref.data;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      searchQuery = _useState2[0],
      setSearchQuery = _useState2[1];

  var handleSearch = function handleSearch(e) {
    return setSearchQuery(e.target.value);
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/?city=".concat(searchQuery));
  };

  var successfulFetch = data.cod === 200;
  var weatherData = successfulFetch ? Object(_utils_widgetConstructor__WEBPACK_IMPORTED_MODULE_9__["default"])(data) : {};
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Head, null), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Widget__WEBPACK_IMPORTED_MODULE_7__["default"], {
    error: !successfulFetch,
    title: successfulFetch ? weatherData.name : data.cod
  }, successfulFetch ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Widget_WidgetItem__WEBPACK_IMPORTED_MODULE_8__["default"], null, "Temperature:", ' ', react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("b", null, weatherData.temperature)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Widget_WidgetItem__WEBPACK_IMPORTED_MODULE_8__["default"], null, "Humidity:", ' ', react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("b", null, weatherData.humidity)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Widget_WidgetItem__WEBPACK_IMPORTED_MODULE_8__["default"], null, "Wind:", ' ', react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("b", null, weatherData.wind))) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Widget_WidgetItem__WEBPACK_IMPORTED_MODULE_8__["default"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("b", null, data.message), ' ', "(Make sure to check spelling and note that only Danish cities are supported)"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Widget_WidgetItem__WEBPACK_IMPORTED_MODULE_8__["default"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_SearchForm__WEBPACK_IMPORTED_MODULE_10__["default"], {
    handleSearch: handleSearch,
    searchQuery: searchQuery,
    handleSubmit: handleSubmit
  }))));
};

Index.getInitialProps =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var query, param, res, data;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = _ref2.query;
            param = query.city || 'Copenhagen';
            _context.next = 4;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()("https://api.openweathermap.org/data/2.5/weather?q=".concat(param, ",dk&appid=166d00e26d3ff2c6149e89feccc5c59a&units=metric"));

          case 4:
            res = _context.sent;
            _context.next = 7;
            return res.json();

          case 7:
            data = _context.sent;
            return _context.abrupt("return", {
              data: data
            });

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.5dc5f1c36304df876a2f.hot-update.js.map