import  {  useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Signup.css";

const Signup = ({ setAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [password, setPassword] = useState("");
  const [OTP, setOTP] = useState("");
  const navigate = useNavigate();

  const apiUrl = String(import.meta.env.VITE_API_ADMIN);

  //the code below is the api connection for signup button

  const handleSignup = async () => {
    if (isVerified && password) {
      setIsSigningUp(true);
      try {
        // Make a POST request to your backend API
        const response = await axios.post(
          `${apiUrl}/registration`, // Replace with your actual backend API endpoint
          { username: email, password: password, emailVerified: isVerified } // Send formData to the backend
        );
        console.log(response.data); // Log the response from the backend
        setAuthenticated(true);
        window.open("http://localhost:6001/login");
        // navigate("https://localhost:6001/login");
      } catch (error) {
        console.error("Error signing up:", error);
        alert("Error signing up. Please try again.");
      } finally {
        setIsSigningUp(false);
      }
    } else {
      alert("Please verify your email address before signing up.");
    }
  };

  const generateOTP = async () => {
    if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email address.");
    } else {
      const response = await axios.post(
        `http://localhost:6001/megatronix/paridhi/user/generate-otp?name=${null}&email=${email}`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Credentials": "true",
          },
        }
      );
      console.log(response);

      // to verify otp
    }
  };

  const verifyOTP = async () => {
    try {
      const response = await axios.post(
        `http://localhost:6001/megatronix/paridhi/user/verify-otp`,
        {
          email: email,
          otp: OTP,
        }
      );
      console.log(response);

      if (response.status === 200) {
        setIsVerified(true);
        alert("Email verified successfully!");
      } else {
        alert("Incorrect OTP. Please enter the correct OTP.");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      alert("Error verifying OTP. Please try again.");
    }
  };
  //there is no need of this function below but as the this was the verify otp function of the main website so i kept it if any problem occurs for connection

  return (
    <div className="hero">
      <h2
        className="Signup"
        style={{
          fontSize: "2.5rem",
          margin: "2rem",
        }}
      >
        Signup
      </h2>
      <form className="sign-form">
        <div
          style={{
            // margin: "2rem",
            display: "grid",
            fontSize: "1.5rem",
          }}
        >
          Email:
          {isVerified ? (
            <input
              name="email"
              type="email"
              placeholder="Verified"
              readOnly
              value={email}
              style={{
                fontSize: "1.5rem",
                height: "2rem",
              }}
            />
          ) : (
            <>
              <div className="input">
                <input
                  name="email"
                  type="email"
                  placeholder="Email id"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    fontSize: "1.5rem",
                  }}
                />
                <div>
                  <button
                    className="Verify"
                    onClick={generateOTP}
                    disabled={isVerified}
                    style={{
                      fontSize: "1rem",
                    }}
                  >
                    Verify
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="opt">
          <label htmlFor="otp" className="otp-label">
            OTP:
          </label>
          <div>
            <input
              type="text"
              placeholder="otp"
              className="otp-input"
              onChange={(e) => setOTP(e.target.value)}
            />
            <button
              onClick={verifyOTP}
              className="submit"
              style={{
                fontSize: "1rem",
              }}
            >
              submit OTP
            </button>
          </div>
        </div>
        <div
          style={{
            // margin: "0 6rem 0 2rem",
            marginBlock:'12px',
            fontSize: "1.5rem",
          }}
        >
          <label htmlFor="passoword">Password:</label>
          <div className="password-input">
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                // margin:"0 6rem 0 2rem",
                fontSize: "1.5rem",
              }}
            />

            <button
              className="sign-btn"
              type="button"
              onClick={handleSignup}
              // disabled={isSigningUp || !isVerified}
              style={{
                fontSize: "1rem",
              }}
            >
              {isSigningUp ? "Signing up..." : "Sign up"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
