/*4. Cree un programa que reciba tres números y muestre el mayor. 
En caso de que los números sean iguales 
también se debe mostrar al usuario.*/

let num1 = parseFloat(prompt("Ingrese el primer numero a comparar"));
let num2 = parseFloat(prompt("Ingrese el segundo numero a comparar"));
let num3 = parseFloat(prompt("Ingrese el tercer numero a comparar"));
let iguales = num1 == num2 && num2 == num3 

switch (true) {
    case num1 > num2 && num1 > num3:
        console.log("El primer numero es mayor",num1);
        break;
    case num2 > num1 && num2 > num3:
        console.log("El segundo numero es mayor",num2);
        break;
    case num3 > num1 && num3 > num2:
        console.log("El primer numero es mayor",num3);
        break;
    case iguales:
        console.log("Los tres numeros son iguales",);
        break;
    default:
        console.log("Cantidad invalida");
        break;
}