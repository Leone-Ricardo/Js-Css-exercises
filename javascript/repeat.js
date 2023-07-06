let warpCount = 0

let chosenOption = ""

let nameSpaceship = prompt("Qual é o nome da nave?")

chosenOption = prompt("Deseja entrar em dobra espacial? \n1- Sim\n2- Não")

while(chosenOption == "1") {
    warpCount += 1
    chosenOption = prompt("Deseja realizar mais uma dobra? \n1- Sim\n2- Não")
}

alert("Nome da nave: " + nameSpaceship + "\n" + "Quantidade de dobras realizadas: " + warpCount)
