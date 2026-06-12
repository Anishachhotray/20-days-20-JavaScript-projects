const calculate = document.getElementById("calculate");

calculate.addEventListener("click", function(){

    let bill = Number(document.getElementById("bill").value);
    let tip = Number(document.getElementById("tip").value);

    const message = document.getElementById("msg");

    if(document.getElementById("bill").value === "" || document.getElementById("tip").value === ""){

        const tipAmount = document.getElementById("tipAmount");
        const ta = document.getElementById("ta");

        tipAmount.textContent = "Tip Amount : ₹0";
        ta.textContent = "Total Amount : ₹0";


        message.textContent = "Please fill in all fields";
        return;
    }

   if(bill <= 0){

        const tipAmount = document.getElementById("tipAmount");
        const ta = document.getElementById("ta");

        tipAmount.textContent = "Tip Amount : ₹0";
        ta.textContent = "Total Amount : ₹0";


        message.textContent = "Bill Amount must be GREATER THAN ZERO!";
        return;

    }


    if(tip < 0){

        const tipAmount = document.getElementById("tipAmount");
        const ta = document.getElementById("ta");

        tipAmount.textContent = "Tip Amount : ₹0";
        ta.textContent = "Total Amount : ₹0";


         message.textContent = "Tip Amount can't be LESS THAN ZERO!";
        return;

    }
    

    
    message.textContent = "";
    let tipAmt = (bill*tip) / 100;
    const tipAmount = document.getElementById("tipAmount");
    tipAmount.textContent = "Tip Amount : ₹" + tipAmt.toFixed(2);

    let totalAmt = bill + tipAmt;
    const ta = document.getElementById("ta");
    ta.textContent = "Total Amount : ₹" + totalAmt.toFixed(2);



})