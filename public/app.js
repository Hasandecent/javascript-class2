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
