/**
 * polymorphism ---> different characteristics
 * ? a method having a common name but acts differently with the different classess, this is known as the polymorphism
 * 
 */


class Person {
    getSleep() : void{
        console.log(`I am a normal person, i sleep 8 hours a day`);
    }
}

class Student extends Person {
    getSleep() : void {
        console.log(`I am a student , i sleep foe 7 hours daily`);
    }
}

class NextLevelDeveloper extends Person {
    getSleep(): void {
        console.log(`I am a next level developer and i sleep 6 hours daily!`);
    }
}

const getSleepingHours = (params : Person) => {
    if(params instanceof Student){
        params.getSleep();
    }else if(params instanceof NextLevelDeveloper){
        params.getSleep();
    }else{
        params.getSleep();
    }
}

const person = new Person();
const student = new Student();
const developer = new NextLevelDeveloper();


getSleepingHours(person);
getSleepingHours(student);
getSleepingHours(developer);


//? same method giving us different result
//? we have to maintain same structure while declearing polymorphism

class Shape {
    getArea() : number{
        return 0;
    }
}

class Circle extends Shape {
    radius : number;

    constructor(radius : number){
        super();
        this.radius = radius;
    }

    getArea() : number {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    height : number;
    width : number;

    constructor(
        height : number,
        width : number
    ){
        super();
        this.height = height;
        this.width = width;
    }

    getArea(): number {
        return this.height * this.width;
    }
}

const getArea = (params : Shape) =>{
    if(params instanceof Circle){
        return Number(params.getArea().toFixed(2));
    }else if(params instanceof Rectangle){
        return params.getArea();
    }else{
        return params.getArea();
    }
}

const shape1 = new Shape();
const shapeCircle = new Circle(2);
const shapeRectangle = new Rectangle(4, 5);


console.log(getArea(shape1));
console.log(getArea(shapeCircle));
console.log(getArea(shapeRectangle));