/**
 * There are two types of type guard ---> in , typeof
 */

type Alphanumeric = number | string

const add = (n1 : Alphanumeric, n2 : Alphanumeric) : Alphanumeric => {

    //? this is known as typegurard or type narrowing
  if(typeof n1 === "number" && typeof n2 === 'number'){
    return n1 + n2;
  }else {
    return n1.toString() + n2.toString();
  }
};
console.log(add(2, 2));
console.log(add('2', 2))

//? in guard

type NormalUser = {
    name : string;
}

type AdminUser = NormalUser & {role : 'admin'};

const getUserInfo  = (user : NormalUser | AdminUser) =>{
    if('role' in user){
        //? this is known as the in type guard 
        //? checking if the property exist in the object 
        console.log(`User ${user.name}, and his role is ${user.role}`);
    }else{
        console.log(`User : ${user.name}`);
    }
}

const user1 : NormalUser = {
    name : 'shakib Hossen' 
}
const adminUser : AdminUser = {
    name : 'Admin',
    role : 'admin'
}
getUserInfo(user1);
getUserInfo(adminUser);
