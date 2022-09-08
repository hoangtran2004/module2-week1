import {Point2d} from "./Point2d";

class Point3d extends Point2d {
    protected _z: number;

    constructor(x: number, y: number, z: number) {
        super(x, y);
        this._z = z;
    }

    getZ(): number {
        return this._z;
    }

    setZ(z: number) {
        this._z = z;
    }

    getXYZ(): object {
         return [this._x,this._y]
    }

    setXYZ(x: number, y: number, z: number) {
        this._x = x;
        this._y = y;
        this._z = z
    }
}

let newPoint3d = new Point3d(2, 3, 4);
console.log(newPoint3d);
console.log(newPoint3d.getXYZ())
