let password = prompt("Ingrese una contraseña")
if (password.length >=8 && password.length <=15 && password.includes(" ")){
    console.log("Contraseña valida")
}else{
    console.log("Contraseña invalida")
}
