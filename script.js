//*************************************************************************************************************/
//COMM644
//Assignment 3, Part 1

//Practice with Arrays (5 points)
//Within a new web page, create the following applications. Remember to comment out every application once you’ve finished with that step:
/*************************************************************************************************************/
//"use strict";

//1.	Create a string array that contains your five favorite movies. Then, use the console to display the second movie in your array.
//var movies = ["Avatar", "Titanic", "Jurrasic World", "The Avengers", "Furious 7"];
//window.console.log(movies[1]);

//2.	Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Then, use the console to display the first movie in your array.
//var movies = [];
//movies[0] = "Avatar";
//movies[1] = "Titanic";
//movies[2] = "Jurrasic World";
//movies[3] = "The Avengers";
//movies[4] = "Furious 7";
//window.console.log(movies[0]);

//3.	Add a new movie into the 3rd position within your array. Then, use the console to display the length of the array. You should now have 6 total movies stored in the array.
//var favMovies = ["Avatar", "Titanic", "Jurrasic World", "The Avengers", "Furious 7"];
//favMovies.splice(2,0, "Lord of the Rings");  
//window.console.log(favMovies);
//window.console.log(favMovies.length);

//4.	Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Now, use the delete operator to remove the first movie in the array. Use the console to display the contents of the array.
//var movies = ["Avatar", "Titanic", "Jurrasic World", "The Avengers", "Furious 7"];
//delete movies[0];
//window.console.log(movies);

//5.	Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 7 total movies in your array. Now, use a for loop to iterate through the array and display each movie within the console window.
//var movies = ["Avatar", "Lord of the Rings", "Titanic", "Jurrasic World", "The Avengers", "Furious 7", "Iron Man 3"];
//for (var i=0; i<movies.length; i++) {
//    window.console.log(movies[i]);
//}

//6.	Now, use a for-in loop to iterate through the array and display each movie within the console window.
//var movies = ["Avatar", "Lord of the Rings", "Titanic", "Jurrasic World", "The Avengers", "Furious 7", "Iron Man 3"];
//for (var i in movies) {
//    window.console.log(movies[i]);
//}
//7.	Using the for-in loop to iterate through the array, display each movie within the console window in a sorted view.
//var movies = ["Avatar", "Lord of the Rings", "Titanic", "Jurrasic World", "The Avengers", "Furious 7", "Iron Man 3"];
//movies.sort(); 
//for (var i in movies) {
//    window.console.log(movies[i]);
//}
//8.	Under the previous movies array, create a new array called leastFavMovies. Populate the array with the 3 movies that you regret watching. Display both arrays within the console window so that it’s formatted to look like this (note the spacing, you must include that too):
//Movies I like:
//
//Movie 1
//Movie 2
//Movie 3
//…
//
//Movies I regret watching:
//
//Movie 1
//Movie 2
//Movie 3
//var movies = ["Avatar", "Lord of the Rings", "Titanic", "Jurrasic World", "The Avengers", "Furious 7", "Iron Man 3"];
//var leastFavMovies = ["Minions", "Frozen", "Alice In Wonderland"]
//window.console.log("Movies I like: \n\n");               
//for (var i in movies) {
//    window.console.log(movies[i]);
//}
//window.console.log("\nMovies I regret watching\n\n");
//for (var i in leastFavMovies) {
//    window.console.log(leastFavMovies[i]);
//}

//9.	Now, use the concat() method to merge the two arrays together into a single array called movies. Use the console window to display the list in reverse sorted order.
//var movies = ["Avatar", "Lord of the Rings", "Titanic", "Jurrasic World", "The Avengers", "Furious 7", "Iron Man 3"];
//var leastFavMovies = ["Minions", "Frozen", "Alice In Wonderland"];
//window.console.log(movies.concat(leastFavMovies).reverse());

//10.	Return just the last item in the array and display it within the console window.
//var movies = ["Avatar", "Lord of the Rings", "Titanic", "Jurrasic World", "The Avengers", "Furious 7", "Iron Man 3"];
//window.console.log(movies[(movies.length - 1)]);

//11.	Remove the previous method and this time return just the first item in the array and display it within the console window.
//var movies = ["Avatar", "Lord of the Rings", "Titanic", "Jurrasic World", "The Avengers", "Furious 7", "Iron Man 3"];
//var firstMovie = movies.shift();
//window.console.log(firstMovie);
//window.console.log(movies);

