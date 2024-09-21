import React, { createContext, useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../../src/App.css";
import Footer from "../components/Footer";
import { AuthContext } from "../contexts/AuthProvider";
import LoadingSpinner from "../components/LoadingSpinner";


export const loginContext = createContext();

const Main = () => {
  const { loading } = useContext(AuthContext);
  const [token, setToken] = useState(null);

  function login(token) {
    localStorage.setItem("authToken", token);
    setToken(token);
  }

  function logout() {
    localStorage.removeItem("authToken");
    setToken(null);
  }

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setToken(token);
    }
  }, []);

  const loginState = {
    token,
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
