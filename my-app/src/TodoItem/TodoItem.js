import React from "react";
import '../index.css'
import './TodoItem.css'

function TodoItem(props){
  const [
    detail, 
    setDetail,
    togleCompletedTodo] = React.useState()
  const onDetail = ()=>{
    if(!detail){
    setDetail(true)
    }
    else{
    setDetail(false)
    }
  }
 return(
  <li className ={`todo-item ${detail && 'item-detail'}`}>
    <span 
      className ={`check ${detail && 'check-detail'} ${props.completed && 'completed'}`}
      onClick = {props.togleCompleted}
    ></span>
    <h3 className={`title ${detail && 'title-detail'} ${props.completed && 'completed'}`}>{props.text}</h3>
     <p className={`description ${detail && 'descrp-detail'}`}>{props.description}</p>
    <span 
    className ={`detail ${detail && 'detailon'}`}
    onClick = {onDetail}
    ></span>
    <span 
    className ={`delete ${detail && 'delete-detail'}`}
    onClick = {props.togleDelete}
    ></span>
  </li>
 )
}

export {TodoItem}