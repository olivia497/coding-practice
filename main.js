//Make a simple function called greet that returns the most-famous "hello world!".
function greet(){
  return "hello world!"
}


//This code does not execute properly. Try to figure out why. 
function multiply(a, b){
  return (a * b)
}

//In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

function makeNegative(num) {
  return(-Math.abs(num))
};

console.log(makeNegative(0));


function makeNegative(num) {
  if(num >= 0){
    return (num * (-1))
  }else{
    return num
  }
}


//You get an array of numbers, return the sum of all of the positives ones.
function positiveSum(arr) {
  var total = 0;    
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      total += arr[i];
    }
  }
  return total;
}

console.log(positiveSum([1, 2, 3, 4, 5, -3]));


//write a function that reverses the string passed into it.
function solution(str){
  return str.split('').reverse().join('');  
}


// Create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.
function removeChar(str){
  return str.slice(0, -1); //0 is removing the first character, -1 is removing the last
 };

 console.log(removeChar('Hello to all the world'));

//Complete the square sum function so that it squares each number passed into it and then sums the results together. For example, for [1,2,2] it should return 9 because 1^2 + 2^2 + 2^2 = 9
function squareSum(numbers){
  return numbers.reduce(
    (sum,num) => sum + (num * num), 0);
}

console.log(squareSum([1,2,2])); 

//Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
function repeatStr (n, s) {
  let str = s.repeat(n);
  return(str);
}

console.log(repeatStr(5,'hello '));

//Write a function that removes the spaces from the string, then return the resultant string.
function noSpace(x){
  let newStr = x.replace(/ /g, "");
  return newStr;
}

//Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}

//Find the smallest integer in the array
let args = [99, 77, 4];

class SmallestIntegerFinder {
  findSmallestInt(args) {
    let smallestArgs = Math.min(...args)
    return smallestArgs
  }
}

//Your task is to create a function that does four basic mathematical operations.
function basicOp(operation, value1, value2)
{
  // Code
  if( operation == "+") {
    return value1 + value2
  }
  if( operation == "-") {
    return value1 - value2
  }
  if( operation == "*") {
    return value1 * value2
  }
  if( operation == "/") {
    return value1 / value2
  }
}

console.log(basicOp('+', 5, 9))


//drinking 0.5litres of water per hour, calculate water needed rounded down
function litres(time) {
  waterNeeded = Math.floor(time * 0.5);
  return waterNeeded;
};


// given random non-negative number, you have to return the digits of this number within an array in reverse order.
function digitize(n) {
  return n.toString().split('').reverse().map(Number);
}

 console.log(digitize(1, 2, 3));

//create a sentence from an array of words
function newSentence(words){
  return words.join(' ');
};

//if the given numbers make  a square, return the area. If they make a rectangle, return the perimeter
const areaOrPerimeter = function(l , w) {
  if(l === w){
    return l * w
  }else{
    return l + l + w + w
  }
};

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiThreeZebra(a, b, c){
  let product = a * b * c
  if(product % 3 === 0){
    alert('ZEBRA')
  }else{
    alert('Errrrr no.')
  }
}

multiThreeZebra(3, 1, 1);

//This code does not execute properly. Try to figure out why. = SOLVED
function multiply(a, b){
  let total = a*b;
  return total
}



//create function that returns even for even numbers and off for odd numbers
function evenOrOdd(number) {
  if(number % 2 === 0){
    return 'Even'
  }else{
    return 'Odd'
  }
}

// convert number to string
function numberToString(num) {
  return num.toString()
}

// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
function getGrade (s1, s2, s3) {
  let sum = s1 + s2 + s3
  let average = sum / 3
  if(average <= 0 || average < 60){
    return 'F'
  }else if(average <= 60 || average < 70){
    return 'D'
  }else if(average <= 70 || average < 80){
    return 'C'
  }else if(average <= 80 || average < 90){
    return 'B'
  }else{
    return 'A'
  }
}

// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".


function greet(name){
  return `Hello, ${name} how are you doing today?`
}

//Let's play! You have to return which player won! In case of a draw return Draw!.
const rps = (p1, p2) => {
  if(p1 === 'scissors' && p2 === 'paper' || p1 === 'paper' && p2 === 'rock' || p1 === 'rock' && p2 === 'scissors'){
    return 'Player 1 won!' 
  }else if(p1 === 'paper' && p2 === 'scissors' || p1 === 'rock' && p2 === 'paper' || p1 === 'scissors' && p2 === 'rock'){
    return 'Player 2 won!'
  }else{
    return 'Draw!'
  }
};

// Your goal is to create a function that removes the first and last characters of a string.
function removeChar(str){
  newStr = str.slice(1, -1)
  return newStr
};

//Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
function smash (words) {
  return words.join(' ')
};


// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

function basicOp(operation, value1, value2){
  if(operation === '+'){
    return value1 + value2
  }else if(operation === '-'){
    return value1 - value2
  }else if(operation === '*'){
    return value1 * value2
  }else if(operation ==='/'){
    return value1 / value2
  }
}