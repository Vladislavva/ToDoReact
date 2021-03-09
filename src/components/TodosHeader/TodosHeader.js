import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import RadioBlock from "../RadioBlock/RadioBlock";
const radioBtn = [
  {
    radioNumber: 0,
    inputName: "all",
  },
    {
      radioNumber: 1,
      inputName: "work",
    },
    {
      radioNumber: 2,
      inputName: "hobby",
    },
    {
      radioNumber: 3,
      inputName: "skillUp",
    },
    {
        radioNumber: 4,
        inputName: "sport",
      },
      {
        radioNumber: 5,
        inputName: "date",
      },
      {
        radioNumber: 6,
        inputName: "name",
      }
  ];
const TodosHeader = ({inputValue}) => {
  return (
    <div className="todosHeader">
      <nav className="todosHeader__nav">
        <ul className="todosHeader__nav-ul">
          <li className="todosHeader__nav-li">
            <Link
              className="todosHeader__addTask btn  btn-purple"
              to="/add-task"
            >
              add Task
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <h2>SortBy</h2>
        <RadioBlock radioBtn={radioBtn} inputValue={inputValue}/>
      </div>
    </div>
  );
};

export default TodosHeader;
