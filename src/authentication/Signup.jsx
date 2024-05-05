import React, {useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GIDDisplayBox from "./GIDDisplayBox";


const Signup = ({ setAuthenticated }) => {
  const [name, setName] = useState("");
  const [college, setCollege] = useState("");
  const [year, setYear] = useState("");
  const [department, setDepartment] = useState("");
  const [roll, setRoll] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [otpPopup, setOtpPopup] = useState(false);
  const [showGIDBox, setShowGIDBox] = useState(false);

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSignup = () => {
    setAuthenticated(true);
    navigate('/'); //not working
  };

  const apiUrl = String(import.meta.env.VITE_API_MAIN);

  let config = {
    url: `${apiUrl}/generate-otp?name=${name}&email=${email}`,
    method: "post",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Credentials": "true",
    },
  };

  const popup = () => {
    showPopup("login-popup");
    setTimeout(() => showPopup("hide"), 3000);
  };

  const handleVerify = async () => {
    if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email address.");
    } else {
      const response = await axios.post(
        `${apiUrl}/generate-otp?name=${name}&email=${email}`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Credentials": "true",
          },
        }
      );
      console.log(response);
      setOtpPopup(true);
    }
  };

  const handleOtpSubmit = async (otp) => {
    try {
      // Make a POST request to the backend API endpoint to verify OTP
      const response = await axios.post(`${apiUrl}/verify-otp`, { email, otp });
      // console.log(apiUrl)
      console.log(response);
      // Check if the OTP verification is successful
      if (response.status === 200) {
        // If the OTP is correct, set isVerified to true and close the OTP popup
        setIsVerified(true);
        setOtpPopup(false);
      } else {
        // If OTP verification fails, display an error message
        setIsOtpCorrect(false);
        alert("Incorrect OTP. Please enter the correct OTP.");
      }
    } catch (error) {
      // Handle error, such as displaying an alert or logging the error
      console.error("Error verifying OTP:", error);
      alert("Error verifying OTP. Please try again.");
    }
  };


  const handleSignUp = async () => {
    if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email address.");
    }
    if (!isVerified) {
      alert("Please verify your email address before signing up.");
    }
    if (
      !name ||
      !college ||
      !year ||
      !department ||
      !roll ||
      !email ||
      !phoneNumber
    ) {
      alert("Please fill in all required fields.");
    } else {
      try {
        const response = await axios.post(
          `${apiUrl}/registration`,
          {
            name: name,
            college: college,
            year: year,
            department: department,
            roll: roll,
            email: email,
            phoneNumber: phoneNumber,
            emailVerified: isVerified,
          }
        );

       

        console.log("Sign up successful:", response.data);
        setGidResponse(response.data);
        localStorage.setItem("user", response.data);
        //changed
        setShowGIDBox(true);
        console.log(apiUrl);
      } catch (error) {
        console.error("Error signing up:", error);
      }
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form>
      <div>
            {isVerified ? (
              <input
                name="email"
                type="email"
                placeholder="Verified"
                readOnly
                value={email}
              />
            ) : (
              <>
                <input
                  name="email"
                  type="email"
                  placeholder="Email id"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button  className="Verify" onClick={handleVerify}>
                  Verify
                </button>
                {/* <Button  className="Verify" style={{cursor:"not-allowed"}}>
                  Verify
                </Button> */}
              </>
            )}
          </div>
        
        <div>
          <label htmlFor="email">Password:</label>
          <input
            type="email"
            id="email"
            name="password"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="button" onClick={handleSignup}>Sign up</button>
        {otpPopup && (
        <OTPVerificationPopup
          onSubmit={handleOtpSubmit}
          onClose={() => setOtpPopup(false)}
        />
      )}
      {showGIDBox && (
        <GIDDisplayBox gid={gidResponse} onClose={() => setShowGIDBox(false)} />
      )}
      </form>
    </div>
  );
};

export default Signup;
