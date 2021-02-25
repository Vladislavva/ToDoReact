import React from "react";
import moment from "moment";
import taskLogo from "../../shared/img/taskLogo.png";
import RadioBlock from "../../components/RadioBlock/RadioBlock";

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
  const today = new Date();

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
          <input type="text" />
        </div>
        <RadioBlock radioBtn={radioBtn} />
        {/* <div className="addForm__radio-btn">
                    <input id="radio-1" type="radio" name="radio" value="1" />
                    <label htmlFor="radio-1" >Work</label>
                </div>

                <div className="addForm__radio-btn">
                    <input id="radio-2" type="radio" name="radio" value="2" />
                    <label htmlFor="radio-2">Sport</label>
                </div>

                <div className="addForm__radio-btn">
                    <input id="radio-3" type="radio" name="radio" value="3" />
                    <label htmlFor="radio-3">SkillUp</label>
                </div>
                <div className="addForm__radio-btn">
                    <input id="radio-4" type="radio" name="radio" value="4" />
                    <label htmlFor="radio-4">Hobby</label>
                </div> */}
        <input
          className="btn btn-turquoise"
          type="submit"
          value="add task"
        ></input>
      </form>
      {/* <div class="prod_checbox">  
    <div class="radio-toolbar"> 
        <input type="radio" id="radio1" name="radios" value="Стандатный" />
        <label for="radio1">Стандатный</label>
        
        <input type="radio" id="radio2" name="radios" value="Морозостойкий"/>
        <label for="radio2">Морозостойкий</label>
        
        <input type="radio" id="radio3" name="radios" value="Паростойкий"/>
        <label for="radio3">Паростойкий</label>
    </div> 
</div> */}
    </div>
  );
};

export default AddForm;
