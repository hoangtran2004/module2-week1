const SLOW: number = 1;
const MEDIUM: number = 2;
const FAST: number = 3;

class FAN {


    private speed: number;
    private on: boolean;
    private radius:number ;
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

    getSpeed(): number {
        return this.speed
    }

    setSpeed(value: number) {
        this.speed = value
    }

    getOn(): boolean {
        return this.on
    }

    setOn(value: boolean) {
        this.on = value
    }

    getRadius(): number {
        return this.radius
    }

    setRadius(value: number) {
        this.radius = value
    }

    getColor(): string {
        return this.color
    }

    setColor(value: string) {
        this.color = value
    }public  toString(){
        if(this.on) {
            return `fan is on ,speed: ${this.speed},color: ${this.color},radius :${this.color}`
        }else return `fan is off`
    }
}let fan1 =new FAN(FAST,true,10,'yellow')
console.log(fan1.toString());
let fan2=new FAN(MEDIUM,false,5,'blue')
console.log(fan2.toString());
