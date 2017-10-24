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

var _Search = require('../../components/Search/');

var _Search2 = _interopRequireDefault(_Search);

var _Button = require('../../components/Button/');

var _Button2 = _interopRequireDefault(_Button);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

var _mobxReact = require('mobx-react');

var _LoginAndRegister = require('./../LoginAndRegister/LoginAndRegister');

var _LoginAndRegister2 = _interopRequireDefault(_LoginAndRegister);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _dec,
    _class,
    _jsxFileName = '/Users/mac/Downloads/react-cpj/components/Header/index.js';

var Header = (_dec = (0, _mobxReact.inject)('store'), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
  (0, _inherits3.default)(Header, _React$Component);

  function Header(props) {
    (0, _classCallCheck3.default)(this, Header);

    return (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call(this, props));
  }

  (0, _createClass3.default)(Header, [{
    key: 'render',
    value: function render() {
      var userInfo = this.props.store.userInfo;

      console.log(this.props.store);
      return _react2.default.createElement('div', { className: 'header-wrapper', __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement('div', { className: 'header', __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement('div', { className: 'logo', __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, '\u5320'), _react2.default.createElement(_link2.default, { href: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement('a', { className: 'home-nav', __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, '\u9996\u9875')), _react2.default.createElement(_Search2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }), _react2.default.createElement('div', { className: 'header-wrapper-right', __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react2.default.createElement(_Button2.default, { text: '\u63D0\u95EE', __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }), _react2.default.createElement(_Button2.default, { text: '\u5199\u6587\u7AE0', className: 'button-write', style: { 'margin': '0 5px', padding: '5px 12px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }), userInfo.userName ? _react2.default.createElement('a', { className: 'button-portrait', __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, _react2.default.createElement('img', { src: userInfo.portrait ? userInfo.portrait : "./static/img/userIcon.png", __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      })) : _react2.default.createElement('div', { className: 'loginWrapper-nav', __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement('a', { className: 'login-nav', onClick: this.login.bind(this), __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, '\u767B\u5F55'), '/', _react2.default.createElement('a', { className: 'login-nav', onClick: this.login.bind(this), __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, '\u6CE8\u518C'))), _react2.default.createElement(_style2.default, { jsx: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      })), _react2.default.createElement(_LoginAndRegister2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }));
    }
  }, {
    key: 'login',
    value: function login() {
      var userInfo = this.props.store.userInfo;

      userInfo.login({ userName: 'lijc', password: '000000', portrait: 'http://img1.sycdn.imooc.com/592e85a40001ce8102630265-100-100.jpg' });
    }
  }]);

  return Header;
}(_react2.default.Component)) || _class) || _class);

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIlNlYXJjaCIsIkJ1dHRvbiIsIlN0eWxlIiwiaW5qZWN0Iiwib2JzZXJ2ZXIiLCJMb2dpbkFuZFJlZ2lzdGVyIiwiSGVhZGVyIiwicHJvcHMiLCJ1c2VySW5mbyIsInN0b3JlIiwiY29uc29sZSIsImxvZyIsInBhZGRpbmciLCJ1c2VyTmFtZSIsInBvcnRyYWl0IiwibG9naW4iLCJiaW5kIiwicGFzc3dvcmQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFTLEFBQVE7O0FBQ2pCLEFBQU87Ozs7Ozs7Ozs7SUFHRCxBLGlCQURMLHVCLEFBQUEsQUFBTztrQ0FFTjs7a0JBQUEsQUFBWSxPQUFPO3dDQUFBOztpSUFBQSxBQUNYLEFBQ1A7Ozs7OzZCQUNTO1VBQUEsQUFDRCxXQUFZLEtBQUEsQUFBSyxNQURoQixBQUNzQixNQUR0QixBQUNELEFBQ1A7O2NBQUEsQUFBUSxJQUFLLEtBQUEsQUFBSyxNQUFsQixBQUF3QixBQUN4Qjs2QkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUE7QUFBQTtTQURGLEFBQ0UsQUFDQSwyQkFBQSxBQUFDLGdDQUFLLE1BQU4sQUFBVztvQkFBWDtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxPQUFHLFdBQUgsQUFBYTtvQkFBYjtzQkFBQTtBQUFBO1NBSEosQUFFRSxBQUNFLEFBRUYsa0NBQUEsQUFBQzs7b0JBQUQ7c0JBTEYsQUFLRSxBQUNBO0FBREE7QUFBQSwwQkFDQSxjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQ0c7QUFESDt5QkFDRyxBQUFDLGtDQUFPLE1BQVIsQUFBYTtvQkFBYjtzQkFESCxBQUNHLEFBQ0E7QUFEQTswQkFDQSxBQUFDLGtDQUFPLE1BQVIsQUFBYSxzQkFBTSxXQUFuQixBQUE2QixnQkFBZSxPQUFPLEVBQUMsVUFBRCxBQUFXLFNBQVMsU0FBdkUsQUFBbUQsQUFBNkI7b0JBQWhGO3NCQUZILEFBRUcsQUFFRztBQUZIO21CQUVHLEFBQVMsMkJBQ1QsY0FBQSxPQUFHLFdBQUgsQUFBYTtvQkFBYjtzQkFBQSxBQUNFO0FBREY7T0FBQSx5Q0FDTyxLQUFLLFNBQUEsQUFBUyxXQUFXLFNBQXBCLEFBQTZCLFdBQXZDLEFBQWtEO29CQUFsRDtzQkFGRixBQUNBLEFBQ0U7QUFBQTs0QkFHRixjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNFLGNBQUEsT0FBRyxXQUFILEFBQWEsYUFBWSxTQUFTLEtBQUEsQUFBSyxNQUFMLEFBQVcsS0FBN0MsQUFBa0MsQUFBZ0I7b0JBQWxEO3NCQUFBO0FBQUE7U0FERixBQUNFLGlCQUVBLHFCQUFBLGNBQUEsT0FBRyxXQUFILEFBQWEsYUFBWSxTQUFTLEtBQUEsQUFBSyxNQUFMLEFBQVcsS0FBN0MsQUFBa0MsQUFBZ0I7b0JBQWxEO3NCQUFBO0FBQUE7U0FsQlYsQUFNRSxBQVNNLEFBR0UsQUFJUixtQ0FBQSxBQUFDLGlDQUFNLEtBQVA7b0JBQUE7c0JBdkJKLEFBQ0UsQUFzQkUsQUFFRjtBQUZFOzJCQUVGLEFBQUM7O29CQUFEO3NCQTFCSixBQUNFLEFBeUJFLEFBR0w7QUFISztBQUFBOzs7OzRCQUlHO1VBQUEsQUFDRixXQUFZLEtBQUEsQUFBSyxNQURmLEFBQ3FCLE1BRHJCLEFBQ0YsQUFDTDs7ZUFBQSxBQUFTLE1BQU0sRUFBQyxVQUFELEFBQVcsUUFBTyxVQUFsQixBQUE0QixVQUFTLFVBQXBELEFBQWUsQUFBK0MsQUFDL0Q7Ozs7O0VBeENrQixnQkFBTSxBLFVBRFQsQSxnQkE2Q2xCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYWMvRG93bmxvYWRzL3JlYWN0LWNwaiJ9