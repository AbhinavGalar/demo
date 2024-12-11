let name ="  jhon doe  ";
let trimmedText =name.trim();
// the trim() method  removes whitespaces from both side of a string 

console.log(trimmedText);

// splitiing a string into an array

const data= "this is a string which will split into array";

const splitteData= data.split(" ");

console.log(splitteData);

// slice extracts the part of the string ,it takes 2 parameters 1st is the starting positon and second is the ending position and enditing 
// position is not included


const something="javascript is a programming language";

let newData = something.slice(0,7);
console.log(newData);
// if you ommited the 2 parameter it will slice the  remaining string 
newData = something.slice(14);
console.log(newData);

// substring 
// something is smililar to slice but cannot takes negative values
// 2nd parameter id length of string you want to extract   
newData = something.substring(0,4);
console.log(newData); 

// replace 
// replace method replace the first matched word.
const mystring = "allthe gliters is not gold . gold is precious";

let newText = mystring.replace("gold","silver");
console.log(newText);