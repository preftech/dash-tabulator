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
      header: [{
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX3RhYnVsYXRvci8uL3NyYy9kZW1vL0FwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJzdGF0ZSIsImhlYWRlciIsInRpdGxlIiwiZmllbGQiLCJ3aWR0aCIsImhvekFsaWduIiwiZm9ybWF0dGVyIiwiZGF0YSIsImlkIiwibmFtZSIsImFnZSIsImNvbCIsImRvYiIsInNldFByb3BzIiwiYmluZCIsIm5ld1Byb3BzIiwic2V0U3RhdGUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztJQUVNQSxHOzs7OztBQUVGLGlCQUFjO0FBQUE7O0FBQUE7O0FBQ1Y7QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEMsWUFBTSxFQUFHLENBQ0w7QUFBRUMsYUFBSyxFQUFFLE1BQVQ7QUFBaUJDLGFBQUssRUFBRSxNQUF4QjtBQUFnQ0MsYUFBSyxFQUFFO0FBQXZDLE9BREssRUFFTDtBQUFFRixhQUFLLEVBQUUsS0FBVDtBQUFnQkMsYUFBSyxFQUFFLEtBQXZCO0FBQThCRSxnQkFBUSxFQUFFLE1BQXhDO0FBQWdEQyxpQkFBUyxFQUFFO0FBQTNELE9BRkssRUFHTDtBQUFFSixhQUFLLEVBQUUsaUJBQVQ7QUFBNEJDLGFBQUssRUFBRTtBQUFuQyxPQUhLLEVBSUw7QUFBRUQsYUFBSyxFQUFFLGVBQVQ7QUFBMEJDLGFBQUssRUFBRSxLQUFqQztBQUF3Q0UsZ0JBQVEsRUFBRTtBQUFsRCxPQUpLLEVBS0w7QUFBRUgsYUFBSyxFQUFFLFFBQVQ7QUFBbUJDLGFBQUssRUFBRSxRQUExQjtBQUFvQ0UsZ0JBQVEsRUFBRSxRQUE5QztBQUF3REMsaUJBQVMsRUFBRTtBQUFuRSxPQUxLLEVBTUw7QUFBRUosYUFBSyxFQUFFLFNBQVQ7QUFBb0JDLGFBQUssRUFBRSxRQUEzQjtBQUFxQ0UsZ0JBQVEsRUFBRSxRQUEvQztBQUF5REMsaUJBQVMsRUFBRTtBQUFwRSxPQU5LLENBREE7QUFTUEMsVUFBSSxFQUFHLENBQ0w7QUFBQ0MsVUFBRSxFQUFDLENBQUo7QUFBT0MsWUFBSSxFQUFDLFNBQVo7QUFBdUJDLFdBQUcsRUFBQyxJQUEzQjtBQUFpQ0MsV0FBRyxFQUFDLEtBQXJDO0FBQTRDQyxXQUFHLEVBQUM7QUFBaEQsT0FESyxFQUVMO0FBQUNKLFVBQUUsRUFBQyxDQUFKO0FBQU9DLFlBQUksRUFBQyxVQUFaO0FBQXdCQyxXQUFHLEVBQUMsR0FBNUI7QUFBaUNDLFdBQUcsRUFBQyxNQUFyQztBQUE2Q0MsV0FBRyxFQUFDO0FBQWpELE9BRkssRUFHTDtBQUFDSixVQUFFLEVBQUMsQ0FBSjtBQUFPQyxZQUFJLEVBQUMsb0JBQVo7QUFBa0NDLFdBQUcsRUFBQyxJQUF0QztBQUE0Q0MsV0FBRyxFQUFDLE9BQWhEO0FBQXlEQyxXQUFHLEVBQUM7QUFBN0QsT0FISyxFQUlMO0FBQUNKLFVBQUUsRUFBQyxDQUFKO0FBQU9DLFlBQUksRUFBQyxpQkFBWjtBQUErQkMsV0FBRyxFQUFDLEtBQW5DO0FBQTBDQyxXQUFHLEVBQUMsUUFBOUM7QUFBd0RDLFdBQUcsRUFBQztBQUE1RCxPQUpLLEVBS0w7QUFBQ0osVUFBRSxFQUFDLENBQUo7QUFBT0MsWUFBSSxFQUFDLG1CQUFaO0FBQWlDQyxXQUFHLEVBQUMsSUFBckM7QUFBMkNDLFdBQUcsRUFBQyxRQUEvQztBQUF5REMsV0FBRyxFQUFDO0FBQTdELE9BTEs7QUFUQSxLQUFiO0FBaUJBLFVBQUtDLFFBQUwsR0FBZ0IsTUFBS0EsUUFBTCxDQUFjQyxJQUFkLCtCQUFoQjtBQW5CVTtBQW9CYjs7Ozs2QkFFUUMsUSxFQUFVO0FBQ2YsV0FBS0MsUUFBTCxDQUFjRCxRQUFkO0FBQ0g7Ozs2QkFFUTtBQUNMLDBCQUNJLHFGQUNJLDJEQUFDLGtEQUFEO0FBQ0ksZ0JBQVEsRUFBRSxLQUFLRjtBQURuQixTQUVRLEtBQUtiLEtBRmIsRUFESixDQURKO0FBUUg7Ozs7RUFyQ2FpQiwrQzs7QUF3Q0hsQixrRUFBZixFIiwiZmlsZSI6Ijg3MzViNjEtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50IG5vLW1hZ2ljLW51bWJlcnM6IDAgKi9cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBEYXNoVGFidWxhdG9yIH0gZnJvbSAnLi4vbGliJztcblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaGVhZGVyIDogW1xuICAgICAgICAgICAgICAgIHsgdGl0bGU6IFwiTmFtZVwiLCBmaWVsZDogXCJuYW1lXCIsIHdpZHRoOiAxNTAgfSxcbiAgICAgICAgICAgICAgICB7IHRpdGxlOiBcIkFnZVwiLCBmaWVsZDogXCJhZ2VcIiwgaG96QWxpZ246IFwibGVmdFwiLCBmb3JtYXR0ZXI6IFwicHJvZ3Jlc3NcIiB9LFxuICAgICAgICAgICAgICAgIHsgdGl0bGU6IFwiRmF2b3VyaXRlIENvbG9yXCIsIGZpZWxkOiBcImNvbFwiIH0sXG4gICAgICAgICAgICAgICAgeyB0aXRsZTogXCJEYXRlIE9mIEJpcnRoXCIsIGZpZWxkOiBcImRvYlwiLCBob3pBbGlnbjogXCJjZW50ZXJcIiB9LFxuICAgICAgICAgICAgICAgIHsgdGl0bGU6IFwiUmF0aW5nXCIsIGZpZWxkOiBcInJhdGluZ1wiLCBob3pBbGlnbjogXCJjZW50ZXJcIiwgZm9ybWF0dGVyOiBcInN0YXJcIiB9LFxuICAgICAgICAgICAgICAgIHsgdGl0bGU6IFwiUGFzc2VkP1wiLCBmaWVsZDogXCJwYXNzZWRcIiwgaG96QWxpZ246IFwiY2VudGVyXCIsIGZvcm1hdHRlcjogXCJ0aWNrQ3Jvc3NcIiB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIGRhdGEgOiBbXG4gICAgICAgICAgICAgICAge2lkOjEsIG5hbWU6XCJPbGkgQm9iXCIsIGFnZTpcIjEyXCIsIGNvbDpcInJlZFwiLCBkb2I6XCJcIn0sXG4gICAgICAgICAgICAgICAge2lkOjIsIG5hbWU6XCJNYXJ5IE1heVwiLCBhZ2U6XCIxXCIsIGNvbDpcImJsdWVcIiwgZG9iOlwiMTQvMDUvMTk4MlwifSxcbiAgICAgICAgICAgICAgICB7aWQ6MywgbmFtZTpcIkNocmlzdGluZSBMb2Jvd3NraVwiLCBhZ2U6XCI0MlwiLCBjb2w6XCJncmVlblwiLCBkb2I6XCIyMi8wNS8xOTgyXCJ9LFxuICAgICAgICAgICAgICAgIHtpZDo0LCBuYW1lOlwiQnJlbmRvbiBQaGlsaXBzXCIsIGFnZTpcIjEyNVwiLCBjb2w6XCJvcmFuZ2VcIiwgZG9iOlwiMDEvMDgvMTk4MFwifSxcbiAgICAgICAgICAgICAgICB7aWQ6NSwgbmFtZTpcIk1hcmdyZXQgTWFybWFqdWtlXCIsIGFnZTpcIjE2XCIsIGNvbDpcInllbGxvd1wiLCBkb2I6XCIzMS8wMS8xOTk5XCJ9LFxuICAgICAgICAgICAgICBdXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2V0UHJvcHMgPSB0aGlzLnNldFByb3BzLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgc2V0UHJvcHMobmV3UHJvcHMpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShuZXdQcm9wcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8RGFzaFRhYnVsYXRvclxuICAgICAgICAgICAgICAgICAgICBzZXRQcm9wcz17dGhpcy5zZXRQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMuc3RhdGV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9