//? getter and setter


class BankaAccount {
    public readonly userId : number;
    public userName : string;
    private balance : number;

    constructor(
    userId : number,
    userName : string,
    balance : number
    ){
        this.balance = balance;
        this.userName = userName;
        this.userId = userId;
    }

    //? setting the new balance here 
    addMoney(moneyIn : number){
        this.balance = this.balance + moneyIn;
    }

    //? setting the balance with the setter
    set addBalance(amount : number){
        this.balance += amount;
    }

    //? getting the balance
    getBalance(){
        return this.balance;
    }

    //? getting the balance with the getter
    get getBalance2(){
        return  this.balance ;
    }
}

const sakibAccount = new BankaAccount(1, 'sakib hossen', 1000);
sakibAccount.addMoney(12); // calling the function
console.log(sakibAccount);
console.log(sakibAccount.getBalance()); //calling the function 

/**
 * ? There is a better version of getting the balance without the function calling
 * ? for doing this thing we need the getter and the setter 
 */

sakibAccount.getBalance;

sakibAccount.addBalance = 20;
console.log(sakibAccount);
console.log(sakibAccount.getBalance2);