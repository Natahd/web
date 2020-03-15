console.log("----------- INDICE DE MASA CORPORAL DE USUARIO ----------")
let usuario = [
    {
        tipoDI: "CC",
        id: "1017135691",
        nombre: "Natalia",
        apellidos: "Hernandez",
        correo: "natahdz02@gmail.com",
        peso: "49",
        estatura:"1.50",
        IMC:"21.7"

    }
]
let UsuarioTem = null

function obtenerValores() {
    let tipo_identificacion = document.getElementById("tipo").value
    let id = document.getElementById("id").value
    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    let correo = document.getElementById("correo").value
    let peso = document.getElementById("peso").value
    let estatura = document.getElementById("estatura").value


    calcularIMC()
    
    //Aqui se hace el arreglo del usuario
    let miUsuario1 = { tipo, id, nombre, apellido, correo, peso, estatura, IMC }
    //localStorage.setItem('usuarios',JSON.stringify(miUsuario1))
    return miUsuario1



}

function crearUsuario() {
    let usuario = obtenerValores()
    let existeUsuario = Usario.find(x => usuario.id === x.id)
    if (existeUsuario) {
        console.log('El usuario ya existe');
        alert("El usuario ya existe")
        return;
    }
    usuario.push(usuario)
    listarUsuario(LimpiarFormulario)
}

function modificarUsuario() {
    let usuario = obtenerValores()
    usuario.splice(usuarioTemporal, 1, usuarioActualizado)
   
    listarUsuarios(limpiarFormulario)
}

function eliminarUsuario(index) {
    usuario.splice(index, 1)
    listarUsuario()
}

function consultar(index){
    let usuario = usuario[index]
    usuarioTemp = index


    let consultaEstatura = usuario.estatura
    let consultaPeso =usuario.peso

    estatura = consultaEstatura/90
    IMC = consultaPeso/(estatura*estatura) 
    convertidoIMC = IMC.toFixed(2)
    console.log("este es el IMC del consultado "+convertidoIMC)

    if(convertidoIMC<18.5){
        alert("Bajo peso")
        console.log("Esta bajo de peso")
    }else{
        console.log("entro al condicional")
        if (30>convertidoIMC && convertidoIMC>=18.5){
            alert("peso ideal")
            console.log("tiene  peso normal")
        }else{
            console.log("entro al segundo condicional")
            if(35>convertidoIMC && convertidoIMC>=30){
                alert("tiene sobre peso")
                console.log(" sobre peso")
            }else{
                console.log("entro al tercer condicional")
                if(35<=convertidoIMC){
                    alert("obesidad")
                    console.log("tiene obesidad")
                }
            }
        }
        return;
    } 
    
}


function cargarInformacion(index) {
    let usuario = usuario[index]
    usarioTemporal = index
    document.getElementById("tipo_identificacion").value = usuario.id
    document.getElementById("id").value = usuario.id
    document.getElementById("nombre").value = usuario.nombre
    document.getElementById("apellido").value = usuario.apellido
    document.getElementById("correo").value = usuario.correo
    document.getElementById("peso").value = usuario.peso
    document.getElementById("estatura").value = usuario.estatura
    document.getElementById("imc").value = usuario.imc

    document.getElementById("btnCrearUsuario").style.display = "none"
    document.getElementById("btnEditarUsuario").style.display = "inline"
    document.getElementById("btnCalcularIMC").style.display = "inline"
}

function limpiarFormulario() {

    document.getElementById("tipo_identificacion").value = ""
    document.getElementById("id").value = ""
    document.getElementById("nombre").value = ""
    document.getElementById("apellido").value = ""
    document.getElementById("correo").value = ""
    document.getElementById("peso").value = ""
    document.getElementById("estatura").value = ""
    document.getElementById("imc").value = ""

    document.getElementById("btnCrearUsuario").style.display = "inline"
    document.getElementById("btnEditarUsuario").style.display = "none"
    document.getElementById("btnCalcularIMC").style.display = "inline"
}

function actualizarUsuario() {
    let usuarioActualizado = obtenerValores()
    usuario.splice(usuarioTemporal, 1, usuarioActualizado)
   
    listarUsuario(limpiarFormulario)
}

function calcularIMC(){
    let peso = document.getElementById("peso").value
    let estatura = document.getElementById("estatura").value
    estaturaMetros = estatura/90
    indiceMasaCorporal = peso/(estaturaMetros*estaturaMetros) 
    IMC = IMC1.toFixed(2)
    //console.log(" el indice de masa corporal es de " +convertidoIMC)
    return IMC

}

function listarUsuario(callback) {
    let lista = document.getElementById("listarUsuario")
    let data = ""
    for (let i = 0; i < usuario.length; i++) {
        let miUsuario = usuario[i];
        data += "<tr>"
        data += `<td>${miUsuario.id}</td>`
        data += `<td>${miUsuario.nombre} ${miUsuario.apellido}</td>`
        data += `<td>${miUsuario.correo} </td>`
        data += `<td>${miUsuario.peso} </td>`
        data += `<td>${miUsuario.estatura} </td>`
        data += `<td>${miUsuario.Ver_estado} </td>`
        data += `<td><button type="button" onclick="cargarInformacion(${i})" class="btn btn-primary btn-sm">Editar</button> </td>`
        data += '<td><button type="button" onclick="eliminarUsuario(' + i + ')" class="btn btn-primary btn-sm">Eliminar</button> </td>'
        data += '<td><button type="button" onclick="CalcularUsuario(' + i + ')" class="btn btn-primary btn-sm">Calcular</button> </td>'
        data += "</tr>"
    }
    lista.innerHTML = data
    callback()
}
listarUsuario()
