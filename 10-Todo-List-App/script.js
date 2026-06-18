const input = document.getElementById("input");
const button = document.getElementById("add");
const taskList = document.getElementById("taskList");

button.addEventListener("click",function(){

    let task = input.value;

    if(task === ""){
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");


    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";

    checkBox.addEventListener("click", function(){

        if(checkBox.checked){
            span.style.textDecoration = "line-through";
        }
        else{
            span.style.textDecoration = "none";
        }

    });

    let span = document.createElement("span");
    span.textContent = task;
    span.classList.add("task-text");

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑";

    deleteBtn.addEventListener("click", function(){
        li.remove();
    });

    li.appendChild(checkBox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    input.value = "";

});