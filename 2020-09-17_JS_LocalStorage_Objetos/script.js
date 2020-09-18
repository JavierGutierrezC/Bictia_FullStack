

// const arrayFrutas = ["Papaya", "Manzana", "Cereza", "limon", "Piña"]
// console.log(typeof arrayFrutas)

// const arreyFrutasString = JSON.stringify(arrayFrutas)

// localStorage.setItem("frutas", arrayFrutasString)

// const arrayFrutasStorage = JSON.parse(localStorage.getItem("frutas"))

const persona = {
    name:"Pepito",
    surname: "Perez",
    age: 25,
    email: "pepito@perez.com"
}

console.log(typeof persona)
const personaEnString = JSON.stringify(persona)
localStorage.setItem("persona", personaEnString)

const personaEnStorage = JSON.parse(localStorage.getItem("persona"))
console.log(personaEnStorage)
console.log(typeof personaEnStorage)

document.getElementById=("nombre").innerHTML = localStorage.getItem("persona");
