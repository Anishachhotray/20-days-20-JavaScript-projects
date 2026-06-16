const btn = document.getElementById("analyzeText");
const textInput = document.getElementById("textInput");
const counter = document.getElementById("counter");
const word = document.getElementById("words");
const vowel = document.getElementById("vowels");
const consonant = document.getElementById("consonants");

textInput.addEventListener("input", function(){

    if(textInput.value.trim() === ""){

        counter.textContent = "Counter : 0";
        word.textContent = "Words : 0";
        vowel.textContent = "Vowels : 0";
        consonant.textContent = "Consonants : 0";

    }

});


btn.addEventListener("input" , function(){
    if(textInput.value.trim() === ""){
        counter.textContent = "Counter : 0";
        word.textContent = "Words : 0";
        vowel.textContent = "Vowels : 0";
        consonant.textContent = "Consonants : 0";
    }
});

btn.addEventListener("click" , function(){

    let text = textInput.value;
    counter.textContent = "Counter: " + text.length;

    let words = textInput.value;
    let wordCount = words.trim().split(" ");
    word.textContent = "Words :" + wordCount.length;

    let chars = textInput.value;
    let countVowels= 0;
    let countConsonants = 0;

    for (let i = 0; i <  chars.length ; i++){

        if(chars[i]=== "a" || chars[i] === "e" || chars[i] === "i" || chars[i] === "o" || chars[i] === "u" || chars[i] === "A" || chars[i] === "E" || chars[i] === "I" || chars[i] === "O" || chars[i] === "U"){

            countVowels++;
        
        }
        else if (chars[i] >= "a" && chars[i] <= "z" || chars[i] >= "A" && chars[i] <= "Z"){

                countConsonants++

        }
       
        
    }
    vowel.textContent = "Vowels : " + countVowels;
    consonant.textContent = "Consonants :" + countConsonants; 
        
});







