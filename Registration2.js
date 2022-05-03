//import module
import {NameValidation, EmailValidation, PhoneValidation, PasswordValidation} from './Validate.js';


//can't get text boxes values here

document.getElementById("name").onblur=function(){
    try{
        NameValidation(this.value);
        //if editing error input then we need to remove the error
        this.classList.remove("is-invalid");
        this.nextElementSibling.innerText = '';
    }
    catch(e){
        //console.log(this.nextElementSibling)
        this.classList.add("is-invalid");
        this.nextElementSibling.innerText = e.message;
    }
}

document.getElementById("email").onblur=function(){
    try{
        EmailValidation(this.value);
        //if editing error input then we need to remove the error
        this.classList.remove("is-invalid");
        this.nextElementSibling.innerText = '';
    }
    catch(e){
        //console.log(this.nextElementSibling)
        this.classList.add("is-invalid");
        this.nextElementSibling.innerText = e.message;
    }
}


document.getElementsByClassName("password")[0].onblur=function(){
    try{
        PasswordValidation(this.value);
        //if editing error input then we need to remove the error
        this.classList.remove("is-invalid");
        this.nextElementSibling.innerText = '';
    }
    catch(e){
        //console.log(this.nextElementSibling)
        this.classList.add("is-invalid");
        this.nextElementSibling.innerText = e.message;
    }
}
document.getElementsByClassName("password")[1].onblur=function(){
    try{
        PasswordValidation(this.value);
        //if editing error input then we need to remove the error
        this.classList.remove("is-invalid");
        this.nextElementSibling.innerText = '';
    }
    catch(e){
        //console.log(this.nextElementSibling)
        this.classList.add("is-invalid");
        this.nextElementSibling.innerText = e.message;
    }
}

document.getElementById("Phone").onblur=function(){
    try{
        PhoneValidation(this.value);
        //if editing error input then we need to remove the error
        this.classList.remove("is-invalid");
        this.nextElementSibling.innerText = '';
    }
    catch(e){
        //console.log(this.nextElementSibling)
        this.classList.add("is-invalid");
        this.nextElementSibling.innerText = e.message;
    }
}

document.forms[0].onsubmit = function(eve){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var phone = document.getElementById("Phone").value;
    try{
        NameValidation(name);
        EmailValidation(email);
        PasswordValidation(password);
        PhoneValidation(phone);

        //create cookie with user data
        var date = new Date();
        date.setDate(date.getDate()+10);
        setCookie("username",name,date);
    }
    catch(e){
        eve.preventDefault();
        alert(e.message);
    }
}