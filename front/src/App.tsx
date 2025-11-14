import React from "react";
import ListarTarefas from "./components/pages/tarefa/ListarTarefas";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  return (
    <div id="app">
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/">Listar Tarefas</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<ListarTarefas />} />
        </Routes>

        <footer>
          Desenvolvido por Matheus
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;