//12.	Programmatically retrieve the movies in your array that you do not like and return their indices. Then, using those indices, programmatically add movies that you do like.
//var movies = ["Avatar", "Lord of the Rings", "Titanic", "Jurrasic World", "The Avengers", "Furious 7", "Iron Man 3", "Minions", "Frozen", "Alice In Wonderland"];
//var leastFav1 = movies.indexOf("Minions");
//var leastFav2 = movies.indexOf("Frozen");
//var leastFav3 = movies.indexOf("Alice In Wonderland");
//movies[leastFav1] = "Lion King";
//movies[leastFav2] = "Despicable Me";
//movies[leastFav3] = "Finding Nemo";
//window.console.log(movies);

//Alternatively you could do the same thing with splice; 
//movies.splice(leastFav1, 1, "Lion King");
//movies.splice(leastFav2, 1, "Despicable Me");
//movies.splice(leastFav3, 1, "Finding Nemo");
//window.console.log(movies);

//13.	Create two associative arrays called employee1 and employee2 respectively. Each array should have an employeeid, name, title, department, and whether or not the employee is a current employee of the company. Now, add both of those associative arrays to a new array called employees. Then, programmatically display the name of the second employee within a console window. 
//var index;
//var value;
//var employee1 = [];
//employee1.id = "12345";
//employee1.name = "Jet Martin";
//employee1.title = "CEO";
//employee1.department = "Executive";
//employee1.currentEmployee = true;
//var employee2 = [];
//employee2.id = "54321";
//employee2.name = "Janet Jackson";
//employee2.title = "Entertainer";
//employee2.department = "Entertainment";
//employee2.currentEmployee = false;
//var employees = [];
//employees.push(employee1);
//employees.push(employee2);
//window.console.log(employees[1]);



//for (index in employee1) {
//    employees[index] = employee1[index];
////    employees[index].push(employee1[index]);
//}
//for (index in employee2) {
//    employees[index] = employee2[index];
//}




//14.	Using the above code, modify the code slightly so that you’re using a loop to loop through the array and printing out the names of both employees.

//var index;
//var value;
//var employee1 = [];
//employee1.id = "12345";
//employee1.name = "Jet Martin";
//employee1.title = "CEO";
//employee1.department = "Executive";
//employee1.currentEmployee = true;
//var employee2 = [];
//employee2.id = "54321";
//employee2.name = "Janet Jackson";
//employee2.title = "Entertainer";
//employee2.department = "Entertainment";
//employee2.currentEmployee = true;
//var employees = [];
//employees.push(employee1);
//employees.push(employee2);
//for (index in employees) {
//    window.console.log(employees[index].name);
//}


//15.	And to really tick you off, add a third employee and set his employment status to false. Then, programmatically loop through the array but don’t display an employee if they aren’t a current employee of the company. Basically, only the first two should appear in the console window.
//var index;
//var value;
//var employee1 = [];
//employee1.id = "12345";
//employee1.name = "Jet Martin";
//employee1.title = "CEO";
//employee1.department = "Executive";
//employee1.currentEmployee = true;
//
//var employee2 = [];
//employee2.id = "54321";
//employee2.name = "Janet Jackson";
//employee2.title = "Entertainer";
//employee2.department = "Entertainment";
//employee2.currentEmployee = true;
//
//var employee3 = [];
//employee3.id = "98765";
//employee3.name = "Donald Trump";
//employee3.title = "Goof Ball";
//employee3.department = "Entertainment";
//employee3.currentEmployee = false;
//
//var employees = [];
//employees.push(employee1);
//employees.push(employee2);
//employees.push(employee3);
//
//for (index in employees) {
//    if (employees[index].currentEmployee) {
//        window.console.log(employees[index].name);
//    }
//}


//16.	Create a multi-dimensional array that contains your 5 favorite movies and their ranking from 1-5. The array should look something like this: 
//movies = [["Movie 1", 1], ["Movie 2", 2], ["Movie 3", 3], ["Movie 4", 4], ["Movie 5", 5]];
//Now, loop through the array and filter out and display only the movie names. You must use the filter() method and you’ll need to filter out the names by their primitive data type.

//// Solution using forEach loop
//var movies = [["Avatar", 5], ["Lord of the Rings", 5], ["Titanic", 4], ["Jurrasic World", 4], ["The Avengers", 3], ["Furious 7", 4], ["Iron Man 3", 4]];
//var movieNames = []; 
//movieNames = movies.forEach(function (item) {
//    window.console.log(item[0]);
//});

