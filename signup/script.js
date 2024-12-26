function signup(){
    let data ={
        username:document.getElementById('username').value,
        password:document.querySelector('#password').value
    }

    localStorage.setItem('signupdata',JSON.stringify(data))
}

let locat_data =JSON.parse(localStorage.getItem('signupdata'))

function login(){
    let data ={
        username:document.getElementById('usernamelogin').value,
        passwordlogin:document.getElementById('passwordlogin').value
    }

    if(locat_data.username!=data.usernamelogin || locat_data.password != data.passwordlogin){
        aler
    }
}