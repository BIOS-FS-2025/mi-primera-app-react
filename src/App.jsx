import React from "react"
import './App.css'

function App() {
  return (
    <div className="App">

      {/* Aquí voy a colocar el titulo principal de la app */}
      <h1>Mi Lista de Tareas</h1>
      <p>Esta es la versión maquetada, sin funcionalidad</p>

      <form style={{ marginBottom: '20px' }}>
        <input type="text" placeholder="¿Qué necesitas hacer hoy?" />
        <button type="submit">Agregar</button>
      </form>

      <ul>
        <li>Aprender sobre componentes en React</li>
        <li>Entender la diferencia entre HTML y JSX</li>
        <li>Aplicar estilos con un archivo CSS</li>
        <li>Revisar la estructura del proyecto</li>
      </ul>

    </div>
  )
}

export default App
