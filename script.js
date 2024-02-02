const emailInput = document.getElementById("email");
const btnSubmit = document.getElementById("btn");
const error = document.getElementById("error");


btnSubmit.addEventListener("click", (evnt) => {
    evnt.preventDefault()
    if (!emailInput.value.includes("@") || !emailInput.value.includes(".") || !emailInput.value.includes("")) {
        error.style.display= "block"
        emailInput.value = ""
    } else error.style.display= "none"


})


