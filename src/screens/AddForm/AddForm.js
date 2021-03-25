import React from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import taskLogo from "../../shared/img/taskLogo.png";
import RadioBlock from "../../components/RadioBlock/RadioBlock";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useFirestore } from "react-redux-firebase";
import { useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import calendarImg from "../../shared/img/calendar.png";
import Toast from "../../components/Toast/Toast";
import { useFirestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";
const radioBtn = [
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
    }
];









const AddForm = () => {
  const { register, getValues, reset } = useForm();
  const today = new Date();
  const firestore = useFirestore();
  const { uid } = useSelector((state) => state.firebase.auth);
  const [presentToDo, setPresentToDo] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const addNewTodo = (todo) => {
    firestore    
      .collection("users/1/todos")
      .add(todo)
      .then(()=>reset());
      
  };
  



  return (
    <div className="addForm">
      <div className="addForm__header">
        <img className="addForm__taskLogo" src={taskLogo} alt="task logo" />
        <h2 className="addForm__head">Add New Task</h2>
        <p className="addForm__date">
          Now:{moment(today).format("MMMM Do h:mm a ")}
        </p>
      </div>
      <form className="addForm__form">
        <div className="form__input">
          <label className="form__input-label" htmlFor="radio-1">
            Task Name
          </label>
          <input  type="text" ref={register} name="task"/>
        </div>
        <RadioBlock register={register} radioBtn={radioBtn} />
        <div className="form__datePickerBlock">
          <img src={calendarImg} className="datePickerImg"/>
        <DatePicker className="datePiker" selected={startDate} onChange={date => setStartDate(date)} name='datepicker'/>
      
        </div>
        <button
          className="btn btn-turquoise"
          type="button"
          value="add task"
          onClick={() => {
            const values = getValues(); 
            const data = new Date()
            const task = {
              ...values,
              date: startDate.toISOString(),
              done: false
            }
            
            console.log(task)
          addNewTodo(task)
          }}
        >ADDD</button>
      </form>
      {/* {isLoaded(task) && !isEmpty(testtodos) && sortedTask && (
      ReactDOM.createPortal(<Toast toastType={'error'} toastMassage={'uuuuue'}/> , document.getElementsByClassName('header');)
      )}
       */}

    </div>
  );
  
};



export default AddForm;
