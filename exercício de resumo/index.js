const vagas = []

function listarVagas() {
    const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice) {
        textoFinal += indice + ". "
        textoFinal += vaga.nome
        textoFinal += " (" + vaga.candidatos.length + " candidatos\n"
        return textoFinal
    }, "")
    alert(vagasEmTexto)
}

function novaVaga() {
    const nome = prompt("Insira o nome da vaga: ")
    const descricao = prompt("Insira a descrição da vaga: ")
    const dataLimite = prompt("Insira a data limite da vaga: ")

    const confirmacao = confirm("Deseja mesmo confirmar esses dados?" +
        "\n1. Nome: " + nome + "\n2.Descrição: " + descricao + "\n3.Data Limite: " + dataLimite)

    if (confirmacao) {
        const novaVaga = { nome, descricao, dataLimite, candidatos: [] }
        vagas.push(novaVaga)
        alert("Nova vaga criada!")
    }
}

function exibirVaga() {
    const indice = prompt("Qual índice deseja acessar?")
    const vaga = vagas[indice]

    const candidatosEmTexto = vaga.candidatos.reduce(function (textoFinal, candidato) {
        return textoFinal += "\n -" + candidato
    }, "")

    alert("Vaga n°: " + indice +
        "\nNome: " + vaga.nome +
        "\nDescrição: " + vaga.descricao +
        "\nData Limite: " + vaga.dataLimite +
        "\nQuantidade de candidatos: " + vaga.candidatos.lenght +
        "\nCandidatos inscritos: " + candidatosEmTexto)

}

function novoCandidato() {
    const candidato = prompt("Qual é o nome do candidato?")
    const indice = prompt("Informe em qual índice deseja se cadastrar:")
    const vaga = vagas[indice]

    const confirmacao = confirm("Deseja inscrever o candidato" + candidato + " na vaga " + indice + "?\n" +
        "Nome: " + vaga.nome + "Descrição: " + vaga.descricao + "Data Limite: " + vaga.dataLimite)

    if (confirmacao) {
        vaga.candidatos.push(candidato)
        alert("Inscrição realizada!")
    }
}

function excluirVaga() {
    const indice = prompt("Qual índice deseja excluir?")
    const vaga = vagas[indice]

    const confirmacao = confirm("Deseja mesmo excluir essa vaga" + indice + "?\n" +
        "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData Limite: " + vaga.dataLimite)

    if (confirmacao) {
        vagas.splice(indice, 1)
        alert("Vaga excluída!")
    }
}

function exibirMenu() {
    const opcao = prompt(
        "Cadastro de Vagas de emprego" +
        "\n\nEscolha uma das opções abaixo:" +
        "\n1.Listar uma vaga disponível" +
        "\n2.Criar nova vaga" +
        "\n3.Visualizar uma vaga" +
        "\n4.Inscrever um(a) candidato(a)" +
        "\n5.Excluir uma vaga" +
        "\n6.Sair")
    return opcao
}

function executar() {
    let opcao = ""

    do {
        opcao = exibirMenu()

        switch (opcao) {
            case "1":
                listarVagas()
                break
            case "2":
                novaVaga()
                break
            case "3":
                exibirVaga()
                break
            case "4":
                novoCandidato()
                break
            case "5":
                excluirVaga()
                break
            case "6":
                alert("Saindo...")
                break
            default:
                alert("Opção inválida!")
        }
    } while (opcao !== 6)
}

executar()