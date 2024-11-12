const slider = document.querySelector(".selector");
const buttons = document.querySelectorAll("P");

setInterval(animation, 300)
function animation() {
    for (let button of buttons) {
        button.addEventListener("click", ()=>{
            if (button.innerHTML == "Text") {
                const offset = button.offsetLeft - 23;
                slider.style.left = `${offset}px`;
            } else if (button.innerHTML == "Video") {
                const offset = button.offsetLeft - 15;
                slider.style.left = `${offset}px`;
            } else if (button.innerHTML == "Audio") {
                const offset = button.offsetLeft - 8;
                slider.style.left = `${offset}px`;
            }
        })
    }
}