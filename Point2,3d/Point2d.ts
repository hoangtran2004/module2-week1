export class Point2d {
    protected _x: number;
    protected _y: number;

    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    getX(): number {
        return this._x;
    }

    setX(value: number) {
        this._x = value;
    }

    getY(): number {
        return this._y;
    }

    setY(value: number) {
        this._y = value;
    }

    getXY(): object {
        return [this._x, this._y]
    }

    setXY(x: number, y: number) {
        this._x = x;
        this._y = y;
    }
}