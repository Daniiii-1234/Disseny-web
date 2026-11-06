
// DATOS CURIOSOS ALEATORIOS

const datos = [
    "El infinito no es un número normal: representa algo que no tiene límite.",
    "El número de Graham es tan enorme que no podemos escribirlo con todos sus dígitos.",
    "Cicada 3301 publicó sus primeros acertijos en enero de 2012.",
    "El movimiento de algunos péndulos puede ser extremadamente difícil de predecir.",
    "Existen distintos tamaños de infinito en matemáticas."
];

let indice = 0;

document.getElementById("cambiarDato").addEventListener("click", function() {
    indice = (indice + 1) % datos.length;
    document.getElementById("dato").textContent = datos[indice];
});

// PREGUNTA INTERACTIVA

const respuestas = document.querySelectorAll(".respuesta");

respuestas.forEach(function(boton) {
    boton.addEventListener("click", function() {
        const resultado = document.getElementById("resultado");

        if (boton.textContent === "La criptografía") {
            resultado.textContent = "¡Correcto! La criptografía estudia cómo proteger y descifrar mensajes.";
            resultado.style.color = "#75e6bb";
        } else {
            resultado.textContent = "¡No es correcto! Inténtalo de nuevo.";
            resultado.style.color = "#ff8585";
        }
    });
});

// BOTÓN PARA VOLVER ARRIBA

const botonArriba = document.getElementById("volverArriba");

window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
        botonArriba.style.display = "block";
    } else {
        botonArriba.style.display = "none";
    }
});

botonArriba.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

