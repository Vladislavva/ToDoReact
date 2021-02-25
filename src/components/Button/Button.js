import React from 'react';

const Button = ({nameBtn, background}) => {
        

    return (
    <>
        <button className={`btn btn-${background}`}>{nameBtn}</button>
    </>
    )
};

export default Button;