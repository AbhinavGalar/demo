const display1= function (){
    alert("function xpression called");
};
// arror function 
const display2 =()=>{
    alert ("arrow function called");
};
function display(){
alert("this  isnsnsnnsn")
}
let button= document.getElementById("btn");
// whenever you pass a function as an argument 
// never use ()
// arrow function and function expression 
button.addEventListener("click" ,display1);

button.addEventListener("mouseover",function (){
    console.log("hello from mouse over ");
});
function display(){
    alert("function is called");
}
// ==========querryselectior=============
let h1=document.querySelectorAll("h1");
console.log(h1);

h1[0].innerHTML="hello from query selectior";
h1[0].style.color="red";
h1[0].style.backgroundColor="pink";
