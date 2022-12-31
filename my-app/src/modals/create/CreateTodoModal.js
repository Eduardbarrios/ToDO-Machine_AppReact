import ReactDOM from 'react-dom';


function CreateModal({children}){
  return ReactDOM.createPortal(
   children,
   document.getElementById('create-modal')
  );
}

export {CreateModal}