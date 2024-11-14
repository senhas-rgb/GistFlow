const button = document.querySelector("#theme-btn");

button.addEventListener("click", ()=>{
    document.body.classList.toggle("dark-theme")
    if (button.getAttribute("src") == "public/images/moon.png") {
        button.setAttribute("src", "public/images/sun.png");
    } else {
        button.setAttribute("src", "public/images/moon.png")
    }
})