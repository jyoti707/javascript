//Q1
// function addNumbers(a, b) {
//     return a + b;
//   }
  
//   // Example usage:
//   let result = addNumbers(5, 7);
//   console.log(result); // Output: 12

  //Q2
//   let name = "Alice";
//   let age = 25;
  
//   console.log("Name:", name);
//   console.log("Age:", age);

//Q3
// Define a function that adds two numbers
// function add(a, b) {
//     return a + b;
//   }
  
//   // Define two variables
//   let num1 = 5;
//   let num2 = 7;
  
//   // Use the function on the variables and output the result
//   let result = add(num1, num2);
//   console.log("The result is:", result);

//Q4
// Define a function that adds two numbers
// function addNumbers(a, b) {
//     let sum = a + b;
//     console.log("The sum is:", sum);
//   }
  
//   // First call
//   addNumbers(5, 10); // Outputs: The sum is: 15
  
//   // Second call with different numbers
//   addNumbers(20, 7); // Outputs: The sum is: 27
  
  




//Practice sheet 1.2



//Q1
// Create an array of descriptive words
// const descriptiveWords = ["beautiful", "brilliant", "calm", "elegant", "fierce", "gentle", "majestic", "radiant", "vibrant", "zesty"];

// // Print the array to the console
// console.log(descriptiveWords);

//Q2
// function askForName() {
//     const name = prompt("What is your name?");
//     console.log("You entered:", name);
//   }
  
//   // Call the function to execute it
//   askForName();
  
//Q3
// const items = ['apple', 'banana', 'cherry', 'date', 'fig'];

// const randomIndex = Math.floor(Math.random() * items.length);
// const randomItem = items[randomIndex];

// console.log('Random item:', randomItem);

//Q4
// Prompt the user for input
// const userInput = prompt("Enter something:");

// // Sample array
// const sampleArray = ["apple", "banana", "cherry", "date", "elderberry"];

// // Randomly select a value from the array
// const randomIndex = Math.floor(Math.random() * sampleArray.length);
// const randomValue = sampleArray[randomIndex];

// // Output both to the console
// console.log("User input:", userInput);
// console.log("Randomly selected value:", randomValue);

//Q5
// Define the function
// function greet() {
//     console.log("Hello, world!");
//   }
  
//   // Invoke the function
//   greet();




//Practice sheet 1.3



// // 1. Set up two variables containing number values.
// let num1 = 10;
// let num2 = 5;

// // 2. Set up a variable to hold an operator, either "add" or "subtract".
// let operator = "add";

// // 3. Create a function that retrieves the two values and the operator string value within its parameters.
// function calculator(a, b, op = "add") {
//     if (op === "subtract") {
//         return a - b;
//     } else {
//         return a + b;
//     }
// }

// // 4. Within console.log(), call the function using your variables and output the response to the console.
// console.log(calculator(num1, num2, operator)); // Output: 15

// // 5. Update the operator value to be the other operator type—and call to the function again with the new updated arguments
// operator = "subtract";
// console.log(calculator(num1, num2, operator)); // Output: 5

// // Test with no operator specified (defaults to addition)
// console.log(calculator(num1, num2)); // Output: 15



//Practice sheet 1.4



// // 1. Set up an empty array
// let resultsArray = [];

// // 3. Create a function that returns the sum of two parameters
// function addValues(a, b) {
//     return a + b;
// }

// // 2. Create a loop that runs 10 times
// for (let i = 0; i < 10; i++) {
//     let firstValue = i * 5;       // Multiply loop count by 5
//     let secondValue = i * i;      // Multiply loop count by itself

//     // 4. Call the function and store the result
//     let result = addValues(firstValue, secondValue);

//     // 5. Push the result into the array
//     resultsArray.push(result);
// }

// // 6. Output the array to the console
// console.log(resultsArray); // Expected: [0, 6, 14, 24, 36, 50, 66, 84, 104, 126]




//Practice 1.5



// // 1. Create a variable 'value' with let and assign a string value of 1000 to it.
// let value = "1000";
// console.log("Initial value:", value);

// // 2. Create an IIFE (Immediately Invoked Function Expression) to assign a new value to the 'value' variable within the function scope.
// (function() {
//     let value = "2000"; // New local value inside IIFE
//     console.log("Local value inside IIFE:", value);
// })();

// // 3. Create an IIFE expression, assign it to a new result variable, and assign a new value to 'value' within this scope.
// let result = (function() {
//     let value = "3000"; // New local value inside the IIFE
//     return value; // Return the local value to 'result'
// })();
// console.log("Result after IIFE expression:", result); // What value does result contain now?

// // 4. Create an anonymous function with a parameter, assigning a passed-in value to the same variable 'value' and print it as part of a string.
// const printValue = function(newValue) {
//     let value = newValue; // Assign the passed-in value to 'value'
//     console.log(The value inside the anonymous function is: ${value});
// };

// // Invoke the anonymous function and pass in a
// printValue("5000");




//Practice 1.6



// // 1. Create a function that contains a condition within it checking if the argument value is 0.
// function factorial(n) {
//     console.log(Calculating factorial of ${n}...);
//     if (n === 0) {
//         // 2. If the parameter is equal to 0, it should return the value of 1.
//         return 1;
//     } else {
//         // Otherwise, it should return the value of the argument multiplied by the value returned from the function itself, subtracting one from the value of the argument that is provided.
//         return n * factorial(n - 1);
//     }
// }

// // 3. Invoke the function, providing an argument of whatever number you want to find the factorial of.
// let result = factorial(5);
// console.log(Factorial result: ${result});

// // 4. Change and update the number to see how it affects the results
// let result2 = factorial(7);
// console.log(Factorial result: ${result2});





//Practice 1.7





// // Step 1: Set the starting value of the countdown
// let start = 10;

// // Step 2: Create the countdown function
// function countdown(count) {
//     // Step 3: Output the current value of the countdown
//     console.log(count);

//     // Step 4: Condition to check if the countdown value is less than 1
//     if (count < 1) {
//         return; // Step 5: Return the function when countdown is less than 1
//     }

//     // Step 6: Continue the countdown by calling the function within itself
//     countdown(count - 1); // Decrement countdown by 1 and call the function again
// }

// // Step 7: Start the countdown with the initial value (start)
// countdown(start);




//Practice sheet 1.8



// Function expression
// const printArgument = function(arg) {
//     console.log(arg);
// };

// // Passing an argument to the function
// printArgument("Hello, World!");

// // Function declaration
// function printArgumentDeclaration(arg) {
//     console.log(arg);
// }