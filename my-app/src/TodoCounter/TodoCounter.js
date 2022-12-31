import React from "react";
import { Contex } from "../contex/contex";
import './TodoCounter.css'

function TodoCounter(){
 const {completedTodos, total}= React.useContext(Contex);
 return(
  <h2 className="todo-counter">Has completado {completedTodos} de {total} ToDos</h2>
 )
}

export {TodoCounter}