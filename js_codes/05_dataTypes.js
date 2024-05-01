/*   People also ask
How many types of data type are there in JavaScript?

----> JavaScript includes primitive and non-primitive(Reference) data types.

      The primitive data types in JavaScript include string, number, boolean, undefined, null, and symbol. The non-primitive data type includes the object. A variable of primitive data type can contain only a single value.   */


//  JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.


//   Here are examples of each primitive data type in JavaScript:
//  String: A string is a sequence of characters, typically used to represent text. It is enclosed in single or double quotes. For example:

const myString = "Hello, world!"; // Example of a string


//  Number: A number is a numeric value, such as an integer or a floating-point number. For example:
const myNumber = 10;
const myFloat = 3.14;// Example of a number


//  Boolean: A boolean is a value that can be either true or false. For example:
const myBoolean = true; // Example of a boolean                   



// Null: The null value is used to represent the absence of a value. For example:
// const myVariable = null;
console.log(myVariable); // null                  



// Undefined: The undefined value is used to represent a variable that has not yet been assigned a value. For example:
let myVariable;
console.log(myVariable); // undefined


// Symbol: A symbol is a unique and immutable value. It is often used to create unique identifiers for objects. For example:
const mySymbol = Symbol("mySymbol");

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // false

