import React from 'react';
import { TodoProvider } from '../contex/contex';
import { AppUI } from './AppUI';
import './App.css';

function App() {
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
