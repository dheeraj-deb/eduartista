import React, { useState } from "react";

const Modal = () => {
  const [activeTab, setActiveTab] = useState("User");

  return (
    <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
      <div className="modal-box bg-white py-8 px-8">
        <div>
          <div className="modal-header">
            <div className="flex justify-center items-center">
              <div
                className="flex-1 flex justify-center items-center py-2 rounded-l-[8px] cursor-pointer transition duration-300"
                style={{
                  backgroundColor:
                    activeTab === "User" ? "#111111" : "rgba(17, 17, 17, 0.21)",
                }}
                onClick={() => setActiveTab("User")}
              >
                <h4
                  className="text-md font-bold transition duration-300"
                  style={{ color: activeTab === "User" ? "#fff" : "#000" }}
                >
                  User
                </h4>
              </div>
              <div
                className="flex-1 flex justify-center items-center py-2 rounded-r-[8px] cursor-pointer transition duration-300"
                style={{
                  backgroundColor:
                    activeTab === "Agent"
                      ? "#111111"
                      : "rgba(17, 17, 17, 0.21)",
                }}
                onClick={() => setActiveTab("Agent")}
              >
                <h4
                  className="text-md font-bold transition duration-300"
                  style={{ color: activeTab === "Agent" ? "#fff" : "#000" }}
                >
                  Agent
                </h4>
              </div>
            </div>
          </div>
          <div className="modal-body mt-7">
            {activeTab === "User" ? (
              <div className="px-8">
                <h1 className="text-center text-2xl font-bold">Login</h1>
                <div className="mt-8">
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-small text-gray-900 dark:text-white"
                  >
                    Mobile number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="123-45-678-910"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    required
                  />
                </div>
              </div>
            ) : (
              <div>
                <h1 className="text-center text-2xl font-bold">Agent</h1>
                <p className="text-center text-lg">Agent content goes here</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
