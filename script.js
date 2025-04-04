// Crear una carta por cada alumno
// elegir una carta cuando le damos al botón
// Tener un apartado para cambiar el número de alumnos que hay en clase
// Que haga una animación al elegir la carta. Una cuenta atrás: 3, 2, 1 y el nombre del elegido

// Crear número aleatorio a partir de un array


// 1 Crear el array
const alumnos = [
    "Rosa",
    "Ruben",
    "Adrián",
    "Domingo",
    "Karol",
    "Maria",
    "Blanca",
    "Axel L",
    "Axel S",
    "Alí",
    "Juan Carlos",
    "Susana",
    "Sebas",
    "Liz",
    "Nino"
]

// 2 Crear función que cree las cartas

function insertarCarta(textoCarta) {
    const carta = document.createElement("div")
    carta.classList.add("carta")
    carta.innerHTML = `<p>${textoCarta}</p>`

    const cartas = document.querySelector(".cartas")

    cartas.appendChild(carta)
}

alumnos.forEach(alumno => insertarCarta(alumno))

// elegir una carta de manera aleatoria

function numeroAleatorioArray(array) {
    let numAleatorio = Math.random() * array.length
    let numAleatorioRed = Math.floor(numAleatorio)
    return numAleatorioRed
}

function sacarCartaAleatoria() {
    const cartasAlumnos = document.querySelectorAll(".carta")
    cartasAlumnos.forEach( carta => carta.style.zIndex = 0 )
    const cartaAleatoria = cartasAlumnos[numeroAleatorioArray(cartasAlumnos)]
    cartaAleatoria.style.zIndex = 1;
}

// Llamar al botón
const btn = document.querySelector("#start-button")
// Añadirle funcionalidad
btn.addEventListener("click", sacarCartaAleatoria)
