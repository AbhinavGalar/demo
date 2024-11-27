var num=12345;
var num1=6789;
console.log(num1+num1);
// concatination
console.log(num+" "+num1);

let mypara =document.getElementById("demo");
console.log(mypara);
 var  display=()=>{
    mypara.innerHTML="this is javascript";

}
function styling (){
    mypara.style.color="red";
    mypara.style.backgroundColor="black";
    mypara.style.fontSize="30px";
    mypara.style.padding="50px";
}
// using dom you can manipulate 3thing
// innerhtml,css,attributes


var input1=document.getElementById("myinput");
var img1=document.getElementById("myimg");
function change(){
    input1.value="indore";
    img1.src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp";
}