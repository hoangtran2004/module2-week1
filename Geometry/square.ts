import {Rectangle} from "./Rectangle";

export class Square extends Rectangle {
    constructor(side, color, filled) {
        super(side, side, color, filled);

    }

    getSide(): number {
        return this.length
    }

    setSide(side: number): void {
        this.length = side
    }

    setWidth(side: number): void {
        this.width = side
    }

    setLength(side: number): void {
        this.length = side
    }

    toString(): string {
        return `A square with side ${this.getSide()}, which is a subclass of ${super.toString()}`

    }
}
let newSquare=new Square(5,'red',true);
console.log(newSquare);
console.log(newSquare.toString());