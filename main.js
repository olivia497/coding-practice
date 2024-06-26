//Make a simple function called greet that returns the most-famous "hello world!".
function greet(){
  return "hello world!"
}


//This code does not execute properly. Try to figure out why. 
function multiply(a, b){
  return (a * b)
}

//In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

const makeNegative = num => -Math.abs(num)


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

//Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present). for, if, loop through 


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
};

//create function that returns even for even numbers and off for odd numbers

const evenOrOdd = number => number % 2 === 0 ? 'Even' : 'Odd'

// convert number to string

const numberToString = num => num.toString()

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

function getGrade (s1, s2, s3) {
  let score = (s1+s2+s3)/3
  
   if(score <= 0 || score < 60){
    return 'F'
  }else if(score <= 60 || score < 70){
    return 'D'
  }else if(score <= 70 || score < 80){
    return 'C'
  }else if(score <= 80 || score < 90){
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

// Given a non-empty array of integers, return the result of multiplying the values together in order. 
function grow(x){
  let total = x.reduce((a, b) => a * b, 1)
  return total
}


// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.
function zeroFuel(distanceToPump, mpg, fuelLeft){
  if((distanceToPump / mpg) <= fuelLeft){
    return true
  }else{
    return false
  }
}


// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
function boolToWord( bool ){
  if(bool === true){
    return "Yes"
  }else{
    return "No"
  }
}

const boolToWord = bool => bool === true ? 'yes' : 'no'

// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

const min = list => Math.min(...list)
const max = list => Math.max(...list)


// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
const simpleMultiplication = number => number % 2 === 0 ? number * 8 : number * 9


// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.
function feast(beast, dish) {
  if(beast[0] === dish[0] && beast[beast.length-1] === dish[dish.length-1]){
    return true
  }else{
    return false
  }
}


// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!
function areYouPlayingBanjo(name) {
  // Implement me
  if(name.startsWith('R') || name.startsWith('r')){
    return name + " plays banjo"
  }else{
    return name + " does not play banjo"
  }
}

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string
function fakeBin(x){
  let result = '';
  for(let i = 0; i < x.length; i++){
    x[i] < 5 ? result += 0 : result += 1;
  }
  return result;
}

//You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again. Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

function updateLight(current) {
  
  if (current === 'green'){
    return 'yellow'
  } else if (current === 'yellow') {
    return'red'
  } else {
    return 'green'
  }
}

// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
function invert(array) {
  return array.map(num => -num)
}

// Implement a function which convert the given boolean value into its string representation.
const booleanToString = b => b.toString()


// Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.
class Kata {
  static getVolumeOfCuboid(length, width, height) {
    // your code here
    let volume = length * width * height
    return volume
  }
}

// You get an array of numbers, return the sum of all of the positives ones. Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.
function positiveSum(arr){
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > 0){
      sum += arr[i]
    }
  }
}

//Write code for an array that calculates and shows the sum of its values.
const values = [2, 3, 6, 8]

const sumWithInitial = values.reduce((acc, cVal) => acc + cVal, 0)

console.log(sumWithInitial);

//Write a program that asks the user for a word until the user types "stop." The program then shows each of these words except "stop"

let d = [];
while(1){
  let word = prompt('Enter some word?');
  if(word === 'stop') break;
  d.push(word);
}

//Create an array of numbers. Return the additive inverse of each so the positives become negatives and the negatives become positive. 

let arr = [1, -2, 3, -4, 5];

function invertIt(arr){
  return arr.map(num => -num)
}

//double the integer

function doubleInt(i){
  return i * i
}

//convert km/hr to cm/sec
const cockroachSpeed = s => Math.floor(s*27.777778)

//test


function helloWorld(){
  let str = "Hello World!"
  console.log(str)
 }


 const isPalindrome = x => x.toLowerCase() === x.split('').reverse().join('').toLowerCase() ? true : false


 function otherAngle(a, b) {
  let c = 180 - a - b;
  return c;
}

const otherAngle = (a,b) => 180 - a - b

const sayHello = name => `Hello, ${name}`

//create method to check if string is all uppercase
String.prototype.isUpperCase = function() {
  return this == this.toUpperCase()
}


const twiceAsOld = (dadYearsOld, sonYearsOld) => Math.abs(dadYearsOld - (2 * sonYearsOld))

function findNeedle(haystack) {
  let needleIndex = haystack.indexOf('needle');
  console.log(`found in position ${needleIndex}`)
};

findNeedle(haystack);


function findMultiples(integer, limit) {
  //loop through and add each integer to an array
  let result = [];
  //start at the integer, counting up by the value of the integer
  //stop counting at and including the limit 
  for(let i = integer; i <= limit; i+=integer){
    result.push(i);
  };
  
  return result;
}

const haystack = ['bison', 'apple', 'needle', 'chair']

function findNeedle(haystack) {
  let needleIndex = haystack.indexOf('needle');
  console.log(`found in position ${needleIndex}`)
};

findNeedle(haystack);


function abbrevName(name){
  let initials = name.split(" "); //Splitting the string at the space between first and last name
  return(initials[0][0] + "." + initials[1][0]).toUpperCase(); //Returns the first letter of first name and first letter of last name
}

// Write a function "greet" that returns "hello world!"

const greet = () => "hello world!";


function between(a, b) {
  arr = []
  for(i = a; i <= b; i++){
    arr.push(i)
  }
  return arr
}