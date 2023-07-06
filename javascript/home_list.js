function saveHouse() {
    let area = document.querySelector("input[name='area']").value
    let number = document.querySelector("input[name='number']").value
    let city = document.querySelector("input[name='city']").value
    let neighbor = document.querySelector("input[name='neighbor']").value

    let newListValue = document.createElement("li")
    newListValue.innerText = area + "m², número" + number + " (" + neighbor + " - " + city + ")"
    let removeButton = document.createElement("button")
    removeButton.type = "button"
    removeButton.innerText = "Remover"
    removeButton.setAttribute("onclick", "removeHouse(this)")

    newListValue.appendChild(removeButton)

    document.getElementById("house-list").appendChild(newListValue)
}

function removeHouse(button) {
    let liToRemove = button.parentNode
    document.getElementById("house-list").removeChild(liToRemove)
}