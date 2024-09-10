/*const score = 400
console.log(score);

// amra ai khane score a kichu number lekha hoyeche , but aita number hisebei stor hoyrche ki na , ta amra janina , mane score ar modhhe 400 number hisebe stor hoteo pare kinba nao hote pare .

const balance = new Number(100)
console.log(balance);
// ar ai khane , amra dedicatedle aikhane 100 ke number hisebei stor store koriyechi .


console.log(balance.toString());
// ar ai khane ,balance ar type of age chilo number ar akhon ai podhhotir jonne change hoye , string a porinoto hoyeche .

console.log(balance.toString().length); // amra ar madhhome , length check korte parbo string ar .


console.log(balance.toFixed(2)); // 2 ghor obdhi 
console.log(balance.toFixed(4)); // 4 ghor obdhi 
// ata kono calculation ar answer ar decimal , value koto ghor kinba koto dur obdhi show korate hobe , tar jonne mulot babohar hoye thake .

const otherNumber = 45.23387

console.log(otherNumber.toPrecision(2)); //45
console.log(otherNumber.toPrecision(5)); //45.233
// ar madhhome , kono asign kora valur koto gulo number nite hobe setar jonno , babohar kora hoy .


const hundreds = 1000000  
console.log(hundreds.toLocaleString('en-IN')); 
// ar madhhome , amra kono kono somy , 1 ar pore koyta 0 ache seta count korte osubidhe hoy , tai jate osubidhe na hoy , tarjonne ati babohar kora hoy .
// default a ati USA ar anujai ',' ti bose , tarjonne amra 'en-IN ' kore indian stendred koreneoya hoyeche.



// +++++++++++++++++++++++++++++++++++++++++++++ MATH +++++++++++++++++++++++++++++++++++++++++
*/


console.log(Math);
console.log(Math.abs(4)); // math.abs use korle 'negetive' value gulo o positive a change hoye jay .but positive gulo positive i thake , change hoy na .





console.log(Math.round(5.3));  // number ar round value dite help kore .





console.log(Math.ceil(5.3));  // ati ja nombor thake take increase kore show korw. 
console.log(Math.floor(5.3)); // ati ja nombor thake take komiye(komkore) show kor.




console.log(Math.min(7,8,2,5,6)); // ata string ar minimum value ke identify kore
console.log(Math.max(7,8,2,5,6)); // ata string ar maximum value ke identify kore






console.log(Math.random()); // random() function is used to return a floating-point pseudo-random number between range [0,1), 0 (inclusive), and 1 (exclusive). This random number can then be scaled according to the desired range.

console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random() * 10)+1); // floor() function is used to min value


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
