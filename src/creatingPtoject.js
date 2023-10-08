

const createEventlistener = () =>{
    // event listener for creating a form for adding projects
    const cancel = document.querySelector('.projectCancelBtn');
    // cancel.addEventListener('click', hideProjectForm);

    const add = document.getElementById('addProject');
    add.addEventListener('click', showProjectForm);

    const submit = document.getElementById('projectForm');
    submit.addEventListener('submit', processProjectInput);

    const leftPanel = document.querySelector('.leftPanel');
    leftPanel.addEventListener('click', checkTile);

    displayProject(projectList);
}
// get project list of objects from the local Storage or []
let defaultProjectList = [];
let projectList = localStorage.getItem('myProjectList');
projectList = JSON.parse(projectList || JSON.stringify(defaultProjectList));

function saveToLocalStorage(){
    localStorage.setItem('myProjectList', JSON.stringify(projectList));
    localStorage.setItem("currentId", (id).toString());
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



function showProjectForm(){
    const projectForm = document.querySelector('#projectForm');
    projectForm.classList.remove('hidden');
}

export {createEventlistener} 