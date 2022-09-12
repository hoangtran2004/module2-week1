"use strict";
exports.__esModule = true;
exports.User = void 0;
var Role;
(function (Role) {
    Role[Role["admin"] = 1] = "admin";
    Role[Role["user"] = 2] = "user";
})(Role || (Role = {}));
var User = /** @class */ (function () {
    function User(Name, Email, Role) {
        this._Name = Name;
        this._Email = Email;
        this._Role = Role;
    }
    Object.defineProperty(User.prototype, "Name", {
        get: function () {
            return this._Name;
        },
        set: function (value) {
            this._Name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "Email", {
        get: function () {
            return this._Email;
        },
        set: function (value) {
            this._Email = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "Role", {
        get: function () {
            return this._Role;
        },
        set: function (value) {
            this._Role = value;
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.getInfo = function () {
        return [this._Name,
            this._Email,
            this._Role];
    };
    User.prototype.isAdmin = function () {
        if (this._Role === 1) {
            return 'is admin';
        }
        else
            return 'is user';
    };
    return User;
}());
exports.User = User;
