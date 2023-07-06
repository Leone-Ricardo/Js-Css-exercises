function slownDown(velocity, printer) {
    let decelaration = 20

    while(velocity > 0) {
        printer(velocity)
        velocity -= decelaration
    }

    alert("Nave parada. As comportas podem ser abertas.")
}

let spaceshipVelocity = 150

slownDown(spaceshipVelocity, function(velocity){
    console.log("Velocidade atual: " + velocity)
})