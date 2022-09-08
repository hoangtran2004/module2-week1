import {Shape} from "./Shape";

export class Circle extends Shape {
    protected radius: number = 1.0

    constructor(color, filled, radius: number) {
        super(color, filled);
        this.radius = radius;

    }

    getRadius(): number {
        return this.radius
    }

    setRadius(radius: number): void {
        this.radius = radius
    }

    getArea(): number {
        return Math.PI * (this.radius * this.radius)
    }

    getPerimeter(): number {
        return Math.PI * (this.radius * this.radius)

    }

    toString(): string {
        return `A circle with radius ${this.getRadius()},which is a subclass of ${super.toString()}`
    }
}

