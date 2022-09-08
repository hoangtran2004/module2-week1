import {Shape} from "./Shape";

export class Rectangle extends Shape {
    protected width: number = 1.0;
    protected length: number = 1.0;

    constructor(width: number, length: number, color, filled,) {
        super(color, filled);
        this.length = length;
        this.width = width;

    }

    getWidth(): number {
        return this.width
    }

    setWidth(width: number) {
        this.width = width
    }

    getLength(): number {
        return this.length
    }

    setLength(length: number) {
        this.width = length
    }

    getArea(): number {
        return this.length * this.width
    }

    getPerimeter(): number {
        return (this.width + this.length) * 2
    }
    toString(): string {
        return `A rectangle with width ${this.width} and length ${this.length},which is subclass of ${super.toString()}`;
    }
}

let rectangle = new Rectangle(5, 8, 'blue', true);
console.log(rectangle);
console.log(rectangle.toString());
console.log(rectangle.getArea());
console.log(rectangle.getPerimeter())