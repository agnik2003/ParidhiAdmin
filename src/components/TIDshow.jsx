import React, { useState } from "react";
import axios from "axios";
import "./TidStyle.css";
import { useParams } from "react-router-dom";

const TIDshow = () => {
  const [tid, setTid] = useState(null);
  const [data, setData] = useState(null);
  const [paid, setPaid] = useState(false);
  const { eventName } = useParams();

  const eventInfo = {
    
    web_minds: {
      name: "Web Minds",
      api:``,
    },
    code_quest:{
      name:"Codezen",
      api:``,
    },
    codezen:{
      name:"Code Quest",
      api:``,
    },
    
    roboKlassiker:{
      name:"Robo Klassiker",
      api:``,
    },
    throne_of_bots:{
      name:"Throne of Bots",
      api:``,
    },

    line_trekker:{
      name:"Line Trekker",
      api:``,
    },

    setu_bandhan:{
      name:"Setu Bandhan",
      api:``,
    },
    track_o_treasure:{
      name:"Track o Treasure",
      api:``,
    },
    mega_arch:{
      name:"Mega Arch",
      api:``,
    },

    electriquest:{
      name:"Electriquest",
      api:``,
    },

    tob8kg:{
      name:"TOB 8kg",
      api:``,
    },
    tob15kg:{
      name:"TOB 15kg",
      api:``,
    },
    
    table_tennis:{
      name:"Table Tennis",
      api:``,
    },
    binge_quiz:{
      name:"Binge Quiz",
      api:``,
    },
  };
  const event = eventInfo[eventName];

  console.log("TID", event);
  const fetchData = (tid) => {
    // axios.get(`/your-backend-endpoint/${tid}`)
    //   .then(response => {
    //     setData(response.data);
    //     setPaid(response.data.paid);
    //   })
    //   .catch(error => {
    //     console.error('Error fetching data:', error);
    //   });
    const response = {
      id: 123,
      teamname: "Team A",
      selectedcodingevent: "codequest",
      gid1: "abc123",
      gid2: "def456",
      number1: "9876543210",
      tid: "tid123",
      played: false,
      paid: false,
    };
    setData(response);
    setPaid(response.paid);
  };

  const handlePaidToggle = () => {
    setPaid(!paid);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (tid && data) {
      const updatedData = { ...data, paid: paid };
      console.log("Updated Data to be sent to the backend:", updatedData);
      // Example: axios.post('/your-backend-endpoint', updatedData).then(...).catch(...)
    }
  };

  const handleButtonClick = () => {
    if (tid) {
      fetchData(tid);
    }
  };

  return (
    <div className="your-tid-component">
      <div className="input-section">
        <input
          type="text"
          value={tid === null ? "" : tid}
          onChange={(e) => setTid(e.target.value)}
          placeholder="Enter TID"
        />
        <button onClick={handleButtonClick}>Fetch Data</button>
      </div>
      <form onSubmit={handleSubmit} className="form-section">
        {data && (
          <>
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
            <div className="paid-section">
              <label>
                <input
                  type="checkbox"
                  checked={paid}
                  onChange={handlePaidToggle}
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

export default TIDshow;
