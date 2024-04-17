let distancia = Number(prompt('¿Cuál es la distancia?'));
let tiempo = Number(prompt('¿Cuál es el tiempo?'))

let calcularVelocidad = (distancia, tiempo) => {
    let velocidad = distancia / tiempo;
    return velocidad
}

console.log(`La velocidad del movil es ${calcularVelocidad(distancia, tiempo)}`)