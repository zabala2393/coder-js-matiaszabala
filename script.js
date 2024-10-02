let saludo = document.getElementById("tituloPrincipal")

saludo.innerHTML = "<h1>Asistente dietario Gemini</h1>"

let formulario = document.getElementById("formularioUsuario");

formulario.addEventListener('submit', (e) => {

    e.preventDefault()
    onclick = guardarDatos(); planObtenido();

})

const vael0 = 150
const vael1 = 0.75
const vael2 = 0.6
const vael3 = 50

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

function mostrarPlanes() {

    plans.forEach(e => {

        const planes = document.getElementById("planes")
        const li = document.createElement("li")
        li.innerText = e.nombre
        planes.appendChild(li)
    })
}

function guardarDatos() {

    sessionStorage.setItem(datos, JSON.stringify(datos))

    if (generoUsuario == "hombre") {

        function pesoIdealh(alturaUsuario, vael0, vael1, vael3) {
            return ((alturaUsuario - vael0) * vael1 + vael3)
        }

        const resultado1 = pesoIdealh(alturaUsuario, vael0, vael1, vael3)


        let mensajeResultado = document.getElementById("resultado")

        mensajeResultado.innerHTML = `Enhorabuena ${nombreUsuario} ! Tu peso ideal a conseguir seria de ${resultado1}. A continuacion te mostramos algun planes recomendados`

    }

    if (generoUsuario == "mujer") {

        function pesoIdealm(alturaUsuario, vael0, vael2, vael3) {

            return ((alturaUsuario - vael0) * vael2 + vael3)
        }

        const resultado2 = pesoIdealm(alturaUsuario, vael0, vael2, vael3)

        let mensajeResultado = document.getElementById("resultado")

        mensajeResultado.innerHTML = `Enhorabuena ${nombreUsuario} ! Tu peso ideal seria de ${resultado2} \n A continuacion te mostramos algun planes recomendados`

    }

    formulario.addEventListener('reset', () => {

        let mensajeResultado = document.getElementById("resultado")
        let planRecomendado = document.getElementById('plan1')
        onclick = sessionStorage.clear(); mensajeResultado.innerHTML = ""; planRecomendado.innerHTML = ""
    })
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