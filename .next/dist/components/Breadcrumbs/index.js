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

var _jsxFileName = '/Users/mac/Downloads/react-cpj/components/Breadcrumbs/index.js';


var Breadcrumbs = function (_React$Component) {
  (0, _inherits3.default)(Breadcrumbs, _React$Component);

  function Breadcrumbs(props) {
    (0, _classCallCheck3.default)(this, Breadcrumbs);

    return (0, _possibleConstructorReturn3.default)(this, (Breadcrumbs.__proto__ || (0, _getPrototypeOf2.default)(Breadcrumbs)).call(this, props));
  }

  (0, _createClass3.default)(Breadcrumbs, [{
    key: 'render',
    value: function render() {
      var text = this.props.text || '内容展示';
      return _react2.default.createElement('div', { style: this.props.style, className: 'breadcrumbs-wrapper', __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, _react2.default.createElement('div', { className: 'breadcrumbs-wrapper-before', __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }), text, _react2.default.createElement(_style2.default, { jsx: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }));
    }
  }]);

  return Breadcrumbs;
}(_react2.default.Component);

Breadcrumbs.propTypes = {
  text: _propTypes2.default.string
};
exports.default = Breadcrumbs;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQnJlYWRjcnVtYnMvaW5kZXguanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJTdHlsZSIsIkJyZWFkY3J1bWJzIiwicHJvcHMiLCJ0ZXh0Iiwic3R5bGUiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7Ozs7SUFFRCxBO3VDQUNKOzt1QkFBQSxBQUFZLE9BQU87d0NBQUE7OzJJQUFBLEFBQ1gsQUFDUDs7Ozs7NkJBQ1MsQUFDUjtVQUFJLE9BQU8sS0FBQSxBQUFLLE1BQUwsQUFBVyxRQUF0QixBQUE4QixBQUM5Qjs2QkFDRSxjQUFBLFNBQUssT0FBTyxLQUFBLEFBQUssTUFBakIsQUFBdUIsT0FBTyxXQUE5QixBQUF3QztvQkFBeEM7c0JBQUEsQUFDSTtBQURKO09BQUEseUNBQ1MsV0FBTCxBQUFlO29CQUFmO3NCQURKLEFBQ0ksQUFDQTtBQURBO1VBREosQUFHRyxzQkFBQSxBQUFDLGlDQUFNLEtBQVA7b0JBQUE7c0JBSkwsQUFDRSxBQUdHLEFBR047QUFITTs7Ozs7O0VBVmlCLGdCLEFBQU07O0FBZWhDLFlBQUEsQUFBWTtRQUNKLG9CQURSLEFBQXdCLEFBQ04sQUFFbEI7QUFId0IsQUFDdEI7a0JBRUYsQUFBZSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFjL0Rvd25sb2Fkcy9yZWFjdC1jcGoifQ==