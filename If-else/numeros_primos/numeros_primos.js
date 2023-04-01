const numero = prompt("Introduce un número entre 1 y 15:");
const entero = parseInt(numero);
if (entero < 1 || entero > 15) {
    console.log("El número introducido no es válido.");
  } else {
    let esPrimo = true;
  if (entero === 1) {
    esPrimo = false;
  } else {
    for (let i = 2; i < entero; i++) {
      if (entero % i === 0) {
        esPrimo = false;
        break;
      }
    }
  }
  if (esPrimo) {
    console.log(`${entero} es un número primo.`);
  } else {
    console.log(`${entero} no es un número primo.`);
  }
}