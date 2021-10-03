window.onload = inicio;

let formulario = [];

function inicio()
{    
    formulario.push(document.getElementById("nombre_usuario_input"));
    formulario.push(document.getElementById("anoNacimiento_usuario_input"));
    formulario.push(document.getElementById("contrasena_usuario_input"));
    formulario.push(document.getElementById("confirmar_contraseña _input"));

    agregarEventos();
}


function agregarEventos()
{
    for (var i in formulario)
    {
        formulario[i].addEventListener("focus", procesarFocus);
    }
}


function procesarFocus(event)
{
    //console.log(event.target.id);
}



function reset()
{
    document.getElementById("form_registrar_usuario").reset();
}
*/


function validar_nombre_usuario() 
{    
    var dato = document.getElementById("nombre_usuario_input").value;
    var x = document.getElementById("nombre_usuario_input");

    var primeraletra = dato.charAt(0);

    const reglamayuscula = /^[A-Z]+$/
    const reglaletras = /^[A-Za-z]+$/

    /* Lectura de reglaletras:
    ^ indica que el patrón debe iniciar con los caracteres dentro de los corchetes
    [A-Z] indica que los caracteres admitidos son letras del alfabeto
    + indica que los caracteres dentro de los corchetes se pueden repetir
    $ indica que el patrón finaliza con los caracteres que están dentro de los corchetes.
    i indica que validaremos letras mayúsculas y minúsculas (case-insensitive)
    */        

    if (reglaletras.test(dato) == true) //Valida que el nombre de usuario sea sólo letras, sino cumple retorna falso y se sale.
    {   
        if (reglamayuscula.test(primeraletra) == true)  //Valida que la primera letra sea mayúscula
        {
            if (dato.length >= 6 && dato.length <= 30) //Valida que el nombre de usuario sea de mínimo 6 y máximo 30 caracteres
            {
                console.log("El usuario es válido.");
                return true;
            }
            else{
                console.log("El usuario debe tener mín 6 y máx 30 caracteres.");
                document.getElementById("nombre_usuario_input").value = " ";
            }
        }
        else{
            console.log("La primera letra debe ser en Mayúscula");
            document.getElementById("nombre_usuario_input").value = " ";
        }
    }
    else{
        console.log("El usuario debe contener sólo Letras");
        document.getElementById("nombre_usuario_input").value = " ";
    }
    return false;
}


function validar_anoNacimiento_usuario()
{
    var anacimiento = document.getElementById("anoNacimiento_usuario_input").value;
    const reglanumero = /^[0-9]+$/

    if (reglanumero.test(anacimiento) == true) //Valida si es un número
    {
        if (anacimiento >= 1) //Valida si es positivo
        {
            if (anacimiento < 2022 && anacimiento >= 1900)
            {
                if (anacimiento <= 2003)
                {
                    console.log("El año de nacimiento es válido.");
                    return true;
                }
                else{
                    console.log("El usuario es menor de edad");
                    document.getElementById("anoNacimiento_usuario_input").value = "";
                }
            }
            else{
                console.log("El año digitado no está en el rango de 1900 y 2022");
                document.getElementById("anoNacimiento_usuario_input").value = "";
            }           
        }
        else{
            console.log("El año digitado es Negativo");
            document.getElementById("anoNacimiento_usuario_input").value = "";
        }
    }
    else{
        console.log("El año digitado no es un Número");
        document.getElementById("anoNacimiento_usuario_input").value="";
    }
    return false;
}


function validar_contrasena(valor)
{
    var contrasena = valor;
    const reglacontrasena = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/

    /*
    /^
    (?=.*\d)          // should contain at least one digit
    (?=.*[a-z])       // should contain at least one lower case
    (?=.*[A-Z])       // should contain at least one upper case
    [a-zA-Z0-9]{6,}   // should contain at least 6 from the mentioned characters
    $/
    */
     

    if (reglacontrasena.test(contrasena) == true)
    {
        console.log("La contraseña es Válida.")
        return true;
    }
    else{
        console.log("La contraseña no es válida!")
        //document.getElementById("contrasena_usuario_input").value = " ";
    }
    return false;
}


function confirmar_contrasena(valor1, valor2)
{
    var contrasena1 = valor1;
    var contrasena2 = valor2;

    if (validar_contrasena(contrasena1)== true)
    {
        if (validar_contrasena(contrasena2)== true)
        {
            if (contrasena1 == contrasena2)
            {
                console.log("Las contraseñas Coinciden.")
                return true;
            }
            else
            {
                console.log("Las contraseñas NO coinciden...")
                return false;
            }
        }
        console.log("Validar contraseña2 es false");
        return false;
    }
    console.log("Validar contraseña1 es false");
    return false;
}

let registros = [];

function agregarRegistro(){

    var NuevoUsuario = new Object();

    NuevoUsuario.usuario = document.getElementById("nombre_usuario_input").value;
    NuevoUsuario.anoNacimiento = document.getElementById("anoNacimiento_usuario_input").value;
    NuevoUsuario.contrasena = document.getElementById("contrasena_usuario_input").value;
    NuevoUsuario.confirmar_contrasena = document.getElementById("confirmar_contrasena_input").value;

    registros.push(NuevoUsuario);
    console.log(registros);

    /*if (registros.length > 1){
        ValidarRegistrosUnicos(registros);
    }*/
}


function ValidarRegistrosUnicos(arreglo) {

    var arregloSTR = [];
    

    if (!arreglo.length){
        return null;    //indica que el arreglo está vacío.
    }

    for (var i=0; i < arreglo.length; i++){

        arregloSTR.push(JSON.stringify(arreglo[i]));
        console.log(arregloSTR);
    }

    arregloSTR.sort;
    
    for (var j=0; j < arregloSTR.length; j++){
        
        if (arregloSTR[j] == arregloSTR[j-1]){
            
            console.log("Si hay registros repetidos.");
            arregloSTR.splice(j, 1);
            console.log("Así quedó el Registro:" + arregloSTR)
            return false;
        }
    }  
    console.log("No hay registros repetidos.");
    return true;    
}    

/*
module.exports.validar_nombre_usuario = validar_nombre_usuario;
module.exports.validar_anoNacimiento_usuario = validar_anoNacimiento_usuario;
module.exports.validar_contrasena = validar_contrasena;
module.exports.confirmar_contrasena = confirmar_contrasena;
*/

module.exports.registros = registros;
module.exports.ValidarRegistrosUnicos = ValidarRegistrosUnicos;
module.exports.agregarRegistro = agregarRegistro;

