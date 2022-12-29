import React from "react";
import { Contex } from "../contex/contex";
import './ConfirmDeleteForm.css'
function ConfirmDeleteForm(){
 const {DeleteConfirmed, DeleteCanceled} = React.useContext(Contex)
 return(
  <section className="confirm-section">
   <span className="alert"></span>
   <p className="pDelete">¿Desea eliminar este ToDo?</p>
   <button 
   className="cancel"
   onClick={DeleteCanceled}
   >cancelar</button>
   <button 
   className="confirm"
   onClick={DeleteConfirmed}
   >confrimar</button>
  </section>
 )
}
export{ConfirmDeleteForm}