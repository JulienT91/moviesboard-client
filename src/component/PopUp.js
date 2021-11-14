import React from 'react';

function Popup(props) {
    return  ( props.trigger )?(
        <div className="popUp">
           <div className="popup-inner">
               <div className="popup-close">
                <button className="close-btn">
                    close
                </button>
                {props.children}
               </div>
               <div className="popup-delete">
                   <button className="delete-btn">
                        delete
                   </button>
               </div>
               <div className="popup-modify">
                   <button className="delete-btn">
                        edit
                   </button>
               </div>
           </div> 
        </div>
    ) :  "";
}

export default Popup;
