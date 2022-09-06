var SLOW = 1;
var MEDIUM = 2;
var FAST = 3;
var FAN = /** @class */ (function () {
    function FAN(speed, on, radius, color) {
        this.on = on;
        this.color = color;
        this.radius = radius;
        this.speed = speed;
    }
    FAN.prototype.Fan = function () {
        this.speed = SLOW;
        this.on = false;
        this.color = 'blue';
        this.radius = 5;
    };
    Object.defineProperty(FAN.prototype, "Speed", {
        get: function () {
            return this.speed;
        },
        set: function (value) {
            this.speed = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FAN.prototype, "On", {
        get: function () {
            return this.on;
        },
        set: function (value) {
            this.on = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FAN.prototype, "Color", {
        get: function () {
            return this.color;
        },
        set: function (value) {
            this.color = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FAN.prototype, "Radius", {
        get: function () {
            return this.radius;
        },
        set: function (value) {
            this.radius = value;
        },
        enumerable: false,
        configurable: true
    });
    FAN.prototype.toString = function () {
        if (this.on) {
            return "fan is on ,speed :".concat(this.speed, ",color").concat(this.Color, ",radius :").concat(this.radius);
        }
        else
            return 'fan is off';
    };
    return FAN;
}());
