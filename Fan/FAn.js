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
    FAN.prototype.getSpeed = function () {
        return this.speed;
    };
    FAN.prototype.setSpeed = function (value) {
        this.speed = value;
    };
    FAN.prototype.getOn = function () {
        return this.on;
    };
    FAN.prototype.setOn = function (value) {
        this.on = value;
    };
    FAN.prototype.getRadius = function () {
        return this.radius;
    };
    FAN.prototype.setRadius = function (value) {
        this.radius = value;
    };
    FAN.prototype.getColor = function () {
        return this.color;
    };
    FAN.prototype.setColor = function (value) {
        this.color = value;
    };
    FAN.prototype.toString = function () {
        if (this.on) {
            return "fan is on ,speed: ".concat(this.speed, ",color: ").concat(this.color, ",radius :").concat(this.color);
        }
        else
            return "fan is off";
    };
    return FAN;
}());
var fan1 = new FAN(FAST, true, 10, 'yellow');
console.log(fan1.toString());
var fan2 = new FAN(MEDIUM, false, 5, 'blue');
console.log(fan2.toString());
