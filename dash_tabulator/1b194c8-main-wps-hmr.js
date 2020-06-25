webpackHotUpdatedash_tabulator("main",{

/***/ "./src/demo/App.js":
/*!*************************!*\
  !*** ./src/demo/App.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib */ "./src/lib/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* eslint no-magic-numbers: 0 */



var App = /*#__PURE__*/function (_Component) {
  _inherits(App, _Component);

  var _super = _createSuper(App);

  function App() {
    var _this;

    _classCallCheck(this, App);

    _this = _super.call(this);
    _this.state = {
      columns: [{
        title: "Name",
        field: "name",
        width: 150
      }, {
        title: "Age",
        field: "age",
        hozAlign: "left",
        formatter: "progress"
      }, {
        title: "Favourite Color",
        field: "col"
      }, {
        title: "Date Of Birth",
        field: "dob",
        hozAlign: "center"
      }, {
        title: "Rating",
        field: "rating",
        hozAlign: "center",
        formatter: "star"
      }, {
        title: "Passed?",
        field: "passed",
        hozAlign: "center",
        formatter: "tickCross"
      }],
      data: [{
        id: 1,
        name: "Oli Bob",
        age: "12",
        col: "red",
        dob: ""
      }, {
        id: 2,
        name: "Mary May",
        age: "1",
        col: "blue",
        dob: "14/05/1982"
      }, {
        id: 3,
        name: "Christine Lobowski",
        age: "42",
        col: "green",
        dob: "22/05/1982"
      }, {
        id: 4,
        name: "Brendon Philips",
        age: "125",
        col: "orange",
        dob: "01/08/1980"
      }, {
        id: 5,
        name: "Margret Marmajuke",
        age: "16",
        col: "yellow",
        dob: "31/01/1999"
      }]
    };
    _this.setProps = _this.setProps.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(App, [{
    key: "setProps",
    value: function setProps(newProps) {
      this.setState(newProps);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["DashTabulator"], _extends({
        setProps: this.setProps
      }, this.state)));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX3RhYnVsYXRvci8uL3NyYy9kZW1vL0FwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJzdGF0ZSIsImNvbHVtbnMiLCJ0aXRsZSIsImZpZWxkIiwid2lkdGgiLCJob3pBbGlnbiIsImZvcm1hdHRlciIsImRhdGEiLCJpZCIsIm5hbWUiLCJhZ2UiLCJjb2wiLCJkb2IiLCJzZXRQcm9wcyIsImJpbmQiLCJuZXdQcm9wcyIsInNldFN0YXRlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7SUFFTUEsRzs7Ozs7QUFFRixpQkFBYztBQUFBOztBQUFBOztBQUNWO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLGFBQU8sRUFBRyxDQUNOO0FBQUVDLGFBQUssRUFBRSxNQUFUO0FBQWlCQyxhQUFLLEVBQUUsTUFBeEI7QUFBZ0NDLGFBQUssRUFBRTtBQUF2QyxPQURNLEVBRU47QUFBRUYsYUFBSyxFQUFFLEtBQVQ7QUFBZ0JDLGFBQUssRUFBRSxLQUF2QjtBQUE4QkUsZ0JBQVEsRUFBRSxNQUF4QztBQUFnREMsaUJBQVMsRUFBRTtBQUEzRCxPQUZNLEVBR047QUFBRUosYUFBSyxFQUFFLGlCQUFUO0FBQTRCQyxhQUFLLEVBQUU7QUFBbkMsT0FITSxFQUlOO0FBQUVELGFBQUssRUFBRSxlQUFUO0FBQTBCQyxhQUFLLEVBQUUsS0FBakM7QUFBd0NFLGdCQUFRLEVBQUU7QUFBbEQsT0FKTSxFQUtOO0FBQUVILGFBQUssRUFBRSxRQUFUO0FBQW1CQyxhQUFLLEVBQUUsUUFBMUI7QUFBb0NFLGdCQUFRLEVBQUUsUUFBOUM7QUFBd0RDLGlCQUFTLEVBQUU7QUFBbkUsT0FMTSxFQU1OO0FBQUVKLGFBQUssRUFBRSxTQUFUO0FBQW9CQyxhQUFLLEVBQUUsUUFBM0I7QUFBcUNFLGdCQUFRLEVBQUUsUUFBL0M7QUFBeURDLGlCQUFTLEVBQUU7QUFBcEUsT0FOTSxDQUREO0FBU1BDLFVBQUksRUFBRyxDQUNMO0FBQUNDLFVBQUUsRUFBQyxDQUFKO0FBQU9DLFlBQUksRUFBQyxTQUFaO0FBQXVCQyxXQUFHLEVBQUMsSUFBM0I7QUFBaUNDLFdBQUcsRUFBQyxLQUFyQztBQUE0Q0MsV0FBRyxFQUFDO0FBQWhELE9BREssRUFFTDtBQUFDSixVQUFFLEVBQUMsQ0FBSjtBQUFPQyxZQUFJLEVBQUMsVUFBWjtBQUF3QkMsV0FBRyxFQUFDLEdBQTVCO0FBQWlDQyxXQUFHLEVBQUMsTUFBckM7QUFBNkNDLFdBQUcsRUFBQztBQUFqRCxPQUZLLEVBR0w7QUFBQ0osVUFBRSxFQUFDLENBQUo7QUFBT0MsWUFBSSxFQUFDLG9CQUFaO0FBQWtDQyxXQUFHLEVBQUMsSUFBdEM7QUFBNENDLFdBQUcsRUFBQyxPQUFoRDtBQUF5REMsV0FBRyxFQUFDO0FBQTdELE9BSEssRUFJTDtBQUFDSixVQUFFLEVBQUMsQ0FBSjtBQUFPQyxZQUFJLEVBQUMsaUJBQVo7QUFBK0JDLFdBQUcsRUFBQyxLQUFuQztBQUEwQ0MsV0FBRyxFQUFDLFFBQTlDO0FBQXdEQyxXQUFHLEVBQUM7QUFBNUQsT0FKSyxFQUtMO0FBQUNKLFVBQUUsRUFBQyxDQUFKO0FBQU9DLFlBQUksRUFBQyxtQkFBWjtBQUFpQ0MsV0FBRyxFQUFDLElBQXJDO0FBQTJDQyxXQUFHLEVBQUMsUUFBL0M7QUFBeURDLFdBQUcsRUFBQztBQUE3RCxPQUxLO0FBVEEsS0FBYjtBQWlCQSxVQUFLQyxRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBY0MsSUFBZCwrQkFBaEI7QUFuQlU7QUFvQmI7Ozs7NkJBRVFDLFEsRUFBVTtBQUNmLFdBQUtDLFFBQUwsQ0FBY0QsUUFBZDtBQUNIOzs7NkJBRVE7QUFDTCwwQkFDSSxxRkFDSSwyREFBQyxrREFBRDtBQUNJLGdCQUFRLEVBQUUsS0FBS0Y7QUFEbkIsU0FFUSxLQUFLYixLQUZiLEVBREosQ0FESjtBQVFIOzs7O0VBckNhaUIsK0M7O0FBd0NIbEIsa0VBQWYsRSIsImZpbGUiOiIxYjE5NGM4LW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludCBuby1tYWdpYy1udW1iZXJzOiAwICovXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgRGFzaFRhYnVsYXRvciB9IGZyb20gJy4uL2xpYic7XG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNvbHVtbnMgOiBbXG4gICAgICAgICAgICAgICAgeyB0aXRsZTogXCJOYW1lXCIsIGZpZWxkOiBcIm5hbWVcIiwgd2lkdGg6IDE1MCB9LFxuICAgICAgICAgICAgICAgIHsgdGl0bGU6IFwiQWdlXCIsIGZpZWxkOiBcImFnZVwiLCBob3pBbGlnbjogXCJsZWZ0XCIsIGZvcm1hdHRlcjogXCJwcm9ncmVzc1wiIH0sXG4gICAgICAgICAgICAgICAgeyB0aXRsZTogXCJGYXZvdXJpdGUgQ29sb3JcIiwgZmllbGQ6IFwiY29sXCIgfSxcbiAgICAgICAgICAgICAgICB7IHRpdGxlOiBcIkRhdGUgT2YgQmlydGhcIiwgZmllbGQ6IFwiZG9iXCIsIGhvekFsaWduOiBcImNlbnRlclwiIH0sXG4gICAgICAgICAgICAgICAgeyB0aXRsZTogXCJSYXRpbmdcIiwgZmllbGQ6IFwicmF0aW5nXCIsIGhvekFsaWduOiBcImNlbnRlclwiLCBmb3JtYXR0ZXI6IFwic3RhclwiIH0sXG4gICAgICAgICAgICAgICAgeyB0aXRsZTogXCJQYXNzZWQ/XCIsIGZpZWxkOiBcInBhc3NlZFwiLCBob3pBbGlnbjogXCJjZW50ZXJcIiwgZm9ybWF0dGVyOiBcInRpY2tDcm9zc1wiIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgZGF0YSA6IFtcbiAgICAgICAgICAgICAgICB7aWQ6MSwgbmFtZTpcIk9saSBCb2JcIiwgYWdlOlwiMTJcIiwgY29sOlwicmVkXCIsIGRvYjpcIlwifSxcbiAgICAgICAgICAgICAgICB7aWQ6MiwgbmFtZTpcIk1hcnkgTWF5XCIsIGFnZTpcIjFcIiwgY29sOlwiYmx1ZVwiLCBkb2I6XCIxNC8wNS8xOTgyXCJ9LFxuICAgICAgICAgICAgICAgIHtpZDozLCBuYW1lOlwiQ2hyaXN0aW5lIExvYm93c2tpXCIsIGFnZTpcIjQyXCIsIGNvbDpcImdyZWVuXCIsIGRvYjpcIjIyLzA1LzE5ODJcIn0sXG4gICAgICAgICAgICAgICAge2lkOjQsIG5hbWU6XCJCcmVuZG9uIFBoaWxpcHNcIiwgYWdlOlwiMTI1XCIsIGNvbDpcIm9yYW5nZVwiLCBkb2I6XCIwMS8wOC8xOTgwXCJ9LFxuICAgICAgICAgICAgICAgIHtpZDo1LCBuYW1lOlwiTWFyZ3JldCBNYXJtYWp1a2VcIiwgYWdlOlwiMTZcIiwgY29sOlwieWVsbG93XCIsIGRvYjpcIjMxLzAxLzE5OTlcIn0sXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zZXRQcm9wcyA9IHRoaXMuc2V0UHJvcHMuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBzZXRQcm9wcyhuZXdQcm9wcykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKG5ld1Byb3BzKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxEYXNoVGFidWxhdG9yXG4gICAgICAgICAgICAgICAgICAgIHNldFByb3BzPXt0aGlzLnNldFByb3BzfVxuICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5zdGF0ZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=