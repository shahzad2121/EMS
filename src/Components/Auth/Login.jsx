import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //this function used for many purposes
  const submithandler = (e) => {
    //to prevent forum from autoSubmit
    e.preventDefault();
    //this will get the entered value from the input field.
    handleLogin(email, password);
    // console.log(email);
    // console.log(password);
    //writing this will help the form to get empty after every submission
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="w-full h-screen flex items-center justify-center bg-black text-black">
        <div className="w-full h-screen flex">
          <div
            className="w-[40%] h-full bg-cover bg-no-repeat bg-top"
            style={{
              backgroundImage:
                "url('https://cdn.dribbble.com/userupload/8432950/file/original-0c14504bd291054d76548cb015dff89a.png?resize=1200x900&vertical=center')",
            }}
          ></div>
          <div className="w-[60%] flex items-center justify-center flex-col">
            <h2>Welcome to EMS</h2>
            <form
              //e is value received from the form, receive it on top
              onSubmit={(e) => {
                submithandler(e);
              }}
              className="flex flex-col justify-center gap-5 w-[40%]"
            >
              <input
                value={email}
                //when we write in input it will change the state and
                // will get the vaue through e.target.value.
                //the value will be set to given data.
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
                className="border-2  outline-none p-2 px-5 font-medium text-lg border-green-500 rounded-full focused:border-green-500"
                type="email"
                placeholder="Enter your email"
              />
              <input
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
                className="border-2 outline-none font-medium text-lg p-2 focus:border-green-500 px-5 border-green-500 rounded-full"
                type="password"
                placeholder="Enter your password"
              />
              <button className="p-2 mt-5 px-5 font-medium text-lg bg-green-500 rounded-full">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
