const menu = document.querySelector(".mobile_menu")
const button = document.querySelector(".burger-menu")

button.addEventListener("click",()=>{
    menu.classList.toggle("visible");
})
