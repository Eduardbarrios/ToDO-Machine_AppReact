import React from "react";
import TodoLogos from '../TodoLogos/TodoLogos'
import TodoCounter from '../TodoCounter/TodoCounter'
import TodoSearch from '../TodoSearch/TodoSearch'
import TodoList from '../TodoList/TodoList'
import TodoItem from '../TodoItem/TodoItem'
import TodoCreateButton from '../TodoCreateButton/TodoCreateButton'


function AppUI(){
 return(
  <React.Fragment>
   <TodoLogos/>
   <TodoCounter/>
   <TodoSearch/>
   <TodoList>
    <TodoItem/>
   </TodoList>
   <TodoCreateButton/>
  </React.Fragment>
 )
}

export {AppUI}