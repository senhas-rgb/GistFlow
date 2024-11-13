const navBtns = document.querySelectorAll(".nav-btn");
const textInterface = document.querySelector(".text");
const videoInterface = document.querySelector(".video");
const audioInterface = document.querySelector(".audio");

for (let button of navBtns) {
    button.addEventListener("click", ()=>{
        if (button.classList.contains("text-sect")) {
            textInterface.style.display = "block";
            videoInterface.style.display = "none";
            audioInterface.style.display = "none";
        } else if (button.classList.contains("vid-sect")) {
            textInterface.style.display = "none";
            videoInterface.style.display = "block";
            audioInterface.style.display = "none";
        } else if (button.classList.contains("audio-sect")) {
            textInterface.style.display = "none";
            videoInterface.style.display = "none";
            audioInterface.style.display = "block";
        }
    })
}