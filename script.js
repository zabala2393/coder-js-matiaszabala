
let saludo = document.getElementById("tituloPrincipal")

saludo.innerHTML = "<h1>Asistente dietario Gemini</h1>"

let formulario = document.getElementById("formularioUsuario");

formulario.innerHTML =

    ` <ul>
      <li>
          <label for="Ingrese su nombre y apellido">Nombre y apellido</label>
          <input type="text" id="nombre">
      </li>
      <li>
          <label for="Ingrese su fecha de nacimiento">Fecha de nacimiento</label>                
          <input type="date" id="fdn">
                </li>
                <li>
                    <label for="Ingrese su peso en kilogramos">Peso actual</label>
                    <input type="number" id="peso">
                </li>
                <li>
                    <label for="Ingrese su altura en centimetros">Altura</label>
                    <input type="number" id="altura">
                </li>
                <li>
                    <label for="Genero">Genero</label>
                    <select name="genero" id="genero">
                        <option value="hombre">Masculino</option>
                        <option value="mujer">Femenino</option>
                    </select>
                </li>
                <li>
                    <textarea name="Objetivo a alcanzar con la dieta" id="objetivo" placeholder="Objetivos del plan"></textarea>
                </li>
                <li><input type="submit"></li>
    </ul>`;

class Usuario {

    constructor(nombre, fdn, altura, peso, genero) {

        this.nombre = nombre;
        this.altura = altura;
        this.fdn = fdn;
        this.peso = peso;
        this.genero = genero;
    }
}

const datos = [nombre, altura, fdn, peso, genero]
function pesoIdeal1(altura, vael0, vael1, vael3) {

    return ((altura - vael0) * vael1 + vael3)
}

function pesoIdeal2(altura, vael0, vael2, vael3) {

    return ((altura - vael0) * vael2 + vael3)
}

sessionStorage.setItem(datos,[nombre, altura, fdn, peso, genero])
