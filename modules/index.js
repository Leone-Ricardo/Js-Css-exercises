const Planet = require('./planeta')
const planetOperations = require('./planet_operations')

let planets = [
    new Planet ("Mercúrio", 0.39),
    new Planet ("Vênus", 0.72),
    new Planet ("Terra", 1),
    new Planet ("Marte", 1.52), 
    new Planet ("Júpiter", 5.2),
    new Planet ("Saturno", 9.53),
    new Planet ("Urano", 19.1),
    new Planet ("Netuno", 0.39)
]

    planets.forEach(planeta => {
        distanceFromSum = planetOperations.convertAUtoKm(planeta.auToSum).toFixed(2)
        console.log(`${planeta.name} - ${planeta.auToSum} - ${distanceFromSum}`)
    })