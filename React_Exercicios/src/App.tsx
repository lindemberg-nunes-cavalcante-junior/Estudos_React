import { useState } from 'react';
import './App.css'
import axios from 'axios';


const Api = axios.create({
  baseURL: ""
})
const Test = () => {

  return (
    <h1>Tarefa teste</h1>
  )
  }

const Back_Cadastro = () => {
  return(
  <button>Cadastro</button>
  )
}
const Back_Login = () => {
  return(
    <button>Login</button>
  )
}
const Lista = (props: any) => {
 
  return (

    <div>
      {props.item.map((item: string, index: number) => <li key={index}>{item}</li>)
       }
        </div>

  )
}

const App = () => {
  const [tarefas, setTarefas] = useState([
    "Tarefa 1", "Tarefa 2", "Tarefa 3",
  ]);

  return (
    <>
      <Test />
      <Lista item={tarefas}/>
      <Back_Cadastro/>
      <Back_Login />
      
    </>
  )
}

export default App
