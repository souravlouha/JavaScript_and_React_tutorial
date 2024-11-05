oooooooooooooook
const myArr = [0,1, 2, 3, 4, 5]

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// ai link a sob kichu bistarito bola ache 
 
/* In JavaScript, arrays aren't primitives but are instead Array objects with the following core characteristics:

JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)
JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.
JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.
JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).*/

// A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too. That behavior contrasts with the behavior of a deep copy, in which the source and copy are completely independent.

// A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you can be assured you're not causing the other object to change too. That behavior contrasts with the behavior of a shallow copy, in which changes to nested properties in the source or the copy may cause the other object to change too.



 const myHeros = ["Thore ","Ironman ", "Hanuman"]
 const myArr2 = new Array(1,2,3,4)
 console.log(myArr2[2]);



// some methods of arrays
// Push and Pop 
myArr.push(6)
console.log(myArr);

myArr.pop() // pop method use jab hum log karte hai to pop kuch vi nahi dekh kar sabse last wala value delet kardeta hai 
 console.log(myArr);




myArr.unshift(6) // unshift method use
console.log(myArr);
// unshift method use basically for any value , that is inserted into the () brackets ; that value will be inserted in the first position of the exsisting array . like [1,2,3 ] ; after that myArr.unshift(4) , and then output is [4,1,2,3] 


myArr.shift() // shift method use
console.log(myArr);

// shift method use basically for any value , that is removed from the array ; that value will be removed from the first position of the exsisting array . like [4,1,2,3 ] ; after that myArr.shift() , and then output is [1,2,3]

