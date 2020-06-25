webpackHotUpdatedash_tabulator("main",{

/***/ "./src/lib/components/DashTabulator.react.js":
/*!***************************************************!*\
  !*** ./src/lib/components/DashTabulator.react.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashTabulator; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_tabulator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-tabulator */ "./node_modules/react-tabulator/lib/index.js");
/* harmony import */ var react_tabulator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_tabulator__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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




/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */

var DashTabulator = /*#__PURE__*/function (_Component) {
  _inherits(DashTabulator, _Component);

  var _super = _createSuper(DashTabulator);

  function DashTabulator() {
    _classCallCheck(this, DashTabulator);

    return _super.apply(this, arguments);
  }

  _createClass(DashTabulator, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          data = _this$props.data,
          setProps = _this$props.setProps,
          columns = _this$props.columns;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_tabulator__WEBPACK_IMPORTED_MODULE_2__["ReactTabulator"], {
        data: data,
        columns: columns,
        tooltips: true,
        layout: "fitData"
      })
      /*
      <div id={id}>
          ExampleComponent: {label}&nbsp;
          <input
              value={value}
              onChange={
                  
                   * Send the new value to the parent component.
                   * setProps is a prop that is automatically supplied
                   * by dash's front-end ("dash-renderer").
                   * In a Dash app, this will update the component's
                   * props and send the data back to the Python Dash
                   * app server if a callback uses the modified prop as
                   * Input or State.
                   
                  e => setProps({ value: e.target.value })
              }
          />
      </div>
      */
      ;
    }
  }]);

  return DashTabulator;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


