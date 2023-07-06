let spaceshipName = prompt("Qual é o nome da nave?")

let spacshipVel = 0

let chosenOption 

function showMenu(){
    let option
    while(option != "1" && option != "2" && option != "3" && option != "4") {
        option = prompt("O que deseja fazer?\n" +
                        "1 - Acelerar a nave em 5km/s\n" + 
                        "2 - Desacelerar a nave em 5km/s\n" +
                        "3 - Imprimir dados de bordo\n" +
                        "4 - Sair do progama")
    }
    return option
}

function speedUp(velocity) {
    let newVelocity = velocity + 5
    return newVelocity
}

function slowDown(velocity) {
    let newVelocity = velocity - 5
    if(newVelocity < 0) {
        newVelocity = 0
    }
    return newVelocity
}

function printBoard(name, velocity) {
    alert("Espaçonave: " + name + "\nVelocidade: " + velocity + "km/s")
}

do {
    chosenOption = showMenu()
    switch(chosenOption) {
        case "1":
            spacshipVel = speedUp(spacshipVel)
            break
        case "2":
            spacshipVel = slowDown(spacshipVel)
            break
        case "3":
            printBoard(spaceshipName, spacshipVel)
            break
        default:
            alert("Encerrando progama de bordo")            
    }
} while(chosenOption != "4")


// ARROW FUNCTION EXEMPLO
/*
const doubleVelocity = (velocity) => {
    return velocity * 2
}

console.log(doubleVelocity(60)) = 120;

// Forma mais simplificada 

const doubleVelocity = velocity => velocity * 2


*/