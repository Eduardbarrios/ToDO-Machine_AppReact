import React from "react";
import { Contex } from "../contex/contex";
import './TodoSearch.css'

function TodoSearch(){
const {setSearchValue, searchValue} = React.useContext(Contex)
const  onsearchTodos = (event)=>{
 setSearchValue(event.target.value)
} 
 
 return(
  <input
  value={searchValue}
  onChange={onsearchTodos}
  placeholder="Buscar ToDo"
  className="search-input"
  />
 )
}

export {TodoSearch}