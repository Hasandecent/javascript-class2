// // Chapter 1

// // Question 1. Write a script to greet your website visitor using JS alert box.

// alert("Hey");

// // Question 2. Write a script to display following message on your web page:

// alert("Error! Please enter a valid password.");

// // Question 3. Write a script to display following message on your web page: (Hint : Use line break)

// ///////////////////////////alert("Welcome to JS land... \n Happy coding!");

// // Question 4. Write a script to display following messages in sequence:

// alert("Welcome to JS land...");
// alert("Happy coding! \n Prevent this page from creating additional dialogs.");

// // Question 5. Generate the following message through browser’s developer console:

// alert("Hello... I can run JS through may browser developer's console");


// // Question 7. Practice placement of <script></script> element in following sections of your project in exercise 6:
// // a. Head;
// // b. Body (before your page’s HTML);
// // c. Body (inside your page’s HTML);
// // d. Body (after your page’s HTML);


// //Chapter 2 

// // Question 1. Declare a variable called username.

// var userName = "username";

// // Question 2. Declare a variable called myName & assign to it a string that represents your Full Name.

// var myName = "Muhammad Hasan";

// // Question 3. Write script to
//             // a) Declare a JS variable, titled message.
//             // b) Assign “Hello World” to variable message.
//             // c) Display the message in alert box.

// var message = "Hello World";
// alert(message);

// // Question 4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.\

// var name = "Jhone Doe";
// var age = 15;
// var certification = "Certified Mobile Application Development";
// alert(name);
// alert(age);
// alert(certification);

// // Question 5. Write a script to display the following alert using one JS variable:

// alert("PIZZA \nPIZZ \nPIZ \nPI \nP")

// // Question 6. Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). Show the blow mentioned message in an alert box.(Hint: use string concatenation)

// var email = "hasandecent23@gmail.com"
// alert(`My email address is ${email}`)

// // Question 7. Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box:

// var book = "A smarter way to learn JavaScript"
// alert(`I am trying to learn from a book ${book}`);

// // Question 8. Write a script to display this in browser through JS

// document.write("Yah! I can write HTML content through JavaScript")

// // Question 9. Store following string in a variable and show in alert and browser through JS “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”

// var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
// alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬")
// document.write("<br>" + design)



//Chapter 3 

// // Question 1. Declare a variable called age & assign to it your age. Show your age in an alert box.

// var age = 17;
// alert("I am" + "\u00A0" + age + "\u00A0" + "years old");

// // Question 2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.

// var visit = 10;
// alert("You have visited this site" + "\u00A0" + visit + "\u00A0" + "times");

// // Question 3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:

// var birthYear = 1997;
// document.write("My birth Year is" + "\u00A0" + birthYear + "<br>" + "Data type of my ddeclared variable is number.");


// Question 4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information: a. Visitor’s name, b. Product title, c. Quantity i.e. how many products a visitor wants to order Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

// var visitorName = prompt("Enter Your Name");
// var productTitle = prompt("Enter Product Name");
// var quantity = +prompt("Enter the quantity");
// document.write(visitorName + "&nbsp" + "ordered");
// document.write("&nbsp" + quantity + "&nbsp");
// document.write(productTitle + "&nbsp" + "XYZ Clothing store.");

// Chapter 4 

// Question 1. Declare 3 variables in one statement.

// var name = "Khalil", userName = "khaidee", age = 17;

// Question 2. Declare 5 legal & 5 illegal variable names.

//Leagal Variables
// var name1 = "A variable name must start with a letter";
// var name2 = "A variable name must start with the underscore character.";
// var name3 = "beginning with the dollar sign $";
// var name4 = "A variable name can only contain alpha-numeric characters and underscores (A-z, 0-9, and _ )";
// var name5 = "The convention, however, is to always begin your variable names with a letter, not " $ " or " _ ".";

// //Illegal Variables

// var 1name = "using number first";
// var n-ame = "using underscore";
// var ?name = "using Question";
// var &name = "using and sign";
// var %name = "using percentage";

// // Question  3. Display this in your browser.
// document.write("<h1>Rules for naming JS variables</h1>")
// document.write(" <br> Variable names can only contain , numbers, S and . For example : Smy 1stVariable")

