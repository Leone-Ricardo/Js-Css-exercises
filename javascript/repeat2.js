let nameSpaceship = prompt("Qual é o nome da nave?")

let charToReplace = prompt("Qual caractere deseja substituir?")

let replacementChar = prompt("Por qual caractere deseja substituir?")

let newSpaceship = ""

for(pos = 0; pos < nameSpaceship.length; pos++) {
    if(nameSpaceship[pos] == charToReplace) {
        newSpaceship += replacementChar
    } else {
        newSpaceship += nameSpaceship[pos]
    }
}

alert("Nave: " + nameSpaceship + "\n" + "Novo nome da Nave: " + newSpaceship)