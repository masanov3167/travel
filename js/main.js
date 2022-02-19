// var first = Number(prompt("sonni kiriting", 0));
// var second = Number(prompt("sonni kiriting", 0));


// alert(first + second);

// var first = (prompt("sonni kiriting", 0));
// var second = (prompt("sonni kiriting", 0));


// alert(first - second);

// var first = (prompt("sonni kiriting", 0));
// var second = (prompt("sonni kiriting", 0));


// alert(first * second);

// var first = (prompt("sonni kiriting", 0));
// var second = (prompt("sonni kiriting", 0));


// alert(first / second);


// var first = (prompt("sonni kiriting", 0));
// var second = (prompt("sonni kiriting", 0));


// alert(first ** second);

// var first = (prompt("sonni kiriting", 0));
// var second = (prompt(`${first} ning necha foizini bilmochisiz kiriting`));


// alert(first / 100 * second);


// var first = (prompt("sonni kiriting", 0));
// var second = (prompt("sonni kiriting", 0));


// alert(first % second);

// var Number = 3;
// --Number;
// Number = Number + 3;

// alert(Number)

// var Number = 4;

// alert("oldin " +Number++ + " ta edik");
// alert("xozir " + Number + " tamiz");


// console.log(Math.round(Math.random() * 12));
// console.log((1.294897656).toFixed(3))

// var bir = 34;
// var ikki = 442;

// console.log(Math.floor(bir / ikki));
var travelSum = 10000000;
var usd = 10845;
var euro = 12272;
var plainTicket = Number(prompt(`Jami: ${travelSum} so'm pul kerak \n\n Alisherda samolyot biletiga berish uchun qancha dollari bor?`));
var plainTicketSum = Number(plainTicket * usd);

var allCostage = Number(prompt(`Jami: ${travelSum} so'm pul kerak \n\n Alisherda mehmonxona to'lovi va boshqa harajatlarga berish uchun qancha dollari bor?`));
var allCostageSum = Number(allCostage * usd);

var museum = Number(prompt(`Jami: ${travelSum} so'm pul kerak \n\n Alisherda muzey va boshqa ko'ngilochar joylarga berish uchun qancha yevrosi bor?`));
var museumSum = Number(museum * euro);

console.log(`Alisherda samolyot biletiga berish uchun ${plainTicket}$ (${plainTicketSum} so'm) dollari bor?`);
console.log(`Alisherda mehmonxona to'lovi va boshqa harajatlarga berish uchun ${allCostage}$ (${allCostageSum} so'm) dollari bor?`);
console.log(`Alisherda muzey va boshqa ko'ngilochar joylarga berish uchun ${museum}E (${museumSum} so'm) yevrosi bor?`);

var countedSum = plainTicketSum + allCostageSum + museumSum;
console.log(`Jami: ${countedSum} so'm`);

if(countedSum == travelSum){
    console.log(`\n Oq yo'l Alisher! Sizda roppa-rosa ${travelSum} so'm pul bor ekan`)
}else if(countedSum > travelSum){
    var excessMoney = countedSum - travelSum;
    console.log(`\nOq yo'l Alisher sizda safarga chiqishg uchun yetarli deyilgan ${travelSum} so'mdan oshiqcha ${excessMoney} so'm pul bor ekan qaytarda uyingizga nimadur olib keling`);

}else{
    var notEnough = travelSum - countedSum;
    console.log(`\n Alisher, ozgina sabr qilish kerak bo'lar ekan. Yana ${notEnough} so'm pul topsangiz sayohatga chiqa olasiz!`);
}
