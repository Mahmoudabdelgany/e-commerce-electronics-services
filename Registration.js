//import module
import { EmailValidation, PasswordValidation} from './Validate.js'
console.log('h')

//can't get text boxes values here

// document.getElementById("FullName").onblur=function(){
//     try{
//         NameValidation(this.value);
//         //if editing error input then we need to remove the error
//         this.classList.remove("is-invalid");
//         this.nextElementSibling.innerText = '';
//     }
//     catch(e){
//         //console.log(this.nextElementSibling)
//         this.classList.add("is-invalid");
//         this.nextElementSibling.innerText = e.message;
//     }
// }

document.getElementById("email").onblur=function(){
    try{
        EmailValidation(this.value);
        console.log('tamam')
        //if editing error input then we need to remove the error
        this.classList.remove("is-invalid");
        this.nextElementSibling.innerText = '';
    }
    catch(e){
        //console.log(this.nextElementSibling)
        this.classList.add("is-invalid");
        this.nextElementSibling.innerText = e.message;
        console.log('not tamam')
    }
}

document.getElementById("password").onblur=function(){
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

// document.getElementById("Phone").onblur=function(){
//     try{
//         PhoneValidation(this.value);
//         //if editing error input then we need to remove the error
//         this.classList.remove("is-invalid");
//         this.nextElementSibling.innerText = '';
//     }
//     catch(e){
//         //console.log(this.nextElementSibling)
//         this.classList.add("is-invalid");
//         this.nextElementSibling.innerText = e.message;
//     }
// }

document.getElementById("sub").onsubmit = function(eve){
    // var name = document.getElementById("FullName").value;
    var email = document.getElementById("Email").value;
    var password = document.getElementById("Password").value;
   // var phone = document.getElementById("Phone").value;
    try{
        // NameValidation(name);
        EmailValidation(email);
        PasswordValidation(password);
        // PhoneValidation(phone);

        //create cookie with user data
    }
    catch(e){
        eve.preventDefault();
        alert(e.message);
    }
}