//var movies = [["Avatar", 5], ["Lord of the Rings", 5], ["Titanic", 4], ["Jurrasic World", 4], ["The Avengers", 3], ["Furious 7", 4], ["Iron Man 3", 4], [3, 5]];
//// First filter out Movies that don't have strings for titles 
//var movieTitles = movies.filter(function (item) {
//    return typeof item[0] === "string";
//});
//movieTitles.forEach(function (item) {
//    window.console.log(item[0]);
//});

//// IGNORE....Exploring how to use regular loops
////var i;
////for (i = 0; i <= movies.length - 1; i += 1) {
////    window.console.log(movies[i][0]);
////}


//*************************************************************************************************************/
//Practice with Functions (5 points)
//*************************************************************************************************************/

//1.	Create an anonymous function named displayMessage that accepts one parameter. Within the function write a statement that prints out the value of the parameter out into the console window. Now, call the function and pass in a string as the parameter in the function call.

//var displayMessage = function (msg) {
//    window.console.log(msg);
//};
//
//displayMessage("Hello there");


//2.	Create a named function named calculate that accepts two parameters. Within the function write a statement that returns the modulus of the first and second parameters. Now, call the function and pass in two numbers as parameters into the function call. Make sure to display the result within the console window.

//function calculate(num1, num2) {
//    return num1 % num2;
//}
//
//window.console.log(calculate(5, 2));

//3.	Create a string array called employees and populate the array with several employee names. Then, create an anonymous function called showEmployee. The function should accept a parameter. Call this function, passing in the employees array into the function as a parameter. Make sure to display the result in the console window. Within the function, loop through the passed in array and display the result so that it looks exactly like this in the console window:
//
//Employees: 
//
//ZAK 
//JESSICA 
//MARK 
//FRED 
//SALLY 

//var employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];

//var showEmployee = function (empNames) {
//    var name;
//    window.console.log("\nEmployees:\n\n");
//    for (name in empNames) {
//        window.console.log(empNames[name] + "\n");
//    }
//};

//showEmployee(employees);

////Alternative approach using forEach loop
////var showEmployee = function (empNames) {
////    var name;
////    window.console.log("\nEmployees:\n\n");
////    empNames.forEach(function (empNames) {
////        window.console.log(empNames + "\n");
////    });
////};

//*************************************************************************************************************/
//Assignment 3 Part 2
//*************************************************************************************************************/

//*************************************************************************************************************/
//The Rock, Paper, Scissors Game (10 points)
//Rock, paper, scissors is a classic 2 player game. Each player chooses rock, paper or scissors. The possible outcomes include:
//•	Rock destroys scissors.
//•	Scissors cut paper.
//•	Paper covers rock.
//Our code will break the game into 3 phases:
//1.	User makes a choice. How will we collect the user’s choice?
//2.	Computer makes a choice. How will we collect the computer’s choice?
//3.	A conditional that determines who wins.
//In this lab you will be responsible for figuring out some of the logic. These next steps will attempt to guide you down the right path: 
//1.	Begin by prompting the user for their choice.
//2.	Create the computer’s choice. This will be generated similarly to the coin flip that you did last week. Remember though, rather than 2 options, there will be 3 here.
//3.	Depending on what the numeric value of the computer’s choice is, reset it to a string value of rock, paper, or scissors instead.
//4.	Create a conditional that checks the user’s choice in relation to the computer’s choice. Once a winner is defined, display a message within an alert box indicating who the winner is.
//5.	What if the result ends in a tie? Figure out how to handle that as well.
//6.	What if the user enters something other than rock, paper, or scissors into the prompt? Figure out how to handle that as well.
//*************************************************************************************************************/

