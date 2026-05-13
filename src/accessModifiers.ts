//? access will be modified with her
//? ----> Private properties

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
    addMoney(moneyIn : number){
        //? this is a method of class BankAccount
        this.balance = this.balance + moneyIn;
    }
}

const sakibAccount = new BankaAccount(1, 'sakib hossen', 10000);
console.log(sakibAccount);
// console.log({sakibAccount.balance, sakibAccount.userId, sakibAccount.userName});

console.log(
    {
        id : sakibAccount.userId,
        name : sakibAccount.userName,
        // balance : sakibAccount.balance
         // private property therefore only accessed within the class
    }
);

sakibAccount.addMoney(109);
console.log(sakibAccount);