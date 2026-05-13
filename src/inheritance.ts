class Student {
    name : string;
    age : number;
    address : string;

    constructor(name : string, age : number, address : string){
        this.name = name;
        this.age = age;
        this.address = address;
    }

    getSleep(numOfHours : number){
        console.log(`${this.name} is sleeping ${numOfHours} hours`);
    }
}

const s1 = new Student('Sakib', 23, 'Tangail');
s1.getSleep(9)

class Teacher {
    name : string;
    age : number;
    address : string;
    designation : string;

    constructor(name : string, age : number, address : string, designation : string){
        this.name = name; //? common
        this.age = age; ////? common
        this.address = address; //? common
        this.designation = designation; //this is an extra property compared to the student class
    }

    getSleep(numOfHours : number){ //common
        console.log(`${this.name} is sleeping ${numOfHours} hours`);
    }

    takeClass(hours : number){ //own method
        console.log(`${this.name} takes ${hours} hours of class`);
    }
}

const teacher1 = new Teacher('Mr Smart', 32, 'Dhaka', 'Lecturer');
console.log(teacher1);
teacher1.takeClass(10);

//? making a parent class 

class Parent {
        name : string;
    age : number;
    address : string;

    constructor(name : string, age : number, address : string){
        this.name = name;
        this.age = age;
        this.address = address;
    }

    getSleep(numOfHours : number){
        console.log(`${this.name} is sleeping ${numOfHours} hours`);
    }
}

class Student2 extends Parent {};

class Teacher2 extends Parent {
    designation : string;
    constructor(
        name : string, 
        age : number, 
        address : string, 
        designation : string)
        {
        super(name, age, address);
        this.designation = designation;
    }

     takeClass(hours : number){ //own method
        console.log(`${this.name} takes ${hours} hours of class`);
    }
}

const s2 = new Student2('Ariyan Ahmed Shakib', 23, 'Tangail');
s2.getSleep(2)
console.log(s2);

const t2 = new Teacher2('Mr DhokaBaz', 24, 'Nagarpur','Lecturer');
console.log(t2);
t2.getSleep(5);
t2.takeClass(3)