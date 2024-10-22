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

let campos = {

    nombre: false,
    peso: false,
    altura: false,

}

const plans = [
    { id: 1, nombre: 'Plan Alpha', precio: '$23000' },
    { id: 2, nombre: 'Plan Beta', precio: '$25000' },
    { id: 3, nombre: 'Plan Gamma', precio: '$30000' },
    { id: 4, nombre: 'Plan Epsilon', precio: '$34000' },
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

function Perfil(nombre, altura, fdn, peso, objetivo, genero) {

    this.nombre = nombre
    this.altura = altura
    this.fdn = fdn
    this.peso = peso
    this.objetivo = objetivo
    this.genero = genero
}

function mostrarPlanes() {

    plans.forEach(e => {
        const planes = document.getElementById("planes")
        const plan = document.createElement("section")
        plan.innerText = " "
        plan.innerText = `${e.nombre} \n ${e.precio} \n`
        planes.appendChild(plan)
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

    let mensajeResultado = document.getElementById("resultado")

    try {

        if (pesoUsuario > 0 && alturaUsuario > 0) {

        mensaje = Toastify({
            text: 'Datos ingresados correctamente!!',
            duration: 2500,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(to right, #ff7c00, #ff0000)",
            },
        }).showToast(); 

    } else {

        throw new Error(Toastify({

            text: 'Por favor, rellene todos los campos correctamente para continuar',
            duration: 2500,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(to right, #ff7c00, #ff0000)",
            },
        }).showToast())  
    }

    } catch (err) {

        mensaje = err            

    } finally {

        switch (generoUsuario) {

            case "hombre":
                let resultadoH = pesoIdeal(alturaUsuario, alturaMin, coefH, pesoMin)
                mensajeResultado.innerHTML = `Enhorabuena ${nombreUsuario} ! Tu peso ideal a conseguir seria de ${resultadoH} \n A continuacion te mostramos el plan recomendado`
                break

            case "mujer":
                const resultadoM = pesoIdeal(alturaUsuario, alturaMin, coefM, pesoMin)
                mensajeResultado.innerHTML = `Enhorabuena ${nombreUsuario} ! Tu peso ideal seria de ${resultadoM} \n A continuacion te mostramos el plan recomendado`
                break
        }

        let consulta = [nombreUsuario, alturaUsuario, fdnUsuario, pesoUsuario, objetivoUsuario, generoUsuario]
        localStorage.setItem(consulta, JSON.stringify[consulta]), mensaje      
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

                planRecomendado.innerHTML = `<h4>Para reducir tu grasa corporal te recomendamos el ${(plans[3].nombre)}, el cual incluye un extensiva rutina de ejercicios para ayudarte a moldear tu cuerpo de la mejor manera. Contaras tambien con la asistencia de profesionales durante el proceso \n <h5>A continuacion te mostramos todos los planes disponibles</h5>`

                break

            case "pesoIdeal":

                if (resultado <= 0) {

                    let error = document.getElementById('formularioError')
                    error.innerText = 'Por favor, rellene todos los campos correctamente para continuar'
                    break
                } else if (pesoUsuario < "pesoIdeal") {

                    planRecomendado.innerHTML = `<h4>Para poder mejorar tu peso te recomendamos el ${(plans[1].nombre)} el cual incluye un estricto plan dietario. Ademas contaras con la asistencia de profesionales cuando necesites</h4> \n <h5>A continuacion te mostramos todos los planes disponibles</h5>`
                    break
                } else {

                    planRecomendado.innerHTML = `<h4>Para poder eliminar esos kilos de mas te recomendamos el ${(plans[2].nombre)}, el cual incluye una rutina de ejercicios personalizada. Ademas contaras con un plan dietario y asistencia profesional cuando necesites</h4> \n <h5>A continuacion te mostramos todos los planes disponibles</h5>`
                    break
                }

                
        }
    }
    /** Metodo de array y eventlisteners */

    setTimeout(() => inputs.forEach((input) => {

        input.addEventListener('keyup', verificarInputs);
        input.addEventListener('blur', verificarInputs);
        input.addEventListener('keypress', verificarInputs);

    }), 500)

    formulario.addEventListener('reset', () => {

        let mensajeResultado = document.getElementById("resultado")
        let planRecomendado = document.getElementById('plan1')
        let planesTodos = document.getElementById("planes")
        onclick = mensajeResultado.innerHTML = ""; planRecomendado.innerHTML = ""; planesTodos.innerHTML = ""; campos.nombre = false ; campos.peso = false ; campos.altura = false;
    })

    formulario.addEventListener('submit', (e) => {

        e.preventDefault();
        let mensajeResultado = document.getElementById("resultado")
        let planRecomendado = document.getElementById('plan1')
        let planesTodos = document.getElementById("planes");
        planesTodos.innerHTML = ""
        planRecomendado.innerHTML = ""
        mensajeResultado.innerHTML = ""

        if (campos.nombre && campos.altura && campos.peso) {
            onclick = procesarDatos(); planObtenido(); mostrarPlanes();
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


