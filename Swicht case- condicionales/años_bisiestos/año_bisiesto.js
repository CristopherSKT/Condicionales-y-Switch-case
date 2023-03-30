let año = parseFloat(prompt("Ingrese el año."))
let año_bisiesto = año%4== 0 || año%400 == 0
let año_nobisiesto = año%100==0

switch (true) {
    case año_bisiesto:
        console.log("El año es bisiesto");
        break;
   
        case año_nobisiesto:
        console.log("El año no es bisiesto");
         break;
    
    default:
        console.log("El año no es bisiesto");
        break;
}