export class Circle {
    private _Radius: number;

    constructor(Radius: number) {
        this._Radius = Radius;
    }

    getRadius(): number {
        return this._Radius;
    }

    setRadius(value: number) {
        this._Radius = value;
    }

    getPerimeter(): number {
        return Math.pow(this._Radius, 2) * Math.PI
    }

    toString(): string {
        return `The circle with radius ${this._Radius} perimeter is ${this.getPerimeter()}`
    }
}

let circle = new Circle(5);
console.log(circle.getPerimeter());
console.log(circle.toString());
