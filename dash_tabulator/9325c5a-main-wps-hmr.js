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
/* harmony import */ var react_tabulator_lib_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-tabulator/lib/styles.css */ "./node_modules/react-tabulator/lib/styles.css");
/* harmony import */ var react_tabulator_lib_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_tabulator_lib_styles_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_tabulator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-tabulator */ "./node_modules/react-tabulator/lib/index.js");
/* harmony import */ var react_tabulator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_tabulator__WEBPACK_IMPORTED_MODULE_3__);
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_tabulator__WEBPACK_IMPORTED_MODULE_3__["ReactTabulator"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX3RhYnVsYXRvci8uL3NyYy9saWIvY29tcG9uZW50cy9EYXNoVGFidWxhdG9yLnJlYWN0LmpzIl0sIm5hbWVzIjpbIkRhc2hUYWJ1bGF0b3IiLCJwcm9wcyIsImlkIiwiZGF0YSIsInNldFByb3BzIiwiY29sdW1ucyIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImFycmF5IiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7SUFPcUJBLGE7Ozs7Ozs7Ozs7Ozs7NkJBQ1I7QUFBQSx3QkFDaUMsS0FBS0MsS0FEdEM7QUFBQSxVQUNFQyxFQURGLGVBQ0VBLEVBREY7QUFBQSxVQUNNQyxJQUROLGVBQ01BLElBRE47QUFBQSxVQUNZQyxRQURaLGVBQ1lBLFFBRFo7QUFBQSxVQUNzQkMsT0FEdEIsZUFDc0JBLE9BRHRCO0FBR0wsMEJBQ0ksMkRBQUMsOERBQUQ7QUFDSSxZQUFJLEVBQUVGLElBRFY7QUFFSSxlQUFPLEVBQUVFLE9BRmI7QUFHSSxnQkFBUSxFQUFFLElBSGQ7QUFJSSxjQUFNLEVBQUU7QUFKWjtBQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVJKO0FBNkJIOzs7O0VBakNzQ0MsK0M7OztBQW9DM0NOLGFBQWEsQ0FBQ08sWUFBZCxHQUE2QixFQUE3QjtBQUVBUCxhQUFhLENBQUNRLFNBQWQsR0FBMEI7QUFDdEI7OztBQUdBTixJQUFFLEVBQUVPLGlEQUFTLENBQUNDLE1BSlE7O0FBTXRCOzs7QUFHQUwsU0FBTyxFQUFFSSxpREFBUyxDQUFDRSxLQVRHOztBQVd0Qjs7O0FBR0FSLE1BQUksRUFBRU0saURBQVMsQ0FBQ0UsS0FkTTs7QUFnQnRCOzs7O0FBSUFQLFVBQVEsRUFBRUssaURBQVMsQ0FBQ0c7QUFwQkUsQ0FBMUIsQyIsImZpbGUiOiI5MzI1YzVhLW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCAncmVhY3QtdGFidWxhdG9yL2xpYi9zdHlsZXMuY3NzJztcbmltcG9ydCB7IFJlYWN0VGFidWxhdG9yIH0gZnJvbSAncmVhY3QtdGFidWxhdG9yJ1xuXG4vKipcbiAqIEV4YW1wbGVDb21wb25lbnQgaXMgYW4gZXhhbXBsZSBjb21wb25lbnQuXG4gKiBJdCB0YWtlcyBhIHByb3BlcnR5LCBgbGFiZWxgLCBhbmRcbiAqIGRpc3BsYXlzIGl0LlxuICogSXQgcmVuZGVycyBhbiBpbnB1dCB3aXRoIHRoZSBwcm9wZXJ0eSBgdmFsdWVgXG4gKiB3aGljaCBpcyBlZGl0YWJsZSBieSB0aGUgdXNlci5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGFzaFRhYnVsYXRvciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7aWQsIGRhdGEsIHNldFByb3BzLCBjb2x1bW5zfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSZWFjdFRhYnVsYXRvclxuICAgICAgICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgICAgICAgICB0b29sdGlwcz17dHJ1ZX1cbiAgICAgICAgICAgICAgICBsYXlvdXQ9e1wiZml0RGF0YVwifVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgLypcbiAgICAgICAgICAgIDxkaXYgaWQ9e2lkfT5cbiAgICAgICAgICAgICAgICBFeGFtcGxlQ29tcG9uZW50OiB7bGFiZWx9Jm5ic3A7XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiBTZW5kIHRoZSBuZXcgdmFsdWUgdG8gdGhlIHBhcmVudCBjb21wb25lbnQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiBzZXRQcm9wcyBpcyBhIHByb3AgdGhhdCBpcyBhdXRvbWF0aWNhbGx5IHN1cHBsaWVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiBieSBkYXNoJ3MgZnJvbnQtZW5kIChcImRhc2gtcmVuZGVyZXJcIikuXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiBJbiBhIERhc2ggYXBwLCB0aGlzIHdpbGwgdXBkYXRlIHRoZSBjb21wb25lbnQnc1xuICAgICAgICAgICAgICAgICAgICAgICAgICogcHJvcHMgYW5kIHNlbmQgdGhlIGRhdGEgYmFjayB0byB0aGUgUHl0aG9uIERhc2hcbiAgICAgICAgICAgICAgICAgICAgICAgICAqIGFwcCBzZXJ2ZXIgaWYgYSBjYWxsYmFjayB1c2VzIHRoZSBtb2RpZmllZCBwcm9wIGFzXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiBJbnB1dCBvciBTdGF0ZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGUgPT4gc2V0UHJvcHMoeyB2YWx1ZTogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICovXG4gICAgICAgICk7XG4gICAgfVxufVxuXG5EYXNoVGFidWxhdG9yLmRlZmF1bHRQcm9wcyA9IHt9O1xuXG5EYXNoVGFidWxhdG9yLnByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBUaGUgSUQgdXNlZCB0byBpZGVudGlmeSB0aGlzIGNvbXBvbmVudCBpbiBEYXNoIGNhbGxiYWNrcy5cbiAgICAgKi9cbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIEEgbGFiZWwgdGhhdCB3aWxsIGJlIHByaW50ZWQgd2hlbiB0aGlzIGNvbXBvbmVudCBpcyByZW5kZXJlZC5cbiAgICAgKi9cbiAgICBjb2x1bW5zOiBQcm9wVHlwZXMuYXJyYXksXG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmFsdWUgZGlzcGxheWVkIGluIHRoZSBpbnB1dC5cbiAgICAgKi9cbiAgICBkYXRhOiBQcm9wVHlwZXMuYXJyYXksXG5cbiAgICAvKipcbiAgICAgKiBEYXNoLWFzc2lnbmVkIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCB0byByZXBvcnQgcHJvcGVydHkgY2hhbmdlc1xuICAgICAqIHRvIERhc2gsIHRvIG1ha2UgdGhlbSBhdmFpbGFibGUgZm9yIGNhbGxiYWNrcy5cbiAgICAgKi9cbiAgICBzZXRQcm9wczogUHJvcFR5cGVzLmZ1bmNcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9