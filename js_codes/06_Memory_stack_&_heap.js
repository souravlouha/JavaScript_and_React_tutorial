//In JavaScript, primitive values (such as numbers, strings, booleans, etc.) are stored in the stack, while objects (such as arrays, functions, etc.) are stored in the heap.

// stack(primitive), heap( non primitive)
// somostho primitives type a stack use hoy , ar somostho non primitives type a heap use hoy , 

// Example--01
let myName = "sourav"

let anotherName = myName
anotherName = "babai "

console.log(myName);
console.log(anotherName);


// Example---02

let userOne ={
  email:"user@example.com",
  upi:"user.example"
}

let userTwo = userOne

userTwo.email = "sourav@example.com"

console.log(userOne.email);
console.log(userTwo.email);

//  stack ar modhhe amra ja dibo , seta amra akta copy pabo 
// kintu jodi amra heap ar modhhe kichu dei tahole amra setar refarence pabo .



