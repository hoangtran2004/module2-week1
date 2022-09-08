export class Circle {
    protected radius: number;
    protected _color: string;

    constructor(radius: number, color: string) {

        this.radius = radius;
        this._color = color;

    }

    getRadius(): number {
        return this.radius
    }

    getColor(): string {
        return this._color;
    }

    setColor(value: string) {
        this._color = value;
    }

    setRadius(radius: number) {
        this.radius = radius
    }



    getArea(): number {
        return Math.PI * (this.radius * this.radius)
    }

}
let newCircle= new Circle(2,'red')
console.log(newCircle);
console.log(newCircle.getArea())