import React, { useContext, useEffect, useState } from "react";
import Login from "./Components/Auth/Login";
import EmployeeDashboard from "./Components/DashBoard/EmployeeDashboard";
import AdminDashboard from "./Components/DashBoard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./Utils/LocalStorage";
import { AuthContext } from "./Context/AuthProvider";

const App = () => {
  const [userData, setUserData] = useContext(AuthContext);
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  },[] )
  


  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    }
    //**.find** is a method which finds the entered value in the given data
    //in our case it will check if this email and passw is available in the localstorage.
    else if (userData) {
      //we are receiving this data from authcontext
      const employee = userData.find((e) => email == e.email && password == e.password);
        
      

      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee})
        );
      }
    } else {
      alert("not logged in");
    }
  };
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? (
        <AdminDashboard changeUser={setUser} />
      ) : user === "employee" ? (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      ) : (
        ""
      )}
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard /> */}
    </>
  );
};

export default App;
