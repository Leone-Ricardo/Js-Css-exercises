const hitchedSapcheships = [
    ["Fênix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
]

let crewGreaterThan9 = hitchedSapcheships.filter(spaceship => {
    return spaceship[1] > 9
}).map(spaceship => {
    return spaceship[0]
})

let ongoingHitchPlatform = hitchedSapcheships.findIndex(spaceship => {
    return spaceship[2] == false
})

let highlightedSpaceships = hitchedSapcheships.map(spaceship => {
    return spaceship[0].toUpperCase()
})

let message = "Espaçonaves com mais de 9 tripulantes: " + crewGreaterThan9.join(", ")
message += "\nPlataforma com processo de engate: " + (ongoingHitchPlatform + 1) 
message += "\nEspaçonaves destacadas: " + highlightedSpaceships.join(", ")

alert(message)