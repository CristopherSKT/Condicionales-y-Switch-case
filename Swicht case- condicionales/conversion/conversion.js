let conversion= parseFloat(prompt("ingrese la cantidad a convertir"))
let unidadincial= (prompt("Ingrese en que unidad esta la cantidad, cm,mts,km"))
let unidadfinal = (prompt("Ingrese en que unidad se va a convertir la cantidad, cm,mts,km"))
let cm_mts = conversion*0.01/1
let cm_km = conversion*0.00001/1
let mts_cm = conversion*100/1
let mts_km = conversion*0.001/1
let km_cm = conversion*100000/1
let km_mts = conversion*1000/1

switch (true) {
    case unidadincial.includes("cm") && unidadfinal.includes("mts"): 
        console.log("La conversion de centimetros a metros es de:",cm_mts)
        break;
    case unidadincial.includes("cm") && unidadfinal.includes("km"): 
        console.log("La conversion de centimetros a kilometros es de:",cm_km)
        break;
    case unidadincial.includes("mts") && unidadfinal.includes("cm"): 
        console.log("La conversion de metros a centimetros es de:",mts_cm)
        break;
    case unidadincial.includes("mts") && unidadfinal.includes("km"): 
        console.log("La conversion de metros a kilometros es de:",mts_km)
        break;
    case unidadincial.includes("km") && unidadfinal.includes("cm"): 
        console.log("La conversion de kilometros a centimetros es de:",km_cm)
        break;
    case unidadincial.includes("km") && unidadfinal.includes("mts"): 
        console.log("La conversion de kilometros a metros es de:",km_mts)
        break;
    default:
        console.log("La conversion no es valida");
        break;
}