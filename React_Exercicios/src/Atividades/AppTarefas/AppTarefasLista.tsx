const AppTarefaLista = () => {
    const tarefas = ["atividade 1", "atividade 2", "atividade 3"]
    return(
        <div className="card">
            <ul>
                {tarefas.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    )
}

export default AppTarefaLista