const input = document.getElementById("input");
const generate = document.getElementById("generate");
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
const result = document.getElementById("result");
const copy = document.getElementById("copy");

let password = "";

generate.addEventListener("click" , function(){

    let length = Number(input.value);

    if(length <= 0){
        alert("Please enter a valid length");
        return;
    }

     if(length > 50){
        alert("Maximum length is 50");
        return;
    }

    
    password = "";
    
    for(let i=0; i<length; i++){

        let randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    
    }
    console.log(password);

    result.textContent = "Your Result : " + password;
    

});

copy.addEventListener("click" , function(){

    if(password === ""){
        alert("Generate a password first!");
        return;
    }

     navigator.clipboard.writeText(password);
     alert("Password Copied !");
    
});

input.addEventListener("input", function(){

    if(input.value.trim() === ""){
        result.textContent = "Your Result : ";
        password = "";
    }

});
 

