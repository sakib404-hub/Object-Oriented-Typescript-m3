//? class ---> class is a fundamental building block of object

console.log('Here we will learn about class and objects or simply object oriented programming')

class Animal {
    id : number;
    name : string;
    species : string;
    sound : string;

    constructor (id: number,name : string, species : string, sound : string){
        this.name = name;
        this.id = id;
        this.species = species;
        this.sound = sound;
    }
}

//? in the function it is known as perameter and in the calling it is known as the argument 
function Add(n1 : number) : number {
    return n1;
}

const dog = new Animal(12, 'dogesh bhai', 'dog','ghew ghew')
const catBhai = new Animal(13, 'Cat Bhai','cat', 'meow meow')
console.log(dog.name);
console.log(dog.sound);
console.log(catBhai);


class Human {
    name : string;
    skinColor : string;
    age : number;
    canTalk : boolean;
    constructor(name : string, skinColor : string, age : number, canTalk : boolean){
        this.name = name;
        this.age = age;
        this.skinColor = skinColor;
        this.canTalk = canTalk;
    }
}
const personSakib = new Human('Sakib', 'black',23, true);
console.log(personSakib.name);
personSakib.name = 'Ariyan Ahmed Shakib';
console.log(personSakib);
