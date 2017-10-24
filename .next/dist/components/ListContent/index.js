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

var _link = require('_next@3.2.2@next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/mac/Downloads/react-cpj/components/ListContent/index.js';


var ListContent = function (_React$Component) {
  (0, _inherits3.default)(ListContent, _React$Component);

  function ListContent(props) {
    (0, _classCallCheck3.default)(this, ListContent);

    return (0, _possibleConstructorReturn3.default)(this, (ListContent.__proto__ || (0, _getPrototypeOf2.default)(ListContent)).call(this, props));
  }

  (0, _createClass3.default)(ListContent, [{
    key: 'render',
    value: function render() {
      var data = [{ answerer: '聆听清风', answereDate: '1507564500', info: '10 个 CSS、SVG 和 Canvas 蒙版（mask）精彩实例' }, { answerer: '聆听东风', answereDate: '1507564800', info: '【面经】猿题库-2017年8月25日，散招实习生' }, { answerer: '聆听西风', answereDate: '1508124877', info: '[译]借助函数完成可组合的数据类型（软件编写）（第十部分）' }];
      return _react2.default.createElement('ul', { className: 'list-wrapper', __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, data.length > 0 && data.map(function (item, index) {
        return _react2.default.createElement('li', { key: new Date().getTime() + index, className: 'list-item', __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          }
        }, _react2.default.createElement('ul', { className: 'meta-list', __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          }
        }, _react2.default.createElement('li', { className: 'item title', __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          }
        }, item.answerer), _react2.default.createElement('li', { className: 'item', __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        }, (0, _utils.dateLeave)(item.answereDate))), _react2.default.createElement('div', { className: 'info-row', __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          }
        }, _react2.default.createElement(_link2.default, { href: '/post/' + new Date().getTime(), __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        }, item.info)));
      }), _react2.default.createElement(_style2.default, { jsx: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }));
    }
  }]);

  return ListContent;
}(_react2.default.Component);

/* ListContent.propTypes = {
  data: PropTypes.array.isRequired
} */

exports.default = ListContent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGlzdENvbnRlbnQvaW5kZXguanMiXSwibmFtZXMiOlsiUmVhY3QiLCJTdHlsZSIsIlByb3BUeXBlcyIsIkxpbmsiLCJkYXRlTGVhdmUiLCJMaXN0Q29udGVudCIsInByb3BzIiwiZGF0YSIsImFuc3dlcmVyIiwiYW5zd2VyZURhdGUiLCJpbmZvIiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsImluZGV4IiwiRGF0ZSIsImdldFRpbWUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQVE7Ozs7Ozs7SSxBQUVGO3VDQUNKOzt1QkFBQSxBQUFZLE9BQU87d0NBQUE7OzJJQUFBLEFBQ1gsQUFDUDs7Ozs7NkJBQ1MsQUFDUjtVQUFNLE9BQU8sQ0FDWCxFQUFDLFVBQUQsQUFBVyxRQUFRLGFBQW5CLEFBQWdDLGNBQWEsTUFEbEMsQUFDWCxBQUFrRCx3Q0FDbEQsRUFBQyxVQUFELEFBQVcsUUFBUSxhQUFuQixBQUFnQyxjQUFhLE1BRmxDLEFBRVgsQUFBa0QsOEJBQ2xELEVBQUMsVUFBRCxBQUFXLFFBQVEsYUFBbkIsQUFBZ0MsY0FBYSxNQUgvQyxBQUFhLEFBR1gsQUFBa0QsQUFFcEQ7NkJBQ0UsY0FBQSxRQUFJLFdBQUosQUFBYztvQkFBZDtzQkFBQSxBQUVJO0FBRko7T0FBQSxPQUVJLEFBQUssU0FBTCxBQUFZLFVBQUssQUFBSyxJQUFJLFVBQUEsQUFBQyxNQUFELEFBQU8sT0FBUDsrQkFDeEIsY0FBQSxRQUFJLEtBQUssSUFBQSxBQUFJLE9BQUosQUFBVyxZQUFwQixBQUFnQyxPQUFPLFdBQXZDLEFBQWlEO3NCQUFqRDt3QkFBQSxBQUNJO0FBREo7U0FBQSxrQkFDSSxjQUFBLFFBQUksV0FBSixBQUFjO3NCQUFkO3dCQUFBLEFBQ0U7QUFERjsyQkFDRSxjQUFBLFFBQUksV0FBSixBQUFjO3NCQUFkO3dCQUFBLEFBQ0c7QUFESDtnQkFERixBQUNFLEFBQ1EsQUFFUiwyQkFBQSxjQUFBLFFBQUksV0FBSixBQUFjO3NCQUFkO3dCQUFBLEFBQ0c7QUFESDtpQ0FDYSxLQU5uQixBQUNJLEFBSUUsQUFDRyxBQUFlLEFBR3BCLGdDQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7c0JBQWY7d0JBQUEsQUFDRTtBQURGOzJCQUNFLEFBQUMsZ0NBQUssTUFBTSxXQUFTLElBQUEsQUFBSSxPQUF6QixBQUFxQixBQUFXO3NCQUFoQzt3QkFBQSxBQUNLO0FBREw7Z0JBWGtCLEFBQ3hCLEFBU0ksQUFDRSxBQUNVO0FBZHRCLEFBRXFCLEFBa0JuQixPQWxCbUIsbUJBa0JuQixBQUFDLGlDQUFNLEtBQVA7b0JBQUE7c0JBckJKLEFBQ0UsQUFvQkUsQUFHTDtBQUhLOzs7Ozs7RUEvQmtCLGdCLEFBQU07O0FBcUNoQyxBQUlBOzs7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hYy9Eb3dubG9hZHMvcmVhY3QtY3BqIn0=