//var computerChoice = function () {
//    var randomNum;
//    randomNum = Math.random();
//    window.console.log("Random number: " + randomNum);
//    if (randomNum <= 0.3) {
//        computerChoice = "rock";
//    } else if (randomNum <= 0.6) {
//        computerChoice = "scissors";
//    } else {
//        computerChoice = "paper";
//    }
//    return computerChoice;
//};
//
//var winner = function (computerChoice, userChoice) {
//    switch (userChoice) {
//    case "rock":
//        if (computerChoice === "rock") {
//            winner = "tie";
//        } else if (computerChoice === "scissors") {
//            winner = "user";
//        } else {
//            winner = "computer";
//        }
//        break;
//    case "scissors":
//        if (computerChoice === "scissors") {
//            winner = "tie";
//        } else if (computerChoice === "paper") {
//            winner = "user";
//        } else {
//            winner = "computer";
//        }
//        break;
//    case "paper":
//        if (computerChoice === "paper") {
//            winner = "tie";
//        } else if (computerChoice === "rock") {
//            winner = "user";
//        } else {
//            winner = "computer";
//        }
//        break;
//    default:
//    }
//    return winner;
//};
//var userChoice = window.prompt("Please enter your choice. Enter rock, scissors, paper");
//if (userChoice === "rock" || userChoice === "scissors" || userChoice === "paper") {
//    computerChoice();
//    window.console.log("User choice: " + userChoice + "\n" + "Computer Choice: " + computerChoice);
//    winner(computerChoice, userChoice);
//    switch (winner) {
//    case "user":
//        window.alert("Congratulations! You WIN! You selected " + userChoice + " the computer selected: " + computerChoice);
//        break;
//    case "computer":
//        window.alert(" Sorry. The computer beat you this time. Try again. You selected " + userChoice + " the computer selected: " + computerChoice);
//        break;
//    case "tie":
//        window.alert("It's a Tie....both you and the computer seleccted " + computerChoice);
//        break;
//    default:
//            
//    }
//} else {
//    window.alert("Sorry you entered an invalid choice. You must enter one of the following choices: rock, scissors or paper");
//}



//*************************************************************************************************************/
//The Basic Calculator (10 points)
//*************************************************************************************************************/
//In this part of the assignment you will build a simple calculator. You will ask the user for a number, a second number, and then finally ask them what kind of operation they want to perform, either add, subtract, multiply, or divide. Depending on what they select, you will perform that operation. To complete this lab follow the steps outlined here:
//1.	Prompt the user for a number and store that in a variable.
//2.	Prompt the user for a second number and store that in a variable.
//3.	Prompt the user for the operation they would like to perform (add, subtract, multiply, divide) and store that in a variable.
//4.	Create a new named function called calculate() that accepts 3 parameters.
//5.	Call the calculate function and pass in the 3 variables as parameters. 
//HINT: You will need to convert the 2 numbers from strings to numbers. 
//6.	Within the calculate() function use a switch statement to evaluate the operation parameter being passed in. Depending on what it is, perform that operation, and display the result within an alert box.
//7.	Figure out how to make it so that if the user doesn’t enter either add, subtract, multiply, or divide, they are displayed an alert message telling them that. Then you’ll have to rerun the application so that the application asks the user for the numbers and operation once more.


//function promptUser() {
//    var arithmeticOperations = [];
//    var operand1, operand2, operation;
//    arithmeticOperations[0] = window.prompt("Welcome to the myCalculator App...Let's get started\n\n" + "Please enter your first operand (i.e., number): ");
//    arithmeticOperations[1] = window.prompt("Please enter your second operand (i.e., number): ");
//    arithmeticOperations[2] = window.prompt("Please enter the operation you'd like to perform on these two numbers.\n\n Your choices are: add, subtract, multiply or divide");
//    return arithmeticOperations;
//}
//
//function calculate(arithmeticOperations) {
//    var calculation = 0;
//    var operand1 = arithmeticOperations[0];
//    var operand2 = arithmeticOperations[1];
//    var operation = arithmeticOperations[2];
//    switch (operation) {
//    case ("add"):
//        calculation = Number(operand1) + Number(operand2);
//        window.alert(operand1 + " + " + operand2 + " = " + calculation);
//        break;
//    case ("subtract"):
//        calculation = Number(operand1) - Number(operand2);
//        window.alert(operand1 + " - " + operand2 + " = " + calculation);
//        break;
//    case ("multiply"):
//        calculation = Number(operand1) * Number(operand2);
//        window.alert(operand1 + " * " + operand2 + " = " + calculation);
//        break;
//    case ("divide"):
//        if (Number(operand2) !== 0) {
//            calculation = Number(operand1) / Number(operand2);
//            window.alert(operand1 + " / " + operand2 + " = " + calculation);
//        } else {
//            window.alert("Sorry You can't divide by zero...Try again");
//            arithmeticOperations = promptUser();
//            calculate(arithmeticOperations);
//        }
//        break;
//    default:
//        window.alert("Sorry you failed to enter a vaid operation. The only valid operations are:\n\n  add, subtract, multiply or divide");
//        arithmeticOperations = promptUser();
//        calculate(arithmeticOperations);
//            
//    }
//    
//}

//// Main Application
//var arithmeticOperations = promptUser();
//calculate(arithmeticOperations);



