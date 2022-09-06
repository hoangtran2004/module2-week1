class Staff {
    public name: string;
    public email: string;
    public age: number;

    constructor(name: string, email: string, age: number) {
        this.name = name;
        this.email = email;
        this.age = age;

    }

    getName(): string {
        return this.name
    }

    setName(value: string) {
        value = this.name
    }

    getEmail(): string {
        return this.email
    }

    setEmail(value: string) {
        value = this.email
    }

    getAge(): number {
        return this.age
    }

    setAge(value: number) {
        value = this.age
    }
    public theStaff (){
        return `name :${this.name},email :${this.email},age :${this.age}`
    }
}let staff=new Staff('Cheems','cheemschingchong@gmail.com',12);
console.log(staff.theStaff())