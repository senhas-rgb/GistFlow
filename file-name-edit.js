const editBtns = document.querySelectorAll(".title-edit-btn");
const inputFields = document.querySelectorAll(".file-name")

for (let button of editBtns) {
    button.addEventListener("click", ()=> {
        const fileNameInput = button.parentElement.querySelector(".file-name")
        fileNameInput.classList.add("file-name-edit");
        fileNameInput.removeAttribute("disabled")
        fileNameInput.focus();
        let temp = fileNameInput.value;
        fileNameInput.value = "";
        fileNameInput.value = temp
    }) 
}

for (let input of inputFields) {
    input.addEventListener("keydown", (event)=>{
        if (!input.hasAttribute("disabled")) {
            if (event.key === 'Enter') {
                input.setAttribute("disabled", "true");
                input.classList.remove("file-name-edit")
                input.setAttribute("title", input.value)
            }
        }
    })
}

