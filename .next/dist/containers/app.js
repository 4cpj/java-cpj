'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = WithConnect;

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

var _mobxReact = require('mobx-react');

var _store = require('../store/');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/mac/Downloads/react-cpj/containers/app.js';
function WithConnect(PageComponent) {
  return function APP() {
    var Page = function (_React$Component) {
      (0, _inherits3.default)(Page, _React$Component);

      function Page(props) {
        (0, _classCallCheck3.default)(this, Page);

        return (0, _possibleConstructorReturn3.default)(this, (Page.__proto__ || (0, _getPrototypeOf2.default)(Page)).call(this, props));
      }

      (0, _createClass3.default)(Page, [{
        key: 'render',
        value: function render() {
          return _react2.default.createElement(PageComponent, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            }
          });
        }
      }]);

      return Page;
    }(_react2.default.Component);

    return function (Connect) {
      return function (_React$Component2) {
        (0, _inherits3.default)(_class, _React$Component2);

        function _class(props) {
          (0, _classCallCheck3.default)(this, _class);

          var _this2 = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));

          _this2.store = _store2.default;
          return _this2;
        }

        (0, _createClass3.default)(_class, [{
          key: 'render',
          value: function render() {
            return _react2.default.createElement(_mobxReact.Provider, { store: this.store, __source: {
                fileName: _jsxFileName,
                lineNumber: 24
              }
            }, _react2.default.createElement(Connect, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 25
              }
            }));
          }
        }]);

        return _class;
      }(_react2.default.Component);
    };
  }()(PageComponent);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnMvYXBwLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvdmlkZXIiLCJTdG9yZSIsIldpdGhDb25uZWN0IiwiUGFnZUNvbXBvbmVudCIsIkFQUCIsIlBhZ2UiLCJwcm9wcyIsIkNvbXBvbmVudCIsIkNvbm5lY3QiLCJzdG9yZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVM7O0FBQ1QsQUFBTyxBQUNQOzs7Ozs7O0FBQWUsU0FBQSxBQUFTLFlBQVQsQUFBcUIsZUFBYyxBQUNoRDtrQkFBTyxBQUFTLE1BQUs7UUFBQSxBQUNYLG1DQURXO29DQUViOztvQkFBQSxBQUFhLE9BQU87NENBQUE7O2lJQUFBLEFBQ1osQUFDUDtBQUpZOzs7YUFBQTtpQ0FLSCxBQUNSOytDQUNFLEFBQUM7O3dCQUFEOzBCQURGLEFBQ0UsQUFFSDtBQUZHO0FBQUEsV0FBQTtBQVBTO0FBQUE7O2FBQUE7TUFDRSxnQkFERixBQUNRLEFBVXpCOztXQUFPLFVBQUEsQUFBUyxTQUFRLEFBQ3BCOzBDQUFBO3dDQUNFOzt3QkFBQSxBQUFhLE9BQU87OENBQUE7OzZJQUFBLEFBQ1osQUFDTjs7aUJBRmtCLEFBRWxCLEFBQUssQUFBUTtpQkFDZDtBQUpIOzs7ZUFBQTttQ0FLVyxBQUNQO21DQUNFLEFBQUMscUNBQVMsT0FBTyxLQUFqQixBQUFzQjswQkFBdEI7NEJBQUEsQUFDRTtBQURGO2FBQUEsZ0NBQ0UsQUFBQzs7MEJBQUQ7NEJBRkosQUFDRSxBQUNFLEFBR0w7QUFISztBQUFBO0FBUlI7QUFBQTs7ZUFBQTtRQUFxQixnQkFBckIsQUFBMkIsQUFhOUI7QUFkRCxBQWVIO0FBMUJNLEdBQUEsR0FBUCxBQUFPLEFBMEJILEFBQ0wiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYWMvRG93bmxvYWRzL3JlYWN0LWNwaiJ9