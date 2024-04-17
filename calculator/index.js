const numero1 = Number(prompt("Ingrese primer número"));
const numero2 = Number(prompt("Ingrese segundo número"));
const suma =numero1 +numero2;

const promedio = suma / 2;
const triple = promedio * 3;
const resultadoMenosDiez = triple - 10;


document.getElementById('showingAdd').innerHTML = `El resultado de la suma es ${suma}`;
document.getElementById('promedio').innerHTML = `El resultado del promedio es ${promedio}`;
document.getElementById('triple').innerHTML = `El resultado del triple es ${triple}`;
document.getElementById('resultadoMenosDiez').innerHTML = `El resultado del triple menos 10 ${resultadoMenosDiez}`;