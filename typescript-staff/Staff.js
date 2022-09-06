var Staff = /** @class */ (function () {
    function Staff(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    Staff.prototype.getName = function () {
        return this.name;
    };
    Staff.prototype.setName = function (value) {
        value = this.name;
    };
    Staff.prototype.getEmail = function () {
        return this.email;
    };
    Staff.prototype.setEmail = function (value) {
        value = this.email;
    };
    Staff.prototype.getAge = function () {
        return this.age;
    };
    Staff.prototype.setAge = function (value) {
        value = this.age;
    };
    Staff.prototype.theStaff = function () {
        return "name :".concat(this.name, ",email :").concat(this.email, ",age :").concat(this.age);
    };
    return Staff;
}());
var staff = new Staff('Cheems', 'cheemschingchong@gmail.com', 12);
console.log(staff.theStaff());