// document.write("<br>Variable must begin with a letter, S or . For example : Sname, _ name or name")

// document.write("<br> Variable names are case sensitive")

// document.write("<br> Variable names should not be JS keywords")

// Chapter 5

// // Question 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.

// var num1 = 3;
// var num2 = 5;
// var sub =  num1 + num2;

// document.write("Sum of " + num1 + " "  + " and "  +   " " + num2  + " " + "is" + " " + sub)

// // Question 2. Repeat task1 for subtraction, multiplication, division & modulus.

//subtraction//
// var num1 = 3;
// var num2 = 5;
// var sub =  num1 - num2;

// document.write("Sum of " + num1 + " "  + " - "  +   " " + num2  + " " + "is" + " " + sub)

// //multiplication//
// var num1 = 3;
// var num2 = 5;
// var mul =  num1 * num2;

// document.write("Sum of " + num1 + " "  + " * "  +   " " + num2  + " " + "is" + " " + mul)

///divide///
// var num1 = 3;
// var num2 = 5;
// var div =  num1 / num2;

// document.write("Sum of " + num1 + " "  + " / "  +   " " + num2  + " " + "is" + " " +div)

///module//
// var num1 = 10;
// var num2 = 3;
// var mod =  num1 % num2;

// document.write("Sum of " + num1 + " "  + " % "  +   " " + num2  + " " + "is" + " " + mod)

// // Question 3. Do the following using JS Mathematic Expressions.

// var undefined = "";
// var a = 5;
// var b = a;
// var c = ++b;
// var d = c+7;
// var e = d;

// document.write("Value after variable declaration is " + undefined);
// document.write("<br>Initial Value:" + a);
// document.write("<br>Value after increment is: "  + c);
// document.write("<br>Value after addition is: "  + d);
// document.write("<br>Value after decrement is: "  + --e);
// document.write("<br>The remainder is: "  + e%3);

// // Question 4. Cost of one movie ticket is 600 PKR.
// var ticket = 600;
// var cost = ticket*5;
// document.write("Total Cost to buy 5 tickets to a movie is " + cost +"PKR");


// // Question 5. Write a script to display multiplication table of any number in your browser
// for(var i = 1 ; i<=10 ; i++ ){

//     document.write("6 x" + " " + i + " " + "=" + " " + 6*i + "<br>" )

// }

// // Question 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// var cel = 30;
// var convertF = (cel * 9/5) + 32
// // console.log(convert)
// document.write(cel + " " + "oC is " + " " + convertF + "oF </br>" )

// var f = 70 ; 
// var convertC = (f - 32 ) * 5/9
// document.write( f + " " + "oF is " + " " + convertC + "oC" )

// // Question 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website.

// var heading = "Shopping Cart"
// var price1 = prompt("Enter Your First  Item Price");
// var quant1 =  prompt("Enter Your First  Item Quantity");
// var price2 = prompt("Enter Your Second Item Price") ;
// var quant2 = prompt("Enter Your Second Item Quantity") ;
// var charges = 100;
// var totalPrice = ((price1*quant1)+(price2*quant2)+charges);
// document.write("<br><br>"+ heading+"<br>");
// document.write("<br>"+"Price of item 1 is "+ price1);
// document.write("<br>"+"Quantity of item 1 is "+ quant1);
// document.write("<br>"+"Price of item 2 is "+ price2);
// document.write("<br>"+"Quantity of item 2 is "+ quant2);
// document.write("<br>"+"Shipping Charges  "+ charges);
// document.write("<br><br>"+"Total Cost of your order is "+ totalPrice);

// // Question 8. Store total marks & marks obtained by a student in 2 variables.
// var totalMarks = 980;
// var obtainmarks = 804;
// var per = obtainmarks / totalMarks *100
// document.write(`Total Marks: ${totalMarks} <br>
//                 Marks Obtained: ${obtainmarks} <br>
//                 Percentage:${per}%    `)


// // Question 9. Assume we have 10 US dollars & 25 Saudi Riyals.

