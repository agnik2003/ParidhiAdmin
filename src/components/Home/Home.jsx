import { useState , useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if (!sessionStorage.getItem("isLoggedIn")) {
          navigate("/login");
        } else {
          
        }
      }, []);
  return (
    <>
      <div
        style={{
          height: "90vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Welcome To Admin Portal</h1>
      </div>
    </>
  );
};

export default Home;
