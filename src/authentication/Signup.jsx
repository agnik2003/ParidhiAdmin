import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = ({ setAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [password, setPassword] = useState(""); 
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignup = () => {
    const dummyPassword = "PARIDHI2024"; // Dummy password
    if (isVerified && password === dummyPassword) {
      setIsSigningUp(true);
      setTimeout(() => {
        setAuthenticated(true);
        navigate("/");
      }, 2000);
    } else {
      alert("Please verify your email address before signing up.");
    }
  };

  
  //the code below is the api connection for signup button

  // const handleSignup = async () => {
  //   const dummyPassword = "PARIDHI2024"; // Dummy password
  //   if (isVerified && password === dummyPassword) {
  //     setIsSigningUp(true);
  //     try {
  //       // Make a POST request to your backend API
  //       const response = await axios.post(
  //         "YOUR_BACKEND_API_ENDPOINT", // Replace with your actual backend API endpoint
  //         formData // Send formData to the backend
  //       );
  //       console.log(response.data); // Log the response from the backend
  //       setAuthenticated(true);
  //       navigate("/");
  //     } catch (error) {
  //       console.error("Error signing up:", error);
  //       alert("Error signing up. Please try again.");
  //     } finally {
  //       setIsSigningUp(false);
  //     }
  //   } else {
  //     alert("Please verify your email address before signing up.");
  //   }
  // };

  const apiUrl = String(import.meta.env.VITE_API_ADMIN);


  const handleVerify = async () => {
    if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email address.");
    } else {
      // const response = await axios.post(
      //   `${apiUrl}/generate-otp?name=${name}&email=${email}`,
      //   {
      //     headers: {
      //       "Access-Control-Allow-Origin": "*",
      //       "Access-Control-Allow-Headers": "*",
      //       "Access-Control-Allow-Credentials": "true",
      //     },
      //   }
      // );
      // console.log(response);

      //to verify otp
      // try {
      //   const response = await axios.post(`${apiUrl}/verify-otp`, { email, otp });
      //   console.log(response);

      //   if (response.status === 200) {
      //     setIsVerified(true);
      //     alert("Email verified successfully!");
      //   } else {
      //     alert("Incorrect OTP. Please enter the correct OTP.");
      //   }
      // } catch (error) {
      //   console.error("Error verifying OTP:", error);
      //   alert("Error verifying OTP. Please try again.");
      // }

      const dummyOTP = "123456";
      const enteredOTP = prompt("Please enter the OTP sent to your email:");
      if (enteredOTP === dummyOTP) {
        setIsVerified(true);
        alert("Email verified successfully!");
      } else {
        alert("Incorrect OTP. Please enter the correct OTP.");
      }
    }
  };

  //there is no need of this function below but as the this was the verify otp function of the main website so i kept it if any problem occurs for connection

  // const handleOtpSubmit = async (otp) => {
  //   try {
  //     const response = await axios.post(`${apiUrl}/verify-otp`, { email, otp });
  //     // console.log(apiUrl)
  //     console.log(response);
  //     if (response.status === 200) {
  //       setIsVerified(true);
  //       setOtpPopup(false);
  //     } else {
  //       setIsOtpCorrect(false);
  //       alert("Incorrect OTP. Please enter the correct OTP.");
  //     }
  //   } catch (error) {
  //     console.error("Error verifying OTP:", error);
  //     alert("Error verifying OTP. Please try again.");
  //   }
  // };

  return (
    <div>
      <h2
        style={{
          fontSize:"2rem",
          margin:"2rem",
        }}
      >Signup</h2>
      <form>
        <div style={{
            margin:"2rem",
            fontSize:"1.5rem",
            }}>Email:
          {isVerified ? (
            <input
              name="email"
              type="email"
              placeholder="Verified"
              readOnly
              value={email}
              style={{
                fontSize:"1.5rem"
              }}
              
            />
          ) : (
            <>
              <input
                name="email"
                type="email"
                placeholder="Email id"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  fontSize:"1.5rem"
                }}
              />
              <button
                className="Verify"
                onClick={handleVerify}
                disabled={isVerified}
                style={{
                  margin:"1rem",
                  fontSize:"1rem",
                  }}
              >
                Verify
              </button>
            </>
          )}
        </div>

        <div style={{
            margin:"0 6rem 0 2rem",
            fontSize:"1.5rem"
          }}>
          <label htmlFor="passoword">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              // margin:"0 6rem 0 2rem",
              fontSize:"1.5rem"
            }}
          />
        </div>
        <button
          type="button"
          onClick={handleSignup}
          disabled={isSigningUp || !isVerified}
          style={{
            margin:"2rem",
            fontSize:"1.5rem"
          }}
        >
          {isSigningUp ? "Signing up..." : "Sign up"}
        </button>
      </form>
    </div>
  );
};

export default Signup;
