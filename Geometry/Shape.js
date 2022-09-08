"use strict";
exports.__esModule = true;
exports.Shape = void 0;
var Shape = /** @class */ (function () {
    function Shape(Color, filled) {
        this.Color = 'red';
        this.filled = true;
        this.Color = Color;
        this.filled = filled;
    }
    Shape.prototype.getColor = function () {
        return this.Color;
    };
    Shape.prototype.setColor = function (color) {
        this.Color = color;
    };
    Shape.prototype.getFilled = function () {
        return this.filled;
    };
    Shape.prototype.setFilled = function (Filled) {
        this.filled = Filled;
    };
    Shape.prototype.toString = function () {
        return "a shape with color of ".concat(this.Color, " and ").concat(this.filled);
    };
    return Shape;
}());
exports.Shape = Shape;
