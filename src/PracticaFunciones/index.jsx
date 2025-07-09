// Funciones declarativas
// function Tareas() {
//   return (
//     <>
//     </>
//   )
// }

// Función de flecha o arrow function
// const Tareas = () => {
//   return (
//     <></>
//   )
// };

// Funciones expresadas o anónimas
import { useState } from "react"; // Importamos el hook useState
import "./styles.css";

const PracticaFunciones = function () {
  // Estado para los ejemplos interactivos
  const [nombre, setNombre] = useState("");
  const [mensajeSaludo, setMensajeSaludo] = useState("");
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [resultado, setResultado] = useState(null); // Inicializamos el estado como null porque estamos en javascript en typescript

  // EJEMPLO 1: FUNCIÓN BÁSICA SIN PARÁMETROS

  // Esta es una función simple que no recibe parámetros y no retorna tampoco nada
  function mostrarFechaActual() {
    const fecha = new Date().toLocaleDateString();
    alert(`Hoy es: ${fecha}`);
  }

  // EJEMPLO 2: FUNCIÓN CON PARÁMETROS
  function saludarPersona(nombrePersona) {
    const saludo = `Hola, ${nombrePersona}! Bienvenido al mundo de las funciones`;
    setMensajeSaludo(saludo);
  }

  function procesarSaludo() {
    if (nombre.trim() === "") {
      alert("Por favor, escriba su nombre");
      return;
    }

    saludarPersona(nombre);
  }

  // EJEMPLO 3: FUNCIÓN QUE RETORNA UN VALOR

  function sumar(a, b) {
    const suma = a + b; // Procesamos la suma y la guardamos en la variable suma
    return suma;  // Retornamos el valor de la variable suma
  }

  function multiplicar(a, b) {
    return a * b;  // Retorna el valor de forma directa
  }

  const dividir = (a, b) => { // Función de flecha que retorna el valor de forma directa
    if (b === 0) {
      return "No se puede dividir por cero";
    }

    return a / b;
  };

  const elevarAlCuadrado = (numero) => numero * numero;

  const manejarCalculadora = () => {
    const num1 = parseFloat(numero1) || 0; // NaN -> Not a Number
    const num2 = parseFloat(numero2) || 0;

    const resultadoSuma = sumar(num1, num2);
    const multiplicacion = multiplicar(num1, num2);
    const division = dividir(num1, num2);
    const cuadrado1 = elevarAlCuadrado(num1);

    setResultado({
      suma: resultadoSuma,
      multiplicacion,
      division,
      cuadrado1,
    });
  };

  return (
    <div className="practica-funciones">
      <h2>🎯 Práctica de Funciones en JavaScript</h2>
      <p className="descripcion">
        Las funciones son bloques de código que realizan tareas específicas.
        ¡Vamos a practicar con ejemplos interactivos!
      </p>

      {/* EJEMPLO 1: FUNCIÓN BÁSICA*/}
      <div className="ejemplo-seccion">
        <h3>1. Función Básica (sin parámetros)</h3>
        <div className="codigo-ejemplo">
          <pre>
            {`
            function mostrarFechaActual() {
              const fecha = new Date().toLocaleDateString()
              alert(\`Hoy es: \${fecha}\`)
            }`}
          </pre>
        </div>
        <p className="explicacion">
          Esta función no recibe nada (sin parámetros) y ejecuta una acción.
        </p>
        <button onClick={mostrarFechaActual} className="btn-ejemplo">
          Ejecutar función
        </button>
      </div>

      {/* EJEMPLO 2: FUNCIÓN CON PARÁMETROS */}
      <div className="ejemplo-seccion">
        <h3>2. Función con Parámetros</h3>
        <div className="codigo-ejemplo">
          <pre>{`function saludarPersona(nombrePersona) {
    const saludo = \`Hola, \${nombrePersona}! Bienvenido al mundo de las funciones\`;
    setMensajeSaludo(saludo);
  }`}</pre>
        </div>
        <p className="explicacion">
          Esta función RECIBE un parámetro (tu nombre) y hace algo con él.
        </p>
        <div className="ejemplo-interactivo">
          <input
            className="input-ejemplo"
            type="text"
            placeholder="Escribe tu nombre"
            value={nombre}
            onChange={(evento) => {
              setNombre(evento.target.value);
            }}
          />
          <button onClick={procesarSaludo} className="btn-ejemplo">
            Saludar
          </button>
          {mensajeSaludo && (
            <div className="resultado-ejemplo">{mensajeSaludo}</div>
          )}
        </div>
      </div>

      {/* EJEMPLO 3: FUNCIÓN QUE RETORNA UN VALOR */}
      <div className="ejemplo-seccion">
        <h3>3. Funciones que Retornan Valores</h3>
        <div className="codigo-ejemplo">
          <pre>{`function sumar(a, b) {
    const suma = a + b;
    return suma;
  }`}</pre>
        </div>
        <p className="explicacion">
          Estas funciones RECIBEN parámetros y DEVUELVEN un resultado que
          podemos usar.
        </p>

        <div className="ejemplo-interactivo">
          <div className="calculadora">
            <input
              className="input-ejemplo"
              type="number"
              placeholder="Número 1"
              value={numero1}
              onChange={(e) => {
                setNumero1(e.target.value);
              }}
            />

            <input
              className="input-ejemplo"
              type="number"
              placeholder="Número 2"
              value={numero2}
              onChange={(e) => {
                setNumero2(e.target.value);
              }}
            />

            <button onClick={manejarCalculadora} className="btn-ejemplo">
              Calcular Todo
            </button>
          </div>

          {resultado && (
            <div className="resultado-ejemplo">
              <h4>Resultados de las funciones:</h4>
              <p>Suma: {resultado.suma}</p>
              <p>Multiplicación: {resultado.multiplicacion}</p>
              <p>División: {resultado.division}</p>
              <p>
                Cuadrado de {numero1}: {resultado.cuadrado1}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PracticaFunciones;
