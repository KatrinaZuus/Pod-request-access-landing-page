const emailInput = document.getElementById("email");
console.log (emailInput)
let emailValue = ''
emailInput.addEventListener("input", (event) => {
    console.log(event.target.value);
});