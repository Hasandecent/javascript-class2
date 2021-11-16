// // Q NO. 1

// document.write(new Date())

// // Q NO. 2

// var months = ["Jan", "Feb","March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec" ];
// var today = new Date();

//  alert(months[today.getMonth()]);

// // Q NO. 3

// var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var today = new Date();
// alert(days[today.getDay()]);

// // Q NO. 4

// var funday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var lazyday = new Date();
// if(lazyday == funday[lazyday.getDay(0,6)]){
//         alert("It's Funday");
//     }
// else{
//     alert("BUSY DAY")
// }

// // Q NO. 5

// var now = new Date().getDate();
// if (now <= 10) {
//     alert("First Ten Days of the Month")
// }
// else if (now <= 20) {
//     alert("Mid Days of the Month")
// } else {
//     alert("Last days of the month")
// }

// // Q NO. 6

// var now = new Date();
// document.write("<br><br>Current Date: " + now);
// document.write("<br>Elapsed MilliSeconds since January 1, 1970: " + now.getTime());
// document.write("<br>Elapsed MilliSeconds since January 1, 1970: " + now.setFullYear(1970));

// // Q NO. 7
// var now = new Date();

// if (now >= 0000 && 1200) {
//     alert("It's AM");
// }
// else {
//     alert("It's PM");
// }

// // Q NO. 8

// var nows = new Date("December , 31 2025")
// document.write(nows)

// // Q NO. 9
// var ramzanDate = new Date("June 1 ,2021");
// var now = new Date();
// var miliram = ramzanDate.getTime();
// var nowmili = now.getTime();
// var differ = nowmili - miliram;
// var totalDays = differ / (1000 * 60 * 60 * 24)
// totalDays = Math.floor(totalDays)
// document.write(`${totalDays} Days have passed since 1st Ramzan, 2021`);


// // Q NO. 10

// // Q NO. 11

// var now = new Date();
// console.log(now);
// console.log(now.getHours());

// // Q NO. 12
// var now = new Date("Nov 15 2021");
// alert("Current Date: " + now);

// var years1000Ago = new Date("Nov 15 1915");
// alert("100 years back: " + years1000Ago);

// // Q NO. 13

// var userAge = +prompt("Enter Your Age:");
// var now = new Date();
// var currentYear = now.getFullYear();
// alert("Your Age: " + userAge);
// alert("Your Birth Year: " + (currentYear - userAge));

// // Q NO. 14

// var userName = prompt("Type Name");
// var months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
// var today = new Date();
// var monthNow = months[today.getMonth()];

// var CurrentUnit = +prompt("Type Unit Use");
// var unitRate = 45

// var totalUnit = CurrentUnit * unitRate;
// var lateCharges = 350;
// var netcharge = totalUnit + lateCharges ;

// document.write("<h1>K-Electric Bill</h1><br><br>");

// document.write("Customer Name: " + userName);
// document.write("<br>Month: " + monthNow);
// document.write("<br>Number Of Units: " + CurrentUnit);
// document.write("<br>Charges Per Units: " + unitRate);
// document.write("<br>Net Amount Payable (Within Due Date): " + totalUnit);
// document.write("<br>Late Payment Surcharge: " + lateCharges);
// document.write("<br>Gross Amount Payable (After Due Date): " + netcharge);