// from===========================
// to prevent the default behaiviour of from submisiion 
function validate(e){
    e.preventDefault();
    let myname =document.getElementById("name").value;
    let myemail=document.getElementById("email").value;
    let password=document.getElementById("pass").value;
 let confirm=document.getElementById("conpass").value;


 console.log(myname,myemail,password,confirm);
// check if any field is empty=======
if(myname =="" ||myemail=="" ||password==""||confirm==""){
    alert("all fields are required");
    return false;
}
if(password!==confirm){
    alert("password does not match");
    return false;
}
alert("from is submitted ");
}



