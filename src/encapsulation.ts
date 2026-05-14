/**
 * ? using the access modifiers like private or protected we encapsule a property or a method inside a class or in the inherited class therefore it is known as the encapsulation
 */

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