// function isPalindrome(x) {
//   let checkX = x.toString(x.split('').reverse().join(''))
//   if(x === checkX){
//     return true
//   }else{
//     return false
//   }
// }

const isPalindrome = x => x.toLowerCase() === x.split('').reverse().join('').toLowerCase() ? true : false

console.log(isPalindrome('hello'))