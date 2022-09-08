"use strict";
exports.__esModule = true;
exports.Point2d = void 0;
var Point2d = /** @class */ (function () {
    function Point2d(x, y) {
        this._x = x;
        this._y = y;
    }
    Point2d.prototype.getX = function () {
        return this._x;
    };
    Point2d.prototype.setX = function (value) {
        this._x = value;
    };
    Point2d.prototype.getY = function () {
        return this._y;
    };
    Point2d.prototype.setY = function (value) {
        this._y = value;
    };
    Point2d.prototype.getXY = function () {
        return [this._x, this._y];
    };
    Point2d.prototype.setXY = function (x, y) {
        this._x = x;
        this._y = y;
    };
    return Point2d;
}());
exports.Point2d = Point2d;
