function signup(){
    let data ={
        username:document.getElementById('username').value,
        password:document.querySelector('#password').value
    }

    localStorage.setItem('signupdata',JSON.stringify(data))
}

let local_data =JSON.parse(localStorage.getItem('signupdata'))

function login(){
    let data ={
        username:document.getElementById('usernamelogin').value,
        passwordlogin:document.getElementById('passwordlogin').value
    }

    if(local_data.username!=data.usernamelogin || local_data.password != data.passwordlogin){
        alert("user not found")
        return false;
    }
}