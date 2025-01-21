import React, { useState } from "react";

import { User } from "../types/User";
import { Link, useNavigate } from "react-router-dom";
import SignUp from "./SignUp";

const Login = () => {
  const [IsValid, setIsValid] = useState<boolean>(true);
  const [userInput, setUserInput] = useState<User>({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  //   ---------------Handle Change------------------
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    console.log(name, value);
    setUserInput((prevUserInput) => ({ ...prevUserInput, [name]: value }));
    if (value.trim().length > 0) {
      setIsValid(true);
    }
  };
  //   ------------- Login -------------------

  const handleClick = () => {
    if (
      userInput.username.trim().length > 0 &&
      userInput.password.trim().length > 0
    ) {
      setIsValid(true);
    } else {
      console.log(userInput);
      setIsValid(false);
    }
  };

  // -------------------------------------------

  const navigateTo = () => {
    navigate("/signup");
  };

  //   ---------------------------------------------

  return (
    <div className="p-10 m-10 grid grid-cols-3">
      <div></div>
      {/* <div className= "bg-slate-600 p-24 "> */}
      <div className={IsValid ? "bg-slate-600 p-24" : "bg-slate-400 p-24"}>
        <div className="grid gap-3 mx-auto">
          <h3 className="content-center text-2xl text-white text-semibold mx-40 my-2">
            Login
          </h3>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={userInput.username}
            onChange={handleChange}
            className={
              IsValid ? "p-4" : "p-4 border-2 border-solid border-red-800"
            }
          />
          {!IsValid && userInput.username.trim().length === 0 ? (
            <div className="text-red-800 font-semibold">
              Please enter username
            </div>
          ) : null}

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={userInput.password}
            onChange={handleChange}
            className={
              IsValid ? "p-4" : "p-4 border-2 border-solid border-red-800"
            }
          />
          {!IsValid && userInput.password.trim().length === 0 ? (
            <div className="text-red-800 font-semibold">
              Please enter password
            </div>
          ) : null}

          <button
            className="p-4 border border-solid text-white hover:bg-slate-300 hover:text-slate-600 hover:text-l hover: font-bold"
            onClick={handleClick}
          >
            Login
          </button>
          <h3 className="text-white mx-16 my-4">
            Don't have an account?
            <span className="font-bold hover:underline" onClick={navigateTo}>
              Register
            </span>
          </h3>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Login;
