function addition(){
    var num1=parseInt(document.getElementById("input1").value);
    var num2 =parseInt(document.getElementById("input2").value);
    var result = num1+num2;
    document.getElementById("demo").innerHTML=result;
}

function substraction(){
    var num1=parseInt(document.getElementById("input1").value);
    var num2 =parseInt(document.getElementById("input2").value);
    var result = num1-num2;
    document.getElementById("demo").innerHTML=result;
}
function multiply(){
    var num1=parseInt(document.getElementById("input1").value);
    var num2 =parseInt(document.getElementById("input2").value);
    var result = num1*num2;
    document.getElementById("demo").innerHTML=result;
}
function divide(){
    var num1=parseInt(document.getElementById("input1").value);
    var num2 =parseInt(document.getElementById("input2").value);
    var result = num1%num2;
    document.getElementById("demo").innerHTML=result;
}
function display(){
    var myinput=document.getElementById("myinput").value;
     document.getElementById("demo").innerHTML=myinput;
}

