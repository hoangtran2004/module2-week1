import {Circle} from "./Circle";

 class Cylinder extends Circle{
    private _height:number;
    constructor(color,radius,height) {
        super(color,radius);
        this._height=height;

    }

     getHeight(): number {
         return this._height;
     }

     setHeight(value: number) {
         this._height = value;
     }
     getVolume():number{
        return Math.PI * (this.radius * this.radius)*this._height
     }
 }
 let newCylinder =new Cylinder('blue',4,5);
console.log(newCylinder.getVolume());