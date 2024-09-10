
// both sides are number presents

console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2!=1);
console.log(2==1);

// both sides are not same , because one side is String and the other side is number

console.log("2">1);
console.log("02">1);



//The reason is that an equality check == and comparisons > < >= <<= work differently.

//Comparisons convert null to a number, treating it as 0. That's why (3) null >= 0 is true and (1) null > 0 is false.


// sobsomy clean code ar value sob theke besi , ar amra ,ai null and undefined ar comparison babohar korbo na , 

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);



// ===

console.log("2" === 2);