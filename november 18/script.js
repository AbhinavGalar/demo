// object literals

const person={
    name:"jhon",
    age:19,
    city:"bhopal",
};
// to  know to data type of person
console.log(typeof person);
console.log(person.name);
console.log(person.age);
console.log(person.city);
// array
const number =[10,20,30,40];
console.log(number[0]);
console.log(number[2]);

// function declarion
// function is a way to  group code togeather you can run it any time;
function sayhello(){
    console.log("hello world");
    alert("hello");
    document.write("hello");
}
// function calling 
sayhello();

// parameters are when you are delaring a function
function addition (num1,num2){
  return num1+num2;
}
// arguments
console.log(20,30);
console.log(addition(100,500));
document.getElementById("demo").innerHTML=addition(100,500);


//  var number =67;
// function cube(){
//     return number*number*number;
// }
// console.log(cube());

// // function  expression 
//   const multiply= function(x,y){
//     return x*y;
//   };
//   console.log(multiply(5,8));

//   const divide =(a,b)=>{
//     return a/b;
//   }
//   console.log(divide (100/2));

document.getElementById("myform").addEventListener("submit",validate);
