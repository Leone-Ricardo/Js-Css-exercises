const baralho = []
let opcao = ""

do {

   opcao = prompt("Qual carta deseja adicionar: " + 
    "\n1. - Adicionar carta\n2. - Puxar uma carta\n3. - Sair")

    switch(opcao) {
    case "1":
        const novaCarta = prompt("Qual é a carta?")
        baralho.push(novaCarta)
        break
    case "2":
        const cartaPuxada = baralho.pop()
        if (!cartaPuxada) {
            alert("Não há nenhuma carta no baralho!")
        } else {
            alert("Você puxou um(a) " + cartaPuxada)
        }
        break   
    case "3":
        alert("Saindo...")
        break
    default: 
        alert("Opçaõ inválida!")              
    }    
    

} while(opcao !== "3")