// var usdIntoPkr = 10 * 104.80
// var riyalIntoPkr = 25 * 28 
// var total = usdIntoPkr + riyalIntoPkr
// document.write("total Currency INto pkr IS"+" "+total)

// // Question 10. Write a program to initialize a variable with some number and do arithmetic in following sequence.

// var number = 15;
// var allinone = (number + 5 * 10) / 2
// document.write(allinone)

// Question 11.The Age Calculator: Forgot how old someone is?

// var head ="AGE CALCULATOR"
// var current_year = parseInt(prompt("Enter Current Year"));
// var birth_year = parseInt(prompt("Enter Your Birth Year"));
// var user_age = current_year - birth_year ;

// document.write("<br>" + head + "<br>");
// document.write("<br>" + "Your Birth Year is:" + birth_year);
// document.write("<br>" + "Current Year is: " + current_year);
// document.write("<br>" + "Your Age is: " + user_age);

// Question 12.The Geometrizer: Calculate properties of a circle.?

// var head = "The Geometrizer";
// var radius = parseInt(prompt("Enter Radius of Circle"));
// var circumference = 2 * 3.142 * radius;
// var area = 3.142 * (radius * radius);

// document.write("<br>" + head + "<br>");
// document.write("<br> Radius of a Circle: " + radius);
// document.write("<br> Cicumferance is: " + circumference);
// document.write("<br> The Area is: " + area);
 
// Question 13.The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is?

// var head = "The Lifetime Supply Calculator";
// var snacksname = prompt("Enter Your favourite Snacks");
// var currentAge = parseInt(prompt("Enter Your Current Age."));
// var maxAge = parseInt(prompt("Enter Your Max Age."));
// var snackAmm = parseInt(prompt("Enter amount of your per day snacks"));

// var total = ((maxAge - currentAge) / snackAmm);
// document.write("<br>" + head + "<br>");
// document.write("<br> Favourite Snack: " + snacksname);
// document.write("<br> Current Age: " + currentAge);
// document.write("<br> Estimated Max Age: " + maxAge);
// document.write("<br> Amout of Snacks per day: " + snackAmm);
// document.write("<br> You will need" + total + " " + snacksname + " to last you until the ripe old age of " + maxAge);


// Chapter 6-9

// Question 1.Write a program to take a number in a variable?
// var a = parseInt(prompt("Enter Any Value"));
// var num = a;
// var head = "Result";
// var dotLine = ".........................";

// document.write("<br>" + head + "<br><br>");
// document.write("The value of a is: " + a);
// document.write("<br><br>" + dotLine + "<br><br>");
// document.write("Now the value of ++a is: " + (++num) + "<br>");
// document.write("Now the value of a is: " + num + "<br>");
// document.write("Now the value of a++ is: " + (num++) + "<br>");
// document.write("Now the value of a is: " + num + "<br>");
// document.write("Now the value of --a is: " + (--num) + "<br>");
// document.write("Now the value of a is: " + num + "<br>");
// document.write("Now the value of a-- is: " + (num--) + "<br>");
// document.write("Now the value of a is: " + num + "<br>");

// Question 2.What will be the output in variables a, b & result after execution of the following script?

// var a = 2;
// var b = 1; 
// var result = --a - --b + ++b + b--;
// document.write("<br><br>a is " +a);
// document.write("<br>b is " +b);
// document.write("<br>result is " +result);



// Question 3.Write a program that takes input a name from user & greet the user.?

// var name = prompt("Enter Your Name");
// document.write("<br> Have A Good Day!" + name + ".");


// Question 5.Write a program to take input a number from user.?

