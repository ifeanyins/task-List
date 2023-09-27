// alert('maker')


// menu button 
const menuIcon = document.querySelector('.hamburgerMenu')
menuIcon.addEventListener('click', ()=>{
    const leftPanel = document.querySelector('.leftPanel');
    leftPanel.classList.toggle("hidden");
    // const rightPanel = document.querySelector('.rightPanel');
    // rightPanel.style.width('100%')
})
