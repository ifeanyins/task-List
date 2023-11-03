import {createEventListener} from "./creatingProject";
import { listEvent} from "./creatingTask";
import { editContainerEventListener} from "./editingProject";
import {dragAndDropEvent} from "./dragAndDrop";
import {displayAllTasks} from "./homeSection";

function pageLoad(){
    listEvent();
    createEventListener();
    editContainerEventListener();
    dragAndDropEvent();
    displayAllTasks();
    createEventlistener();
}

pageLoad();
// menu button 
const menuIcon = document.querySelector('.hamMenu')
menuIcon.addEventListener('click', ()=>{
    const leftPanel = document.querySelector('.leftPanel');
    leftPanel.classList.toggle("hidden");
})

//on start up checked wether its on light mode or dark mode
const checkbox = document.getElementById("inputCbox");
//event listener for every time the dark mode toggle change
checkbox.addEventListener("change", () =>{
    document.body.classList.toggle("light");
    if(checkbox.checked === true){
        document.body.classList.add("light");
    }
    else{
        document.body.classList.remove("light");
    }
})