// var table = parseInt(prompt("Enter any number"));
// if (table) {
//     document.write("<br>Table of " + table + "<br>");
//     document.write("<br>" + table + " " + "x" + " " + "1" + " " + "=" + " " + table);
//     document.write("<br>" + table + " " + "x" + " " + "2" + " " + "=" + " " + table * 2);
//     document.write("<br>" + table + " " + "x" + " " + "3" + " " + "=" + " " + table * 3);
//     document.write("<br>" + table + " " + "x" + " " + "4" + " " + "=" + " " + table * 4);
//     document.write("<br>" + table + " " + "x" + " " + "5" + " " + "=" + " " + table * 5);
//     document.write("<br>" + table + " " + "x" + " " + "6" + " " + "=" + " " + table * 6);
//     document.write("<br>" + table + " " + "x" + " " + "7" + " " + "=" + " " + table * 7);
//     document.write("<br>" + table + " " + "x" + " " + "8" + " " + "=" + " " + table * 8);
//     document.write("<br>" + table + " " + "x" + " " + "9" + " " + "=" + " " + table * 9);
//     document.write("<br>" + table + " " + "x" + " " + "10" + " " + "=" + " " + table * 10);
// }
// else {
//     var tabNum = 5;
//     document.write("<br> Table of " + tabNum + "<br>");
//     document.write("<br>" + 5 + " " + "x" + " " + "1" + " " + "=" + " " + tabNum * 1);
//     document.write("<br>" + 5 + " " + "x" + " " + "2" + " " + "=" + " " + tabNum * 2);
//     document.write("<br>" + 5 + " " + "x" + " " + "3" + " " + "=" + " " + tabNum * 3);
//     document.write("<br>" + 5 + " " + "x" + " " + "4" + " " + "=" + " " + tabNum * 4);
//     document.write("<br>" + 5 + " " + "x" + " " + "5" + " " + "=" + " " + tabNum * 5);
//     document.write("<br>" + 5 + " " + "x" + " " + "6" + " " + "=" + " " + tabNum * 6);
//     document.write("<br>" + 5 + " " + "x" + " " + "7" + " " + "=" + " " + tabNum * 7);
//     document.write("<br>" + 5 + " " + "x" + " " + "8" + " " + "=" + " " + tabNum * 8);
//     document.write("<br>" + 5 + " " + "x" + " " + "9" + " " + "=" + " " + tabNum * 9);
//     document.write("<br>" + 5 + " " + "x" + " " + "10" + " " + "=" + " " + 5 * tabNum);
// };


// Question 6.Take three subjects name from user and store them in 3 different variables..?
//  var sub1 = prompt("Enter Subject 1 Name");
//  var sub2 = prompt("Enter Subject 2 Name");
//  var sub3 = prompt("Enter Subject 3 Name");
//  var total = 100;

//  var obtainmarks1 = parseInt(prompt("Enter Obtain Marks subject 1 "));
//  var obtainmarks2 = parseInt(prompt("Enter Obtain Marks subject 2 "));
//  var obtainmarks3 = parseInt(prompt("Enter Obtain Marks subject 3 "));

//  var totalMarks = obtainmarks1 + obtainmarks2 + obtainmarks3;

//  var totalper = totalMarks / 300 * 100;

// document.write("<table border=1>")
// document.write("<tr>")
// document.write("<td> " + "<b>"+ "Subject"  + "</b>" + "</td>" +  
//                 "<td> " + "<b>"+ "Total Marks"  + "</b>" + "</td>"+
//                 "<td> " + "<b>"+ "obtained Marks"  + "</b>" + "</td>"+
//                 "<td> " + "<b>"+ "Percentage"  + "</b>" + "</td>")
// document.write("</tr>")

// document.write("<tr>")
// document.write("<td> " + sub1  + "</td>" +  
//                 "<td> "+ total + "</td>"+
//                 "<td> " +obtainmarks1 + "</td>"+
//                 "<td> "+ (obtainmarks1 /total * 100)   +"%"+"</td>")
// document.write("</tr>")

// document.write("<tr>")
// document.write("<td> " + sub2  + "</td>" +  
//                 "<td> "+ total + "</td>"+
//                 "<td> " +obtainmarks2 + "</td>"+
//                 "<td> "+ (obtainmarks2 / total *100) +"%" + "</td>")
// document.write("</tr>")


// document.write("<tr>")
// document.write("<td> " + sub3  + "</td>" +  
//                 "<td> "+ total + "</td>"+
//                 "<td> " +obtainmarks3 + "</td>"+
//                 "<td> "+ (obtainmarks3 / total *100) +"%"  + "</td>")
// document.write("</tr>")

