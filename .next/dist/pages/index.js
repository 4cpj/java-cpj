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

var _link = require('_next@3.2.2@next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _mobxReact = require('mobx-react');

var _app = require('../containers/app');

var _app2 = _interopRequireDefault(_app);

var _wrapper = require('../containers/wrapper');

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Nav = require('../components/Nav');

var _Nav2 = _interopRequireDefault(_Nav);

var _Breadcrumbs = require('../components/Breadcrumbs/');

var _Breadcrumbs2 = _interopRequireDefault(_Breadcrumbs);

var _ListContent = require('../components/ListContent/');

var _ListContent2 = _interopRequireDefault(_ListContent);

var _Relevant = require('../components/Relevant/');

var _Relevant2 = _interopRequireDefault(_Relevant);

var _config = require('../components/config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _dec,
    _class,
    _jsxFileName = '/Users/mac/Downloads/react-cpj/pages/index.js?entry';

var Page = (_dec = (0, _mobxReact.inject)('store'), (0, _app2.default)(_class = _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
  (0, _inherits3.default)(Page, _React$Component);

  function Page(props) {
    (0, _classCallCheck3.default)(this, Page);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Page.__proto__ || (0, _getPrototypeOf2.default)(Page)).call(this, props));

    _this.state = {
      navData: _config.navArr,
      defaultValue: _config.navArr[0]
    };
    return _this;
  }

  (0, _createClass3.default)(Page, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('div', { style: { backgroundColor: '#f5f5f5' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react2.default.createElement(_Header2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }), _react2.default.createElement(_wrapper.Wrapper, { wrapperStyle: _config.wrapperStyle, wrapperContentStyle: _config.wrapperContentStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement(_Nav2.default, { data: this.state.navData, defaultValue: this.state.defaultValue, click: function click(e) {
          _this2.handClick(e);
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      })), _react2.default.createElement(_wrapper.Wrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, _react2.default.createElement('div', { style: { display: 'inline-block', verticalAlign: 'top', width: '750px', marginRight: '16px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, _react2.default.createElement(_wrapper.View, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react2.default.createElement(_Breadcrumbs2.default, { text: this.state.defaultValue, __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      })), _react2.default.createElement(_wrapper.View, { viewStyle: { margin: '18px 0', backgroundColor: '#fff' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement('div', { style: { padding: '13px 10px', color: _config.Theme.black, fontSize: '15px', borderBottom: '1px solid #e4e4e4', fontWeight: 500 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, '\u514D\u8D39\u533A'), _react2.default.createElement(_ListContent2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }))), _react2.default.createElement('div', { style: { display: 'inline-block', verticalAlign: 'top', width: '300px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react2.default.createElement(_Relevant2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }))));
    }
  }, {
    key: 'handClick',
    value: function handClick(item) {
      this.setState({
        defaultValue: item
      });
    }
  }]);

  return Page;
}(_react2.default.Component)) || _class) || _class) || _class);

exports.default = Page;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsImluamVjdCIsIm9ic2VydmVyIiwicm9vdEFwcCIsIldyYXBwZXIiLCJWaWV3IiwiSGVhZGVyIiwiTmF2IiwiQnJlYWRjcnVtYnMiLCJMaXN0Q29udGVudCIsIlJlbGV2YW50IiwiVGhlbWUiLCJuYXZBcnIiLCJ3cmFwcGVyU3R5bGUiLCJ3cmFwcGVyQ29udGVudFN0eWxlIiwiUGFnZSIsInByb3BzIiwic3RhdGUiLCJuYXZEYXRhIiwiZGVmYXVsdFZhbHVlIiwiYmFja2dyb3VuZENvbG9yIiwiZSIsImhhbmRDbGljayIsImRpc3BsYXkiLCJ2ZXJ0aWNhbEFsaWduIiwid2lkdGgiLCJtYXJnaW5SaWdodCIsIm1hcmdpbiIsInBhZGRpbmciLCJjb2xvciIsImJsYWNrIiwiZm9udFNpemUiLCJib3JkZXJCb3R0b20iLCJmb250V2VpZ2h0IiwiaXRlbSIsInNldFN0YXRlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBUyxBQUFROztBQUNqQixBQUFPOzs7O0FBQ1AsQUFBUSxBQUFTOztBQUNqQixBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQVEsQUFDUixBQUFRLEFBQVEsQUFBYzs7Ozs7Ozs7SSxBQUd4QixlQURJLHVCQUFBLEFBQU8sQTtnQ0FFZjs7Z0JBQUEsQUFBWSxPQUFPO3dDQUFBOztrSUFBQSxBQUNYLEFBQ047O1VBQUEsQUFBSztBQUFRLEFBQ0QsQUFDVDtvQkFBYyxlQUpBLEFBRWpCLEFBQWEsQUFFSSxBQUFPO0FBRlgsQUFDVjtXQUdKOzs7Ozs2QkFDUzttQkFDUjs7NkJBQ0UsY0FBQSxTQUFLLE9BQU8sRUFBQyxpQkFBYixBQUFZLEFBQWtCO29CQUE5QjtzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRSxBQUFDOztvQkFBRDtzQkFERixBQUNFLEFBQ0E7QUFEQTtBQUFBLDBCQUNBLEFBQUMsa0NBQUQsQUFBUyxBQUFjLG9DQUF2QixBQUFxQyxBQUFxQjtvQkFBMUQ7c0JBQUEsQUFDQztBQUREO3lCQUNDLEFBQUMsK0JBQUksTUFBTSxLQUFBLEFBQUssTUFBaEIsQUFBc0IsU0FBUyxjQUFjLEtBQUEsQUFBSyxNQUFsRCxBQUF3RCxjQUFjLE9BQU8sZUFBQSxBQUFDLEdBQUksQUFBQztpQkFBQSxBQUFLLFVBQUwsQUFBZSxBQUFHO0FBQXJHO29CQUFBO3NCQUhILEFBRUUsQUFDQyxBQUVEO0FBRkM7MkJBRUQsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQSxTQUFLLE9BQU8sRUFBQyxTQUFELEFBQVUsZ0JBQWUsZUFBekIsQUFBd0MsT0FBTyxPQUEvQyxBQUFzRCxTQUFRLGFBQTFFLEFBQVksQUFBMkU7b0JBQXZGO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLHVDQUFZLE1BQU0sS0FBQSxBQUFLLE1BQXhCLEFBQThCO29CQUE5QjtzQkFGSixBQUNFLEFBQ0UsQUFFRjtBQUZFOzJCQUVGLEFBQUMsK0JBQUssV0FBVyxFQUFDLFFBQUQsQUFBUyxVQUFTLGlCQUFuQyxBQUFpQixBQUFtQztvQkFBcEQ7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUEsU0FBSyxPQUFPLEVBQUMsU0FBRCxBQUFVLGFBQVksT0FBTyxjQUE3QixBQUFtQyxPQUFPLFVBQTFDLEFBQW9ELFFBQU8sY0FBM0QsQUFBeUUscUJBQW9CLFlBQXpHLEFBQVksQUFBeUc7b0JBQXJIO3NCQUFBO0FBQUE7U0FERixBQUNFLEFBR0EsdUNBQUEsQUFBQzs7b0JBQUQ7c0JBVE4sQUFDRSxBQUlFLEFBSUUsQUFJSjtBQUpJO0FBQUEsNEJBSUosY0FBQSxTQUFLLE9BQU8sRUFBQyxTQUFELEFBQVUsZ0JBQWUsZUFBekIsQUFBd0MsT0FBTyxPQUEzRCxBQUFZLEFBQXNEO29CQUFsRTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQzs7b0JBQUQ7c0JBcEJSLEFBQ0UsQUFLRSxBQWFFLEFBQ0UsQUFLVDtBQUxTO0FBQUE7Ozs7OEJBTUEsQSxNQUFLLEFBQ2I7V0FBQSxBQUFLO3NCQUFMLEFBQWMsQUFDRSxBQUVqQjtBQUhlLEFBQ1o7Ozs7O0VBckNhLGdCQUFNLEEsVUFERSxBLHNCQUExQixBLEtBMkNEOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYWMvRG93bmxvYWRzL3JlYWN0LWNwaiJ9