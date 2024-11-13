const slider = document.querySelector(".selector");
const buttons = document.querySelectorAll("P");

let id;
function slideToVideo() {
    let pos = 160;
    clearInterval(id);
    id = setInterval(frame, 0.00000001);
    function frame() {
        if (pos == 240) {
            clearInterval(id);
        } else {
            pos++;
            slider.style.left = pos + 'px';
        }
    }
}

function slideToText() {
    let pos = 240;
    clearInterval(id);
    id = setInterval(frame, 0.00000001);
    function frame() {
        if (pos == 160) {
            clearInterval(id);
        } else {
            pos--;
            slider.style.left = pos + 'px';
        }
    }
}

for (let button of buttons) {
    button.addEventListener("click", ()=>{
        if (button.innerHTML == "Text ") {
            if (slider.offsetLeft == 240)
                slideToText();
        } else if (button.innerHTML == "Video") {
            if (slider.offsetLeft == 160)
                slideToVideo();
        }
    })
}
