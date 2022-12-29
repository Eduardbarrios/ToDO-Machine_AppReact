import React from 'react';
import ReactDOM from 'react-dom';

function ConfirmModal({children}){
  return ReactDOM.createPortal(
   children,
   document.getElementById('confirm-modal')
  );
}

export {ConfirmModal}