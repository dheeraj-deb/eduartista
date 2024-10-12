import { useMutation } from "@apollo/client";
import React, { useContext, useEffect, useRef, useState } from "react";
import { AGENT_LOGIN, VERIFY_OTP } from "../graphql/query/auth";
import { AuthContext } from "../contexts/AuthProvider";
import { loginContext } from "../layout/Main";
import { toast } from "react-toastify";

const AgentLogin = ({ setIsLoginForm }) => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [otpSent, setOtpSent] = useState(false);
  const [message, setMessage] = useState("");
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [buttonText, setButtonText] = useState("Verify OTP");

  const { login } = useContext(loginContext);

  const [sendOtp] = useMutation(AGENT_LOGIN);
  const [verifyOtp] = useMutation(VERIFY_OTP);

  const inputRefs = useRef([]);

  useEffect(() => {
    if (otpSent && inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, [otpSent]);

  // Countdown timer for OTP resend
  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (countdown === 0 && otpSent) {
      setButtonText("Resend OTP");
      setMessage("You can now request a new OTP.");
    }
    return () => clearInterval(timer);
  }, [countdown, otpSent]);

  // Validate mobile number and set message
  const validateMobileNumber = (number) => {
    const isValid = /^[6-9]\d{9}$/.test(number);
    setMessage(isValid ? "" : "Please enter a valid 10-digit number.");
    return isValid;
  };

  const handleMobileNumberChange = (e) => {
    const value = e.target.value;
    setMobileNumber(value);
    // Validate on every change
    validateMobileNumber(value);
  };

  const handleSendOtp = async () => {
    if (!validateMobileNumber(mobileNumber)) return; // Validate mobile number before sending OTP

    try {
      sendOtp({
        variables: { input: { mobileNumber: `+91${mobileNumber}` } },
      })
        .then((res) => {
          setOtpSent(true);
          setCountdown(60);
          setButtonText("Verify OTP");
          setMessage("OTP sent successfully!");
        })
        .catch((err) => {
          toast(err.message, { type: "error" });
        });
    } catch (error) {
      setMessage("Error sending OTP. Please try again.");
    }
  };

  const handleResendOtp = async () => {
    try {
      sendOtp({
        variables: { input: { mobileNumber: `+91${mobileNumber}` } },
      })
        .then((res) => {
          setCountdown(60);
          setButtonText("Verify OTP");
          setMessage("OTP resent successfully!");
        })
        .catch((err) => {
          toast(err.message, { type: "error" });
          setMessage("Failed to resend OTP. Try again later.");
        });
    } catch (error) {
      setMessage("Error resending OTP. Please try again.");
    }
  };

  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Automatically move to the next input if available
      if (value && index < 3) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleOtpKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleOtpPaste = (e) => {
    const pastedData = e.clipboardData.getData("Text").slice(0, 4);
    if (/^\d{4}$/.test(pastedData)) {
      const newOtp = pastedData.split("");
      setOtp(newOtp);

      // Focus the last input after pasting
      inputRefs.current[newOtp.length - 1].focus();
    }
  };

  const handleVerifyOtp = async () => {
    const fullOtp = otp.join("");

    // Call the backend API to verify OTP
    try {
      verifyOtp({
        variables: {
          input: { mobileNumber: `+91${mobileNumber}`, otp: fullOtp },
        },
      })
        .then((res) => {
          setMessage("");
          setIsOtpVerified(false);
          setOtpSent(false);
          setCountdown(0);
          setMobileNumber("");
          document.getElementById("my_modal_5").close();
          login(
            res?.data?.agentVerifyOtp?.token,
            res?.data?.agentVerifyOtp?.name
          );
        })
        .catch((err) => {
          toast(err.message, { type: "error" });
        });
    } catch (error) {
      setMessage("Error verifying OTP. Please try again.");
    }
  };

  // Check if all OTP fields are filled
  const areOtpFieldsFilled = () => otp.every((digit) => digit !== "");
  console.log(otp);

  return (
    <div className="mt-8">
      {!otpSent ? (
        <>
          <label htmlFor="mobileNumber" className="input-label-ag">
            Mobile Number
          </label>
          <input
            type="number"
            id="mobileNumber"
            value={mobileNumber}
            onChange={handleMobileNumberChange}
            className="input-box-ag"
            maxLength={10}
            placeholder="Enter your mobile number"
          />
          <p className="error-ag">{message}</p>
          <button
            onClick={handleSendOtp}
            disabled={!/^[6-9]\d{9}$/.test(mobileNumber)}
            className={`w-full px-6 py-1 my-3 rounded-full text-white  text-md font-semibold tracking-wide shadow-md 
              ${
                /^[6-9]\d{9}$/.test(mobileNumber)
                  ? " bg-[#111111] cursor-pointer"
                  : "bg-[#11111136] cursor-not-allowed"
              }`}
          >
            Send OTP
          </button>
        </>
      ) : (
        <>
          <label htmlFor="otp" className="input-label-ag">
            Enter OTP
          </label>
          <div className="flex justify-center" onPaste={handleOtpPaste}>
            {otp.map((digit, index) => (
              <input
                key={index}
                type="number"
                ref={(input) => (inputRefs.current[index] = input)}
                value={digit}
                onChange={(e) => handleOtpChange(e, index)}
                onKeyDown={(e) => handleOtpKeyDown(e, index)}
                maxLength="1"
                disabled={isOtpVerified}
                className="bg-white border border-black rounded-md w-10 h-10 m-1 text-center text-black"
              />
            ))}
          </div>
          <p className="error-ag text-center">{message}</p>
          <p className="mt-4 text-center text-black text-sm">
            {countdown > 0
              ? `Resend OTP in ${Math.floor(countdown / 60)}:${
                  countdown % 60 < 10 ? "0" : ""
                }${countdown % 60}`
              : "You can request a new OTP now."}
          </p>
          <button
            onClick={
              buttonText === "Verify OTP" ? handleVerifyOtp : handleResendOtp
            }
            disabled={
              buttonText === "Verify OTP"
                ? !areOtpFieldsFilled()
                : countdown > 0
            }
            className={`w-full px-6 py-1 my-3 rounded-full text-white text-md font-semibold tracking-wide shadow-md 
               ${
                 buttonText === "Verify OTP"
                   ? areOtpFieldsFilled()
                     ? "bg-[#111111] cursor-pointer"
                     : "bg-[#11111136] cursor-not-allowed"
                   : countdown > 0
                   ? "bg-[#11111136] cursor-not-allowed"
                   : "bg-[#111111] cursor-pointer"
               }`}
          >
            {buttonText}
          </button>
        </>
      )}
    </div>
  );
};

export default AgentLogin;
