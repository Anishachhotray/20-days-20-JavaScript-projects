const input = document.getElementById("input");
const button = document.getElementById("add");
const taskList = document.getElementById("taskList");

let tasks = [];

button.addEventListener("click",function(){

    let task = input.value.trim();

    if(task === ""){
        alert("Please enter a task");
        return;
    }

    tasks.push(task);
    console.log(tasks);

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
         let index = tasks.indexOf(task);

        if(index > -1){
            tasks.splice(index, 1);
         }

        li.remove();
        console.log(tasks);
    });

    li.appendChild(checkBox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    input.value = "";

});