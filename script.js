const buttonToDrawNumber = document.querySelector(".action-button")
function generateRandomNumber() {
    const entryMinNumberInputBetween = Math.ceil(document.querySelector(".between").value) //PEGAR VALOR DIGITADO NO BOTÃO "entre"
    const entryMaxNumberInputAnd = Math.floor(document.querySelector(".and").value) // PEGAR VALOR DIGITADO NO BOTÃO "e"
    const spaceDisplayDrawNumber = document.querySelector(".number-result")

    const resultRandomNumber = Math.floor(Math.random() * (entryMaxNumberInputAnd - entryMinNumberInputBetween) + entryMinNumberInputBetween)
    
    spaceDisplayDrawNumber.textContent = "Resultado → " + resultRandomNumber
}
buttonToDrawNumber.addEventListener("click", generateRandomNumber)
//
const prizeDrawImage = document.querySelector(".image").style.height = "215px"
//
const commandName = document.querySelector(".command");
commandName.style.fontSize = "26px"
commandName.style.lineHeight = "38px"
commandName.style.fontWeight = "400"
commandName.style.color = "#dddddd"
//
const embeddedContent = document.querySelector(".wrapper");
embeddedContent.style.display = "block"
embeddedContent.style.textAlign = "center"
embeddedContent.style.margin = "auto"
embeddedContent.style.marginTop = "30px"
//
const spaceToGenerateNumber = document.querySelector(".number-generate");
spaceToGenerateNumber.style.display = "block"
spaceToGenerateNumber.style.margin = "auto"
spaceToGenerateNumber.style.marginTop = "50px"
spaceToGenerateNumber.style.textAlign = "center"
//
const myGitHub = document.querySelector(".github");
myGitHub.style.textAlign = "center"
myGitHub.style.margin = "auto"
myGitHub.style.marginTop = "50px"
myGitHub.style.border = "none"
myGitHub.style.cursor = "pointer"
myGitHub.style.fontWeight = "300"
myGitHub.style.background = "#F44336"
myGitHub.style.color = "white"
myGitHub.style.padding = "6px 16px"
myGitHub.style.borderRadius = "25px"
//