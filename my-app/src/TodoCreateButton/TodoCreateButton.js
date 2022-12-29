import React from "react";
import { Contex } from "../contex/contex";
import './TodoCreateButton.css'
function TodoCreateButton(){
 const {addTogle}= React.useContext(Contex)
 return(
  <button
  className="add-button"
  onClick={addTogle}
  >+</button>
 )
}

export {TodoCreateButton}