// document.write("<tr>")
// document.write("<td> "   + "</td>" +  
//                 "<td> "+ 300 + "</td>"+
//                 "<td> " +totalMarks + "</td>"+
//                 "<td> "+ totalper +"%"  + "</td>")
// document.write("</tr>")
// document.write("</table>")

 
// Chapter 9-11


// Question 1.Write a program to take “city” name as input from user?

// var cityname = prompt("Enter Your City");
// if( cityname !==""){
//     if (cityname === "karachi" || cityname === "Karachi" || cityname === "KARACHI"){
//         document.write("<b>WELCOME THE CITY OF LIGHTS</b>");
//     }
//     else{
//         document.write("<b>Sorry Ap Ki Yahan Jagha Nahi hai</b>")
//     }
// }
// else{
//         document.write("<b>Get Out From Here!<br>OR<br>Fill Up The Field</b>")
//     };


// Question 2.Write a program to take “gender” as input from user.?

// var gender = prompt("Enter Your Gender");

// if( gender !== ""){
//     if(gender === "male"){
//         document.write("GOOD MORNING SIR");
//     }
//     else if(gender === "female"){
//         document.write("Good Morning mam");
//     }
//     else{
//         document.write("Please Type Male Or Female");
//     }
// }
// else{
//         document.write("<b>Get Out From Here!<br>OR<br>Fill Up The Field</b>")
//     };


// Question 3.Write a program to take input color of road traffic signal from the user.?

// var color = prompt("Enter Traffic Signal Color");

// if( color == "Red"){
//     alert("Must Stop")
// }
// else if(color == "Yellow"){
//     alert("Ready To Move")
// }
// else if( color == "Green"){
//     alert("Move Now")
// }
// else{
//     alert("Error! Please Enter Red or Green or Yellow color ");
// }

// Question 4.Write a program to take input remaining fuel in car?

// var fuel =parseInt(prompt("Remaining Fuel in Your Car"));

// if (fuel <= 0.90) {
//     document.write("<h1>Please refill the fuel in your car”</h1>")
// }
// else{
//     alert("Your Car is Ready To Go")
// }

// Question 5.Run this script, & check whether alert message would be displayed or not?


// var a = 4;
// if(++a ===5){
//     alert("given condition for variable a is true");
// }

// var b = 82;
// if(b++ === 83){
//     alert("given condition for var b is true");
// }

// var c = 12;
// if(c++ === 13){
//     alert("condition 1 is true");
// }
// if(++c<14){
//     alert("condition is true");
// }
// if(c === 14){
//     alert("condition 4 is true");
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }


// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }

// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }


// Question 6.Write a program to take input the marks obtained in three subjects & total marks?

// document.write("<h1>Mark Sheet</h1>")

// var name = prompt("Enter Your Name");
// var schoolName = prompt("Enter Your School Name");
// var standard = prompt("Enter Your Class");
// var rollNumber = prompt("Enter Your Roll Number");
// var isl = prompt("Enter Your Islamiat Marks");
// var urdu = prompt("Enter Your Urdu Marks");
// var eng = prompt("Enter Your English Marks");
// var maths = prompt("Enter Your Maths Marks");
// var science = prompt("Enter Your Science Marks");
// var obtainedMarks = parseInt(isl) + parseInt(urdu) + parseInt(eng) + parseInt(maths) + parseInt(science);
// var total = 500
// var percentage = (obtainedMarks / total) * 100


// document.write("Your Name :" + name);
// document.write("<br> Your School Name :" + schoolName);
// document.write("<br> Your Class :" + standard);
// document.write("<br> Your Roll Number :" + rollNumber);
// document.write("<br> Obtained Marks : " + obtainedMarks);
// document.write("<br> Total Marks : " + total);
// document.write("<br> Percentage : " + percentage + "%");
// if(percentage >= 80){
//         document.write("<br><br> Your Grade is: A-1 <br>Remarks : Excellent");
// }
// else if(percentage >= 70){
//         document.write("<br><br> Your Grade is: A <br>Remarks : Good");
// }
// else if(percentage >= 60){
//         document.write("<br><br> Your Grade is: B <br> Remarks : You need to improve");
// }
// else if(percentage >= 50){
//         document.write("<br><br> Your Grade is: C <br> Remarks : You need to improve");
// }
// else if(percentage >= 40){
//         document.write("<br><br> Your Grade is: D <br> Remarks : You need to improve");
// }
// else if(percentage >= 33){
//         document.write("<br><br> Your Grade is: E <br>Remarks : 1 saal aur parho");
// }
// else{
//         document.write("<br><br> You Are Failed ! ! <br>Remarks : 1 saal aur parho");
// }

