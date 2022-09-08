"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Point2d_1 = require("./Point2d");
var Point3d = /** @class */ (function (_super) {
    __extends(Point3d, _super);
    function Point3d(x, y, z) {
        var _this = _super.call(this, x, y) || this;
        _this._z = z;
        return _this;
    }
    Point3d.prototype.getZ = function () {
        return this._z;
    };
    Point3d.prototype.setZ = function (z) {
        this._z = z;
    };
    Point3d.prototype.getXYZ = function () {
        return [this._x, this._y];
    };
    Point3d.prototype.setXYZ = function (x, y, z) {
        this._x = x;
        this._y = y;
        this._z = z;
    };
    return Point3d;
}(Point2d_1.Point2d));
var newPoint3d = new Point3d(2, 3, 4);
console.log(newPoint3d);
console.log(newPoint3d.getXYZ());
