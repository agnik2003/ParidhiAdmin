import axios from "axios";
import { useState , useEffect } from "react";
import './Login.css';
import { useParams, useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();
  const apiUrl = String(import.meta.env.VITE_API_ADMIN);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const loginhandler = async () => {
    try {
      console.log(email, password);
      const response = await axios.post(`${apiUrl}/login`,
      {
        username: email,
        password: password,
      });

      // const response ={
      //   status:200
      // }
      
      if (response.status === 200) {
        console.log("Login Successful");
        // localStorage.setItem("token", response.data.token);
        sessionStorage.setItem("isLoggedIn",email);
        navigate("/");
        console.log(sessionStorage.setItem("isLoggedIn"))
      } else if (response.status === 400){
        alert("Failed to login");
      } else if (response.status === 404){
        alert("User not found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div 
      className="container"
      style={{ display: "block" }}>
        <h1>Login</h1>
        <div className="contain">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={loginhandler}>Login</button>
      </div>
      </div>
    </>
  );
};

export default Login;
