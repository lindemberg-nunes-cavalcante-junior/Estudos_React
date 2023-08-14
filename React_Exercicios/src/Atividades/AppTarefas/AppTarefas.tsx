import { useState } from "react";

const AppTarefaEditar = () => {
    const [tarefa, setTarefa] = useState("");
    return(
        <div className="card">
            <label>Tarefa: </label>
            <input type="text" value={tarefa} onChange={(e: React.FormEvent<HTMLInputElement>) => setTarefa(e.target.value)}/>
            <button>adicionar</button>
        </div>
    )
}

export default AppTarefaEditar;
