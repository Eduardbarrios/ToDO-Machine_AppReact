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
 const {searchedTodos, 
        togleCompletedTodo,
        deleteModalOn,
        togledeleteTodo,
        createModalOn
       } = React.useContext(Contex)
 return(
  <React.Fragment>
   <TodoLogos/>
   <TodoCounter/>
   <TodoSearch/>
   <TodoList>
    {
     searchedTodos.map(todo =>(
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