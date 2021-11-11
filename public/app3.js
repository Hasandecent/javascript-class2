// // Chapter 1

// // Question 1. Write a program that takes two user inputs for first.

// var firtName = prompt("Enter Your First Name");
// var lastName = prompt("Enter your Last Name");
// var fullName = firtName + " " + lastName;
// document.write(fullName);

// // Question 2. Write a program to take a user input about his favorite mobile phone model.

// var mobileName = prompt("Enter Your Favourite Mobile Phone Name ");
// var length= mobileName.length;
// document.write("<br>My Favourite Mobile Phone is: "+mobileName);
// document.write("<br>Length of string is: "+length);

// // Question 3. Write a program to find the index of letter “n” in the word.

// var nationality ="Pakistani"
// document.write("String :" + nationality + "</br>");
// document.write("index of N is :" + nationality.indexOf("n"));


// // Question 4. Write a program to find the last index of letter “l” in the word “Hello World”

// var hello = "HELLO WORLD"
// document.write("string :" + hello + "<br>");
// document.write("Last Index of 'L' is:" + " " + hello.lastIndexOf("L") + "</br>");

// // Question 5. Write a program to find the character at 3rd index in the word “Pakistani”

// var nationality = "Pakistani";
// document.write("String:" + " " + nationality + "<br>")
// document.write("Character at index 3:" + " " + nationality.charAt('3') + "<br><br><br>")


// // Question 6. Repeat Q1 using string concat() method

// var firstName = prompt("Enter Your First name");
// var space = " ";
// var lastName = prompt("Enter Your Last Name");
// var fullName = firstName.concat(space).concat(lastName);
// document.write(fullName+"<br>")

// // Question 7. Write a program to replace the “Hyder” to “Islam”

// var city = prompt("Enter The City");
// var city2 = prompt("Enter The city you want to replace");
// citychange = city.replace(city,city2);
// document.write("<br><br>City: "+city);
// document.write("<br>After Replacement: "+citychange);


// // Question 8. Write a program to replace all occurrences of “and” in the string with “&”

// var message = "Ali and Sami are best friends.They play cricket and football together.";
// var messageReplace = message.replace(/and/g,"&");
// document.write("<br><br>Message: "+message);
// document.write("<br>Replace Message: "+messageReplace);

// // Question 9. Write a program that converts a string “472” to a number 472.

// var num = "472"
// var num1 = Number(num);
// document.write("Value:" + " " + num + "<br>")
// document.write("Type:" + " " + typeof (num) + "<br>")
// document.write("Value:" + " " + Number(num) + "<br>")
// document.write("Type:" + " " + typeof (num1) + "<br><br><br>")

// // Question 10.Write a program that takes user input.

// var word = prompt("Enter the word you want to Capatilize");
// var capitalWords = word.toUpperCase();
// document.write("<br><br>User Input: "+word);
// document.write("<br>Upper case: "+capitalWords);

// // Question 11.Write a program that takes user input. Convert and show the input in title case.

// var anyWord = prompt("Enter the word you want to capital the first letter");
// var capital_anyWord = anyWord.charAt(0).toUpperCase()+anyWord.slice(1);
// document.write("<br><br>User Input: "+anyWord);
// document.write("<br>Title case: "+capital_anyWord);

// // Question 12.Write a program that takes user input. Convert and show the input in title case.

// var num = 35.36;
// var chngStrng = num.toString();
// var replac = chngStrng.replace(".","");
// document.write("Number:"+num+"<br>")
// document.write("Result:"+replac+"<br>")

// // Question 13.

// // Question 14.

// // Question 15.

// // Question 16.Write a program to convert the following string

// var University = "University of Karachi";

// for(i=0; i<University.length; i++){
//     document.write(University[i]+"<br>");
// }


// // Question 17.Write a program to convert the following string

// var user = "Pakistan";
// var userLastchar = user.charAt(7);
// document.write("<br><br>User Input: " + user);
// document.write("<br>Last Character of Input: " + userLastchar);

// // Question 18.Write a program to convert the following string

// var text = "The quick brown fox jumps over the lazy dog";
// var occurances = (text.toLowerCase().match(/the/g)).length;
// document.write("<br><br>Text: " + text);
// document.write("<br>There are " + occurances + " of the word 'the'");
