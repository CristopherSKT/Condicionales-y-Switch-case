//En una veterinaria nesecitan un programa para adoptar un perro, un gato o un pez
let edad = !(parseFloat(prompt("Ingrese su edad"))<18)

if (edad){
    let adopcion = prompt("Elija que tipo de mascota quiere adoptar Perro:1, Gato:2, Pez:3");
switch (true) {
    case adopcion.includes("1"):
        console.log("Felicitaciones acaba de adoptar un lindo perro");
        break;
    case adopcion.includes("2"):
        console.log("Felicitaciones acaba de adoptar un lindo gato");
        break;
     case adopcion.includes("3"):
         console.log("Felicitaciones acaba de adoptar un lindo pez");
            break;
    default:
        console.log("Animal no clasificado")
        break;
}
}else {
    console.log("No puede adoptar porque es menor de edad")
}
