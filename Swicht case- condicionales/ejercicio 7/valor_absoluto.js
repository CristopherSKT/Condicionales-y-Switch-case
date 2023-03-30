//Cree un programa que lea una cantidad e imprima un porcentaje
// a calcular requerido sobre esa cantidad.
let cantidad = parseFloat(prompt("Ingrese la cantidad para mostrar su valor absoluto"))

switch (true) {
    case cantidad == 0:
        console.log("El valor absoluto es:",cantidad);
        break;

    case cantidad <= 0:
        cantidad = cantidad*-1
        console.log("El valor absoluto es:",cantidad);
        break;

    default:
        console.log("El valor absoluto es:",cantidad);
        break;
}