import React from "react";

const RadioBlock = ({radioBtn, register,  inputValue}) => {


  return (
    <div className="radioBlock">
      <div className="radioBlock__toolbar">
        {radioBtn.map(({radioNumber, inputName}) => (
          <div className="toolbar-inputBlock"  key={inputName}>
            <input
              className="toolbar__input "
              type="radio"
              id={`radio${radioNumber}`}
              name="type"
              ref={register}
              value={inputName} 
            />
            <label
              className={`toolbar__label toolbar__${inputName}`}
              htmlFor={`radio${radioNumber}`}
            >
              {inputName}
            </label>
          </div>
          
        ))}
        
      </div>
    </div>
  );
};

export default RadioBlock;
