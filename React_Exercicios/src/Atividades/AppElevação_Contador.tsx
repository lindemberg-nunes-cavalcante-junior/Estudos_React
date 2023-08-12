import { useState } from "react";



const MeuBotao = (props: any) => {
    const [contador, setContador] = useState(0);
    const tratarclique = () => setContador(contador + 1)

    return(
        <button onClick={tratarclique} onMouseMove={props.contar}>{props.titulo} {contador} {props.contador}</button>
    )
}
export default MeuBotao;

/*
No App colocar:
import { useState } from 'react';
import './App.css'
import MeuBotao from './Atividades/AppElevação_Contador';


const App = () => {
  const [contador, setContador] = useState(0);
  const contaremAp = () => setContador(contador + 1)

  return (
    <>
      <h1>Atividades</h1>
      <MeuBotao titulo = {"Bom Dia"} contador = {contador} contar ={contaremAp}/>
      <MeuBotao titulo = {"Boa Tarde"} contador = {contador} contar ={contaremAp}/>
      <MeuBotao titulo = {"Boa Noite"} contador = {contador} contar ={contaremAp}/>
    </>
  )
}

export default App
*/