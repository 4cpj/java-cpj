"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty = require("_babel-runtime@6.23.0@babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getOwnPropertyDescriptor = require("_babel-runtime@6.23.0@babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _classCallCheck2 = require("_babel-runtime@6.23.0@babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("_babel-runtime@6.23.0@babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _mobxReact = require("mobx-react");

var _mobx = require("mobx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3;

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;

    (0, _defineProperty2.default)(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var UserInfo = (_class = function () {
    function UserInfo() {
        (0, _classCallCheck3.default)(this, UserInfo);

        _initDefineProp(this, "userName", _descriptor, this);

        _initDefineProp(this, "password", _descriptor2, this);

        _initDefineProp(this, "portrait", _descriptor3, this);
    } //observable data 注册一个数据，这个数据将会成为一个可mobx监测的数据


    (0, _createClass3.default)(UserInfo, [{
        key: "login",
        value: function login(e) {
            //注册action ,action里面可以改变mobx注册的数据,从而改变store里的数据
            this.userName = e.userName;
            this.password = e.password;
            this.portrait = e.portrait;
        }
    }]);

    return UserInfo;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "userName", [_mobx.observable], {
    enumerable: true,
    initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "password", [_mobx.observable], {
    enumerable: true,
    initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "portrait", [_mobx.observable], {
    enumerable: true,
    initializer: null
}), _applyDecoratedDescriptor(_class.prototype, "login", [_mobx.action], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, "login"), _class.prototype)), _class);

exports.default = new UserInfo();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlL3VzZXJJbmZvLmpzIl0sIm5hbWVzIjpbIm9ic2VydmVyIiwib2JzZXJ2YWJsZSIsImFjdGlvbiIsImNvbXB1dGVkIiwiVXNlckluZm8iLCJlIiwidXNlck5hbWUiLCJwYXNzd29yZCIsInBvcnRyYWl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUyxBQUFUOztBQUNBLEFBQVMsQUFBVCxBQUFxQixBQUFyQixBQUE2QixBQUE3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTSxBOzs7Ozs7Ozs7TUFDcUI7Ozs7OzhCQUdULEEsR0FBRSxBQUFHO0FBQ2Y7aUJBQUssQUFBTCxXQUFnQixFQUFFLEFBQWxCLEFBQ0E7aUJBQUssQUFBTCxXQUFnQixFQUFFLEFBQWxCLEFBQ0E7aUJBQUssQUFBTCxXQUFnQixFQUFFLEFBQWxCLEFBQ0g7Ozs7OzRFQVBBLEE7OzsyRUFDQSxBOzs7MkVBQ0EsQTs7O3lEQUNBLEEsd0dBTUw7O2tCQUFlLElBQUksQUFBSixBQUFmIiwiZmlsZSI6InVzZXJJbmZvLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYWMvRG93bmxvYWRzL3JlYWN0LWNwaiJ9