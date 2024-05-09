import  { useState , useEffect} from "react";
import axios from "axios";
import "./CheckProfile_GID.css";
import { useParams, useNavigate } from "react-router-dom";

const ProfileCheck_GID = () => {
  const navigate = useNavigate();
  const [gid, setGid] = useState(null);
  const [data, setData] = useState(null);

  const apiUrl = String(import.meta.env.VITE_API_ADMIN);

  useEffect(() => {
    if (!sessionStorage.getItem("isLoggedIn")) {
      navigate("/login");
    } else {
      
    }
  }, []);

  const token = localStorage.getItem("token");
  const fetchData = async () => {
    try {
      const response = await axios.get(`${apiUrl}/check-gid/${gid}`);
      console.log(token);
      if (response.status === 200) {
        setData(response.data);
        console.log(response);
      } else if (response.status === 404) {
        alert("No data found");
      } else {
        alert("Some error occured");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };



  return (
    <div className="profile-check-component">
      <div className="input-section">
        <input
          type="text"
          value={gid === null ? "" : gid}
          onChange={(e) => setGid(e.target.value)}
          placeholder="Enter TID"
        />
        <button onClick={fetchData}>Check Profile</button>
      </div>
      {data && (
        <div className="profile-details">
          
          <p>
            <strong>Name:</strong> {data.name}
          </p>
          <p>
            <strong>GID:</strong> {data.gid}
          </p>
          <p>
            <strong>Email:</strong> {data.email}
          </p>
          <p>
            <strong>Department:</strong> {data.department}
          </p>
          <p>
            <strong>Phone Number:</strong> {data.phoneNumber}
          </p>
          <p>
            <strong>College:</strong> {data.college}
          </p>
          <p>
            <strong>Paid:</strong> {data.paid?"Yes":"No"}
          </p>
          <p>
            <strong>Roll No:</strong> {data.roll}
          </p>
          <p>
            <strong>Year:</strong> {data.year}
          </p>
        </div>
      )}
    </div>
  );
};

export default ProfileCheck_GID;
