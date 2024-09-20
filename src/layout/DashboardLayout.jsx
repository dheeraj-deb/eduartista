import React, { useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import { MdDashboard, MdAddBusiness } from "react-icons/md";
import {
  FaUsers,
  FaShoppingBag,
  FaUser,
  FaLocationArrow,
  FaQuestionCircle,
} from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import logo from "/logo2.png";
import { FaCartShopping } from "react-icons/fa6";

import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import Sidebar from "./Sidebar";
import Header from "./Header";

const DashboardLayout = () => {
  const { loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  // logout
  const handleLogout = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const isItemActive = (pathname) => {
    // Compare the current location pathname with the link's "to" attribute
    return location.pathname === pathname;
  };

  const sharedLinks = (
    <>
      <li className="mt-3">
        <Link to="/">
          <MdDashboard /> Home
        </Link>
      </li>
      <li>
        <Link to="/menu">
          <FaCartShopping /> Menu
        </Link>
      </li>
      <li>
        <Link to="/menu">
          <FaLocationArrow /> Orders Tracking
        </Link>
      </li>
      <li>
        <Link to="/menu">
          <FaQuestionCircle /> Customer Support
        </Link>
      </li>
      {/* for logout */}
      <li>
        <button onClick={handleLogout}>
          <FaUser /> Logout
        </button>
      </li>
    </>
  );

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
