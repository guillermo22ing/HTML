function login(){

    //se obtienen los valores ingresados por el usuario
    let usuario =  document.getElementById("usuario").value;
    let contraseña =  document.getElementById("contraseña").value;
    let mensaje = document.getElementById("mensaje");

    //valores esperados para el inicio de sesion
    let expectedUsuario = "guille"
    let expectedContraseña = "1234"

    //verificar si los valores esperados coinciden con los esperados
    if (usuario === expectedUsuario && contraseña === expectedContraseña){
        mensaje.textContent = "inicio de sesion exitoso";
        mensaje.style.color = "red";
        //redirigir a otra pagina
        window.location.href = "home.html"
    } else {
        mensaje.textContent = "Nombre de usuario o contraseña incorrectos";
        mensaje.style.color = "red";
    }

    
}

window.onload = function() {
    document.getElementById("usuario").focus();
};