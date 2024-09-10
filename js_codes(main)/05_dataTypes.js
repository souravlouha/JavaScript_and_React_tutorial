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



/* ************************  Non-primitive(Reference) data types****************************************/


//Here is a simple example of a non-preemptive array in JavaScript:

// Create an array
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// Access the first element of the array
const firstFruit = fruits[0];

// Access the last element of the array
const lastFruit = fruits[fruits.length - 1];

// Loop through the array and print each element
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Output:
// Banana
// Orange
// Apple
// Mango



//Here is a simple example of non-preemptive objects in JavaScript:

// basicaly kono carley bracket {} ar bhetore ja thake takei object bola hoy , akhon ai bracket ar bhetore, je kono kichui thakte pare , dataType je kono kichu hote pare,  string hote pare , number hote pare , function o hote pare . 

// Create a non-preemptive object
const object = {
      name: 'John Doe',
      age: 30,
      occupation: 'Software Engineer',
    };
    
    // Try to change the name property
    object.name = 'Jane Doe';
    
    // The name property will not be changed
    console.log(object.name); // 'John Doe'


// Here is a simple example of a non-preemptive function in JavaScript:

function nonPreemptiveFunction(callback) {
      // Disable interrupts
      // Execute the callback function
      callback();
      // Enable interrupts
    }
    
    // Usage:
    nonPreemptiveFunction(function() {
      // Do something that should not be interrupted
    });


     // Important note 
    // https://262.ecma-international.org/5.1/#sec-11.4.3

    /*
    

    ********
The typeof Operator

Type of val	Result
Undefined  --->	"undefined"
Null	     --->   "object"
Boolean    --->   "boolean"
Number     --->   "number"
String     --->   "string"
Object (native and does not implement [[Call]])	      ---> "object"
Object (native or host and does implement [[Call]])	---> "function"
Object (host and does not implement [[Call]])	Implementation-defined except may not be     
      ---> "undefined", "boolean", "number", or "string".


    */
