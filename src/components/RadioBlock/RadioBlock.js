import React from "react";

const RadioBlock = ({radioBtn, inputValue}) => {


  return (
    <div className="radioBlock">
      <div className="radioBlock__toolbar">
        {radioBtn.map(({radioNumber, inputName}) => (
          <div   key={inputName}>
            <input
              className="toolbar__input "
              type="radio"
              id={`radio${radioNumber}`}
              name="radios"
              value={inputName} onChange={(e)=>inputValue(e)}
            />
            <label
              className={`toolbar__label toolbar__${inputName}`}
              htmlFor={`radio${radioNumber}`}
            >
              {inputName}
            </label>
          </div>
        ))}
        {/* <input
            className="toolbar__input "
            type="radio"
            id="radio1"
            name="radios"
            value="Work"
          />
          <label className="toolbar__label toolbar__work" for="radio1">
            Work
          </label>

          <input
            className="toolbar__input"
            type="radio"
            id="radio2"
            name="radios"
            value="Sport"
          />
          <label className="toolbar__label toolbar__sport" for="radio2">
            Sport
          </label>

          <input
            className="toolbar__input"
            type="radio"
            id="radio3"
            name="radios"
            value="SkillUp"
          />
          <label className="toolbar__label toolbar__skillUp" for="radio3">
            SkillUp
          </label>

          <input
            className="toolbar__input"
            type="radio"
            id="radio4"
            name="radios"
            value="Hobby"
          />
          <label className="toolbar__label toolbar__hobby" for="radio4">
            Hobby
          </label> */}
      </div>
    </div>
  );
};

export default RadioBlock;
