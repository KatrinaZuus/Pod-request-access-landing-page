const emailInput = document.getElementById("email");
const btnSubmit = document.getElementById("btn");
const error = document.getElementById("error");


btnSubmit.addEventListener("click", (event) => {
    event.preventDefault()
    if (emailInput.value.includes("@") && emailInput.value.includes(".")) {
        error.style.display= "none"
        
    }  else if (emailInput.value.includes("")){
         error.style.display= "block"
         emailInput.value = ""
    }

})


