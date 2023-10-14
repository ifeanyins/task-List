

const createEventlistener = () =>{
    // event listener for creating a form for adding projects
    const cancel = document.querySelector('.projectCancelBtn');
    cancel.addEventListener('click', hideProjectForm);

    const add = document.querySelector('.add-Project');
    add.addEventListener('click', showProjectForm);

    const submit = document.getElementById('projectForm');
    submit.addEventListener('submit', processProjectInput);

    // const leftPanel = document.querySelector('.leftPanel');
    // leftPanel.addEventListener('click', checkTile);

    displayProject(projectList);
}
// get project list of objects from the local Storage or []
let defaultProjectList = [];
let projectList = localStorage.getItem('myProjectList');
projectList = JSON.parse(projectList || JSON.stringify(defaultProjectList));

// save project and last id data on local storage
function saveToLocalStorage(){
    localStorage.setItem('myProjectList', JSON.stringify(projectList)); //the right hand side should b input.value, we use project list to push the now created input.value in the procces func
    localStorage.setItem("currentId", (id).toString());
}

// find next data-set (to locate the next tile)
function findNextDataset(){
    const allProjects = document.querySelectorAll('[data-project]'); // we would use this data project to target all the newly created project and locate the clicked tile / the next tile
    return allProjects.length;
}

function showProjectForm(){
    const projectForm = document.querySelector('#projectForm');
    projectForm.classList.remove('hidden');
}
const hideProjectForm = () => {
    const projectForm = document.querySelector('#projectForm');
    const projectInput = document.querySelector('#projectInput');

    projectInput.value = "";
    projectForm.classList.add("hidden");
}

// Create project factory function
function createProject(dataProject, name){
    const taskList = [];
    const taskNum = taskList.length;
    return{
        dataProject,
        name,
        taskList,
        taskNum
    }
}

// process the input and prepare to create element project
function processProjectInput(e){
    let dataProject = findNextDataset();
    let projectName = document.getElementById("projectInput").value;
    const newProject = createProject(dataProject, projectName); //this new project function was created to make joining the id and project content possible

    // push the item to local storage using project list
    projectList.push(newProject);
    saveToLocalStorage();

    addProject(dataProject, projectName);
    hideProjectForm();
    e.preventDefault();
}

// create a span icon of google material icons
const createSpanIcon = (name) => {
    const icon = document.createElement('span'); 
    icon.classList.add("material-icons-round");
    icon.textContent = name; // i call my icons from google fonts, (you need a class containing the font and span containing the name)
    return icon;
}

// create a project and add it to the lst of projects in html
const addProject = (dataProject, textInput) => {
    const project = document.querySelector('.projects'); //used to target the main project head for inserion of the form
    const form = document.querySelector('#projectForm'); //to insert the form

    const container = document.createElement('div');
    container.setAttribute('data-project', `${dataProject}`);
    container.classList.add('tile');
    project.insertBefore(container, form) //insert the menu icon before the project name

    // menu three lines icon
    const menuIcon = createSpanIcon('menu'); // using the span icon to give it a name hten adding the corresponding class 
    menuIcon.classList.add("material-symbols-outlined");
    menuIcon.setAttribute('data-drag', '');
    container.appendChild(menuIcon)
    // name and number status (div for the project name)
    const projectInfo = document.createElement('div');
    projectInfo.classList.add('projectInfo');
    container.appendChild(projectInfo);

    const projectName = document.createElement('div');
    projectName.classList.add('projectName');
    projectName.textContent = textInput;
    projectInfo.appendChild(projectName);
    
    //three dots on the right
    const editdiv = document.createElement('div');
    editdiv.classList.add('editContainer');
    editdiv.setAttribute("data-dropdown", "");
    container.appendChild(editdiv);
    // call function to create a span icon from google, cause i'm a bit lazy
    const editIcon = createSpanIcon("more_vert"); // the google icons for three dots
    editIcon.classList.add("material-symbols-outlined");
    editIcon.setAttribute("data-dropdown-button","");
    editdiv.appendChild(editIcon);
}

// display the list of all projects in the left panel
const displayProject = (arr) =>{
    arr.forEach(project => {
        addProject(project.dataProject, project.name);
    });
}

// dislay the add task btn when the project tile is selected
function showaddTaskBtn(){
    const addTaskBtn = document.querySelector('.addList');
    addTaskBtn.classList.remove('hidden');
}
// hide the add task btn when the home tile is selected
function HideaddTaskBtn(){
    const addTaskBtn = document.querySelector('.addList');
    addTaskBtn.classList.add('hidden');
}

// check to see what tile is selected
function checkTile(e){
    let homeTile = e.target.closest(".home .tile")
}
export {createEventlistener} 