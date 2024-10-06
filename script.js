let saludo = document.getElementById("tituloPrincipal")

const inputs = document.querySelectorAll('input')

saludo.innerHTML = "<h1>Asistente dietario Gemini</h1>"

let formulario = document.getElementById("formularioUsuario");

const vael0 = 150
const vael1 = 0.75
const vael2 = 0.6
const vael3 = 50

const expresiones = {

    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    peso: /^\d{1,3}$/,
    altura: /^\d{1,3}$/,

}

const campos = {

    nombre: false,
    peso: false,
    fdn: false,
    altura: false,

}

inputs.forEach((input)=> {

    input.addEventListener('keyup', verificarInputs)
    input.addEventListener('blur', verificarInputs)
})

let nombreUsuario = document.getElementById("nombre").value
let fdnUsuario = document.getElementById("fdn").value
let pesoUsuario = document.getElementById("peso").value
let alturaUsuario = document.getElementById("altura").value
let generoUsuario = document.getElementById("genero").value
let objetivoUsuario = document.getElementById("objetivo").value

const datos = [nombreUsuario, alturaUsuario, fdnUsuario, pesoUsuario, generoUsuario, objetivoUsuario]

const plans = [
    { id: 1, nombre: 'Plan Alpha', precio: '23000' },
    { id: 2, nombre: 'Plan Beta', precio: '25000' },
    { id: 3, nombre: 'Plan Gamma', precio: '30000' },
    { id: 4, nombre: 'Plan Epsilon', precio: '34000' },
]

function verificarCampo(expresion, input, campo) {

    if(expresion.test(input.value)) {
        campos[campo] = true;
    } else {
        campos[campo] = false;
    }

}

function verificarInputs (e){

    switch (e.target.name) {

        case "nombre":
            verificarCampo(expresiones.nombre, e.target, 'nombre');

            break;

        case "peso":
            verificarCampo(expresiones.peso, e.target, 'peso')
            break;

        case "fdn":
            verificarCampo(expresiones.fdn, e.target, 'fdn');
            break;

        case "altura":
            verificarCampo(expresiones.altura, e.target, 'altura');
            break;
    }

}

function mostrarPlanes() {

    plans.forEach(e => {

        const planes = document.getElementById("planes")
        const li = document.createElement("li")
        li.innerText = " "
        li.innerText = e.nombre
        planes.appendChild(li)

    })
}

function pesoIdealh(a, vael0, vael1, vael3) {
    return ((alturaUsuario - vael0) * vael1 + vael3)
}

function pesoIdealm(a, vael0, vael2, vael3) {
    return ((alturaUsuario - vael0) * vael2 + vael3)
}

function procesarDatos() {

    if (generoUsuario == "hombre") {

        const resultado1 = pesoIdealh(JSON.stringify(datos[1]), vael0, vael1, vael3)
        let mensajeResultado = document.getElementById("resultado")
        mensajeResultado.innerHTML = `Enhorabuena ${nombreUsuario} ! Tu peso ideal a conseguir seria de ${resultado1} \n A continuacion te mostramos algun planes recomendados`
    }

    if (generoUsuario == "mujer") {
        const resultado2 = pesoIdealm(JSON.stringify(datos[1]), vael0, vael2, vael3)
        let mensajeResultado = document.getElementById("resultado")
        mensajeResultado.innerHTML = `Enhorabuena ${nombreUsuario} ! Tu peso ideal seria de ${resultado2} \n A continuacion te mostramos algun planes recomendados`
    }

    sessionStorage.setItem(datos, JSON.stringify(datos))
}

function planObtenido() {

    if (objetivoUsuario == 'ganarMasa') {
        let planRecomendado = document.getElementById('plan1')
        planRecomendado.innerHTML = `<h4>Para ganar masa muscular te recomendamos el ${(plans[0].nombre)}, el cual incluye una completa rutina de ejercicios, ademas de un plan de alimentacion y asistencia on-line personalizada de nuestros coachs</h4>\n <h5>A continuacion te mostramos todos los planes disponibles</h5>`
    }

    if (objetivoUsuario == 'subirPeso') {
        let planRecomendado = document.getElementById('plan1')
        planRecomendado.innerHTML = `<h4>Si necesitas subir de peso te recomendamos el ${(plans[1].nombre)} el cual incluye un estricto plan dietario. Ademas contaras con la asistencia de profesionales cuando necesites</h4> \n <h5>A continuacion te mostramos todos los planes disponibles</h5>`
    }

    if (objetivoUsuario == 'bajarPeso') {
        let planRecomendado = document.getElementById('plan1')
        planRecomendado.innerHTML = `<h4>Si necesitas bajar de peso te recomendamos el ${(plans[2].nombre)}, el cual incluye una rutina de ejercicios personalizada. Ademas contaras con un plan dietario y asistencia profesional cuando necesites</h4> \n <h5>A continuacion te mostramos todos los planes disponibles</h5>`
    }

    mostrarPlanes()
}

formulario.addEventListener('reset', () => {

    let mensajeResultado = document.getElementById("resultado")
    let planRecomendado = document.getElementById('plan1')
    let planesTodos = document.getElementById("planes")
    onclick = mensajeResultado.innerHTML = ""; planRecomendado.innerHTML = ""; planesTodos.innerHTML = ""
})

formulario.addEventListener('submit', (e) => {

    e.preventDefault()
    let planesTodos = document.getElementById("planes")
    onclick = planesTodos.innerHTML = ""; procesarDatos(); planObtenido();
    
    if(campos.nombre && campos.altura && campos.fdn && campos.peso) {
        formulario.reset();

    } else {
        let error = document.getElementById('formularioError')
        error.innerText = 'Por favor, rellene todos los campos para continuar'
    }
})

