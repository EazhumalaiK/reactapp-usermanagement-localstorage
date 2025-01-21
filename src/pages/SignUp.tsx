import React, { useState } from "react";
import { Signup } from "../types/Signup";

const SignUp = () => {
  const [signupform, setSignupForm] = useState<Signup>({
    firstname: "",
    lastname: "",
    fullname: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  //   ---------------handleChange-------------

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    console.log(name, value);
    setSignupForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  //   ------------------------------- handle fullname---

  return (
    <div>
      <div className="p-20 m-10 grid grid-cols-3">
        <div></div>
        <div>
          <div className="bg-slate-600 p-24 grid gap-4 mx-10">
            <h3 className="content-center text-2xl text-white text-semibold mx-20 my-2">
              Signup
            </h3>
            <input
              type="text"
              className="p-4"
              name="firstname"
              value={signupform.firstname}
              placeholder="Firstname"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                handleChange(e);
              }}
            />
            <input
              type="text"
              className="p-4"
              name="lastname"
              value={signupform.lastname}
              placeholder="Lastname"
              onChange={handleChange}
            />
            <input
              type="text"
              className="p-4"
              name="fullname"
              value={signupform.fullname}
              placeholder="Fullname"
              readOnly
              onChange={handleChange}
            />
            <input
              type="text"
              className="p-4"
              name="username"
              value={signupform.username}
              placeholder="username"
              onChange={handleChange}
            />
            <input
              type="text"
              className="p-4"
              name="password"
              value={signupform.password}
              placeholder="Password"
              onChange={handleChange}
            />
            <input
              type="password"
              className="p-4"
              name="confirmPassword"
              value={signupform.confirmPassword}
              placeholder="ConfirmPassword"
              onChange={handleChange}
            />
            <button className="p-4 border border-solid text-white hover:bg-slate-300 hover:text-slate-600 hover:text-l hover: font-bold">
              Submit
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default SignUp;