//*************************************************************************************************************/
//Death by JavaScript (4 points each for 20 points total)
//Solve the following function/array-related problems. Each solution should be written within its own function and the output should be displayed within a console window. The display should be the return value of the function call.
//*************************************************************************************************************/

//1.	Write a JavaScript function that when called, returns a passed in string with letters in alphabetical order. Assume punctuation and number symbols are not included in the passed-in string.
//
//Sample Data and Output
//Example string: 'webmaster' 
//Expected Output: 'abeemrstw'

//function alphabetizeIt(str) {
//    var strArray = [];
//    return str.split("").sort().join("");
//}
//window.console.log(alphabetizeIt("webmaster"));



//2.	Write a JavaScript function that accepts a string as a parameter and when called, converts the first letter of each word of the string to upper case characters and return it.
//
//Sample Data and Output
//Example string: 'the quick brown fox' 
//Expected Output: 'The Quick Brown Fox'

//// Capitalizes first letter of a single string
//function capFirstLetter(str) {
//    var capStr;
//    capStr = str.replace(str.charAt(0), str.charAt(0).toUpperCase());
//    return capStr;
//}
//
//// Capitalize every first letter of string
//function capString (str) {
//    var element;
//    var strArray;
//    var cappedStrAry = [];
//    var cappedStr;
//    strArray = str.split(" ");
////    window.console.log("Split string array: " + strArray);
//    for (element in strArray) {
////        window.console.log("strArray[element] = " + strArray[element]);
////        window.console.log(capFirstLetter(strArray[element]));
//        cappedStrAry.push(capFirstLetter(strArray[element]));
////        cappedString = cappedString.push(capFirstLetter(strArray[element]));
//    }
//    cappedStr = cappedStrAry.join(" ");
//    return cappedStr;
//}
//var origString = "the lazy brown fox";
//window.console.log("The original string: " + origString);
//window.console.log(capString(origString));


//3.	Write a JavaScript function that accepts a string as a parameter and when called, counts the number of vowels within the string and returns that number.
//
//Sample Data and Output
//Example string: 'The quick brown fox' 
//Expected Output: 5

//// Determines if letter in word is a vowel. If it is vowel it returns true; 
//function isVowelPresent(ltr) {
//    var vowelPresent = false, vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
//    if (vowels.indexOf(ltr) > -1) {
//        vowelPresent = true;
//    }
//    return vowelPresent;
//}
//
//
//// Counts vowels in each word
//function vowelCountInWord(word) {
//    var wordVowelCount, ltrArray, ltr, i;
//    wordVowelCount = 0;
//    ltrArray = word.split("");
//    for (i = 0; i < ltrArray.length; i += 1) {
//        if (isVowelPresent(ltrArray[i])) {
//            wordVowelCount += 1;
//        }
//    }
//    return wordVowelCount;
//}
//
//function vowelCountInString(str) {
//    var strVowelCount, wordArray, word;
//    strVowelCount = 0;
//    wordArray = str.split(" ");
//    for (word in wordArray) {
//        strVowelCount += vowelCountInWord(wordArray[word]);
//    }
//    return strVowelCount;
//}
//
//window.console.log(vowelCountInString("The quick brown fox"));


//4.	Write a JavaScript function that when called, generates a string id (specified length) of 8 random characters and returns those characters as a string. This is a great application to learn for making password generator-type applications.
//
//Sample Data and Output
//Expected Output: RCv1SBUC or PmJkc2Y2 or nIi5L0FA

//var ID = function (idLength) {
//  return Math.random().toString(36).substr(2, idLength);
//};
//
//window.console.log(ID(8));



//5.	Write a JavaScript function that accepts a list of country names as input and when called, returns the longest country name as the output.
//
//Sample Data and Output
//Sample function: Longest_Country_Name(["Republic of Khazakstan Country that you will see", "Australia", "Germany", "United States of America"])
//Expected output: "United States of America"

//function Longest_Country_Name(countryArray) {
//    var i, longestCountry, indexOfLongest;
//    longestCountry = 0;
//    indexOfLongest = 0; 
//    for (i = 0; i < countryArray.length; i += 1) {
//        if (countryArray[i].length > longestCountry) {
//            longestCountry = countryArray[i].length;
//            indexOfLongest = i; 
//        }
//    }
//    return window.console.log(countryArray[indexOfLongest]); 
//}
//
//Longest_Country_Name(["Australia", "Germany", "United States of America"]);

var names = ["Ted Lewis", "Sue Jones", "Ray Thomas"];
for (var index in names) {
    console.log(names[index]);
}

