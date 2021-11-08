// // Chapter 13-17

// // Question 1. Declare an empty array using JS literal notation to store student names in future.
// var stdArr = []
// console.log(stdArr)

// // Question 2. Declare an empty array using JS literal notation to store student names in future.
// var stdArr = new Array()
// console.log(stdArr)

// // Question 3. Declare and initialize a strings array.
// var stringArr = ["Hasan" , "Khalil" , "Ali"]
// console.log(stringArr)  

// // Question 4. Declare and initialize a numbers array.
// var numbArr = [12 , 23 , 77]
// console.log(numbArr)  

// // Question 5. Declare and initialize a boolean array.
// var booleanArr = [true , false ]     
// console.log(booleanArr)

// // Question 6. Declare and initialize a mixed array.
// var mixedArr = ["hasan",1, true ]
// console.log(mixedArr)

// // Question 7. Declare and initialize a mixed array.

// document.write("<h1>Qualifications:</h1>")
// var qualifivationArr = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PHD"];
// document.write(qualifivationArr[0] + "<br>")
// document.write(qualifivationArr[1] + "<br>")
// document.write(qualifivationArr[2] + "<br>")
// document.write(qualifivationArr[3] + "<br>")
// document.write(qualifivationArr[4] + "<br>")
// document.write(qualifivationArr[5] + "<br>")
// document.write(qualifivationArr[6] + "<br>")
// document.write(qualifivationArr[7] + "<br>")

// // Question 8. Write a program to store 3 student names in an array.

// var stdName1 = prompt("Enter First Student Name");
// var stdName2 = prompt("Enter Second Student Name");
// var stdName3 = prompt("Enter Third Student Name");
// var stdMarks1 = parseInt(prompt("Enter First Student Marks"));
// var stdMarks2 = parseInt(prompt("Enter Second Student Marks"));
// var stdMarks3 = parseInt(prompt("Enter Third Student Marks"));
// var stdsNameArr = [stdName1, stdName2, stdName3];
// var stdsMarksArr = [stdMarks1, stdMarks2, stdMarks3];
// var percentageArr =[ stdsMarksArr[0]/500*100,  stdsMarksArr[1]/500*100,  stdsMarksArr[2]/500*100];
// document.write("<br>Score of " + stdsNameArr[0] + " is " + stdsMarksArr[0] + ". Percentage: " + percentageArr[0] + "%");
// document.write("<br>Score of " + stdsNameArr[1] + " is " + stdsMarksArr[1] + ". Percentage: " + percentageArr[1] + "%");
// document.write("<br>Score of " + stdsNameArr[2] + " is " + stdsMarksArr[2] + ". Percentage: " + percentageArr[2] + "%");

// // Question 9. Initialize an array with color names.

// var colorName = ["pink" , "yellow" , "blue" , "black"];
// document.write("Color Name :" + " " + colorName + "</br>")

//a
// var addColor = prompt("Type Your Favourite Color");
// colorName.unshift(addColor)
// document.write(  "New Color See First :" + " "  +colorName)

//b
// var addColor2 = prompt("Type Your Favourite Color");
// colorName.push(addColor2)
// document.write( "New Color See last :" + " "  +colorName)

//c
// var color1 = prompt("ADD COLOR 1 to the beginning of the Array")
// var color2 = prompt("ADD COLOR 2 to the beginning of the Array")
// colorName.unshift(color1 , color2 )
// document.write("New Color See First :" + " "  +colorName)

//d
// colorName.shift();
// document.write("Delete First Color : " + colorName)

//e
// colorName.pop();
// document.write("Delete Last Color : " + colorName)

//f

// var indexNum = parseInt(prompt("Enter a Index Number "))
// var colorAdd = (prompt("Enter a colors name "))
// colorName.splice(indexNum, 0 , colorAdd);
// document.write(colorName)

//g
// var askColorindex1 = +prompt("Enter the index number where you want to remove color");
// var askColor1 = prompt("Enter The Color ");
// colorName.splice(0,askColorindex1,askColor1);
// var updArr = colorName;
// document.write("<br>" +updArr);


//Question 10. Write a program to store student scores in an array
// var stdScore = [320,230,480,120];
// document.write("Score of students:"+" "+stdScore+"<br>")
// stdScore.sort()
// document.write("Ordered Score of students:"+" "+stdScore+"<br>")


