'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class,
    _temp,
    _jsxFileName = '/Users/mac/Downloads/react-cpj/components/Button/index.js';

var Button = (_temp = _class = function (_React$Component) {
  (0, _inherits3.default)(Button, _React$Component);

  function Button(props) {
    (0, _classCallCheck3.default)(this, Button);

    return (0, _possibleConstructorReturn3.default)(this, (Button.__proto__ || (0, _getPrototypeOf2.default)(Button)).call(this, props));
  }

  (0, _createClass3.default)(Button, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('a', { style: this.props.style, className: "button-wrapper " + this.props.className, onClick: this.props.handleClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, this.props.text, _react2.default.createElement(_style2.default, { jsx: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }));
    }
  }]);

  return Button;
}(_react2.default.Component), _class.propTypes = {
  text: _propTypes2.default.string,
  className: _propTypes2.default.string
}, _class.defaultProps = {
  text: '确定',
  className: 'button-primary'
}, _temp);

exports.default = Button;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQnV0dG9uL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiU3R5bGUiLCJCdXR0b24iLCJwcm9wcyIsInN0eWxlIiwiY2xhc3NOYW1lIiwiaGFuZGxlQ2xpY2siLCJ0ZXh0IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwic3RyaW5nIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7OztJQUVELEE7a0NBU0o7O2tCQUFBLEFBQVksT0FBTzt3Q0FBQTs7aUlBQUEsQUFDWCxBQUNQOzs7Ozs2QkFDUyxBQUNSOzZCQUNFLGNBQUEsT0FBRyxPQUFPLEtBQUEsQUFBSyxNQUFmLEFBQXFCLE9BQU8sV0FBVyxvQkFBb0IsS0FBQSxBQUFLLE1BQWhFLEFBQXNFLFdBQVksU0FBUyxLQUFBLEFBQUssTUFBaEcsQUFBc0c7b0JBQXRHO3NCQUFBLEFBQ0k7QUFESjtPQUFBLE9BQ0ksQUFBSyxNQURULEFBQ2UsQUFDWixzQkFBQSxBQUFDLGlDQUFNLEtBQVA7b0JBQUE7c0JBSEwsQUFDRSxBQUVHLEFBR047QUFITTs7Ozs7O0VBaEJZLGdCQUFNLEEsbUJBQ2xCLEE7UUFDQyxvQkFEVyxBQUNELEFBQ2hCO2FBQVcsb0JBRk0sQUFFSSxBO0FBRkosQUFDakIsVUFHSyxBO1FBQWUsQUFDZCxBQUNOO2FBQVcsQSxBQUZTO0FBQUEsQUFDcEIsR0FnQko7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hYy9Eb3dubG9hZHMvcmVhY3QtY3BqIn0=