export class Shape {
    protected Color: string = 'red';
    protected filled: boolean = true;

    constructor(Color: string, filled: boolean) {
        this.Color = Color
        this.filled = filled;

    }

    getColor(): string {
        return this.Color
    }

    setColor(color: string): void {
        this.Color = color
    }

    getFilled(): boolean {
        return this.filled
    }

    setFilled(Filled: boolean): void {
        this.filled = Filled
    }

    toString(): string {
        return `a shape with color of ${this.Color} and ${this.filled}`
    }
}

