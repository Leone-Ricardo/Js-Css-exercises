let velocity = 0

let piloto = prompt("Qual é o seu nome?")

let askVel = prompt("A que velocidade gostaria de acelerar a nave?")

let conf = confirm("Estamos indo para uma velocidade " + askVel + " km/s?")

// Início da estrutura condicional

if (conf) {
    velocity = askVel
}

if (velocity <= 0) {
    alert("Nave está parada. Considere partir e aumentar a velocidade.")
} else if (velocity < 40) {
    alert("Você está devagar, podemos aumentar mais.")
} else if (velocity < 80) {
    alert("Parece uma boa velocidade para manter.")
} else if (velocity < 100) {
    alert("Velocidade alta. Considere diminuir.")
} else {
    alert("Velocidade perigosa. Controle automático forçado")
}

// Saída de dados

alert("Nome do piloto: " + piloto + "\nVelocidade atual: " + velocity + " km/s")