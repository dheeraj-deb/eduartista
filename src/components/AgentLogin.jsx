import React, { useEffect, useRef, useState } from 'react';

const AgentLogin = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']);
  const [otpSent, setOtpSent] = useState(false);
  const [message, setMessage] = useState('');
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  
  const inputRefs = useRef([]);

  useEffect(() => {
    if (otpSent && inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, [otpSent]);

  // Validate mobile number and set message
  const validateMobileNumber = (number) => {
    const isValid = /^[6-9]\d{9}$/.test(number);
    setMessage(isValid ? '' : 'Please enter a valid 10-digit number.');
    return isValid;
  };

  const handleMobileNumberChange = (e) => {
    const value = e.target.value;
    setMobileNumber(value);
    // Validate on every change
    validateMobileNumber(value);
  };

  const handleSendOtp = async () => {
    if (!validateMobileNumber(mobileNumber)) return;

    // Call the backend API to send OTP
    try {
      const response = await fetch('/api/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mobileNumber }),
      });

      if (response.ok) {
        setOtpSent(true);
        setMessage('OTP sent successfully!');
      } else {
        setMessage('Failed to send OTP. Try again later.');
      }
    } catch (error) {
      setMessage('Error sending OTP. Please try again.');
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
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleOtpPaste = (e) => {
    const pastedData = e.clipboardData.getData('Text').slice(0, 4);
    if (/^\d{4}$/.test(pastedData)) {
      const newOtp = pastedData.split('');
      setOtp(newOtp);

      // Focus the last input after pasting
      inputRefs.current[newOtp.length - 1].focus();
    }
  };

  const handleVerifyOtp = async () => {
    const fullOtp = otp.join('');

    // Call the backend API to verify OTP
    try {
      const response = await fetch('/api/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mobileNumber, otp: fullOtp }),
      });

      if (response.ok) {
        setMessage('OTP verified successfully! You are now logged in.');
        setIsOtpVerified(true); // Disable OTP inputs on successful verification
      } else {
        setMessage('Invalid OTP. Please try again.');
      }
    } catch (error) {
      setMessage('Error verifying OTP. Please try again.');
    }
  };

  // Check if all OTP fields are filled
  const areOtpFieldsFilled = () => otp.every(digit => digit !== '');
  console.log(otp);

  return (
    <div className="mt-8">
      {!otpSent ? (
        <>
          <label htmlFor="mobileNumber" className='input-label-ag'>Mobile Number</label>
          <input
            type="text"
            id="mobileNumber"
            value={mobileNumber}
            onChange={handleMobileNumberChange}
            className="input-box-ag"
            maxLength={10}
            placeholder="Enter your mobile number"
          />
          <p className='error-ag'>{message}</p>
          <button 
            onClick={handleSendOtp}
            disabled={!/^[6-9]\d{9}$/.test(mobileNumber)}
            className={`w-full px-6 py-1 my-3 rounded-full text-white  text-md font-semibold tracking-wide shadow-md 
              ${/^[6-9]\d{9}$/.test(mobileNumber) ? ' bg-[#111111] cursor-pointer' : 'bg-[#11111136] cursor-not-allowed'}`}
          >
            Send OTP
          </button>
        </>
      ) : (
        <>
          <label htmlFor="otp" className='input-label-ag'>Enter OTP</label>
          <div className='flex justify-center' onPaste={handleOtpPaste}>
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
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
          <p className='error-ag'>{message}</p>
          <button 
             onClick={handleVerifyOtp}
             disabled={!areOtpFieldsFilled()}  
             className={`w-full px-6 py-1 my-3 rounded-full text-white text-md font-semibold tracking-wide shadow-md 
              ${areOtpFieldsFilled() ? 'bg-[#111111] cursor-pointer' : 'bg-[#11111136] cursor-not-allowed'}`}
             >Verify OTP
             </button>
        </>
      )}
    </div>
  );
};

export default AgentLogin;
