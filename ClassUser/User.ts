enum Role {
    admin = 1,
    user
}

export class User {
    private _Name: string;
    private _Email: string;
    private _Role: Role

    constructor(Name: string, Email: string, Role: Role) {
        this._Name = Name;
        this._Email = Email;
        this._Role = Role;
    }

    get Name(): string {
        return this._Name;
    }

    set Name(value: string) {
        this._Name = value;
    }

    get Email(): string {
        return this._Email;
    }

    set Email(value: string) {
        this._Email = value;
    }

    get Role(): Role {
        return this._Role;
    }

    set Role(value: Role) {
        this._Role = value;
    }

    getInfo() {
        return [this._Name,
            this._Email,
            this._Role]
    }

    isAdmin() {
        if (this._Role === 1) {
            return 'is admin'
        } else return 'is user'
    }
}

