import "./verifyphone.css";
import OtpInput from "../OTPinput/OtpInput";
import { useState } from "react";

function VerifyPhone() {
  const [otp, setOtp] = useState("");
  const onChange = (value: string) => setOtp(value);
  
  return (
    <div className="VerifyPhoneCont">
      <div className="VerifyPhone">
        <h1>To create your account, please verify your number</h1>
        <p>
          We’ve sent a 4-digit code to your number via SMS enter it below.  
          <span className="edit">
            <a href=""> Edit Number</a>
          </span>
        </p>
        <div className="OtpField">
          <p>Enter OTP Here</p>
          <OtpInput value={otp} valueLength={4} onChange={onChange} />
        </div>
        <div className="Continue">
          <button>Verify & Continue</button>
        </div>
        <div className="CodeExp">
          <p>Code will expire in 2:00</p>
        </div>
        <div className="AltOtp">
          <a href="">Use Voice OTP Instead</a>
          <a href="">Use Telegram OTP Instead</a>
        </div>
      </div>
    </div>
  );
}

export default VerifyPhone;
