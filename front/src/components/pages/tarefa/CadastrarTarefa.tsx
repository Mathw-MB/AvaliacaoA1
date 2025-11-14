import { useState } from "react";
import axios from "axios";
import Tarefa from "../../../models/Tarefa";
import { useNavigate } from "react-router-dom";

function CadastrarTarefa() {
  const [titulo, setTitulo] = useState("");
  const navigate = useNavigate();

  function enviarTarefa(event: any) {
    event.preventDefault();
    submeterTarefaAPI();
  }

  async function submeterTarefaAPI() {
    try {
      const tarefa: Tarefa = {
        titulo,
      };
      const resposta = await axios.post("http://localhost:5000/api/tarefas/cadastrar", tarefa);
      console.log(await resposta.data);
      alert("Tarefa cadastrada com sucesso!");
      navigate("/"); // volta para listagem
    } catch (error: any) {
      console.log("Erro ao cadastrar tarefa: " + error);
    }
  }

  return (
    <div>
      <h1>Cadastrar Tarefa</h1>
      <form onSubmit={enviarTarefa}>
        <div>
          <label>Título:</label>
          <input onChange={(e: any) => setTitulo(e.target.value)} type="text" />
        </div>
        <div>
          <button type="submit">Cadastrar</button>
        </div>
      </form>
    </div>
  );
}

export default CadastrarTarefa;