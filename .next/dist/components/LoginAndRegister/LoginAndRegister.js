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

var _Rinput = require('./../Rinput/Rinput');

var _Rinput2 = _interopRequireDefault(_Rinput);

var _index = require('./../Button/index');

var _index2 = _interopRequireDefault(_index);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/mac/Downloads/react-cpj/components/LoginAndRegister/LoginAndRegister.js';


var LoginAndRegister = function (_Component) {
    (0, _inherits3.default)(LoginAndRegister, _Component);

    function LoginAndRegister(props) {
        (0, _classCallCheck3.default)(this, LoginAndRegister);

        var _this = (0, _possibleConstructorReturn3.default)(this, (LoginAndRegister.__proto__ || (0, _getPrototypeOf2.default)(LoginAndRegister)).call(this, props));

        _this.state = {
            hidden: false
        };
        return _this;
    }

    (0, _createClass3.default)(LoginAndRegister, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', { style: this.props.style, className: 'LoginAndRegister-wrapper ' + (this.state.hidden ? 'hidden' : ''), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                }
            }, _react2.default.createElement(_Rinput2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                }
            }), _react2.default.createElement(_index2.default, { handleClick: this.handleClickPr.bind(this), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                }
            }), _react2.default.createElement(_style2.default, { jsx: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                }
            }));
        }
    }, {
        key: 'handleClickPr',
        value: function handleClickPr() {
            this.setState({
                hidden: !this.state.hidden
            });
        }
    }]);

    return LoginAndRegister;
}(_react.Component);

exports.default = LoginAndRegister;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTG9naW5BbmRSZWdpc3Rlci9Mb2dpbkFuZFJlZ2lzdGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiUmlucHV0IiwiQnV0dG9uIiwiU3R5bGUiLCJMb2dpbkFuZFJlZ2lzdGVyIiwicHJvcHMiLCJzdGF0ZSIsImhpZGRlbiIsInN0eWxlIiwiaGFuZGxlQ2xpY2tQciIsImJpbmQiLCJzZXRTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7OztJLEFBRUQ7OENBQ0Y7OzhCQUFBLEFBQVksT0FBTzs0Q0FBQTs7OEpBQUEsQUFDVCxBQUNOOztjQUFBLEFBQUs7b0JBRlUsQUFFZixBQUFhLEFBQ0Y7QUFERSxBQUNUO2VBRVA7Ozs7O2lDQUNRLEFBQ0w7bUNBQ0ksY0FBQSxTQUFLLE9BQU8sS0FBQSxBQUFLLE1BQWpCLEFBQXVCLE9BQU8sMENBQXVDLEtBQUEsQUFBSyxNQUFMLEFBQVcsU0FBWCxBQUFrQixXQUF2RixBQUE4QixBQUFrRTs4QkFBaEc7Z0NBQUEsQUFDSTtBQURKO2FBQUEsa0JBQ0ksQUFBQzs7OEJBQUQ7Z0NBREosQUFDSSxBQUNBO0FBREE7QUFBQSxnQ0FDQSxBQUFDLGlDQUFPLGFBQWEsS0FBQSxBQUFLLGNBQUwsQUFBbUIsS0FBeEMsQUFBcUIsQUFBd0I7OEJBQTdDO2dDQUZKLEFBRUksQUFDQTtBQURBO2dDQUNBLEFBQUMsaUNBQU0sS0FBUDs4QkFBQTtnQ0FKUixBQUNJLEFBR0ksQUFHWDtBQUhXOzs7Ozt3Q0FJSSxBQUNaO2lCQUFBLEFBQUs7d0JBQ00sQ0FBQyxLQUFBLEFBQUssTUFEakIsQUFBYyxBQUNTLEFBRzFCO0FBSmlCLEFBQ1Y7Ozs7O0FBbEJtQixBLEFBd0IvQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJMb2dpbkFuZFJlZ2lzdGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYWMvRG93bmxvYWRzL3JlYWN0LWNwaiJ9