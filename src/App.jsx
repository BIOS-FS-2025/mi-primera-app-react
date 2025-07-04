import { useState } from "react";
import "./App.css";

function App() {
  const initialStateTareas = [
    { id: 1, texto: "Aprender sobre componentes en React" },
    { id: 2, texto: "Entender la diferencia entre HTML y JSX" },
  ];

  const [tareas, setTareas] = useState(initialStateTareas);

  const [textoInput, setTextoInput] = useState("");

  const [error, setError] = useState('');

  const handleSubmit = (evento) => {
    evento.preventDefault();

    if (textoInput.trim() === "") {
      setError("No puedes crear una tarea vacía");

      setTimeout(() => {
        setError('');
        setTextoInput('');
      }, 3000);

      return;
    }

    const nuevaTarea = {
      id: Date.now(),
      texto: textoInput
    }

    setTareas([nuevaTarea, ...tareas]);
    setTextoInput('');
  };

  return (
    <div className="App">
      {error ? <p>{error}</p> : null}
      {/* Aquí voy a colocar el titulo principal de la app */}
      <h1>Mi Lista de Tareas</h1>
      <p>Esta es la versión maquetada, sin funcionalidad</p>

      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="¿Qué necesitas hacer hoy?"
          value={textoInput}
          onChange={(evento) => {
            setTextoInput(evento.target.value)
          }}
        />
        <button type="submit">Agregar</button>
      </form>

      <ul>
        {tareas.length === 0 ? <p>No hay tareas aún</p> : null}
        {tareas.map((tarea) => {
          return <li key={tarea.id}>{tarea.texto}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
