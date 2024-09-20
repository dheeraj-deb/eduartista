import React from "react";

const Header = () => {
  return (
    <div className="bg-white shadow-md p-4 flex justify-between">
      <h2 className="text-xl"></h2>
      <div className="flex items-center">
        <p className="mr-4">Admin</p>
        <button className="bg-red-500 text-white p-2 rounded">Logout</button>
      </div>
    </div>
  );
};

export default Header;
