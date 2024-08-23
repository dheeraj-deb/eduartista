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
          <div className="modal-body">
            {activeTab === "User" ? (
              <div>
                <h1 className="text-center text-2xl font-bold">User</h1>
                <p className="text-center text-lg">User content goes here</p>
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
