const inputText = document.getElementById("inputText");
const btn = document.getElementById("check");
const msg = document.getElementById("messageBox");
const result = document.getElementById("result");
const palindrome = document.getElementById("palindrome")


inputText.addEventListener("input", function(){

    if(inputText.value.trim() === ""){
        msg.textContent = "";
        result.textContent = "Reversed :" + "";
        palindrome.textContent = "Palindrome :" + "";
    }

});

btn.addEventListener("click" , function(){

    let input = inputText.value.toLowerCase();

    let chars = input.split("");

    let reverse = chars.reverse();

    let join = reverse.join("");

    if(input === ""){

        msg.textContent = "⚠️ Please enter a word, sentence, or number.";
        result.textContent = "Reversed :" + "";
        palindrome.textContent = "Palindrome :"+"";

    }else if(input === join){

        msg.textContent = "";
        result.textContent = "Reversed : " + join;
        palindrome.textContent = "Palindrome : ✅ ";


    }else{

        msg.textContent = "";
        result.textContent = "Reversed : " + join;
        palindrome.textContent = "Palindrome : ❌ ";

    }
    
});
