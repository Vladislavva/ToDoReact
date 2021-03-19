import React from 'react';

const Toast= (toastType, toastMassage) => {
    return(
        <div className={`toast toast-${toastType}`}>
            <h2 className='toast__header'>{toastMassage}</h2>
        </div>
    )

    
};

export default Toast;