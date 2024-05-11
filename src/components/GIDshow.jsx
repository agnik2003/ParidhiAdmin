import { useState, useEffect } from "react";
import axios from "axios";
import "./Gidstyle.css";
import { useParams, useNavigate } from "react-router-dom";
import { set } from "firebase/database";

const GIDshow = () => {
  const navigate = useNavigate();
  const [gid, setGid] = useState(null);
  const [data, setData] = useState(null);
  const [paid, setPaid] = useState(false);

  const apiUrl = String(import.meta.env.VITE_API_ADMIN);

  useEffect(() => {
    if (!sessionStorage.getItem("isLoggedIn")) {
      navigate("/login");
    } else {
    }
  }, []);
  const fetchData = async (gid) => {
    try {
      const response = await axios.get(`${apiUrl}/check-gid/${gid}`);

      if (response.status === 200) {
        setData(response.data);
        setPaid(response.data.paid);
      } else if (response.status === 404) {
        alert("No data found");
      } else {
        alert("Some error occurred");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handlePaidToggle = () => {
    setPaid(!paid);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (gid && data) {
      const updatedData = { ...data, paid: paid };
      console.log("Updated Data to be sent to the backend:", updatedData);
      try {
        const response = await axios.put(
          `${apiUrl}/update-gid/${updatedData.gid}/${updatedData.paid}`
        );
        if (response.status === 200) {
          alert("Data updated successfully");
          setData(null);
          setPaid(false);
          setGid(null);
        } else if (response.status === 400) {
          alert("Some error occurred");
        }
      } catch (error) {
        console.error("Error updating data:", error);
      }
    }
  };

  const handleButtonClick = () => {
    if (gid) {
      fetchData(gid);
    }
  };

  return (
    <div className="your-component">
      <div className="input-section">
        <input
          type="text"
          value={gid === null ? "" : gid}
          onChange={(e) => setGid(e.target.value)}
          placeholder="Enter GID"
        />
        <button onClick={handleButtonClick}>GO - YOYO</button>
      </div>
      <form onSubmit={handleSubmit} className="form-section">
        {data && (
          <>
            <p>
              <strong>Name:</strong> {data.name}
            </p>
            <p>
              <strong>GID:</strong> {data.gid}
            </p>
            <p>
              <strong>College:</strong> {data.college}
            </p>
            <p>
              <strong>Year:</strong> {data.year}
            </p>
            <p>
              <strong>Department:</strong> {data.department}
            </p>
            <p>
              <strong>Roll:</strong> {data.roll}
            </p>
            <p>
              <strong>Email:</strong> {data.email}
            </p>
            <p>
              <strong>Phone Number:</strong> {data.phoneNumber}
            </p>
            <div className="paid-section">
              <label>
                <input
                  type="checkbox"
                  checked={paid}
                  onChange={handlePaidToggle}
                  className="paid"
                />
                <span>Paid</span>
              </label>
            </div>
            <button type="submit">Submit</button>
          </>
        )}
      </form>
    </div>
  );
};

export default GIDshow;
