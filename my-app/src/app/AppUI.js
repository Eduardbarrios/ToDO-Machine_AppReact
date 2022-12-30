import React from "react";
import {TodoLogos} from '../TodoLogos/TodoLogos'
import {TodoCounter} from '../TodoCounter/TodoCounter'
import {TodoSearch} from '../TodoSearch/TodoSearch'
import {TodoList} from '../TodoList/TodoList'
import {TodoItem} from '../TodoItem/TodoItem'
import {TodoCreateButton} from '../TodoCreateButton/TodoCreateButton'
import { Contex } from "../contex/contex";
import { ConfirmModal } from "../modals/confirm/confirmDelete";
import { ConfirmDeleteForm } from "../DeleteForm/ConfirmDeleteForm";
import { CreateModal } from "../modals/create/CreateTodoModal";
import {CreateTodoForm} from '../CreateTodoForm/CreateTodoForm';

function AppUI(){
 const {searchValue,
        searchedTodos, 
        togleCompletedTodo,
        deleteModalOn,
        togledeleteTodo,
        createModalOn
       } = React.useContext(Contex)
       let render

       if(searchValue.length > 0 && searchedTodos.length === 0){
        render = <p className="aviso-text">no hay coincidencias</p>
       }
       else if(searchValue.length === 0 && searchedTodos.length === 0){
       render =  <p className="aviso-text">Agrega tu primer ToDo</p>
       }
       else{
      render = searchedTodos.map(todo =>(
      <TodoItem
        key = {todo.title}
        text = {todo.title}
        description = {todo.description}
        completed = {todo.completed}
        delete = {todo.delete}
        togleCompleted = {()=> togleCompletedTodo(todo.title)}
        togleDelete = {()=> togledeleteTodo(todo.title)}
      />
       )
       )
      }
 return(
  <React.Fragment>
   <TodoLogos/>
   <TodoCounter/>
   <TodoSearch/>
   <TodoList>
    {render}
   </TodoList>
   {deleteModalOn &&(
    <ConfirmModal>
    <ConfirmDeleteForm/>
   </ConfirmModal>)}

   <TodoCreateButton/>
   {!!createModalOn &&(
   <CreateModal>
    <CreateTodoForm/>
   </CreateModal>)}
  </React.Fragment>
 )
}

export {AppUI}