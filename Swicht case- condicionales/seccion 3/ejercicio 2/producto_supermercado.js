let producto = prompt("Ingrese producto");

switch (producto) {
    case "crema":
        console.log("Paga Iva");
        break;
    case "vino":
        console.log("Paga Iva");
        break;
    case "lenteja":
        console.log("No paga Iva");
        break;
    case "arroz":
        console.log("No paga Iva");
        break;
    default:
        console.log("Producto no valido ")
        break;
}