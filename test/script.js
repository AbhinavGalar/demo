function changeme(){
let btn=document.getElementById("demo");
btn.style.color="red";
btn.style.backgroundColor="green";
}
// =======second question=========
function multiplication(){
    var num1=parseInt(document.getElementById("input1").value);
    var num2 =parseInt(document.getElementById("input2").value);
    var result = num1*num2;
    document.getElementById("demo").innerHTML=result;
}
function  divied() {
    var num1=parseInt(document.getElementById("input1").value);
    var num2 =parseInt(document.getElementById("input2").value);
    var result = num1/num2;
    document.getElementById("demo").innerHTML=result;
}