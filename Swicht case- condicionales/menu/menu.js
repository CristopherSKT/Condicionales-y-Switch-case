let menu = prompt("Ingrese una opcion del el menu para ver que contiene: 1,2,3,4");

switch (menu) {
    case "1":
    console.log("El menu lleva carne, arroz,ensalada");    
        break;
    case "2":
    console.log("El menu lleva pollo, arroz,ensalada");    
        break;
    case "3":
    console.log("El menu lleva camaron, arroz,ensalada");    
        break;
    case "4":
    console.log("El menu lleva carne molida, arroz,ensalada");    
        break;
    default:
        console.log("Menu no valido");
        break;
}