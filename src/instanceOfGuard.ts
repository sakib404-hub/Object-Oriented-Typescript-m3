//? oop ---> instance of type guard or type narrowing

class Person {
    name : string;

    constructor(name : string){
        this.name = name;
    }

    getSleep(hours: number){
        console.log(`${this.name} sleeps ${hours}hours daily`);
    }
}

class Student extends Person{
    rollNumber : number

    constructor(name : string, rollNumber : number){
        super(name);
        this.rollNumber = rollNumber;
    }

    doStudy(hours : number){
        console.log(`${this.name} studies ${hours} hours daily`);
    }
}

class Teacher extends Person {
    designation : string;

    constructor(name : string, designation : string){
        super(name);
        this.designation = designation;
    }

    takeClass(hours : number){
        console.log(`${this.name} takes ${hours} of class daily`);
    }
}

const getUserInfo = (user : Person) =>{
    //? checking with the typeguard here
    if(user instanceof Student){
        user.getSleep(14)
        user.doStudy(2);
    }else if(user instanceof Teacher){
        user.takeClass(2);
        user.getSleep(10);
    }
    else{
        user.getSleep(8);
    }
}

const s1 = new Student('sakib', 12);
const t1 = new Teacher('Mr Teacher', 'Lecturer');
const person = new Person('Normal Person')

getUserInfo(s1);
getUserInfo(t1);
getUserInfo(person);


//? function gurad

const isStudent = (user : Person)=>{
    return user instanceof Student;
}
const isTeacher = (user : Person) =>{
    return user instanceof Teacher;
}

const getUserInfoWithFunction = (user : Person) =>{
    //? checking with the typeguard here
    if(isStudent(user)){
        user.getSleep(14)
        user.doStudy(2);
    }else if(isTeacher(user)){
        user.takeClass(2);
        user.getSleep(10);
    }
    else{
        user.getSleep(8);
    }
}

getUserInfoWithFunction(s1);