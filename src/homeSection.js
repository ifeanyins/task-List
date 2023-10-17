import { projectList, HideAddTaskBtn } from "./creatingProject";
import parseISO from "date-fns/parseISO";


function checkWhichHomeTile(homeTile){
    if(homeTile.matches("#alltasks")){
        displayAllTasks();
    }
    else if(homeTile.matches("#today")){
        displayToday();
    }
    else if(homeTile.matches("#week")){
        displayThisWeek();
    }
    else if(homeTile.matches("#important")){
        displayImportant();
    }
}

function clearContent(){
    const ul = document.querySelector("ul");
    ul.textContent = "";
}

function showNoTask(){
    const ul = document.querySelector("ul");
    const div = document.createElement("div");
    div.classList.add("noTask");
    div.textContent = "Yay! No Tasks"
    ul.appendChild(div)
}

function checkNoTask(){
    const ul = document.querySelector("ul");
    if(ul.textContent === ""){
        showNoTask();
    }else{
        return;
    }
}
// display all tasks
function displayAllTasks(){
    clearContent();
    projectList.forEach(project => {
        project.taskList.forEach(task => {
            HideAddTaskBtn(task.id, task.title, task.details, task.date, task.completed, task.important);
        });
        HideAddTaskBtn();
        checkNoTask();
    });
}

// display todays tasks
function displayToday(){
    clearContent();
    let today = Date.parse(format(new Date(), "yyyy-MM-dd")); //parse for comparison and format so it has the same format before parsing it
    projectList.forEach(project => {
        project.taskList.forEach(task => {
            let date = Date.parse(task.date);
            if(isEqual(date,today)){
                addTask(task.id,task.title, task.details, task.date,task.completed, task.important);
            }else {
                return;
            }
        });
        checkNoTask();
    });
}
function displayThisWeek(){
    clearContent();
    projectList.forEach(project => {
        project.taskList.forEach(project => {
            let date = parseISO(task.date);
            if(checkNextWeek(date)){
                addTask(task.id,task.title, task.details, task.date,task.completed, task.important);
            }
            else{
                return;
            }
        });
        checkNoTask();
    });
}
// check if the date is within the interval of next week
function checkNextWeek(taskDate){
    let nextweekPlus1 = addDays(new Date(), 8);
    // count the edges so plus 1
    let today = new Date();
    return isWithinInterval(taskDate,{
        start: today,
        end: nextweekPlus1
    });
}
// display important tasks
function displayImportant(){
    clearContent();
    projectList.forEach(project => {
        project.taskList.forEach(task => {
            if(task.important){
                addTask(task.id,task.title, task.details, task.date,task.completed, task.important);
            }else {
                return;
            }
        });
    });
    checkNoTask();
}

export {checkWhichHomeTile, displayAllTasks}