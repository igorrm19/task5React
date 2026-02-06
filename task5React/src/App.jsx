import { useState } from 'react'
import './App.css'
import Timer from './components/timer.component';

function App() {
  const [mostrar, setMostrar] = useState(true);

  function View() {
    setMostrar((prev) => !prev);
  }

  return (
    <>
      <div className="container">

        <Timer hidden={!mostrar} />

        <div className='container-button'>
          <button onClick={View}>
            {mostrar ? "Ocultar" : "Mostrar"}
          </button>
        </div>
      </div >
    </>
  )
}

export default App
