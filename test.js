function abbrevName(name){
  let initials = name.split(" "); //Splitting the string at the space between first and last name
  return(initials[0][0] + "." + initials[1][0]).toUpperCase(); //Returns the first letter of first name and first letter of last name
}