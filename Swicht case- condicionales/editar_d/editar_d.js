let cedula = parseFloat(prompt("Ingrese el numero de la cedula")) 
console.log("Su numero de cedula es:",cedula)

let estado = prompt("Ingrese el estado en el que quiera estar edicion o visualizacion")

switch (estado) {
    case "edicion":
        cedula = parseFloat(prompt("Modifique el numero de cedula"))
        console.log("el numero de cedula se modifico a:",cedula)
        break;
    case "visualizacion":
        console.log("esta en modo visualizacion",cedula);
        break;

    default:
        console.log("No entro a ningun estado")
        break;
}