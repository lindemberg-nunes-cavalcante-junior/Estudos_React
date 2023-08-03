import { useState } from 'react';
import './App.css'

const Test = () => {

  return (
    <h1>Tarefa teste</h1>
  )
  }
const Lista = () => {
  const [tarefas, setTarefas] = useState([
    "Tarefa 1", "Tarefa 2", "Tarefa 3",
  ]);

  return (

    <div>
      {tarefas.map((item, index) => <li key={index}>{item}</li>)
       }
        </div>

  )
}

const App = () => {
 

  return (
    <>
      <Test />
      <Lista />
    </>
  )
}

export default App
