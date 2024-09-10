const name = "sourav"
const repoCount = 10

// ai bhabe amra kono duto string ke aksathe  + sign ar madhhome likhte pari . But ai podhotti ta aktu purono mane outdated , tai amra ata otota use korbo na . 
console.log(name  + repoCount);

// Tar bodole amra ai sentex ta use korbo , karon ai ta aktu mordan , 

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);
console.log(`${name} has ${repoCount} repos`);



//To declare variables in JavaScript, you need to use the var, let, or const keyword. Whether it is a string or a number, use the var, let, or const keyword for its declaration. But for declaring a string variable we had to put the string inside double quotes or single quotes.

//var myName = "your name"; "your name" is called a string literal. A string literal, or string, is a series of zero or more characters enclosed in single or double quotes. You should use this syntax when declaring a variable as a string (e.g. var myName = "igorgetmeabrain"; )


// The declaration of string literals happens by enclosing the sequence of characters in double quotation marks. Character arrays are mutable, so you can alter individual characters in the array. Typically, string literals are stored in read-only memory and are immutable.


const gameName = new String('sourav-louha ece-engineer')

console.log(gameName[0]);
console.log(gameName[1]);
console.log(gameName[2]);
console.log(gameName[5]);

// string ar 0 position a s, 1 position o, 2 position u, 3 position r, 4 position a, 5 position v , ai bhabe declare kora thake .

console.log(gameName.__proto__);

// amra console.log(gameName[0]) ai bhabe position likheo korte pari but amra ai khane akta Sintex use koebo seta hochhe console.log(gameName.__proto__); ai Sintex ta . ata vscode a {}object show korabe but consol a korle atar modhhe thaka value gulo o show korbe .


// aro baki sintex gulor modhhe akta 

console.log(gameName.length);  // length show korbe number ar format a .

console.log(gameName.toUpperCase());  // sob capital a convert hoye jabe . 

console.log(gameName.indexOf('a')); // prothom ta cherectera dile nombor show korbe 
console.log(gameName.charAt(4)); // ditio ta te nombor dile character show korbe 

// aitar madhhome amra string ar bhetorer kono character koto nombore bose ache seta dekha jay .


const newString = gameName.substring(0,4)
console.log(newString);
  // ai methode tay amra dekhbo je , string ar vhetor je value deoya hoyeche 0, ar 4 ; sekhate --> sour ; obdhi i lekha asche , karon string 0 theke start hoy , aikhane 0,1,2,3 obdi i assign holo abong show korlo sour , but 4 nombor string ta show korlona , mane {(initial position number , final position number-1)} 





  const anotherString  = gameName.slice(2,-4)
  console.log(anotherString);  // aikhane amra negetive value o dite pari ,  


  const newStringOne = "  sourav  "
  console.log(newStringOne);  // ata as it is as same spece gulo songe niye output a bosbe 
  console.log(newStringOne.trim());  // amra ai string ar  babohare , vhetorer space guloke  remove korbe .




  const url = "http://souravlouha.com/sourav%20louha"

  console.log(url.replace('%20','-'))
  // ar madhome besicaly amra unnecessary word guloke hatai 
  // ata unnecessarily url ar bhetore thaka space kinba faltu character(%20 ai somostho gulo ) gulo soriye kinba hatiye ,'-' aita bosiye dibe . 


  console.log(url.includes('sourav'))  // jehetu sourav word ta ache tai, ata true dibe 
  console.log(url.includes('sohum'))// ar jehetu sohum word ta nai  tai ,ata false dibe
  // amra ar madhhme qustions orthat proshno korte pari , tar uttor true kinba false  value te dibe .

console.log(gameName.split('-')); // basis of '-'
console.log(gameName.split(' '));  // basis of space 
  // slite koebe space kina '-' ar basis a . Output ta akta array ar vhetore asbe .

  