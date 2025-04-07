const buttonToDrawNumber = document.querySelector(".action-button")

function generateRandomNumber() {
    const entryNumberInputBetween = document.querySelector(".between").value //PEGAR VALOR DIGITADO NO BOTÃO "entre"
    const entryNumberInputAnd = document.querySelector(".and").value // PEGAR VALOR DIGITADO NO BOTÃO "e"
    console.log(entryNumberInputBetween, entryNumberInputAnd)
}











buttonToDrawNumber.addEventListener("click", generateRandomNumber)