import React, { useRef } from 'react';
import { useForm } from "react-hook-form";
const FormUp = ({ name, background }) => {
    // const { register, errors } = useForm({
    //     mode: 'onBlur',
    // });
    // console.log(errors);

    // return (
    //     <form className="signForm__form">
    //     <label className="signForm__form-label">User name <br/>
    //     {/* <Input className = "signForm__form-input " ref={register({required: true, maxLength: 80})}/> */}
    //     <input ref={register({required: true, maxLength: 3})}/>
    //     </label>
    //     <label className="signForm__form-label">Email adress<br/>
    //     <Input className = "signForm__form-input"/>
    //     </label>
    //     <label className="signForm__form-label">Password<br/>
    //     <Input className = "signForm__form-input"/>
    //     </label>
    //     <label className="signForm__form-label">Enteres Password<br/>
    //     <Input className = "signForm__form-input"/>
    //     </label>
    //     <Input type={"submit"} value={"registr"} background={"btn btn-orange"}/>

    // </form>


    //)

    const { register, handleSubmit, errors, watch } = useForm();
    const onSubmit = data => console.log(data);
    const password = useRef({});
    password.current = watch("password", "");
    console.log(errors);


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="signForm__form">
            <label className="signForm__form-label">User name <br />
                <input className="signForm__form-input"
                    name="nameInput"
                    type="text"
                    ref={register({ required: true, maxLength: 12, minLength: 2 })} />
                {errors.nameInput && <p className="formError">Your input is required</p>}
            </label>
            <label className="signForm__form-label">Email <br />
                <input className="signForm__form-input"
                    name="emailInput"
                    type="text"
                    ref={register({ required: true, pattern: /^\S+@\S+$/i })} />
                {errors.emailInput && <p className="formError">Your Email invalid</p>}
            </label>
            <label className="signForm__form-label">Password <br />
                <input className="signForm__form-input"
                    name="password"
                    type="password"
                    ref={register({
                        required: "You must specify a password",
                        minLength: {
                            value: 8,
                            // message: "Password must have at least 8 characters"
                        }
                    })}
                /> {errors.password && <p className="formError">Password must have at least 8 characters</p>}
            </label>


            <label className="signForm__form-label">Repeat password <br />
                <input className="signForm__form-input"
                    name="password_repeat"
                    type="password"
                    ref={register({
                        validate: value =>
                            value === password.current || "The passwords do not match"
                    })}
                /> {errors.password_repeat && <p className="formError">{errors.password_repeat.message}</p>}
            </label>


            <input className="btn btn-orange" type="submit" value="register" />
        </form>
    )
};

export default FormUp;


