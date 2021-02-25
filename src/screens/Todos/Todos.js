import React, { useState } from "react";
import TodosHeader from "../../components/TodosHeader/TodosHeader";
import TodoList from "../TodoList/TodoList";

const todos = [
  {
    task: "HTML I",
    done: true,
    date: "Fri Feb 25 2021 16:47:56 GMT+0300 (Москва, стандартное время)",
    type: "work",
  },
  {
    task: "HorseRiding",
    done: false,
    date: "1992-12-17T03:24:00",
    type: "sport",
  },
  { task: "CSS", done: true, date: "1997-12-17T03:24:00", type: "work" },
  { task: "CSS", done: true, date: "1995-12-17T03:24:00" },
  { task: "Responsive design", done: true, date: "1995-12-17T03:24:00" },
  { task: "Angular", done: true, date: "2020-12-17T03:24:00", type: "skillup" },
  {
    task: "JavaScript I",
    done: true,
    date: "1995-12-17T03:24:00",
    type: "work",
  },
  {
    task: "JavaScript II",
    done: false,
    date: "1995-12-17T03:24:00",
    type: "work",
  },
  {
    task: "reading book",
    done: false,
    date: "1995-12-17T03:24:00",
    type: "hobby",
  },
];

const sortTodayTasks = (tasks) => {
  const today = new Date();
  return tasks.filter((task) => new Date(task.date) > today.setHours(0, 0, 0, 0) && new Date(task.date) < today.setHours(23, 59, 59, 999));
};

const Todos = () => {
  const [todayTasks, setTodayTasks] = useState(sortTodayTasks(todos));


  return (
    <div className="todos">
      <TodosHeader />
      <TodoList todoListName="New Tasks" todoList={todos} />
      <TodoList todoListName="Today" todoList={todayTasks} />
      <TodoList todoListName="Upcoming" todoList={todos} />
    </div>
  );
};

export default Todos;
