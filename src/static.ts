/**
 * ? static ---> meaning that will not be changed
 * ? static is meaning that we are accessing multiple instance from a common memory using the static keyword
 */

class Counter {
    static count : number = 0 //? as it is initialized here therefore we do not need the constructor to initialize

    constructor(){}

    increment(){
        return Counter.count += 1;
        //? a premium property of the class counter
    }

    decrement(){
        return Counter.count -= 1;
        //? a premium property of the class counter by applying statistics
    }
}

const instance1 = new Counter();
console.log(instance1.increment());
console.log(instance1.increment());
console.log(instance1.increment());
console.log(instance1.increment());

console.log('==============================intance - 2');

const instance2 = new Counter();
console.log(instance2.increment());
console.log(instance2.increment());
console.log(instance2.increment());
console.log(instance2.increment());
console.log(instance2.increment());


//? we can also made a method static -->

class Counter2 {
    static count : number = 0;

    constructor(){}

    static increment(){
        return Counter.count += 1;
    }
    static decrement(){
        return Counter.count -= 1;
    }
}

console.log(Counter2.increment); //? therefore by creating the static method we will no longer in need of  creating instance of that class to access the properties or the method
console.log(Counter2.increment);
console.log(Counter2.increment);
console.log(Counter2.increment);
console.log(Counter2.decrement);
console.log(Counter2.decrement);
