import { gql } from "@apollo/client";

export const AGENT_REGISTRATION = gql`
  mutation CreateAgent($input: AgentInput!) {
    createAgent(input: $input) {
      message
      token
      agent {
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
      }
    }
  }
`;

export const AGENT_LOGIN = gql`
  mutation AgentLogin($input: agentLoginInput!) {
    agentLogin(input: $input) {
      message
      status
    }
  }
`;

export const VERIFY_OTP = gql`
  mutation AgentVerifyOtp($input: verifyOtpInput!) {
    agentVerifyOtp(input: $input) {
      message
      token
      status
    }
  }
`;
