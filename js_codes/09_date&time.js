let myDate = new Date()

console.log(myDate); //sudhu console.log(myDate) likhle readable data from hoy na , seta ke bojha jay na .tarjonne amader string a convert kore nite hoy.

console.log(myDate.toString()); // string korbar por kichuta readable hoye jay date section ta .
console.log(myDate.toISOString()); // Same { 2024-05-09T16:13:27.230Z } ai bhabe show korbe .
console.log(myDate.toJSON());  // { 2024-05-09T16:13:27.230Z } ai bhabe show korbe .
console.log(myDate.toDateString()); //  day month date year ai sequence a show korbe. 
console.log(myDate.toLocaleDateString());  // sudhu Date tai show korbe .
console.log(myDate.toLocaleString()); // local date and time dutoi show korbe. 
console.log(myDate.toLocaleTimeString());//sudhu time show korbe .

console.log(typeof myDate); //object type





// akhon amra kono akta random date dibo , setar details show korbe ,
// ar javascript a month suru hoy 0 theke , mane 0 --> jan, 1 --> feb ... ai bhabe .


let myCreatedDate = new Date(2024, 4, 9) // akta methode input deoyar 
let myCreatedDate1 = new Date(2024, 4, 9, 5, 3)  // aita aro akta methode input deoyar
let myCreatedDate2 = new Date("2024-01-14")  // aita aro akta methode input deoyar, kintu ai khane month 01, 02 ai bhabe start hoy , akhane YYYY-MM-DD bhabe store hoy ,
let myCreatedDate3 = new Date("01-14-2024") // MM-DD-YYYY 



console.log(myCreatedDate.toDateString());
console.log(myCreatedDate1.toDateString());
console.log(myCreatedDate2.toLocaleString());
console.log(myCreatedDate3.toLocaleString());








// kono somoy , jodi poll kinba quize ar time ber korte hoy , je ke sob theke taratari uttar diche , mane fast as first , tokoh amra use korbo ai function ta , ar aikhane milisecond a answer ber hobe , 


let myTimeStamp = Date.now()

console.log(myTimeStamp);  //(mainly time compaire korbe ) 1715282331537 ai rokom number asbe ai gulo holo milisecond ar calculation value , 

// jodi amra kono din o hotel , kinba kichu booking related business ar jonne website banai , sekhane date , kinba time compaire mane kon customer koto taratari abong kobe booking koreche setar akta data sorting kore beriye jabe , tar jonne ai ta babohar korte hoy . 
console.log(myCreatedDate.getTime()); //(mainly date and time dutoi compaire korbe .) ar akhaneo ai rokom 1715193000000 milisecond a value asbe .


// amader sob value milisecound a ber hochhe , jodi second a ber korte hoy tahole , amade ai bhabe korte hobe .
console.log(Math.floor(Date.now() / 1000)); // ata second a value ber korbe .






console.log(myDate.getMonth()); 
console.log(myDate.getDay());
//console.log(myDate.grtMinutes());  
// kono dater sudhu month kinba day kinba year ber korte hobe tahole amra { (getmonth) (getdate) (getyear ) } korle ta beriye jabe . temon bhabei houre kinba seconds ber korte gele { (getHours) (getSeconds) (getMinutes) } babohar korte hobe . 


