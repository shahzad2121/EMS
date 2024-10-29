import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../Utils/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  // localStorage.clear()
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    setLocalStorage()
    //we give the value of user data as a paramete in provider and we are getting this
    //value from local storage by calling getLoaclStorage function.
    //getLoaclStorage function returns an object containing user data.
    //In this object, we have two properties - employees and admin.
    //We are setting these properties as state.
    //Here, we are assuming that the user data is stored in local storage.
    //if the user data is not available in local storage, it will set it to empty object.
    //Here, we are assuming that the user data is stored in local storage.
    //Here, we are assuming that the token is valid for 1 hour. If the token is expired, we will fetch the user data again.
    //You can add a timer to check the expiration time and invalidate the token.
    //Here, we are assuming that the token is valid for 1 hour.
    const {employees} = getLocalStorage();
    setUserData(employees);
    
  }, []);

  return (
    <div>
      <AuthContext.Provider value={[userData, setUserData]}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
