import React, { useState } from "react";
import axios from "axios";
import "./CheckProfile_GID.css";

const ProfileCheck_GID = () => {
  const [gid, setGid] = useState(null);
  const [data, setData] = useState(null);

  const fetchData = async (gid) => {
    try {
      const response = await axios.get(`https://api/${gid}`);

      if (response.status === 200) {
        setData(response);
      } else if (response.status === 404) {
        alert("No data found");
      } else {
        alert("Some error occured");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleButtonClick = () => {
    if (gid) {
      fetchData(gid);
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
            <strong>Played:</strong> {data.played}
          </p>
          <p>
            <strong>Paid:</strong> {data.paid}
          </p>
        </div>
      )}
    </div>
  );
};

export default ProfileCheck_GID;
