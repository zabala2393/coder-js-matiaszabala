let saludo = document.getElementById("tituloPrincipal")

const inputs = document.querySelectorAll('input')

saludo.innerHTML = "<h1>Asistente dietario Gemini</h1>"

let instructivo = document.getElementById ('instructivo')

instructivo.innerHTML = `<h2>Queres hacer un cambio un tu cuerpo? Te estas preparando para el verano? Nosotros te ayudamos!</h2> \n

<p>El siguiente formulario te indicara tu peso ideal, basado en los estandares saludables y tus metricas personales. Si ya lo conoces, te ofrecemos una variedad de planes que se adaptaran a tus necesidades particulares mas abajo</p>`

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

let campos = {

    nombre: false,
    peso: false,
    altura: false,

}

const plans = [
    { nombre: 'Plan Alpha', precio: '$23000',especialista: 'Mariana Bolica', dieta: 'proteica' },
    { nombre: 'Plan Beta', precio: '$25000',especialista:'Felipe Sopluma' ,dieta: 'cetogenica' },
    { nombre: 'Plan Gamma', precio: '$30000',especialista:'Hector Tura' ,dieta : 'hipocalorica' },
    { nombre: 'Plan Epsilon', precio: '$34000',especialista:'Elon Gar' ,dieta: 'mediterranea' },
]

/** Inicializacion de funciones necesarias */

let verificarCampo = (expresion, input, campo) => {

    document.getElementById(`input__${campo}`)
    document.querySelector(`input__${campo} i`)

    if (expresion.test(input.value)) {

        campos[`${campo}`] = true

    } else {

        campos[`${campo}`] = false
    }
}

// Chequeo de inputs con expresiones regulares

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

// Funcion constructora de perfiles, a guardar en storage

function Perfil(nombre, altura, fdn, peso, objetivo, genero) {

    this.nombre = nombre
    this.altura = altura
    this.fdn = fdn
    this.peso = peso
    this.objetivo = objetivo
    this.genero = genero
}

// Funcion que imprime los planes en el html

function mostrarPlanes() {

    plans.forEach(e => {
        const planes = document.getElementById("planes")
        const plan = document.createElement("section")
        plan.innerText = " "
        plan.innerText = `

        El ${e.nombre}, a cargo de ${e.especialista} 
        \n te ayudara a alcanzar tus objetivos 
        \n combinando la dieta ${e.dieta} con nuestra rutina de ejercicios personalizada
        \n Por solo ${e.precio}!! \n`
        
        planes.appendChild(plan)
    })
}

setTimeout(()=> mostrarPlanes(), "5000")

// Funcion de calculo del peso ideal

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

    let mensajeResultado = document.getElementById("resultado")

    try {

        if (peso && nombre && altura) {

            mensaje = Toastify({
                text: 'Datos ingresados correctamente!!',
                duration: 2500,
                close: true,
                gravity: "top",
                position: "right",
                stopOnFocus: true,
                style: {
                    background: "linear-gradient(to right, #00ffb6, #23ff00)",
                },
            }).showToast();

        }

    } catch (error) {

        throw new Error(Toastify({

            text: 'Algo no salio bien, recargue la pagina para continuar',
            duration: 2500,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(to right, #ff7c00, #ff0000)",
            },
        }).showToast())

    } finally {

        switch (generoUsuario) {

            case "hombre":
                let resultadoH = pesoIdeal(alturaUsuario, alturaMin, coefH, pesoMin)
                mensajeResultado.innerHTML = `Enhorabuena ${nombreUsuario} ! Tu peso ideal a conseguir seria de ${resultadoH}! \n A continuacion te mostramos el plan recomendado`
                break

            case "mujer":
                const resultadoM = pesoIdeal(alturaUsuario, alturaMin, coefM, pesoMin)
                mensajeResultado.innerHTML = `Enhorabuena ${nombreUsuario} ! Tu peso ideal seria de ${resultadoM} \n A continuacion te mostramos el plan recomendado`
                break
        }

        let perfil = [nombreUsuario, alturaUsuario, fdnUsuario, pesoUsuario, objetivoUsuario, generoUsuario]
        localStorage.setItem("perfil", JSON.stringify[perfil]); mensaje
    }
}

function planObtenido() {

    let resultado = document.getElementById('resultado')
    let objetivoUsuario = document.getElementById("objetivo").value
    let pesoUsuario = document.getElementById("peso").value
    let planRecomendado = document.getElementById('plan1')

    planRecomendado.innerHTML = ''

    switch (objetivoUsuario) {

        case "ganarMasa":

            planRecomendado.innerHTML = `<h4>Para ganar masa muscular te recomendamos el ${(plans[0].nombre)}, el cual incluye una completa rutina de ejercicios, ademas de un plan de alimentacion y asistencia on-line personalizada de nuestros coachs</h4>\n <h5>A continuacion te mostramos todos los planes disponibles</h5>`

            break

        case "quemarGrasa":

            planRecomendado.innerHTML = `<h4>Para reducir tu grasa corporal te recomendamos el ${(plans[1].nombre)}, el cual incluye un extensiva rutina de ejercicios para ayudarte a moldear tu cuerpo de la mejor manera. Contaras tambien con la asistencia de profesionales durante el proceso \n <h5>A continuacion te mostramos todos los planes disponibles</h5>`

            break

        case "pesoIdeal":

            if (resultado <= 0) {

                let error = document.getElementById('formularioError')
                error.innerText = 'Por favor, rellene todos los campos correctamente para continuar'
                break
            } else if (pesoUsuario < "pesoIdeal") {

                planRecomendado.innerHTML = `<h4>Para poder mejorar tu peso te recomendamos el ${(plans[2].nombre)} el cual incluye un estricto plan dietario. Ademas contaras con la asistencia de profesionales cuando necesites</h4> \n <h5>A continuacion te mostramos todos los planes disponibles</h5>`
                break
            } else {

                planRecomendado.innerHTML = `<h4>Para poder eliminar esos kilos de mas te recomendamos el ${(plans[3].nombre)}, el cual incluye una rutina de ejercicios personalizada. Ademas contaras con un plan dietario y asistencia profesional cuando necesites</h4> \n <h5>A continuacion te mostramos todos los planes disponibles</h5>`
                break
            }


    }
}

/** Metodo de array y eventlisteners */

inputs.forEach((input) => {

    input.addEventListener('keyup', verificarInputs);
    input.addEventListener('blur', verificarInputs);
    input.addEventListener('keypress', verificarInputs);

})

formulario.addEventListener('reset', () => {

    let mensajeResultado = document.getElementById("resultado")
    let planRecomendado = document.getElementById('plan1')
    onclick = mensajeResultado.innerHTML = ""; planRecomendado.innerHTML = ""; campos.nombre = false; campos.peso = false; campos.altura = false;
})

formulario.addEventListener('submit', (e) => {

    e.preventDefault();
    let mensajeResultado = document.getElementById("resultado")
    let planRecomendado = document.getElementById('plan1')
    planRecomendado.innerHTML = ""
    mensajeResultado.innerHTML = ""

    if (campos.nombre && campos.altura && campos.peso) {
        onclick = procesarDatos(); planObtenido();
    } else {
        Toastify({
            text: 'Por favor, rellene todos los campos correctamente para continuar',
            duration: 2500,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(to right, #ff7c00, #ff0000)",
            },
        }).showToast();
    }
})