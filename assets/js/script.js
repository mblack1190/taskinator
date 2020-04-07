var formEl = document.querySelector("#task-form");


var createTaskHandler = function(event) {

    event.preventDefault();
    var tasksToDoEl = document.querySelector("#tasks-to-do");
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
}

formEl.addEventListener("submit", createTaskHandler);


