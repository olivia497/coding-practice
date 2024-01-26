//Make a simple function called greet that returns the most-famous "hello world!".
// function greet(){
//   return "hello world!"
// }

//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
// function evenOrOdd(number) {
//   if(number % 2 === 0){
//     return "Even"
//   }else{
//     return "Odd"
//   }
// }

//This code does not execute properly. Try to figure out why.
// function multiply(a, b){
//   return (a * b)
// }

//In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

function makeNegative(num) {
  return(-Math.abs(num))
};

console.log(makeNegative(0));