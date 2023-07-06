const arr = [1, 2, 3, 4]
console.log(arr)

// Adicionando Elementos no final do array .push
arr.push(5, 6)
console.log(arr)

// Adicionando elementos no início do array .unshift
arr.unshift(0)
console.log(arr)

// Removendo elementos no final de um array .pop
let ultimoElemento = arr.pop() 
console.log(arr)
console.log(ultimoElemento)

// Removendo elementos no começo do array .shift
ultimoElemento = arr.shift()
console.log(arr)
console.log(ultimoElemento)

// Pesquisar por um elemento no array .include
const inclui = arr.includes(7)
console.log(inclui)

// indexOf
const indice = arr.indexOf(5)
console.log(indice)

// Cortar e Concatenar 
// slice
const numero = arr.slice(1,5)
const outro = arr.slice(-2)
console.log(arr)
console.log(numero)
console.log(outro)

// .concat

const concatenacao = numero.concat(outro, "Leone")
console.log(concatenacao)

// Substituição de elementos

const elementosRemovidos = concatenacao.splice(indice, 1, "Ricardo")
console.log(concatenacao)
console.log(elementosRemovidos)

// Iterar sobre os elementos 
for(let indice = 0; indice < concatenacao.lenght; indice++) {
    const elemento = concatenacao[indice]
    console.log(elemento + " se encontra na posição " + indice)
}
