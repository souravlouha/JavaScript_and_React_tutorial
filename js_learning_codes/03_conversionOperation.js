let score = 33
let score2 = "44"
let score3 = "45abc" // keu hoy to ai bhabe number put koreche ,but ata to Number ar catagory te pore na .but dekha jak ki ase console.log kore .

console.log( typeof score); //number(dekhabe )

// amra ai khane "score" ar "score2" ar type gulo dekhlam/ ba dekhbo . 
console.log(typeof score2);//string(dekhabe )
console.log(typeof score3);


// score ar score2 ar modhhe amra Number pass koriyechi but jokhoni amra double code ("") lagabo otkhoni ata Number theke String a poriborton hoye jabe .
// ai Number theke String a jate poriborton na hoy tar jonnoi ai ( let valueInNumber =Number  ) ar class guloke difine kora hoyeche .
// ar fole String na hoye Number i dekhabe .

let valueInNumber = Number(score) // number(dekhabe )
let valueInNumber2 = Number(score2)// number (dekhabe)
let valueInNumber3 = Number(score3)

console.log( typeof valueInNumber); // type gulo sob , number(dekhabe )
console.log( typeof valueInNumber2); // type gulo sob , number(dekhabe )
console.log( typeof valueInNumber3); 

