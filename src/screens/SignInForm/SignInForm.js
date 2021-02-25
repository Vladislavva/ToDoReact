import React from 'react';
import toDoLogo from '../../../src/shared/img/formLogo.png';
import FormIn from "../../components/FormIn/FormIn"

const SignInForm = () => {
    return (
        <div className="signForm">
            <img className="signForm__img" src={toDoLogo}></img>
            <h2 className ="signForm__head">Sign in to Your ToDoList</h2>
            <FormIn/>
        </div>
    )
};

export default SignInForm;