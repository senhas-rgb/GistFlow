const slider = document.querySelector(".selector");
const buttons = document.querySelectorAll("P");
let sliderOffset = slider.offsetLeft;
let offset;
let id;

for (let button of buttons) {
    clearInterval(id);
    button.addEventListener("click", ()=>{
        if (button.innerHTML == "Text") {
            offset = button.offsetLeft - 23;
            slider.style.left = `${offset}px`;
        } else if (button.innerHTML == "Video") {
            offset = button.offsetLeft -15;
            slider.style.left = `${offset}px`;
        } else if (button.innerHTML == "Audio") {
            offset = button.offsetLeft - 8;
            slider.style.left = `${offset}px`;
        }
        animateSlider();
    })
}

function frame(offset) {
    if (offset == sliderOffset) {
        clearInterval(id);
      } else {
        while (sliderOffset != offset){
            if (offset > sliderOffset) {
                sliderOffset++;
                slider.style.left = sliderOffset + "px"
            } else if (offset < sliderOffset) {
                sliderOffset--;
                slider.style.left = sliderOffset + "px"
            }
        }
    }
}

function animateSlider() {
    id = setInterval(()=>{
        frame(sliderOffset);
    }, 100);
}
