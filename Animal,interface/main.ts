import {Animal} from "./Animal";
import {Tiger} from "./Tiger";
import {Chicken} from "./Chicken";
import {Apple} from "./Apple";
import {Orange} from "./Orange";

console.log("------animal------")
let animal: Animal[] = [];
animal[0] = new Tiger();
animal[1] = new Chicken();
animal.forEach((item, index) => {
    console.log(item.makeSound());
    if (item instanceof Chicken) {
        console.log(item.howtoEat())
    }
})
console.log('fruit')
let fruits = []
fruits[0] = new Apple();
fruits[1] = new Orange();
fruits.forEach(item => {
    console.log(item.howtoEat())
})
