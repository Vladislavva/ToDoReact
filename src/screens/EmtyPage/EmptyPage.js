import React from 'react';
import ooopsImg from "../../shared/img/oops.png"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const EmptyPage = ({btnColor, headerText, btnName, linkTo}) => {
return (
    <div className="empty">
    <img className="empty__img "src={ooopsImg}></img>
    <h2 className="empty__header">{headerText}</h2>
    <Link  className={`empty__link btn btn-${btnColor}`}  to={`/${linkTo}`}>{btnName}</Link>
    </div>
)
}

export default EmptyPage;