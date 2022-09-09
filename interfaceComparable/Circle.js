"use strict";
exports.__esModule = true;
exports.Circle = void 0;
var Circle = /** @class */ (function () {
    function Circle(Radius) {
        this._Radius = Radius;
    }
    Circle.prototype.getRadius = function () {
        return this._Radius;
    };
    Circle.prototype.setRadius = function (value) {
        this._Radius = value;
    };
    Circle.prototype.getPerimeter = function () {
        return Math.pow(this._Radius, 2) * Math.PI;
    };
    Circle.prototype.toString = function () {
        return "The circle with radius ".concat(this._Radius, " perimeter is ").concat(this.getPerimeter());
    };
    return Circle;
}());
exports.Circle = Circle;
var circle = new Circle(5);
console.log(circle.getPerimeter());
console.log(circle.toString());
