import React, { useState } from "react";
import { validateEmail } from "./functions";

const SignUpPage = () => {
  // useStates to store current value
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(false);
  //////////////////////////////////////////////////////////////////////////////
  function checkEmail(e) {
    setEmail(e.target.value);
    validateEmail(email) ? setIsEmailValid(true) : setIsEmailValid(false);
  }
  function checkPassword(e) {
    setPassword(e.target.value);
    e.target.value.length >= 8
      ? setIsPasswordValid(true)
      : setIsPasswordValid(false);
  }
  function checkConfirmPassword(e) {
    setConfirmPassword(e.target.value);
    e.target.value === password
      ? setIsConfirmPasswordValid(true)
      : setIsConfirmPasswordValid(false);
  }
  // Checking if all inputs are valid //////////////////////////////////////////
  function signUpUser(e) {
    if (isEmailValid && isPasswordValid && isConfirmPasswordValid) {
      alert("Form submitted successfully");
    } else {
      e.preventDefault();
      alert("Form cannot be submitted");
    }
  }
  return (
    <>
      <form onSubmit={signUpUser}>
        {/* Email input */}
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          onChange={checkEmail}
          onBlur={checkEmail}
          value={email}
          style={
            isEmailValid
              ? { borderColor: "green" }
              : { borderColor: "rgb(200, 0, 0)" }
          }
          required
        />
        {!isEmailValid && <span>Invalid email format</span>}

        {/* Password input */}
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          onChange={checkPassword}
          value={password}
          style={
            isPasswordValid
              ? { borderColor: "green" }
              : { borderColor: "rgb(200, 0, 0)" }
          }
          required
        />
        {!isPasswordValid && <span>Password must be atleast 8 characters</span>}

        {/* Confirm password input */}
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          onChange={checkConfirmPassword}
          value={confirmPassword}
          style={
            isConfirmPasswordValid
              ? { borderColor: "green" }
              : { borderColor: "rgb(200, 0, 0)" }
          }
          required
        />
        {!isConfirmPasswordValid && <span>Passwords do not match</span>}

        {/* Submit button */}
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
};

export default SignUpPage;
