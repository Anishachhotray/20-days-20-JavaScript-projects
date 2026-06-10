const change = document.getElementById("change");

const colors = ["Cyan", "Beige", "Green", "Pink", "Yellow", "Red", "Lavender", "Aliceblue", "Crimson", "Darkorchid" ];

addEventListener("click", function(){
    const colorsIndex = Math.floor(Math.random() * colors.length);

    const changeColor = colors[colorsIndex];

    document.body.style.background = changeColor;

    const currentColor = document.getElementById("currentColor");
    currentColor.textContent = changeColor;
    

});