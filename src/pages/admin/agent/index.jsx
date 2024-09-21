import { useQuery } from "@apollo/client";
import React from "react";
import { GET_AGENTS } from "../../../graphql/query/admin";

const AgentTable = () => {
  const { data, error } = useQuery(GET_AGENTS);

  console.log("data", data?.listAgents, error);

  const users = [
    {
      name: "John Doe",
      mobilenumber: "123-456-7890",
      virtualId: "VID12345",
      address: "123 Main St",
      postOffice: "Central",
      pincode: "123456",
      district: "District 1",
      state: "State 1",
      cdsName: "CDS Alpha",
      photo: "https://via.placeholder.com/50",
    },
    {
      name: "Jane Smith",
      mobilenumber: "987-654-3210",
      virtualId: "VID67890",
      address: "456 Elm St",
      postOffice: "West",
      pincode: "654321",
      district: "District 2",
      state: "State 2",
      cdsName: "CDS Beta",
      photo: "https://via.placeholder.com/50",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      {/* Heading for Agent Management */}
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Agent Management
      </h1>

      {/* User Table */}
      <table className="min-w-full table-auto bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Mobile Number</th>
            <th className="px-4 py-2">Virtual ID</th>
            <th className="px-4 py-2">Address</th>
            <th className="px-4 py-2">Post Office</th>
            <th className="px-4 py-2">Pincode</th>
            <th className="px-4 py-2">District</th>
            <th className="px-4 py-2">State</th>
            <th className="px-4 py-2">CDS Name</th>
            <th className="px-4 py-2">Photo</th>
          </tr>
        </thead>
        <tbody>
          {data?.listAgents?.map((user, index) => (
            <tr key={index} className="border-b">
              <td className="px-4 py-2">{user.name}</td>
              <td className="px-4 py-2">{user.mobileNumber}</td>
              <td className="px-4 py-2">{user.agentID}</td>
              <td className="px-4 py-2">{user.address}</td>
              <td className="px-4 py-2">{user.postOffice}</td>
              <td className="px-4 py-2">{user.pincode}</td>
              <td className="px-4 py-2">{user.district}</td>
              <td className="px-4 py-2">{user.state}</td>
              <td className="px-4 py-2">{user.cdsName}</td>
              <td className="px-4 py-2">
                <img
                  src={user.photo}
                  alt={`${user.name} photo`}
                  className="w-12 h-12 rounded-full"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AgentTable;
