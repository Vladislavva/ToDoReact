import React from 'react';
import toDoLogo from '../../../src/shared/img/formLogo.png';
import FormUp from "../../components/FormUp/FormUp"

const SignUpForm = () => {
    return (
        <div className="signForm">
            <img className="signForm__img" src={toDoLogo}></img>
            <h2 className ="signForm__head">Create Your accaunt for ToDoList</h2>
            <FormUp/>
        </div>
    )
};

export default SignUpForm;