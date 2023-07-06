const imoveis = []
let opcao = ""

do {
    opcao = prompt("Bem vindo(a) ao cadastro de imóveis!\n" + 
    "\nImóveis cadastrados : " + imoveis.length + 
    "\n1. Cadastrar novo imóvel" + 
    "\n2. Listar imóveis " + 
    "\n3. Sair")

    switch(opcao) {
        case "1":
            const imovel = {}

            imovel.proprietario = prompt("Qual é o nome do proprietário?")
            imovel.quartos = prompt("Quantos quartos o imóvel possui?")
            imovel.banheiros = prompt("Quantos banheiros possui o imóvel?")
            imovel.garagem = prompt("Possui garagem? (Sim/Não)")

            const confirmacao = confirm (
                "Salvar este imóvel?" + 
                "\nPropietário: " + imovel.proprietario +
                "\nQuartos: " + imovel.quartos + 
                "\nBanheiros: " + imovel.banheiros + 
                "\nPossui garagem?" + imovel.garagem
            )

            if(confirmacao) {
                imoveis.push(imovel)
                alert("Imóvel salvo com sucesso!")
            }
            break
        case "2":
            for (let i = 0; i < imoveis.length; i++) {
                alert("Imóvel: " + (i + 1) + 
                "\nPropietário: " + imoveis[i].proprietario +
                "\nQuartos: " + imoveis[i].quartos + 
                "\nBanheiros: " + imoveis[i].banheiros + 
                "\nPossui garagem?" + imoveis[i].garagem
                )
            }
            break
        case "3":
          alert("Encerrando...")
          break
        default:
          alert("Opção inválida")            
    }
} while(opcao !== "3")