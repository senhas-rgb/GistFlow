const deleteBtn = document.querySelectorAll("#delete");
const cancelBtn = document.querySelector("#cancel");
const overlay = document.querySelector(".overlay")

for (let button of deleteBtn) {
    button.addEventListener("click", ()=>{
        overlay.style.display = "block";
    })
}

cancelBtn.addEventListener("click", ()=>{
    overlay.style.display = "none"
})