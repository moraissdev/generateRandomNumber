const buttonToDrawNumber = document.querySelector(".action-button")

function generateRandomNumber() {
    const entryMinNumberInputBetween = Math.ceil(document.querySelector(".between").value) //PEGAR VALOR DIGITADO NO BOTÃO "entre"
    const entryMaxNumberInputAnd = Math.floor(document.querySelector(".and").value) // PEGAR VALOR DIGITADO NO BOTÃO "e"

    const resultRandomNumber = Math.floor(Math.random() * (entryMaxNumberInputAnd - entryMinNumberInputBetween) + entryMinNumberInputBetween)
    
    alert(resultRandomNumber)
}











buttonToDrawNumber.addEventListener("click", generateRandomNumber)