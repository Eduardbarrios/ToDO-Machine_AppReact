import React from "react";
import { useLocalStorage } from "../hooks/LocalStorage";

const Contex = React.createContext();
function TodoProvider(props){

 
   const {
    item: todos,
    saveItem: saveTodos
          } = useLocalStorage('TODOS_V1', []);


    
   //TodoCounter
   const completedTodos = todos.filter(todo=>(todo.completed)).length
   const total = todos.length

   //TodoSearch
   const [searchValue, setSearchValue] = React.useState('')
   let searchedTodos = []
   if(!searchValue.length >= 1){
    searchedTodos = todos
   }
   else{
    searchedTodos = todos.filter(todo =>{
      const todoTitle = todo.title.toLocaleLowerCase();
      const value = searchValue.toLocaleLowerCase();
      return todoTitle.includes(value)
    })
   }
   //TodoItem
   const togleCompletedTodo = (todoTitle)=>{
    const todoIndex = todos.findIndex((todo)=>todo.title === todoTitle);
    const newTodos = [...todos];
    if(!newTodos[todoIndex].completed){
      newTodos[todoIndex].completed = true;
    }
    else{
      newTodos[todoIndex].completed = false}
    saveTodos(newTodos)
   }
   //delete Todos 
   const [deleteModalOn, setDeleteModalOn] = React.useState(false)

   const togledeleteTodo = (todoTitle)=>{
    const todoIndex = todos.findIndex((todo)=>todo.title === todoTitle);
    const newTodos = [...todos];
    newTodos[todoIndex].delete = true;
    saveTodos(newTodos)
    setDeleteModalOn(true)
    const modal = document.getElementById('confirm-modal');
    if(!deleteModalOn){
      modal.className ='confirm-modal inactive';
    } 
    else{
      modal.className = 'confirm-modal';
    }
   }

   const DeleteConfirmed = ()=>{
    const todoIndex = todos.findIndex((todo)=>todo.delete === true);
    const newTodos = [...todos];
    newTodos.splice(todoIndex,1)
    saveTodos(newTodos)
    setDeleteModalOn(false)
    const modal = document.getElementById('confirm-modal');
    if(!deleteModalOn){
      modal.className ='confirm-modal inactive';
    } 
    else{
      modal.className = 'confirm-modal';
    }
    
   }
   const DeleteCanceled = ()=>{
    const todoIndex = todos.findIndex((todo)=>todo.delete === true);
    const newTodos = [...todos];
    newTodos[todoIndex].delete = false;
    saveTodos(newTodos)
    setDeleteModalOn(false)
    const modal = document.getElementById('confirm-modal');
    if(!deleteModalOn){
      modal.className ='confirm-modal inactive';
    } 
    else{
      modal.className = 'confirm-modal';
    }
   }

   //Create Todos
   const [createModalOn, setCreateModalOn] = React.useState(false)
   const addTogle = ()=>{
    setCreateModalOn(prevState => !prevState)
    const modal = document.getElementById('create-modal');
    if(!createModalOn){
      modal.className ='create-modal inactive';
    } 
    else{
      modal.className = 'create-modal';
    }
    setTitleValue('');
    setDescriptionValue('');
   }
   const [titleValue, setTitleValue] = React.useState('')
   const [descriptionValue, setDescriptionValue] = React.useState('')
   const onAdd = ()=>{
    const newTodos = [...todos];
    newTodos.push({
      title: titleValue,
      description: descriptionValue,
      completed: false,
      delete: false
    });
    saveTodos(newTodos);
    setTitleValue('');
    setDescriptionValue('');
    addTogle()
   }



 return(
  <Contex.Provider value = {{
   todos,
   completedTodos,
   total,
   setSearchValue,
   searchValue,
   searchedTodos,
   togleCompletedTodo,
   togledeleteTodo,
   deleteModalOn,
   DeleteConfirmed,
   DeleteCanceled,
   createModalOn,
   addTogle,
   titleValue,
   setTitleValue,
   descriptionValue,
   setDescriptionValue,
   onAdd
  }}>
    {props.children}
  </Contex.Provider>
  )
 
}

export {Contex, TodoProvider}