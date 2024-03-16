import React, { useState } from "react";
import InputBox from "./InputBox";
import inputFieldsData from "../data/formInputFields";
import "../styles/formStyles.css";
import { checkIfValid } from "./functions";

const initialState = {
    email: false,
    password: false,
    confirmPassword: false,
}

const SignUpPage = () => {

    const [isFormValid, setIsFormValid] = useState(initialState);

    function onFormChange(event) {
        const nameAttribute = event.target.name;
        const value = event.target.value;
        const password = event.currentTarget.password.value;
        let isValid = checkIfValid(nameAttribute, value, password);
        setIsFormValid({ ...isFormValid, [nameAttribute]: isValid });
    }

    function submitForm(event) {
        event.preventDefault();
        let isAllInputsValid = true;
        
        for (let key in isFormValid) {
            isAllInputsValid &&= isFormValid[key];
        }
        if (isAllInputsValid) {
            alert("Form submitted successfully");
            for (let item of inputFieldsData) {
                event.target[item.name].value = "";
            }
            setIsFormValid(initialState);
        } else {
            alert("Form cannot be submitted");
        }
    }
    return (
        <>
            <form onChange={onFormChange} onSubmit={submitForm}>
                {inputFieldsData.map((data) => (
                    <InputBox
                        key={data.name}
                        data={data}
                        isValid={isFormValid[data.name]}
                    />
                ))}
                <button type="submit">Sign Up</button>
            </form>
        </>
    );
};

export default SignUpPage;
