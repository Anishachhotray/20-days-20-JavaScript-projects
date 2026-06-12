const calculate = document.getElementById("calculate");

calculate.addEventListener("click", function(){

    const result = document.getElementById("res");

    let weight1 = document.getElementById("weight").value;
    let height1= document.getElementById("height").value;
    

    if( weight1 === "" || height1 === ""){
         result.textContent = "Please fill both the fields!"
         return;
    }
       

    let weight2 = Number(weight1);
    let height2 = Number(height1);
    
    if(weight2 <= 0 || height2 <= 0 ){
        result.textContent = "Invalid data !"
        return;
    }

    let bmi =  weight2 / (height2 * height2);
    
    if(bmi < 18.5 ){
        result.textContent = "Underweight";

    }else if(bmi >= 18.5 && bmi <= 24.9){
        result.textContent = "Healthy";

    }else if(bmi >= 25 && bmi <= 29.9){
        result.textContent = "Overweight";

    }else if(bmi >= 30){
        result.textContent = "Obese";
    }

});