//Question 11. Write a program to initialize an array with city names

// var cities = ["karachi" , "Lahore" , "Islamabad" , "Quetta" , "Peshawar"];
// var selectedCities = cities.slice(2,3);
// document.write("Cities list :" + selectedCities)            

//Question 12.

// document.write("<h1>Arrays:</h1>")
// var arr = ["This",  " is ", " my ",  "cat"];
// document.write(arr)
// document.write("<h1>Strings:</h1>")
// var joinArr = arr.join("")
// document.write(joinArr)

//Question 13.

// var deviceArr = ["keyboard","mouse","printer","moniter"];
// document.write("<br>"+"Devices"+"<br>"+deviceArr+"<br><br>");
// document.write("Out:"+ "<br>" +deviceArr[0]+"<br>");
// document.write("Out:"+ "<br>" +deviceArr[1]+"<br>");
// document.write("Out:"+ "<br>" +deviceArr[2]+"<br>");
// document.write("Out:"+ "<br>" +deviceArr[3]+"<br>");

//Question 14.

// var deviceArr = ["keyboard","mouse","printer","moniter"];
// document.write("<br>"+"Devices"+"<br>"+deviceArr+"<br><br>");
// deviceArr.reverse();
// document.write("Out:"+ "<br>" +deviceArr+"<br>");


//Question 15.

// var mobiles = ["Apple","Samsung", "Motorola", "Nokia", "Sony" , "Haier"];
// document.write("<select>")
// for(var i=0;i<mobiles.length;i++){
//     document.write("<option>" + mobiles[i]  +"</option>")
// }            
// document.write("</select>")  



// // Chapter 17-20

//Question 1.Declare and initialize an empty multidimensional array.

// var multiArr = [[1], [2], [3]];

//Question 2.Declare and initialize a multidimensional array representing the following matrix:

// var arr = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
// document.write(arr[0].join(" ")+"</br>");
// document.write(arr[1].join(" ")+"</br>");
// document.write(arr[2].join(" ")+"</br>");

//Question 3.Declare and initialize a multidimensional array representing the following matrix:

// for(var i = 1;i <= 10 ; i++){
//     document.write(i + "<br>")
// }

//Question 4.Write a program to print multiplication table of any number using for loop. 

// var table = parseInt(prompt("Enter the table number you want to print"));
// var tableLength = parseInt(prompt("Enter the length of  table number"));
// document.write("<br>" + "Multiplication Table of " + table);
// document.write("<br>" + "Table Length You Entered " + tableLength + "<br><br>");
// for (var i = 1; i <= tableLength; i++) {
//     document.write(table + " x " + i + " = " + table * i + "<br>");
// }

//Question 5.Write a program to print items of the following array using for loop

// var fruits = ["apple", "banana", "mango", "orange" , "strawberry"];

// for(var i = 0; i < 5; i++){
//     document.write(fruits[i] + "<br>");
// }

// for (var i = 0; i < fruits.length; i++) {
//     document.write("Element at index " + i + " is " + fruits[i] + "<br>");
// }


//Question 6.Generate the following series in your browser

// a.

// for (var i = 1; i <= 15; i++) {
//     document.write(i + ",");
// }

// b.

// for (var i = 10; i >= 1; i--) {
//     document.write(i + ",");
// }

// c.

// for (var i = 0; i <= 10; i++) {
//     document.write(i * 2 + ",");
// }

// d.
// for (var i = 1; i <= 19; i++) {
//     document.write(i++ + ",");
// }


//e.
// for (var i = 1; i <= 10; i++) {
//     document.write(i * 2 + "k" + " ");
// }

//Question 7.Write a program to enable “search by user input”


//Question 8.Write a program to identify the largest number in the given array
// var numArr = [24, 53, 78, 91, 12];
// document.write("Array items is:" + " " + numArr + "<br>");
// document.write("The largest number is:" + " " + Math.max(...numArr));

//Question 9.Write a program to identify the largest number in the given array

// var numArr2 = [24, 53, 78, 91, 12];
// document.write("Array items is:" + " " + numArr2 + "<br>");
// document.write("The smallest number is:" + " " + Math.min(...numArr2));


//Question 10.Write a program to print multiples of 5 ranging 1 to 100

// for(var i = 1; i <= 20; i++){
//     document.write(i * 5 + ",");
// }
