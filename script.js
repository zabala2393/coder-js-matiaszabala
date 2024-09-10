

const saludo = confirm('¡Bienvenido al asistente dietario Gemini! \n Desea realizar una consulta?')

let loop = saludo

while (loop === true) {
    
const nombre = prompt('Ingrese su nombre completo para continuar')

const altura = parseInt(prompt('Ingrese su altura en centimetros'))

const edad = parseInt (prompt('Que edad tiene actualmente?'))

const peso = parseInt (prompt("Ingrese su peso en kilogramos, usando punto para los decimales"))

const genero = prompt('Con cual genero te sientes mas identificado/a? \n 1 - Masculino \n  2- Femenino')         
      
console.log (nombre)
console.log (altura)
console.log (edad)
console.log (peso)
console.log (genero)

const datosUsuario = (altura, edad, peso, genero)

const vael0 = 150
const vael1 = 0.75
const vael2 = 0.6
const vael3 = 50

function pesoIdeal1 (altura,vael0, vael1, vael3) {      
    
   return ((altura - vael0) * vael1 + vael3)
 }

function pesoIdeal2 (altura, vael0, vael2, vael3) { 
    
    return ((altura - vael0) * vael2 + vael3)
  }

const resultado1 = pesoIdeal1(altura,vael0, vael1, vael3)
console.log (resultado1)

const resultado2 = pesoIdeal2(altura, vael0, vael2, vael3)
console.log (resultado2)

if (genero == 1) {

    saludoCierre1 = alert ("Excelente ${}, tu peso ideal seria de ${resultado1} kg. \n Estas a unos pasos de alcanzarlo!!")
}

if (genero == 2) {

    saludoCierre2 = alert ("Excelente ${nombre}, tu peso ideal seria ${resultado2} kg. \n Estas a unos pasos de alcanzarlo!!")

}

let reinicio = confirm('El asistente ha terminado! ¿Desea realizar una nueva consulta?')

if (reinicio === true) {continue}

else if (reinicio === false) {loop = false}
 
}




















    
    



    


















