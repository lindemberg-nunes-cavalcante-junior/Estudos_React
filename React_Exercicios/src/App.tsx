import { useState } from 'react';
import './App.css'
import AppTarefaEditar from './Atividades/AppTarefas/AppTarefas';
import AppTarefaLista from './Atividades/AppTarefas/AppTarefasLista';

const App = () => {
  

  return (
    <>
      <h1>Atividades</h1>
      <AppTarefaEditar/>
      <AppTarefaLista/>
    </>
  )
}

export default App
