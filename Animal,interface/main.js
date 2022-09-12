"use strict";
exports.__esModule = true;
var Tiger_1 = require("./Tiger");
var Chicken_1 = require("./Chicken");
var Apple_1 = require("./Apple");
var Orange_1 = require("./Orange");
console.log("------animal------");
var animal = [];
animal[0] = new Tiger_1.Tiger();
animal[1] = new Chicken_1.Chicken();
animal.forEach(function (item, index) {
    console.log(item.makeSound());
    if (item instanceof Chicken_1.Chicken) {
        console.log(item.howtoEat());
    }
});
console.log('fruit');
var fruits = [];
fruits[0] = new Apple_1.Apple();
fruits[1] = new Orange_1.Orange();
fruits.forEach(function (item) {
    console.log(item.howtoEat());
});
