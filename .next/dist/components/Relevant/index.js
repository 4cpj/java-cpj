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

var _config = require('../config');

var _wrapper = require('../../containers/wrapper');

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/mac/Downloads/react-cpj/components/Relevant/index.js';


var Relevant = function (_React$Component) {
  (0, _inherits3.default)(Relevant, _React$Component);

  function Relevant(props) {
    (0, _classCallCheck3.default)(this, Relevant);

    return (0, _possibleConstructorReturn3.default)(this, (Relevant.__proto__ || (0, _getPrototypeOf2.default)(Relevant)).call(this, props));
  }

  (0, _createClass3.default)(Relevant, [{
    key: 'render',
    value: function render() {
      var data = [{ answerer: '聆听清风', answereDate: '1507564500', info: '10 个 CSS、SVG 和 Canvas 蒙版（mask）精彩实例' }, { answerer: '聆听东风', answereDate: '1507564800', info: '【面经】猿题库-2017年8月25日，散招实习生' }, { answerer: '聆听西风', answereDate: '1508124877', info: '[译]借助函数完成可组合的数据类型（软件编写）（第十部分）' }, { answerer: '聆听北风', answereDate: '1508125228', info: '从template到DOM(Vue.js源码角度看内部运行机制)' }];
      return _react2.default.createElement(_wrapper.View, { viewStyle: { backgroundColor: '#fff' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement('div', { style: { padding: '14px 13px', color: _config.Theme.black, fontSize: '12px', borderBottom: '1px solid #e4e4e4', fontWeight: 400 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, '\u4E0E\u6211\u76F8\u5173'), _react2.default.createElement('ul', { className: 'relevant-wrapper', __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, data.length > 0 && data.map(function (item, index) {
        return _react2.default.createElement('li', { key: new Date().getTime() + index, className: 'relevant-item', __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          }
        }, _react2.default.createElement('ul', { className: 'relevant-list', __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          }
        }, _react2.default.createElement('li', { className: 'item', __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          }
        }, _react2.default.createElement('span', { 'class': 'relevant-type', __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        }, '\u514D\u8D39'), _react2.default.createElement(_link2.default, { href: '/me', __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        }, _react2.default.createElement('a', { 'class': 'relevant-answer', __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        }, item.answerer)), _react2.default.createElement('li', { className: 'item', __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          }
        }, (0, _utils.dateLeave)(item.answereDate) + ' 回答了您的问题'))));
      })), _react2.default.createElement(_style2.default, { jsx: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }));
    }
  }]);

  return Relevant;
}(_react2.default.Component);

exports.default = Relevant;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVsZXZhbnQvaW5kZXguanMiXSwibmFtZXMiOlsiUmVhY3QiLCJTdHlsZSIsIlByb3BUeXBlcyIsIkxpbmsiLCJUaGVtZSIsIlZpZXciLCJkYXRlTGVhdmUiLCJSZWxldmFudCIsInByb3BzIiwiZGF0YSIsImFuc3dlcmVyIiwiYW5zd2VyZURhdGUiLCJpbmZvIiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZyIsImNvbG9yIiwiYmxhY2siLCJmb250U2l6ZSIsImJvcmRlckJvdHRvbSIsImZvbnRXZWlnaHQiLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJEYXRlIiwiZ2V0VGltZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBUTs7QUFDUixBQUFROztBQUNSLEFBQVE7Ozs7Ozs7SSxBQUVGO29DQUNKOztvQkFBQSxBQUFZLE9BQU87d0NBQUE7O3FJQUFBLEFBQ1gsQUFDUDs7Ozs7NkJBQ1MsQUFDUjtVQUFNLE9BQU8sQ0FDWCxFQUFDLFVBQUQsQUFBVyxRQUFRLGFBQW5CLEFBQWdDLGNBQWEsTUFEbEMsQUFDWCxBQUFrRCx3Q0FDbEQsRUFBQyxVQUFELEFBQVcsUUFBUSxhQUFuQixBQUFnQyxjQUFhLE1BRmxDLEFBRVgsQUFBa0QsOEJBQ2xELEVBQUMsVUFBRCxBQUFXLFFBQVEsYUFBbkIsQUFBZ0MsY0FBYSxNQUhsQyxBQUdYLEFBQWtELG1DQUNsRCxFQUFDLFVBQUQsQUFBVyxRQUFRLGFBQW5CLEFBQWdDLGNBQWEsTUFKL0MsQUFBYSxBQUlYLEFBQWtELEFBRXBEOzZCQUNHLEFBQUMsK0JBQUssV0FBVyxFQUFDLGlCQUFsQixBQUFpQixBQUFrQjtvQkFBbkM7c0JBQUEsQUFDRztBQURIO09BQUEsa0JBQ0csY0FBQSxTQUFLLE9BQU8sRUFBQyxTQUFELEFBQVUsYUFBWSxPQUFPLGNBQTdCLEFBQW1DLE9BQU8sVUFBMUMsQUFBb0QsUUFBTyxjQUEzRCxBQUF5RSxxQkFBb0IsWUFBekcsQUFBWSxBQUF5RztvQkFBckg7c0JBQUE7QUFBQTtTQURILEFBQ0csQUFHQSw2Q0FBQSxjQUFBLFFBQUksV0FBSixBQUFjO29CQUFkO3NCQUFBLEFBRUk7QUFGSjtjQUVJLEFBQUssU0FBTCxBQUFZLFVBQUssQUFBSyxJQUFJLFVBQUEsQUFBQyxNQUFELEFBQU8sT0FBUDsrQkFDeEIsY0FBQSxRQUFJLEtBQUssSUFBQSxBQUFJLE9BQUosQUFBVyxZQUFwQixBQUFnQyxPQUFPLFdBQXZDLEFBQWlEO3NCQUFqRDt3QkFBQSxBQUNFO0FBREY7U0FBQSxrQkFDRSxjQUFBLFFBQUksV0FBSixBQUFjO3NCQUFkO3dCQUFBLEFBQ0U7QUFERjsyQkFDRSxjQUFBLFFBQUksV0FBSixBQUFjO3NCQUFkO3dCQUFBLEFBQ0U7QUFERjsyQkFDRSxjQUFBLFVBQU0sU0FBTixBQUFZO3NCQUFaO3dCQUFBO0FBQUE7V0FERixBQUNFLEFBR0EsaUNBQUEsQUFBQyxnQ0FBSyxNQUFOLEFBQVk7c0JBQVo7d0JBQUEsQUFDRTtBQURGOzJCQUNFLGNBQUEsT0FBRyxTQUFILEFBQVM7c0JBQVQ7d0JBQUEsQUFBNEI7QUFBNUI7Z0JBTEosQUFJRSxBQUNFLEFBQWlDLEFBRW5DLDRCQUFBLGNBQUEsUUFBSSxXQUFKLEFBQWM7c0JBQWQ7d0JBQUEsQUFDRztBQURIO2lDQUNhLEtBQVYsQUFBZSxlQVhBLEFBQ3hCLEFBQ0UsQUFDRSxBQU9FLEFBQ2lDO0FBakJoRCxBQUlHLEFBRXFCLEFBb0JwQixPQXBCb0Isb0JBb0JwQixBQUFDLGlDQUFNLEtBQVA7b0JBQUE7c0JBM0JQLEFBQ0csQUEwQkksQUFHUjtBQUhROzs7Ozs7RUF0Q1ksZ0JBQU0sQSxBQTZDN0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hYy9Eb3dubG9hZHMvcmVhY3QtY3BqIn0=