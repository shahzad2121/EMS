import React, { useContext } from "react";
import Login from "../Auth/Login";
import AuthProvider, { AuthContext } from "../../Context/AuthProvider";

const Header = (props) => {
  const handleLogOut = () => {
    //with this the loggedInUser will be cleard and set to empty.
    localStorage.setItem("loggedInUser", "");
    //this is a function to reload page by itself.
    //  window.location.reload()
    props.changeUser('')
  };

  return (
    <div className="w-full px-10 py-5 flex items-center justify-between">
      <h1 className="font-semibold text-2xl">
        Hello <br />
        <span className="font-bold text-3xl">username 👋</span>
      </h1>
      <button
        onClick={() => {
          handleLogOut();
        }}
        className="bg-[#EE6C4D] px-4 py-2 rounded-md font-medium text-lg"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