DashTabulator.defaultProps = {};
DashTabulator.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * A label that will be printed when this component is rendered.
   */
  columns: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,

  /**
   * The value displayed in the input.
   */
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,

  /**
   * Dash-assigned callback that should be called to report property changes
   * to Dash, to make them available for callbacks.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX3RhYnVsYXRvci8uL3NyYy9saWIvY29tcG9uZW50cy9EYXNoVGFidWxhdG9yLnJlYWN0LmpzIl0sIm5hbWVzIjpbIkRhc2hUYWJ1bGF0b3IiLCJwcm9wcyIsImlkIiwiZGF0YSIsInNldFByb3BzIiwiY29sdW1ucyIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImFycmF5IiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7OztJQU9xQkEsYTs7Ozs7Ozs7Ozs7Ozs2QkFDUjtBQUFBLHdCQUNpQyxLQUFLQyxLQUR0QztBQUFBLFVBQ0VDLEVBREYsZUFDRUEsRUFERjtBQUFBLFVBQ01DLElBRE4sZUFDTUEsSUFETjtBQUFBLFVBQ1lDLFFBRFosZUFDWUEsUUFEWjtBQUFBLFVBQ3NCQyxPQUR0QixlQUNzQkEsT0FEdEI7QUFHTCwwQkFDSSwyREFBQyw4REFBRDtBQUNJLFlBQUksRUFBRUYsSUFEVjtBQUVJLGVBQU8sRUFBRUUsT0FGYjtBQUdJLGdCQUFRLEVBQUUsSUFIZDtBQUlJLGNBQU0sRUFBRTtBQUpaO0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUko7QUE2Qkg7Ozs7RUFqQ3NDQywrQzs7O0FBb0MzQ04sYUFBYSxDQUFDTyxZQUFkLEdBQTZCLEVBQTdCO0FBRUFQLGFBQWEsQ0FBQ1EsU0FBZCxHQUEwQjtBQUN0Qjs7O0FBR0FOLElBQUUsRUFBRU8saURBQVMsQ0FBQ0MsTUFKUTs7QUFNdEI7OztBQUdBTCxTQUFPLEVBQUVJLGlEQUFTLENBQUNFLEtBVEc7O0FBV3RCOzs7QUFHQVIsTUFBSSxFQUFFTSxpREFBUyxDQUFDRSxLQWRNOztBQWdCdEI7Ozs7QUFJQVAsVUFBUSxFQUFFSyxpREFBUyxDQUFDRztBQXBCRSxDQUExQixDIiwiZmlsZSI6ImMwNjU4NjktbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBSZWFjdFRhYnVsYXRvciB9IGZyb20gJ3JlYWN0LXRhYnVsYXRvcidcblxuLyoqXG4gKiBFeGFtcGxlQ29tcG9uZW50IGlzIGFuIGV4YW1wbGUgY29tcG9uZW50LlxuICogSXQgdGFrZXMgYSBwcm9wZXJ0eSwgYGxhYmVsYCwgYW5kXG4gKiBkaXNwbGF5cyBpdC5cbiAqIEl0IHJlbmRlcnMgYW4gaW5wdXQgd2l0aCB0aGUgcHJvcGVydHkgYHZhbHVlYFxuICogd2hpY2ggaXMgZWRpdGFibGUgYnkgdGhlIHVzZXIuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhc2hUYWJ1bGF0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge2lkLCBkYXRhLCBzZXRQcm9wcywgY29sdW1uc30gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UmVhY3RUYWJ1bGF0b3JcbiAgICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgICAgICAgICAgdG9vbHRpcHM9e3RydWV9XG4gICAgICAgICAgICAgICAgbGF5b3V0PXtcImZpdERhdGFcIn1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICA8ZGl2IGlkPXtpZH0+XG4gICAgICAgICAgICAgICAgRXhhbXBsZUNvbXBvbmVudDoge2xhYmVsfSZuYnNwO1xuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICogU2VuZCB0aGUgbmV3IHZhbHVlIHRvIHRoZSBwYXJlbnQgY29tcG9uZW50LlxuICAgICAgICAgICAgICAgICAgICAgICAgICogc2V0UHJvcHMgaXMgYSBwcm9wIHRoYXQgaXMgYXV0b21hdGljYWxseSBzdXBwbGllZFxuICAgICAgICAgICAgICAgICAgICAgICAgICogYnkgZGFzaCdzIGZyb250LWVuZCAoXCJkYXNoLXJlbmRlcmVyXCIpLlxuICAgICAgICAgICAgICAgICAgICAgICAgICogSW4gYSBEYXNoIGFwcCwgdGhpcyB3aWxsIHVwZGF0ZSB0aGUgY29tcG9uZW50J3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAqIHByb3BzIGFuZCBzZW5kIHRoZSBkYXRhIGJhY2sgdG8gdGhlIFB5dGhvbiBEYXNoXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiBhcHAgc2VydmVyIGlmIGEgY2FsbGJhY2sgdXNlcyB0aGUgbW9kaWZpZWQgcHJvcCBhc1xuICAgICAgICAgICAgICAgICAgICAgICAgICogSW5wdXQgb3IgU3RhdGUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBlID0+IHNldFByb3BzKHsgdmFsdWU6IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAqL1xuICAgICAgICApO1xuICAgIH1cbn1cblxuRGFzaFRhYnVsYXRvci5kZWZhdWx0UHJvcHMgPSB7fTtcblxuRGFzaFRhYnVsYXRvci5wcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogVGhlIElEIHVzZWQgdG8gaWRlbnRpZnkgdGhpcyBjb21wb25lbnQgaW4gRGFzaCBjYWxsYmFja3MuXG4gICAgICovXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBBIGxhYmVsIHRoYXQgd2lsbCBiZSBwcmludGVkIHdoZW4gdGhpcyBjb21wb25lbnQgaXMgcmVuZGVyZWQuXG4gICAgICovXG4gICAgY29sdW1uczogUHJvcFR5cGVzLmFycmF5LFxuXG4gICAgLyoqXG4gICAgICogVGhlIHZhbHVlIGRpc3BsYXllZCBpbiB0aGUgaW5wdXQuXG4gICAgICovXG4gICAgZGF0YTogUHJvcFR5cGVzLmFycmF5LFxuXG4gICAgLyoqXG4gICAgICogRGFzaC1hc3NpZ25lZCBjYWxsYmFjayB0aGF0IHNob3VsZCBiZSBjYWxsZWQgdG8gcmVwb3J0IHByb3BlcnR5IGNoYW5nZXNcbiAgICAgKiB0byBEYXNoLCB0byBtYWtlIHRoZW0gYXZhaWxhYmxlIGZvciBjYWxsYmFja3MuXG4gICAgICovXG4gICAgc2V0UHJvcHM6IFByb3BUeXBlcy5mdW5jXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==