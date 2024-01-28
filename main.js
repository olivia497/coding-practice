// //Make a simple function called greet that returns the most-famous "hello world!".
// function greet(){
//   return "hello world!"
// }

// //Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
// function evenOrOdd(number) {
//   if(number % 2 === 0){
//     return "Even"
//   }else{
//     return "Odd"
//   }
// }

// //This code does not execute properly. Try to figure out why. 
// function multiply(a, b){
//   return (a * b)
// }

// //In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// function makeNegative(num) {
//   return(-Math.abs(num))
// };

// console.log(makeNegative(0));

// //You get an array of numbers, return the sum of all of the positives ones.
// function positiveSum(arr) {
//   var total = 0;    
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       total += arr[i];
//     }
//   }
//   return total;
// }

// console.log(positiveSum([1, 2, 3, 4, 5, -3]));


// //Complete the solution so that it reverses the string passed into it.
// function solution(str){
//   return str.split('').reverse().join('');  
// }


// // Create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.
// function removeChar(str){
//   return str.slice(0, -1); //0 is removing the first character, -1 is removing the last
//  };

//  console.log(removeChar('Hello to all the world'));

// //Complete the square sum function so that it squares each number passed into it and then sums the results together. For example, for [1,2,2] it should return 9 because 1^2 + 2^2 + 2^2 = 9
// function squareSum(numbers){
//   return numbers.reduce(
//     (sum,num) => sum + (num * num), 0);
// }

// console.log(squareSum([1,2,2])); 

//Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
function repeatStr (n, s) {
  let str = s.repeat(n);
  return(str);
}

console.log(repeatStr(5,'hello '));

