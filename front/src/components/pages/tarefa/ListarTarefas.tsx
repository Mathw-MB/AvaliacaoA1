import { useEffect, useState } from "react";
import Tarefa from "../../../models/Tarefa";
import axios from "axios";

function ListarTarefas() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  useEffect(() => {
    console.log("Componente ListarTarefas carregado");
    buscarTarefasAPI();
  }, []);

  async function buscarTarefasAPI() {
    try {
      const resposta = await axios.get("http://localhost:5000/api/tarefas/listar");
      setTarefas(resposta.data);
    } catch (error) {
      console.log("Erro na requisição: " + error);
      setTarefas([]);
    }
  }

  async function alterarStatus(id: string) {
    if (!id) return;
    try {
      await axios.put(`http://localhost:5000/api/tarefas/alterar/${id}`);
      buscarTarefasAPI();
    } catch (error) {
      console.log("Erro ao alterar status: " + error);
    }
  }

  return (
    <div id="listar_tarefas">
      <h1>Listar Tarefas</h1>
      <table border={1} cellPadding={6} cellSpacing={0} style={{ width: "100%" }}>
        <thead>
            <tr>
            <th>#</th>
            <th>Título</th>
            <th>Status</th>
            <th>Criado Em</th>
            <th>Alterar Status</th>
            </tr>
        </thead>

        <tbody>
            {tarefas.map((tarefa) => (
            <tr key={tarefa.id}>
                <td>{tarefa.id}</td>
                <td>{tarefa.titulo}</td>
                <td>{tarefa.status}</td>
                <td>{tarefa.criadoEm}</td>
                <td>
                <button onClick={() => alterarStatus(tarefa.id!)}>Alterar</button>
                </td>
            </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListarTarefas;