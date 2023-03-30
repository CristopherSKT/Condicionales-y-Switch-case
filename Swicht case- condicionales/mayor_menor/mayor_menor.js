let numero1 = parseFloat(prompt("Ingrese el primer numero"));
let numero2= parseFloat(prompt("Ingrese el segundo numero"));

let mayor = numero1>numero2
let menor = numero1<numero2
let igual = numero1 == numero2

switch (true) {
    case mayor:
        console.log("El numero 1 es mayor")
        break;
    case menor:
        console.log("El numero 1 es menor")
        break;
    case igual:
        console.log("Los dos numeros son iguales")
    break;
    default:
        console.log("Datos invalidos")
        break;
}