import { gql } from "@apollo/client";

export const GET_AGENTS = gql`
  query GetAgents {
    listAgents {
      id
      name
      mobileNumber
      dob
      address
      postOffice
      pincode
      district
      state
      country
      punchayathMunicipality
      wardNumber
      cdsName
      photo
      agentID
    }
  }
`;
