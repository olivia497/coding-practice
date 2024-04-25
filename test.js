function isPalindrome(x) {
  let checkX = x.toString(x.split('').reverse().join(''))
  if(x === checkX){
    return true
  }else{
    return false
  }
}