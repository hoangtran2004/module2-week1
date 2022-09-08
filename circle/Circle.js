"use strict";
exports.__esModule = true;
exports.Circle = void 0;
var Circle = /** @class */ (function () {
    function Circle(radius, color) {
        this.radius = radius;
        this._color = color;
    }
    Circle.prototype.getRadius = function () {
        return this.radius;
    };
    Circle.prototype.getColor = function () {
        return this._color;
    };
    Circle.prototype.setColor = function (value) {
        this._color = value;
    };
    Circle.prototype.setRadius = function (radius) {
        this.radius = radius;
    };
    Circle.prototype.getArea = function () {
        return Math.PI * (this.radius * this.radius);
    };
    return Circle;
}());
exports.Circle = Circle;
var newCircle = new Circle(2, 'red');
console.log(newCircle);
console.log(newCircle.getArea());
