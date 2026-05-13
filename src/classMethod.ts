/**
 * ? if we declear any function inside the class or inside any obeject therefore that is known as method
 */

class Pen {
    id : number;
    name : string;
    color : string;
    price : number;
    write(){
        console.log('This pen is writing');
    }

    changeColor(color : string){
        this.color = color;
    }

    constructor(id : number, name : string, color : string, price : number){
        this.id = id;
        this.name = name;
        this.color = color;
        this.price = price;
    }
}

const pen = new Pen(1, 'Metador','white', 5);
console.log(pen); 
pen.write();
pen.changeColor('black');
console.log(pen);

//? another way of using constructor with method

class Animal {
    id : number;
    name : string;
    species : string;
    breed : string;
    isPlayFul : boolean 

    constructor(id : number, name : string, species : string, breed: string, isPlayFul : boolean){
        this.id = id ;
        this.name = name,
        this.species = species,
        this.breed = breed,
        this.isPlayFul = isPlayFul
    }

    makeSound(){
        console.log(`${this.name} is making sound`);
    }
}

const dog = new Animal(1, 'Tommy', 'dog', 'German Shephered', true);
console.log(dog);
dog.makeSound();

const catBhai = new Animal( 2, 'Jerry', 'Cat', 'Hybrid', false);
console.log(catBhai);
catBhai.makeSound();

class Animal2 {
    constructor(
        public id: number,
        public name: string,
        public color: string
    ) {}

    canRun() {
        console.log(`${this.name} can run`);
    }
}

const horse = new Animal2(3, 'khepate ghora', 'black');
console.log(horse);
horse.canRun();

const mouse = new Animal2(4, 'Jerry', 'brown');
console.log(mouse);
mouse.canRun()