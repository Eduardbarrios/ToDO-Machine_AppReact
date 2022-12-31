import React from "react";
import { Contex } from "../contex/contex";
import './CreateTodoForm.css'
function CreateTodoForm(){
 const {addTogle,
        titleValue,
        setTitleValue,
        descriptionValue,
        setDescriptionValue,
        onAdd
       } = React.useContext(Contex)

 const onChangeTitleValue = (event)=> {
       setTitleValue(event.target.value)
 }
 const onChangeDescriptionValue = (event)=> {
  setDescriptionValue(event.target.value)
}
 return(
  <section className="create-section">
   <h3 className="create-title">Agregar nuevo ToDo</h3>
   <label htmlFor="title" className="title-text">Title:</label>
   <input 
   className="title-in" 
   id="title"
   value={titleValue}
   onChange={onChangeTitleValue}
   maxLength={30}
   />
   <label htmlFor="description" className="description-text">Description:</label>
   <input 
   id="description" 
   className="description-in"
   type="text"
   maxLength={100}
   value={descriptionValue}
   onChange={onChangeDescriptionValue}
   />
   <button 
   className="cancelC"
   onClick={addTogle}
   >cancelar</button>
   <button 
   className="confirmC"
   onClick={onAdd}
   >agregar</button>
  </section>
 )
}
export{CreateTodoForm}