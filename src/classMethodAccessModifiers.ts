class Person {
    name : string;
    age : number;
    skinColor : string;
    isGoodMan : boolean;

    constructor(
        name : string,
        age : number,
        skinColor : string,
        isGoodMan : boolean,
    ){
        this.age = age;
        this.name = name;
        this.skinColor = skinColor;
        this.isGoodMan = isGoodMan;
    }


    canWalk(){
        console.log(`${this.name} can walk and he is a ${this.isGoodMan ? 'good man' : 'bad man'}`);
    }

    changeAge(age : number){
        this.age = age;
    }

    set changeAge2(age : number){
        this.age = age;
    }
}


class Student extends Person {
    rollNumber : string;

    constructor(
        rollNumber : string,
        name : string,
        age : number,
        skinColor : string,
        isGoodMan : boolean,
    ){
        super(name, age, skinColor, isGoodMan);
        this.rollNumber = rollNumber;
    }
}

const student = new Student('1', 'Sakib Hossen', 24, 'black', true);
console.log(student);

student.changeAge(18);
console.log(student);
student.canWalk();

student.changeAge2 = 89;
console.log(student);

//? protected and the private property

class BankAccount {
    private id : number;
    name : string;
    private balance : number;
    //? if we set some property or method private that means that we have to access this or that property within that class in the other class we will not find it
    protected accountType : string;


    constructor(
        id : number,
        name : string,
        balance : number,
        accountType : string,
    ){
        this.id = id;
        this.name = name;
        this.balance = balance;
        this.accountType = accountType;
    }

    protected getTransactionHistory(){
        console.log('You will be needing permission for the transaction history!');
    }

    set setAccountBalance(balance : number){
        this.balance += balance;
    }

    get getAccountBalance (){
        return this.balance;
    }
}

const sakibAccount = new BankAccount(1, 'sakib hossen', 582, 'student');
console.log(sakibAccount);
sakibAccount.setAccountBalance = 18;
console.log(sakibAccount.getAccountBalance);

class StudentAccountType extends BankAccount {
    test(){
        this.getTransactionHistory();
    }
}

const s2 = new StudentAccountType(2, 'Niloy Ahmed', 500, 'student');
s2.test();


//? type guard with and without function
type AlphaNumeric = number | string; 
const add = (n1 : AlphaNumeric, n2 : AlphaNumeric ) : AlphaNumeric =>{
    if(typeof n1 === 'number' && typeof n2 === 'number'){
        //? this is known as the type narrowing or the type guarding
        return n1 + n2;
    }else{
        return n1.toString() + n2.toString();
    }
}
console.log(add('2', 2));
console.log(add(2, 9));
console.log(add('2', '9'));


type NormalUser = {
    name : string
}

type AdminUser = NormalUser & {role : 'admin'};

type Person2 = NormalUser | AdminUser;

const getUserRole = (user : Person2) => {
    if('role' in user){
        console.log(`${user.name} is a ${user.role}`);
    }else{
        console.log(user.name);
    }
}

const user1 : NormalUser = {
    name : 'Niloy Ahmed'
}

const user2 : AdminUser = {
    name : 'Akib Hossen',
    role : 'admin'
}
getUserRole(user1);
getUserRole(user2);


