const SLOW: number = 1;
const MEDIUM: number = 2;
const FAST: number = 3;

class FAN {


    private speed: number;
    private on: boolean;
    private radius: number;
    private color: string;

    constructor(speed: number, on: boolean, radius: number, color: string) {

        this.on = on;
        this.color = color;
        this.radius = radius;
        this.speed = speed;

    }

    public Fan() {
        this.speed = SLOW;
        this.on = false;
        this.color = 'blue';
        this.radius = 5;
    }

    public get Speed(): number {
        return this.speed
    }

    public get On(): boolean {
        return this.on
    }

    public get Color(): string {
        return this.color
    }

    public get Radius(): number {
        return this.radius
    }

    public set Speed(value: number) {
        this.speed = value
    }

    public set On(value: boolean) {
        this.on = value
    }

    public set Color(value: string) {
        this.color = value
    }

    public set Radius(value: number) {
        this.radius = value
    }

    public toString() {
        if (this.on) {
            return `fan is on ,speed :${this.speed},color${this.Color},radius :${this.radius}`
        } else return 'fan is off'

    }
}