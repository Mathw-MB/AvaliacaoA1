import React from "react";
import ListarTarefas from "./components/pages/tarefa/ListarTarefas";
import CadastrarTarefa from "./components/pages/tarefa/CadastrarTarefa";
import ListarConcluidas from "./components/pages/tarefa/ListarConcluidas";
import ListarNaoConcluidas from "./components/pages/tarefa/ListarNaoConcluidas";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  return (
    <div id="app">
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/">Listar Tarefas</Link></li>
            <li><Link to="/tarefas/concluidas">Listar Tarefas Concluídas</Link></li>
            <li><Link to="/tarefas/naoconcluidas">Listar Tarefas Não Concluídas</Link></li>
            <li><Link to="/tarefas/cadastrar">Cadastrar Tarefa</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<ListarTarefas />} />
          <Route path="/tarefas/cadastrar" element={<CadastrarTarefa />} />
          <Route path="/tarefas/concluidas" element={<ListarConcluidas />} />
          <Route path="/tarefas/naoconcluidas" element={<ListarNaoConcluidas />} />
        </Routes>

        <footer>
          Desenvolvido por Matheus
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;