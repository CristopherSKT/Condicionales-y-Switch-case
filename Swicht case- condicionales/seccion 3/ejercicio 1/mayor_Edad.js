let edad = parseInt(prompt("Ingrese su edad"));

switch (true) {
    case edad >=18:
        console.log("Usted es mayor de edad") 
        break;
    default:
        console.log("Usted es menor de edad")
        break;
}