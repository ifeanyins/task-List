import { projectList, saveToLocalStorage } from "./creatingProject";
import { updateTitle } from "./creatingTask";

// fire event listner for editing project
function editContainerEventListener(){
    // event listner for drop down container
    document.addEventListener("click", showDropDown);

    // event listener for the option rename or delete project
    const option = document.querySelector(".project .option");
    option.firstElementChild.addEventListener('click', showRenameForm); // rename option
    option.lastElementChild.addEventListener('click',deleteProject) //delete option

    // event listener of renameForm's rename and cancel buttons
    const formRenameBtn = document.querySelector(".rename-renameBtn");
    formRenameBtn.addEventListener("click", function(e){
        processRenameInput(e);
        e.preventDefault();
    });

    const formCancelBtn = document.querySelector(".rename-cancelBtn");
    formCancelBtn.addEventListener("click", function(e){
        revertRenameFromLocation();
        displayRenamedProjects();
    });
}

// display dropdown menu of editContainer (mainly animation)
const showDropDown = (e) =>{
    const isDropdownButton =e.target.matches("[data-dropdown-button]");
    
    // focus with-in function = the drop down wont disappear if you click on drop down menu
    if(!isDropdownButton && e.target.closest('[data-dropdown-button]') != null) return;
    let currentDropDown;
    if(isDropdownButton){
        // if it is then show form by class .active
        relocateOption(e);
        currentDropDown = e.target.closest("[data-dropdown]");
        setTimeout(function(){
            currentDropDown.classList.toggle("active");
        }, 0);
    }
    // when you click on another dropdown others should disappear
    document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
        // if you click anywhere else currentDropDown = undefined meaning all active ones are closed
        if(dropdown === currentDropDown){
            // button then do nth
            return;
        }
        dropdown.classList.remove('active'); //basically close all dropdown other drop down before another opens
    });
}

// show option to rename or delete project
const showRenameForm = (e) =>{
    let editContainerNode = e.target.parentNode.parentNode;
    let tileNode = editContainerNode.parentNode;

    hideDropDown(editContainerNode); //hide drop down optioins

    let haveForm = checkFormExist(); //check if there is another form, if there is then close it
    if(haveForm === true){
        revertRenameFromLocation();
        displayRenamedProject();
        relocateRenameForm();

        document.getElementById("projectRenameInput").focus(); //put focus on input field when show
        tileNode.classList.add("hidden"); //hide the tile (which is replaced by the form ) //hide the tile node temporarily
    }
}

// when form open hide the dropdown because animation could show then div is visible again
const hideDropDown = (editContainerNode) => {
    editContainerNode.classList.remove('active');
}

// check to see if the form already exist
const checkFormExist = () =>{
    const renameForm = document.querySelector("#renameForm");
    if(renameForm.classList.contains("hidden")){
        return false;
    }
    else{
        return true;
    }
}

// relocate RenameForm to the clicked TIle
function relocateRenameForm(tileNode){
    const projectNode = tileNode.parentNode;
    const renameForm = document.getElementById("renmeForm");

    const nameNode = tileNode.querySelector("projectName");
    let name = nameNode.textContent

    const input = renameForm.querySelector("input");
    input.value = name;

    projectNode.insertBefore(renameForm, tileNode);
}
// revert form back to its original posting under .project
function revertRenameFromLocation(){
    const renameForm = document.getElementById("renameForm");
    const project = document.querySelector(".project");

    renameForm.classList.add("hidden");
    project.appendChild(renameForm);
}

// animate rename form when pop up
const aniamteRenameForm = () =>{
    const form = document.querySelector("#renameForm");

    // setting time out wait for ims after the dom i created then remove hidden
    setTimeout(function(){
        form.classList.remove("hidden");
    },0)
}

// process the inputed renamed project
const processRenameInput = (e) =>{
    const tileNode = document.querySelector(".project .tile.hidden");
    let renameInput = document.getElementById("projectRenameInput").value;
    const projectName = tileNode.querySelector('projectName');
    projectName.textContent = renameInput;

    let dataNum = tileNode.dataset.project;
    projectList[dataNum].name = renameInput;
    saveToLocalStorage();

    displayRenamedProject();
    updateTitle(projectName); // update title on right panel
    revertRenameFromLocation();
}

// display renamed project
const deleteProject = (e) => {
    let tile = e.target.closest(".tile");
    let index = tile.dataset.project;

    if(tile.classList.contains("selected")){ //if the tile you want to delete is selected always select the today tile after and update
        const today = document.querySelector("#today");
        const nameNode = today.querySelector("[data-name]");
        today.classList.add("selected");
        updateTitle(nameNode);
    }

    revertOptionLocation(e); //when delete a tile, move option div back to under project for stand by
    tile.remove();
    sortArray();
    projectList.splice(index, 1);
    saveToLocalStorage();
}

function sortArray(){
    let i=0;
    // reorder the dataset in node and change dataProject accordinly
    const tiles = document.querySelectorAll(".project .tile");
    tiles.forEach(tile => {
        
        let dataNum = tile.dataset.project;
        tile.dataset.project = i;
        projectList[dataNum].dataProject = 1;
        i++;
    });
    // reorder projects according to their dataProject number
    projectList.sort((a,b) => a.dataProject - b.dataProject);
    saveToLocalStorage();
}

// rearrange data set after one has been deleted 
const rearrangeProject = (index) => {
    const buttons = document.querySelectorAll('[data-project]');
    buttons.forEach(button => {
        if(button.dataset.project > index){
            if(button.dataset.project > index){
                button.dataset.project = button.dataset.project -1;
            }
        }
    });
}

// relocate option (project:rename and delete) & (list: edit delete) to be under the selected edotContainer div so it can pop up from there
function relocateOption(e){
    const editContainer = e.target.closest(".editContainer");
    if(e.target.closest(".tile") != null){ //pop in project
        const projectOption = document.getElementById("projectOption");
        projectOption.classList.remove('hidden');
        editContainer.appendChild(projectOption);
    }
    else if(e.target.closest("li") != null){ //pop up in list
        const listOption = document.getElementById("listOption");
        listOption.classList.remove("hidden");
        editContainer.appendChild(listOption);
    }
}

// revert to original place which is child of .project before delating
function revertOptionLocatioin(){
    // revert option DOM in left panel
    const projectOption = document.querySelector("#projectOption");
    projectOption.classList.add("hidden");
    const project = document.querySelector(".project");
    project.appendChild(projectOption);
    // revert option DOM in right panel
    const listOption = document.querySelector("#listOption");
    listOption.classList.add("hidden");
    const listTodo = document.querySelector("list-todo;");
    listTodo.app
}

export {editContainerEventListener, showDropDown, showRenameForm, hideDropDown, deleteProject, revertOptionLocatioin, sortArray}