import React, { useState, useEffect, useCallback } from "react";
import TodosHeader from "../../components/TodosHeader/TodosHeader";
import TodoList from "../TodoList/TodoList";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { useSelector } from "react-redux";
import { useFirestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";
import EmptyPage from "../EmtyPage/EmptyPage";
// const todos = [
//   {
//     task: "HTML I",
//     done: true,
//     date: "Fri Feb 26 2021 16:47:56 GMT+0300 (Москва, стандартное время)",
//     type: "work",
//   },
//   {
//     task: "HorseRiding",
//     done: false,
//     date: "1992-12-17T03:24:00",
//     type: "sport",
//   },
//   {
//     task: "CSS",
//     done: true,
//     date: "Feb 27 2021 16:47:56 GMT+0300 (Москва, стандартное время)",
//     type: "work",
//   },
//   { task: "CSS", done: true, date: "1995-12-17T03:24:00" },
//   {
//     task: "Responsive design",
//     done: true,
//     date: "Feb 25 2025 16:47:56 GMT+0300 (Москва, стандартное время)",
//   },
//   {
//     task: "Angular",
//     done: true,
//     date: "Feb 25 2023 16:47:56 GMT+0300 (Москва, стандартное время)",
//     type: "skillUp",
//   },
//   {
//     task: "JavaScript I",
//     done: true,
//     date: "Feb 25 2021 16:47:56 GMT+0300 (Москва, стандартное время)",
//     type: "work",
//   },
//   {
//     task: "JavaScript II",
//     done: false,
//     date: "1995-12-17T03:24:00",
//     type: "work",
//   },
//   {
//     task: "reading book",
//     done: false,
//     date: "Sun Feb 21 2021 00:00:00 GMT+0300 (Москва, стандартное время)",
//     type: "hobby",
//   },
// ];

const loader = () => {
  return (
    <Loader
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000} //3 secs
    />
  );
};

const sortTodayTasks = (tasks) => {
  const today = new Date();
  return tasks.filter(
    (task) =>
      new Date(task.date) > today.setHours(0, 0, 0, 0) &&
      new Date(task.date) < today.setHours(23, 59, 59, 999)
  );
};

const sortNewTasks = (tasks) => {
  const today = new Date();
  return tasks.filter(
    (task) => new Date(task.date) > today.setDate(today.getDate() - 5)
  );
};

const sortUpcomingTask = (tasks) => {
  const today = new Date();
  return tasks.filter(
    (task) => new Date(task.date) > today.setHours(23, 59, 59, 999)
  );
};

const sortFunc = (type, tasks) => {
  if (type === "name") {
    return tasks.sort((a, b) => a.task.localeCompare(b.task));
  } else if (type === "date") {
    return tasks.sort((a, b) => new Date(a.date) - new Date(b.date));
  } else if (
    type === "sport" ||
    type === "work" ||
    type === "hobby" ||
    type === "skillUp"
  ) {
    return tasks.filter((task) => task.type === type);
  } else if (type === "all") {
    return alert(4);
  }
};

const Todos = () => {
  // const { displayName, uid } = useSelector((state) => state.firebase.auth);
  useFirestoreConnect({
    collection: `users/1/todos`,
    storeAs: "todos",
  });
  const testtodos = useSelector((state) => state.firestore.data.todos);

  const inputValue = useCallback((e) => {
    if (e.target.value !== "all") {
      const newTasks = sortFunc(e.target.value, Object.values(testtodos));
      setSortedTask([...newTasks]);
    }
  });

  const [sortedTask, setSortedTask] = useState();

  return (
    <div className="todos">
      <TodosHeader inputValue={inputValue} />
      {!isLoaded(testtodos) && (
        <div className="todos__loader">
          {" "}
          <Loader
            type="ThreeDots"
            color="#b3ee58"
            height={100}
            width={100}
            timeout={3000}
          />
        </div>
      )}
      {isLoaded(testtodos) && !isEmpty(testtodos) && !sortedTask && (
        <>
          <TodoList
            todoListName="New Tasks"
            todoList={sortTodayTasks(Object.values(testtodos))}
          />
          <TodoList
            todoListName="Today"
            todoList={sortNewTasks(Object.values(testtodos))}
          />
          <TodoList
            todoListName="Upcoming"
            todoList={sortUpcomingTask(Object.values(testtodos))}
          />
        </>
      )}
      {isLoaded(testtodos) && !isEmpty(testtodos) && sortedTask && (
        <TodoList todoList={sortedTask} />
      )}
      {isEmpty(testtodos) && isLoaded(testtodos) && <EmptyPage btnColor="orange" headerText="You don`t have task" btnName="add Task" linkTo="add-task"/>}
    </div>
  );
};

export default Todos;
