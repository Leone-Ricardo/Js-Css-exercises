function triangulo() {
    const base = prompt("Qual é a base?")
    const altura = prompt("Qual é a altura?")
    return (base * altura) / 2
}

function retangulo() {
    const base = prompt("Qual é a base?")
    const altura = prompt("Qual é a altura?")
    return base * altura
}

function areaQuadrado() {
    const lado = prompt("Qual é o lado do quadrado?")
    return lado * lado
}

function trapezio() {
    const baseMaior = parseFloat(prompt("Qual é a base maior do trapézio?"))
    const baseMenor = parseFloat(prompt("Qual é a base menor do trapézio?"))
    const altura = prompt("Qual é a altura? do trapézio")
    return (baseMaior + baseMenor ) * altura / 2
}

function areaDoCirculo() {
    const raio = prompt("Qual é o raio do círculo?")
    return (3.14 * raio * raio)
}

function mostrarMenu() {
    return prompt(
        "Calculadora geométrica\n" +
        "1. Calcular área do triângulo\n" + 
        "2. Calcular área do retângulo\n" + 
        "3. Calcular área do quadrado\n" +
        "4. Calcular área do trapézio\n" +
        "5. Calcular área do círculo\n" + 
        "6. Sair\n"
    )
}
function executar () {    
    let opcao = ""
do {
    opcao = mostrarMenu()
    let resultado

    switch(opcao) {
        case "1":
            resultado = triangulo()
            break
        case "2":
            resultado = retangulo()
            break
        case "3":
            resultado = areaQuadrado()
            break
        case "4":
            resultado = trapezio()
            break
        case "5":
            resultado = areaDoCirculo()
            break
        case "6":
            alert("Encerrando...")
        default: 
            alert("Opção inválida!")                       
    }
    if(resultado) {
        alert("Resultado: " + resultado)
    }

} while(opcao !== "6")
}

executar()