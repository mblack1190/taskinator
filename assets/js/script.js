var formEl = document.querySelector("#task-form");


var taskFormHandler = function(event) {

    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    var tasksToDoEl = document.querySelector("#tasks-to-do");

    // package up data as an object
    var taskDataObj = {
        name: "taskNameInput",
        type: "taskTypeInput"
    };

    //send it as an argument to createTaskEl
    createTaskEl(taskDataObj);
}

var createTaskEl = function(taskDataObj) {

    //taskDataObj
    {
        name: "Task's name";
        type: "Task's type"
    }
     //create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
        
    //create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    //give it a class name
    listItemEl.className = "task-info";
    //add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
        
    listItemEl.appendChild(taskInfoEl);
    
    //add entire list item to list
    var tasksToDoEl = document.querySelector("#tasks-to-do");
    tasksToDoEl.appendChild(listItemEl);
}
formEl.addEventListener("submit", taskFormHandler);


