
let score = 33
let score2 = "44"
let score3 = "45abc" // keu hoy to ai bhabe number put koreche ,but ata to Number ar catagory te pore na .but dekha jak ki ase console.log kore .

console.log( typeof score); //number(dekhabe )

// amra ai khane "score" ar "score2" ar type gulo dekhlam/ ba dekhbo . 


console.log(typeof score2);//string(dekhabe )
console.log(typeof score3);// akhaneo string dekhabe


// score ar score2 ar modhhe amra Number pass koriyechi but jokhoni amra double code ("") lagabo otkhoni ata Number theke String a poriborton hoye jabe .
// ai Number theke String a jate poriborton na hoy tar jonnoi ai ( let valueInNumber =Number  ) ar class guloke difine kora hoyeche .
// ar fole String na hoye Number i dekhabe .


let valueInNumber = Number(score) // number(dekhabe )
let valueInNumber2 = Number(score2)// number (dekhabe)
let valueInNumber3 = Number(score3)// akhaneo number dekhachhe but ata uchit noy 


console.log( typeof valueInNumber); // type gulo sob , number(dekhabe )
console.log( typeof valueInNumber2); // type gulo sob , number(dekhabe )
console.log( typeof valueInNumber3); // type a Number asche but Number asha uchit noy , akhanei bhul ase jachhe , jinis gulo , to akhon dekhi (valueInNumber3) ar bhetorer Value ki asche .

console.log(valueInNumber); // 33 asbe (jeta sabhabik )
console.log(valueInNumber2); // 44 asha uchit
console.log(valueInNumber3); // akhane o 45abc asa uchit chilo (jehetu ata Number bole difine hochhe system a )
// But aikhane  NaN  lekah asche . jar mane (NaN ) Not a Number (kintu system kintu ake Number bolei dhoreche kinba gonno koreche . )


let score4 = null;
let valueInNumber4 = Number(score4)
console.log(valueInNumber4);
// null a  value 0 asche .

let score5 = undefined;
let valueInNumber5 = Number (score5);
console.log(valueInNumber5);
// undefined a value NaN asche

// Akoi bhabe jodi kono Bulion value jodi thakto jemon true kinba false , tahole true->1, ar false->0 asbe .

// Jodi "string" o thake taholeo NaN asbe . 

// "33" =>33
// "33abc" =>NaN



// convert Number to String 
let myNumber = 88
console.log(typeof myNumber);
let stringNumber = String(myNumber)
console.log(stringNumber);
console.log(typeof stringNumber);//converted to string 






//*********************************** Operations****************************************//



let value =3;
let negValue =  -value;
console.log(negValue);

// and thats way we can add two strings together.

let str1 = "sourav"
let str2 = "louha"

let str3 = str1 + str2
console.log(str3);


// amra dekhbo je string a o kichu problem ache , jemno "1" -> ake akti string banano holo , akti number theke .

console.log( "1" + 2 ); //12
console.log( 1 + "2" ); //12
console.log( "1" + 2 + 2 ); //122
console.log( 1 + 2 + "2" ); //32

// ToPrimitive , bole akti Rules ke mene chole , tar jonno , ati amno babohar kore.