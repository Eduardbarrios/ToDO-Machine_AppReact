import React from "react";

const Contex = React.createContext();
function TodoProvider(props){

 return{
  <Contex.Provider value = {{

  }}>
  {props.children}
  </Contex.Provider>
 }
}

export {Contex, TodoProvider}