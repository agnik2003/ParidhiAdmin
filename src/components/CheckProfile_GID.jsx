import React, { useState } from "react";
import axios from "axios";
import "./CheckProfile_GID.css";

const ProfileCheck_GID = () => {
  const [tid, setTid] = useState(null);
  const [data, setData] = useState(null);

  const fetchData = (tid) => {
  //const response = await axios.get(`https://api/${tid}`)
    const response = {
      status: 200,
      data: {
        id: 123,
        teamname: "Team A",
        selectedcodingevent: "codequest",
        gid1: "abc123",
        gid2: "def456",
        number1: "9876543210",
        tid: "tid123",
        played: false,
        paid: true,
      },
    };
    if (response.status === 200) {
      setData(response);
    } else if (response.status === 404) {
      alert("No data found");
    } else {
      alert("Some error occured");
    }
  };

  const handleButtonClick = () => {
    if (tid) {
      fetchData(tid);
    }
  };

  return (
    <div className="profile-check-component">
      <div className="input-section">
        <input
          type="text"
          value={tid === null ? "" : tid}
          onChange={(e) => setTid(e.target.value)}
          placeholder="Enter TID"
        />
        <button onClick={handleButtonClick}>Check Profile</button>
      </div>
      {data && (
        <div className="profile-details">
          <p>
            <strong>Team Name:</strong> {data.teamname}
          </p>
          <p>
            <strong>Selected Coding Event:</strong> {data.selectedcodingevent}
          </p>
          <p>
            <strong>GID 1:</strong> {data.gid1}
          </p>
          <p>
            <strong>GID 2:</strong> {data.gid2}
          </p>
          <p>
            <strong>Number 1:</strong> {data.number1}
          </p>
          <p>
            <strong>TID:</strong> {data.tid}
          </p>
          <p>
            <strong>Played:</strong> {data.played ? "Yes" : "No"}
          </p>
          <p>
            <strong>Paid:</strong> {data.paid ? "Yes" : "No"}
          </p>
        </div>
      )}
    </div>
  );
};

export default ProfileCheck_GID;
