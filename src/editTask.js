import { projectList, saveToLocalStorage } from "./creatingProject";
import { hideDropDown, revertOptionLocation } from "./editingProject";
import { displayTask, processDateData } from "./creatingTask";
import { checkWhichHomeTile } from "./homeSection";

// style completed task
function styleCompletedTask(e){
    let uncheckedNode = e.target;
    let taskTile = e.target.closest("li");
    let listDetails = taskTile.querySelector(".list-details");
    listDetails.classList.toggle("lineThrough");
    listDetails.classList.toggle("fade");
    uncheckedNode.classList.toggle("checked");
}
// update the completed object data
function updateCompletedTask(e){
    let listId = e.target.closest("li").id;
    let selectedTask = findSelectedTask(listId);
    selectedTask.completed = !selectedTask.completed;
    saveToLocalStorage();
}

// add styling to important tasks
function styleImportantTask(e){
    // styling Node
    let starOutline = e.target;
    starOutline.classList.toggle("listHidden");

    let starFilled = e.target.nextElementSibling;
    starFilled.classList.toggle("listHidden");
    // find the task via id
}

function findSelectedTask(listId){
    let selectedTask = projectList.reduce((acc, project) =>{
        let currentTask = project.taskList.find(task => (task.id == listId));
        if(currentTask != null){
            acc = currentTask;
        }
        return acc;
    }, {});
    return selectedTask;   
}

// update important status on stored object
function updateImportantTask(e){
    let listId = e.target.closest("li").id;
    let selectedTask = findSelectedTask(listId);
    selectedTask.important = !selectedTask.important;
    saveToLocalStorage();
    revertOptionLocation();
    refreshDisplay(selectedTask.dataProject);
}

// delete task from array
function deleteTask(e){
    let listNode = e.target.closest("li");
    let id = listNode.id;
    let selectedTask = findSelectedTask(id);
    let dataProject = selectedTask.dataProject;
    projectList[dataProject].taskList = projectList[dataProject].taskList.filter(task => task != selectedTask);
    saveToLocalStorage();
    revertOptionLocation();
    listNode.remove();
}


// process the input from edit task
function processEditTask(e){
    let title = document.getElementById("editListTitle").value;
    let details = document.getElementById("editListInputDetail").value;
    let dateInput = document.getElementById("editListInputDate").value;
    let taskId = findHiddenTask().id;
    let selectedTask = findSelectedTask(taskId);

    selectedTask.title = title;
    selectedTask.details = details;
    selectedTask.date = processDateData(dateInput);
    saveToLocalStorage();

    revertEditFormLocation();
    revertOptionLocation();
    showHiddenTask();

    let dataProject = selectedTask.dataProject;
    refreshDisplay(dataProject);
    e.preventDefault();
}

// refresh the content display after it has been edited
function refreshDisplay(dataProject){
    const selectedTile = document.querySelector(".selected");
    if(selectedTile.closest(".project") != null){
        displayTask(dataProject);
    }
    else if(selectedTile.closest(".home") != null){
        checkWhichHomeTile(selectedTile);
    }
    else {
        return;
    }
}
// find and return the task that is hidden
function findHiddenTask(){
    const hiddenTask = document.querySelector("li.hidden");
    return hiddenTask;
}
// reveal edit form for task
function showEditForm(e){
    let editContainerNode = e.target.parentNode.parentNode;
    hideDropDown(editContainerNode);
    relocateEditListform(e);

    document.getElementById("editListTitle").focus();
} 
// move the edit form in place of the task you want to edit 
function relocateEditListform(e){
    let listNode = e.target.closest("li");
    let ul = listNode.parentNode;

    const editListForm = document.getElementById("editListForm");
    const taskTitle = listNode.querySelector(".taskTitle").textContent;
    const taskDetails = listNode.querySelector(".taskDetails").textContent;
    const taskDate = listNode.querySelector(".date").textContent;

    const titleInput = editListForm.querySelector("#editListTitle");
    const detailInput = editListForm.querySelector("#editListTitle");
    const dateInput = editListForm.querySelector("#editListTitle");

    titleInput.value = taskTitle;
    detailInput.value = taskDetails;
    dateInput.value = taskDate;

    titleInput.value = taskTitle;
    detailInput.value = taskDetails;
    dateInput.value = taskDate;

    listNode.classList.add("hidden");
    editListForm.classList.remove("hidden");
    ul.insertBefore("hidden");
}

// move form from under the edited list to outside ul for sandby
function revertEditFormLocation(){
    const editForm = document.querySelector("#editListForm");
    const listToDo = document.querySelector(".list-todo");

    editForm.classList.add("hidden");
    listToDo.appendChild(editForm);
}

// show the hidden task that was hidden during edit mode
function showHiddenTask(){
    const hiddenTask = document.querySelector("li.hidden");
    hiddenTask.classList.remove("hidden");
}

export {styleCompletedTask, styleImportantTask, updateCompletedTask, updateImportantTask, deleteTask, showEditForm, relocateEditListform, revertEditFormLocation, processEditTask, showHiddenTask}