let saludo = document.getElementById("tituloPrincipal")

const inputs = document.querySelectorAll('input')

saludo.innerHTML = "<h1>Asistente dietario Gemini</h1>"

let formulario = document.getElementById("formularioUsuario");

/** Declaracion de variables y arrays necesarios */

const alturaMin = 150
const coefH = 0.75
const coefM = 0.6
const pesoMin = 50

const expresiones = {

    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    peso: /^\d{1,3}$/,
    altura: /^\d{1,3}$/,

}

const campos = {

    nombre: false,
    peso: false,
    altura: false,

}

const plans = [
    { id: 1, nombre: 'Plan Alpha', precio: '23000' },
    { id: 2, nombre: 'Plan Beta', precio: '25000' },
    { id: 3, nombre: 'Plan Gamma', precio: '30000' },
    { id: 4, nombre: 'Plan Epsilon', precio: '34000' },
]

/** Inicializacion de funciones necesarias */


const verificarCampo = (expresion, input, campo) => {

    document.getElementById(`input__${campo}`)
    document.querySelector(`input__${campo} i`)

    if (expresion.test(input.value)) {

        campos[`${campo}`] = true

    } else {

        campos[`${campo}`] = false
    }
}

function verificarInputs(e) {

    switch (e.target.id) {

        case "nombre":
            verificarCampo(expresiones.nombre, e.target, 'nombre');
            break;

        case "peso":
            verificarCampo(expresiones.peso, e.target, 'peso')
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

function pesoIdeal(alturaUsuario, alturaMin, coef, pesoMin) {
    return ((alturaUsuario - alturaMin) * coef + pesoMin)
}

function procesarDatos() {

    let nombreUsuario = document.getElementById("nombre").value
    let fdnUsuario = document.getElementById("fdn").value
    let pesoUsuario = document.getElementById("peso").value
    let alturaUsuario = document.getElementById("altura").value
    let generoUsuario = document.getElementById("genero").value
    let objetivoUsuario = document.getElementById("objetivo").value

    const datos = [nombreUsuario, alturaUsuario, fdnUsuario, pesoUsuario, generoUsuario, objetivoUsuario]

    sessionStorage.setItem(datos, JSON.stringify(datos))

    let mensajeResultado = document.getElementById("resultado")

    if (generoUsuario === "hombre") {

        const resultado = pesoIdeal(alturaUsuario, alturaMin, coefH, pesoMin)
        mensajeResultado.innerHTML = `Enhorabuena ${nombreUsuario} ! Tu peso ideal a conseguir seria de ${resultado} \n A continuacion te mostramos algun planes recomendados`
    }
    else {
        const resultado = pesoIdeal(alturaUsuario, alturaMin, coefM, pesoMin)
        mensajeResultado.innerHTML = `Enhorabuena ${nombreUsuario} ! Tu peso ideal seria de ${resultado} \n A continuacion te mostramos algun planes recomendados`
    }

    mostrarPlanes();
}

function planObtenido() {


    let objetivoUsuario = document.getElementById("objetivo").value
    let pesoUsuario = document.getElementById("peso").value
    let planRecomendado = document.getElementById('plan1')

    planRecomendado.innerHTML = ''

    if (objetivoUsuario == 'ganarMasa') {

        planRecomendado.innerHTML = `<h4>Para ganar masa muscular te recomendamos el ${(plans[0].nombre)}, el cual incluye una completa rutina de ejercicios, ademas de un plan de alimentacion y asistencia on-line personalizada de nuestros coachs</h4>\n <h5>A continuacion te mostramos todos los planes disponibles</h5>`
    }

    if (objetivoUsuario === 'pesoIdeal' && pesoUsuario<resultado) {

        planRecomendado.innerHTML = `<h4>Para poder mejorar tu peso te recomendamos el ${(plans[1].nombre)} el cual incluye un estricto plan dietario. Ademas contaras con la asistencia de profesionales cuando necesites</h4> \n <h5>A continuacion te mostramos todos los planes disponibles</h5>`
    }

    else {

        planRecomendado.innerHTML = `<h4>Para poder eliminar esos kilos de mas te recomendamos el ${(plans[2].nombre)}, el cual incluye una rutina de ejercicios personalizada. Ademas contaras con un plan dietario y asistencia profesional cuando necesites</h4> \n <h5>A continuacion te mostramos todos los planes disponibles</h5>`
    }

    if (objetivoUsuario === 'quemarGrasa') {

        planRecomendado.innerHTML = `<h4>Para reducir tu grasa corporal te recomendamos el ${(plans[3].nombre)}, el cual incluye un extensiva rutina de ejercicios para ayudarte a moldear tu cuerpo de la mejor manera. Contaras tambien con la asistencia de profesionales durante el proceso \n <h5>A continuacion te mostramos todos los planes disponibles</h5>`

    }
}

/** Metodo de array y eventlisteners */

inputs.forEach((input) => {

    input.addEventListener('keyup', verificarInputs);
    input.addEventListener('blur', verificarInputs);
    input.addEventListener('keypress', verificarInputs);
    input.addEventListener('reset', verificarInputs);
})

formulario.addEventListener('reset', () => {

    let mensajeResultado = document.getElementById("resultado")
    let planRecomendado = document.getElementById('plan1')
    let planesTodos = document.getElementById("planes")
    let error = document.getElementById('formularioError')
    onclick = mensajeResultado.innerHTML = ""; planRecomendado.innerHTML = ""; planesTodos.innerHTML = ""; error.innerText = "";
})

formulario.addEventListener('submit', (e) => {

    e.preventDefault();
    let mensajeResultado = document.getElementById("resultado")
    let planRecomendado = document.getElementById('plan1')
    let planesTodos = document.getElementById("planes");
    let error = document.getElementById('formularioError')
    error.innerText = ''
    planesTodos.innerHTML = ""
    planRecomendado.innerHTML = ""
    mensajeResultado.innerHTML = ""

    if (campos.nombre && campos.altura && campos.peso) {
        onclick = procesarDatos(); planObtenido();
    } else {
        error.innerText = 'Por favor, rellene todos los campos correctamente para continuar'
    }    
})