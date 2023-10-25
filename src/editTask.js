import { projectList, saveToLocalStorage } from "./creatingProject";
import { hideDropDown, revertOptionLocation } from "./editingProject";
import { displayTask, processDateData } from "./creatingTask";
import { checkWhichHomeTile } from "./homeSection";

// style completed task
function styleCompletedTask(e){
    let uncheckedNode = e.target;
    let taskTile = e.target.closest("li");
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

// find the task via id
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