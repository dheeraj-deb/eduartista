import React, { createContext, useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "../../src/App.css";
// import Footer from "../components/Footer";
import { AuthContext } from "../contexts/AuthProvider";
import LoadingSpinner from "../components/LoadingSpinner";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";


export const loginContext = createContext();

const Main = () => {
  const { loading } = useContext(AuthContext);
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState(null);

  function login(token, username) {
    localStorage.setItem("authToken", token);
    localStorage.setItem("username", username)
    setToken(token);
  }

  function logout() {
    localStorage.removeItem("authToken");
    setToken(null);
  }

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const username = localStorage.getItem("username");
    if (token) {
      setToken(token);
    }
    if(username){
      setUsername(username)
    }
  }, []);

  console.log("username", username);

  const loginState = {
    token,
    username,
    login,
    logout,
  };

  return (

      <loginContext.Provider value={loginState}>
        <div className="bg-white h-full">
          {loading ? (
            <LoadingSpinner />
          ) : (
            <div>
              <Navbar />
              <div className="min-h-screen">
                <Outlet />
              </div>
              <Footer />
            </div>
          )}
        </div>
      </loginContext.Provider>
  );
};

export default Main;
