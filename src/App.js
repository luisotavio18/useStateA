import React from 'react';
import AltenadorDeTexto from './Components/AlternadorDeTexto'
import Contador from './Components/Contador';
import ListaDeTarefa from './Components/GerenciadorDeTarefas';
import './App.css';

const App = () => {
  return (
    <div>
      <h1>Componentes React</h1>
      <h2>Contador</h2>
      <Contador />
      <h2>Alternar Texto</h2>
      <AltenadorDeTexto />
      <h2>Lista de Tarefa</h2>
      <ListaDeTarefa />
    </div>
  );
};
 
export default App;
 