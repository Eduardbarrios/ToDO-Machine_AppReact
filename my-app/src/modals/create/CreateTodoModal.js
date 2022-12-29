import React from 'react';
import ReactDOM from 'react-dom';
import { Contex } from '../../contex/contex';


const {createModalOn}= React.createContext(Contex);


function CreateModal({children}){
  return ReactDOM.createPortal(
   children,
   document.getElementById('create-modal')
  );
}

export {CreateModal}