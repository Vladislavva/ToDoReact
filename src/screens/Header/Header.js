import React from 'react';
import noPhotoUser from '../../../src/shared/img/user.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import SignInForm from "../SignInForm/SignInForm";
import SignUpForm from "../SignUpForm/SignUpForm";


const Header = () => {
    let name = "Vlad ";
    return (
        <div className="header">
            <div className="header__userBlock">
                <img className="header__userBlock-img" src={noPhotoUser} alt="noPhotoUser"></img>
                <h2 className="header__userBlock-name"> {name} ToDoList</h2>
            </div>
            <div className="header__navBlock">
                <nav className="header__navBlock-nav">
                    <ul className="header__navBlock-ul">
                        <li className="header__navBlock-li">
                            <Link className="header__navBlock-link btn btn-purple" to="/sign-in">Sign in</Link>
                        </li>
                        <li className="header__navBlock-li">
                            <Link className="header__navBlock-link btn btn-orange" to="/sign-up">Sign up</Link>
                        </li>
                        <li className="header__navBlock-li">
                            <Link className="header__navBlock-link btn btn-yellowGreen" to="/to-do">ToDoList</Link>
                        </li>
                    </ul>
                </nav>
            </div>

        </div>


    );
}





    ;

export default Header;