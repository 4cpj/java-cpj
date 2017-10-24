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

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/mac/Downloads/react-cpj/components/Nav/index.js';


var Nav = function (_React$Component) {
  (0, _inherits3.default)(Nav, _React$Component);

  function Nav(props) {
    (0, _classCallCheck3.default)(this, Nav);

    return (0, _possibleConstructorReturn3.default)(this, (Nav.__proto__ || (0, _getPrototypeOf2.default)(Nav)).call(this, props));
  }

  (0, _createClass3.default)(Nav, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          data = _props.data,
          defaultValue = _props.defaultValue,
          click = _props.click;

      return _react2.default.createElement('ul', { className: 'nav-wrapper', __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, this.props.data.length > 0 && this.props.data.map(function (item, index) {
        return _react2.default.createElement('li', { className: 'nav-item' + (defaultValue == item ? ' nav-item-active' : ''),
          key: index, onClick: click ? function () {
            return click(item);
          } : undefined, __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          }
        }, item);
      }), _react2.default.createElement(_style2.default, { jsx: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }));
    }
  }]);

  return Nav;
}(_react2.default.Component);

Nav.propTypes = {
  data: _propTypes2.default.array.isRequired
};

exports.default = Nav;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmF2L2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiU3R5bGUiLCJQcm9wVHlwZXMiLCJOYXYiLCJwcm9wcyIsImRhdGEiLCJkZWZhdWx0VmFsdWUiLCJjbGljayIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInVuZGVmaW5lZCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsImFycmF5IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7OztJQUVELEE7K0JBQ0o7O2VBQUEsQUFBWSxPQUFPO3dDQUFBOzsySEFBQSxBQUNYLEFBQ1A7Ozs7OzZCQUNTO21CQUM0QixLQUQ1QixBQUNpQztVQURqQyxBQUNELGNBREMsQUFDRDtVQURDLEFBQ0ssc0JBREwsQUFDSztVQURMLEFBQ21CLGVBRG5CLEFBQ21CLEFBQzNCOzs2QkFDRSxjQUFBLFFBQUksV0FBSixBQUFjO29CQUFkO3NCQUFBLEFBRUk7QUFGSjtPQUFBLE9BRUksQUFBSyxNQUFMLEFBQVcsS0FBWCxBQUFnQixTQUFoQixBQUF5QixVQUFLLEFBQUssTUFBTCxBQUFXLEtBQVgsQUFBZ0IsSUFBSSxVQUFBLEFBQUMsTUFBRCxBQUFPLE9BQVA7K0JBQ2hELGNBQUEsUUFBSSx5QkFBc0IsZ0JBQUEsQUFBYyxPQUFkLEFBQW1CLHFCQUE3QyxBQUFJLEFBQTRELEFBQzVEO2VBREosQUFDUyxPQUFPLGlCQUFlLFlBQUE7bUJBQUksTUFBSixBQUFJLEFBQU07QUFBaEIsV0FBQSxHQUR6QixBQUMrQztzQkFEL0M7d0JBQUEsQUFFSztBQUZMO1NBQUEsRUFEZ0QsQUFDaEQ7QUFITixBQUVrQyxBQU9oQyxPQVBnQyxtQkFPaEMsQUFBQyxpQ0FBTSxLQUFQO29CQUFBO3NCQVZKLEFBQ0UsQUFTRSxBQUdMO0FBSEs7Ozs7OztFQWhCVSxnQkFBTSxBOztBQXNCeEIsSUFBQSxBQUFJO1FBQ0ksb0JBQUEsQUFBVSxNQURsQixBQUFnQixBQUNRLEFBR3hCO0FBSmdCLEFBQ2Q7O2tCQUdGLEFBQWUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hYy9Eb3dubG9hZHMvcmVhY3QtY3BqIn0=