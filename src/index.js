import { createEventlistener } from "./creatingProject";

createEventlistener();
// menu button 
const menuIcon = document.querySelector('.hamMenu')
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



