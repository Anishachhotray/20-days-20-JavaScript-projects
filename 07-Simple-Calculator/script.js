const display = document.getElementById("display");

let expression = "";

function appendValue(value){

    if(display.textContent === "0"){
        expression = value;
    }
    else{
        expression += value;
    }

    display.textContent = expression;
}

function clearDisplay(){

    expression = "";

    display.textContent = "0";
}

function deleteLast(){

    expression = expression.slice(0,-1);

    if(expression === ""){
        display.textContent = "0";
    }
    else{
        display.textContent = expression;
    }
}

function calculateResult(){

    if(expression === ""){
        return;
    }

    try{

        let answer = eval(expression);

        display.textContent = answer;

        expression = answer.toString();

    }

    catch{

        display.textContent = "Error";

        expression = "";
    }
}


    
