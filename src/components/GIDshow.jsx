import React, { useState } from "react";
import axios from "axios";
import "./Gidstyle.css";

const GIDshow = () => {
  const [gid, setGid] = useState(null);
  const [data, setData] = useState(null);
  const [paid, setPaid] = useState(false);

  const fetchData = (gid) => {
    //To get data from the backend
    // axios.get(`/your-backend-endpoint/${gid}`)
    //   .then(response => {
    //     setData(response.data);
    //     setPaid(response.data.paid);
    //   })
    //   .catch(error => {
    //     console.error('Error fetching data:', error);
    //   });
    const response = {
      id: 1,
      name: "John Doe",
      college: "Example University",
      year: "Senior",
      department: "Computer Science",
      roll: "CS101",
      email: "john.doe@example.com",
      phoneNumber: "9876543210",
      gid: "example_gid",
      paid: false,
      isEmailVerified: true,
    };
    setData(response);
    setPaid(response.paid);
  };

  const handlePaidToggle = () => {
    setPaid(!paid);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (gid && data) {
      const updatedData = { ...data, paid: paid };
      console.log("Updated Data to be sent to the backend:", updatedData);
      // To send data to backend axios.post('/your-backend-endpoint', updatedData).then(...).catch(...)
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
