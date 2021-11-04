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


//10 Write a program to store student scores in an array
// var stdScore = [320,230,480,120];
// document.write("Score of students:"+" "+stdScore+"<br>")
// stdScore.sort()
// document.write("Ordered Score of students:"+" "+stdScore+"<br>")


//11 Write a program to initialize an array with city names

// var cities = ["karachi" , "Lahore" , "Islamabad" , "Quetta" , "Peshawar"];
// var selectedCities = cities.slice(2,4);
// document.write("Cities list :" + selectedCities)            

//12

// document.write("<h1>Arrays:</h1>")
// var arr = ["This",  " is ", " my ",  "cat"];
// document.write(arr)
// document.write("<h1>Strings:</h1>")
// var joinArr = arr.join("")
// document.write(joinArr)

//13

// var deviceArr = ["keyboard","mouse","printer","moniter"];
// document.write("<br>"+"Devices"+"<br>"+deviceArr+"<br><br>");
// document.write("Out:"+ "<br>" +deviceArr[0]+"<br>");
// document.write("Out:"+ "<br>" +deviceArr[1]+"<br>");
// document.write("Out:"+ "<br>" +deviceArr[2]+"<br>");
// document.write("Out:"+ "<br>" +deviceArr[3]+"<br>");

//14

// var deviceArr = ["keyboard","mouse","printer","moniter"];
// document.write("<br>"+"Devices"+"<br>"+deviceArr+"<br><br>");
// document.write("Out:"+ "<br>" +deviceArr[3]+"<br>");
// document.write("Out:"+ "<br>" +deviceArr[2]+"<br>");
// document.write("Out:"+ "<br>" +deviceArr[1]+"<br>");
// document.write("Out:"+ "<br>" +deviceArr[0]+"<br>");

//15

// var mobiles = ["Apple","Samsung", "Motorola", "Nokia", "Sony" , "Haier"];
// document.write("<select>")
// for(var i=0;i<mobiles.length;i++){
//     document.write("<option>" + mobiles[i]  +"</option>")
// }            
// document.write("</select>")  