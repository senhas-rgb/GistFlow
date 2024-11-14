const editBtns = document.querySelectorAll(".title-edit-btn");

for (let button of editBtns) {
    button.addEventListener("click", ()=> {
        const fileNameInput = button.parentElement.querySelector(".file-name")
        fileNameInput.classList.add("file-name-edit");
        fileNameInput.attributes.removeNamedItem("disabled")
        fileNameInput.value = fileNameInput.attributes.getNamedItem("placeholder").textContent;
        fileNameInput.focus();
    }) 
}

