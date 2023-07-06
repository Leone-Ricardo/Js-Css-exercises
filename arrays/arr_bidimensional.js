/*const arr = [
    "1° nível",
    ["2° nível", 42, true],
    [
        ["3° nível, 1° item", "Olá mundo"],
        ["3° nível, 2° item", "Oi, mundo"]
    ],
    []
]

console.log(arr)
console.log(arr[1][2])
console.log(arr[2][1][0])*/

const matriz = [
    ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
  ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
  ["l3, c1", "l3, c2", "l3, c3", "l3, c4"],
]

/*console.table(matriz)

matriz.push(["Nova linha"])
matriz[0].push("Nova coluna")*/
console.table(matriz)

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++){
        const elemento = matriz[i][j]
        console.log("Posição : (" + i + " ," + j + ")" + "Valor: " + elemento)
    }
}