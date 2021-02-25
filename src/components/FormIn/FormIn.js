import React from 'react';


const FormIn = () => {


    return (
        <form className="signForm__form">
        <label className="signForm__form-label">User name <br/>
        <input className = "signForm__form-input"/>
        </label> 
        <label className="signForm__form-label">Password<br/>
        <input className = "signForm__form-input"/>
        </label>
        <input className="btn btn-blue" type="submit" value="login" />
    </form>
      
    
    )
};

export default FormIn;