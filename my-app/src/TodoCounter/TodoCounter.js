import React from "react";
import { Contex } from "../contex/contex";

function TodoCounter(){
 const {completedTodos, total}= React.useContext(Contex);
 return(
  <h2>has completado {completedTodos} de {total} ToDos</h2>
 )
}

export {TodoCounter}