let count = 0;
const counting = document.getElementById("count");
const increment = document.getElementById("increase");
const decrement = document.getElementById("decrease");
const reset = document.getElementById("reset");

increment.addEventListener("click", function(){
    count ++;
    counting.textContent = count;

});

decrement.addEventListener("click", function(){
    count --;
    counting.textContent = count;
});

reset.addEventListener("click", function(){
    count = 0;
    counting.textContent = count;
});