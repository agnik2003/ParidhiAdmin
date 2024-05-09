import React, { useState } from "react";
import axios from "axios";
import "./Gidstyle.css";

const GIDshow = () => {
  const [gid, setGid] = useState(null);
  const [data, setData] = useState(null);
  const [paid, setPaid] = useState(false);

  const fetchData = async (gid) => {
    try {
      const response = await axios.get(`https://api/${gid}`);
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
        const response = await axios.post(
          "/your-backend-endpoint",
          updatedData
        );
        if (response.status === 200) {
          alert("Data updated successfully");
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
