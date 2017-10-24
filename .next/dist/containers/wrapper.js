'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.View = exports.Wrapper = undefined;

var _assign = require('_babel-runtime@6.23.0@babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = require('_babel-runtime@6.23.0@babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('_babel-runtime@6.23.0@babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('_babel-runtime@6.23.0@babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('_babel-runtime@6.23.0@babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('_babel-runtime@6.23.0@babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/mac/Downloads/react-cpj/containers/wrapper.js';
var Wrapper = exports.Wrapper = function (_React$Component) {
  (0, _inherits3.default)(Wrapper, _React$Component);

  function Wrapper(props) {
    (0, _classCallCheck3.default)(this, Wrapper);

    return (0, _possibleConstructorReturn3.default)(this, (Wrapper.__proto__ || (0, _getPrototypeOf2.default)(Wrapper)).call(this, props));
  }

  (0, _createClass3.default)(Wrapper, [{
    key: 'render',
    value: function render() {
      var wrapperStyle = {
        width: '100%',
        'minwidth': '1200px'
      };
      if (this.props.wrapperStyle) {
        wrapperStyle = (0, _assign2.default)(wrapperStyle, this.props.wrapperStyle);
      }
      var wrapperContentStyle = {
        position: 'relative',
        margin: '0 auto',
        width: '1100px'
      };
      if (this.props.wrapperContentStyle) {
        wrapperContentStyle = (0, _assign2.default)(wrapperContentStyle, this.props.wrapperContentStyle);
      }
      return _react2.default.createElement('div', { style: wrapperStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react2.default.createElement('div', { style: wrapperContentStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, this.props.children));
    }
  }]);

  return Wrapper;
}(_react2.default.Component);

Wrapper.propTypes = {
  wrapperStyle: _propTypes2.default.object,
  wrapperContentStyle: _propTypes2.default.object
};

var View = exports.View = function (_React$Component2) {
  (0, _inherits3.default)(View, _React$Component2);

  function View(props) {
    (0, _classCallCheck3.default)(this, View);

    return (0, _possibleConstructorReturn3.default)(this, (View.__proto__ || (0, _getPrototypeOf2.default)(View)).call(this, props));
  }

  (0, _createClass3.default)(View, [{
    key: 'render',
    value: function render() {
      var viewStyle = {
        'borderRadius': '3px',
        border: '1px solid #e4e4e4'
      };
      if (this.props.viewStyle) {
        viewStyle = (0, _assign2.default)(viewStyle, this.props.viewStyle);
      }
      var className = this.props.className;
      return _react2.default.createElement('div', { style: viewStyle, className: className, __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, this.props.children);
    }
  }]);

  return View;
}(_react2.default.Component);

View.propTypes = {
  viewStyle: _propTypes2.default.object,
  className: _propTypes2.default.string
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnMvd3JhcHBlci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIldyYXBwZXIiLCJwcm9wcyIsIndyYXBwZXJTdHlsZSIsIndpZHRoIiwid3JhcHBlckNvbnRlbnRTdHlsZSIsInBvc2l0aW9uIiwibWFyZ2luIiwiY2hpbGRyZW4iLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJvYmplY3QiLCJWaWV3Iiwidmlld1N0eWxlIiwiYm9yZGVyIiwiY2xhc3NOYW1lIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU8sQUFFUDs7Ozs7OztJQUFBLEFBQWEsd0RBQWI7bUNBQ0U7O21CQUFBLEFBQVksT0FBTzt3Q0FBQTs7bUlBQUEsQUFDWCxBQUNQO0FBSEg7OztTQUFBOzZCQUlZLEFBQ1I7VUFBSTtlQUFlLEFBQ1AsQUFDUDtvQkFGTCxBQUFtQixBQUVGLEFBRWpCO0FBSm1CLEFBQ2Q7VUFHRixLQUFBLEFBQUssTUFBUixBQUFjLGNBQWEsQUFDeEI7dUJBQWUsc0JBQUEsQUFBYyxjQUFjLEtBQUEsQUFBSyxNQUFoRCxBQUFlLEFBQXVDLEFBQ3hEO0FBQ0Q7VUFBSTtrQkFBc0IsQUFDWixBQUNWO2dCQUZzQixBQUVkLEFBQ1I7ZUFISixBQUEwQixBQUdmLEFBRVg7QUFMMEIsQUFDdEI7VUFJRCxLQUFBLEFBQUssTUFBUixBQUFjLHFCQUFvQixBQUMvQjs4QkFBc0Isc0JBQUEsQUFBYyxxQkFBcUIsS0FBQSxBQUFLLE1BQTlELEFBQXNCLEFBQThDLEFBQ3RFO0FBQ0Q7NkJBQ0UsY0FBQSxTQUFLLE9BQUwsQUFBWTtvQkFBWjtzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRSxjQUFBLFNBQUssT0FBTCxBQUFZO29CQUFaO3NCQUFBLEFBQ0c7QUFESDtjQUNHLEFBQUssTUFIWixBQUNFLEFBQ0UsQUFDYyxBQUluQjtBQTNCSDtBQUFBOztTQUFBO0VBQTZCLGdCQUE3QixBQUFtQzs7QUE4Qm5DLFFBQUEsQUFBUTtnQkFDUSxvQkFESSxBQUNNLEFBQ3hCO3VCQUFxQixvQkFGdkIsQUFBb0IsQUFFYSxBQUdqQztBQUxvQixBQUNsQjs7SUFJRixBQUFhLG1EQUFiO2dDQUNFOztnQkFBQSxBQUFZLE9BQU87d0NBQUE7OzZIQUFBLEFBQ1gsQUFDUDtBQUhIOzs7U0FBQTs2QkFJWSxBQUNSO1VBQUk7d0JBQVksQUFDSSxBQUNoQjtnQkFGSixBQUFnQixBQUVKLEFBRVo7QUFKZ0IsQUFDWjtVQUdELEtBQUEsQUFBSyxNQUFSLEFBQWMsV0FBVSxBQUNyQjtvQkFBWSxzQkFBQSxBQUFjLFdBQVcsS0FBQSxBQUFLLE1BQTFDLEFBQVksQUFBb0MsQUFDbEQ7QUFDRDtVQUFNLFlBQVksS0FBQSxBQUFLLE1BQXZCLEFBQTZCLEFBQzdCOzZCQUNFLGNBQUEsU0FBSyxPQUFMLEFBQVksV0FBVyxXQUF2QixBQUFrQztvQkFBbEM7c0JBQUEsQUFDRztBQURIO09BQUEsT0FDRyxBQUFLLE1BRlYsQUFDRSxBQUNjLEFBR2pCO0FBbEJIO0FBQUE7O1NBQUE7RUFBMEIsZ0JBQTFCLEFBQWdDOztBQXFCaEMsS0FBQSxBQUFLO2FBQ1Esb0JBREksQUFDTSxBQUNyQjthQUFXLG9CQUZiLEFBQWlCLEFBRU07QUFGTixBQUNmIiwiZmlsZSI6IndyYXBwZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hYy9Eb3dubG9hZHMvcmVhY3QtY3BqIn0=