// Question 7.Guess game

// var secretnumber = 4;
// var usernumber = parseInt(prompt("Enter A Secret Number 1 To 10 Range"));
// if(usernumber === secretnumber){
//     alert("Bingo! Correct Answer")
// }
// else if(usernumber === ++secretnumber){
//     alert("Close enough to the correct answer")
// }
// else{
//     alert("please Enter a 1 to 10 number")
// }


// Question 8.Write a program to check whether the given number is divisible by 3

// Question 9.Write a program that checks whether the given input is an even number or an odd number.

// var number = parseInt(prompt("Please enter a Number"));
// var even = number % 2 ;
// if(even === 0){
//     alert("YOUR NUMBER IS EVEN")
// }
// else{
//     alert("YOUR NUMBER IS ODD")
// }

// Question 10.Write a program that takes temperature as input and shows a message based on following criteria

// var T =parseInt(prompt("Enter A Temperature"));

// if(T >= 40){
//     document.write("<h1>It is too hot outside</h1>.");
// }
// else if(T >= 30){
//     document.write("<h1>The Weather today is Normal.<.h1>");
// }
// else if(T >= 20 ){
//     document.write("<h1>Today’s Weather is cool</h1>");
// }
// else if(T <= 10){
//     document.write("<h1>OMG! Today’s weather is so Cool.</h1>");
// }


// Question 11.Write a program to create a calculator for +,-,*, / & % using if statements.

// var firstNumber = parseInt(prompt("Enter First Number:"));
// var operation = prompt("What Operation Do You Want + , - , x ,% , /");
// var secondNumber = parseInt(prompt("Enter Second Number:"));
// var addition = firstNumber + secondNumber;
// var subtraction = firstNumber - secondNumber;
// var multiply = firstNumber * secondNumber;
// var divide = firstNumber / secondNumber;
// var remainder = firstNumber % secondNumber;
// if(operation === "+"){
//     document.write("The Answer Is: " + addition);
// }
// if(operation === "-"){
//     document.write("The Answer Is: " + subtraction);
// }
// if(operation === "*"){
//     document.write("The Answer Is: " + multiply);
// }
// if(operation === "/"){
//     document.write("The Answer Is: " + divide);
// }
// if(operation === "%"){
//     document.write("The Answer Is: " + remainder);
// }


// Chapter 12-13

// Question 1.Write a program that takes a character (number or string).


// Question 2.Write a JavaScript program that accept two integers and display the larger.

// Question 3.Write a program that takes input a number from user & state whether the number is positive, negative or zero.

// var num = parseInt(prompt("Enter Number"));
// if (num == 0) {
//     alert("Your Entered Zero Number");
// } 
// else if(num>0) {
//     alert("Your Entered Positive Number");
// }
// else if(num<0){
//     alert("Your Entered Negative Number");
// }
// else("Error! Please Enter Number");

// Question 5.a. Store correct password in a JS variable.

// var password = "PASSWORD";
// var enterPassword = prompt("Enter Password");

// if(enterPassword !== "" ){
// if(enterPassword === password){
//     document.write("<h1>Successfully Login To Your Account...</h1>")
// }
// else{
//     document.write("<h1>Incorrect Password</h1>")
// }
// }
// else{
//     document.write("<h1>Enter your password!!!</h1>")
// }

// Question 6.a. This if/else statement does not work

// var greeting_day = "Good day";
// var greeting_eve = "Good evening";
// var hour = parseInt(prompt("Please Enter Current Hour"));

// var hour = 13;

// if (hour <= 18) {
// document.write(greeting_day)

// }
// if( hour > 18){
// document.write(greeting_eve)
// }
// else{
//     document.write(greeting_eve)
    
//     }
