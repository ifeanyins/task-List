// alert('maker')


// menu button 
const menuIcon = document.querySelector('.hamburgerMenu')
menuIcon.addEventListener('click', ()=>{
    const leftPanel = document.querySelector('.leftPanel');
    leftPanel.classList.toggle("hidden");
    
})

//on start up checked wether its on light mode or dark mode
const checkbox = document.getElementById("inputCbox");
if(checkbox.checked === true){
    document.body.classList.add("light");
}
else{
    document.body.classList.remove("light");
}

//event listener for every time the dark mode toggle change
checkbox.addEventListener("change", () =>{
    document.body.classList.toggle("light");
})


function checkTile(e){
    let homeTile = e.target.closest(".home .tile");
    let projectTile = e.target.closest(".project .tile");
    if(homeTile != null){
        const title = homeTile.querySelector("[data-name]");
        selectTile(homeTile);
        // revertOptionLocation();
        // checkWhichHomeTile(homeTile);
        // updateTitle(title);
        // hideAddTaskBtn();
    }
    else if(projectTile != null){
        const title = projectTile.querySelector(".projectName");
        let dataProject = projectTile.dataset.project;
        
        // revertEditFormLocation();               //move form or option of task to original place on standby.   
        // revertOptionLocation();

        selectTile(projectTile);
        // displayTask(dataProject);
        // updateTitle(title);
        // showAddTaskBtn();
    }
    else{
        return;
    }
}

//when selecting a tile from left panel apply css
const selectTile = (node) =>{
    const selectedTile = document.querySelector(".selected");   
    selectedTile.classList.remove("selected");                  //remove class selected from old tile

    node.classList.add("selected");                             //add class selected to current tile
}
