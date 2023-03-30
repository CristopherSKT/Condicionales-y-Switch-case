let division = parseFloat(prompt("Ingrese el numero"))

switch (division%3==0 && division%5==0) {
    case true:
        console.log("El numero es divisible entre los dos numeros");
        break;

    default:
        console.log("El numero no es divisible entre los dos numeros")
        break;
}