import React from "react";
import './TodoLogos.css'
import logo_text from '../assets/Todo-logo-text.svg'
import Todo_logo from '../assets/ToDo-logo.svg'
import Todo_check from '../assets/ToDo-check.svg'
import people from '../assets/people.svg'


function TodoLogos(){
 return(
  <React.Fragment>
   <section className="big-logo">
     <img className="logo-text" src={logo_text}/>
     <img className="people-img" src={people}/>
   </section>
   <section className="short-logo-section">
    <picture className="short-logo" >
     <source srcSet={Todo_check} media="(min-width: 700px)"  alt = "logo toDo"/>
     <img className="logo-todo" src={Todo_logo} alt="logo todo" />
    </picture> 
   </section>
  </React.Fragment>
 )
}

export {TodoLogos}