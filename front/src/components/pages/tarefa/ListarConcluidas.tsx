import { useEffect, useState } from "react";
import Tarefa from "../../../models/Tarefa";
import axios from "axios";

function ListarConcluidas() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  useEffect(() => {
    buscarConcluidas();
  }, []);

  async function buscarConcluidas() {
    try {
      const resposta = await axios.get("http://localhost:5000/api/tarefas/concluidas");
      setTarefas(resposta.data);
    } catch (error) {
      console.log("Erro na requisição: " + error);
      setTarefas([]);
    }
  }

  return (
    <div>
      <h1>Listar Tarefas Concluídas</h1>
      <table border={1} cellPadding={6} cellSpacing={0} style={{ width: "100%" }}>
        <thead>
            <tr>
            <th>#</th>
            <th>Título</th>
            <th>Status</th>
            </tr>
        </thead>

        <tbody>
            {tarefas.map((tarefa) => (
            <tr key={tarefa.tarefaId}>
                <td>{tarefa.tarefaId}</td>
                <td>{tarefa.titulo}</td>
                <td>{tarefa.status}</td>
            </tr>
            ))}
        </tbody>
        </table>
    </div>
  );
}

export default ListarConcluidas;