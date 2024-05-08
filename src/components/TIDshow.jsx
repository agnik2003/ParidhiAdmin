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
      apiToGetData: ``,
      apiToSendData: ``,
    },
    code_quest: {
      name: "Codezen",
      apiToGetData: ``,
      apiToSendData: ``,
    },
    codezen: {
      name: "Code Quest",
      apiToGetData: ``,
      apiToSendData: ``,
    },

    roboKlassiker: {
      name: "Robo Klassiker",
      apiToGetData: ``,
      apiToSendData: ``,
    },
    throne_of_bots: {
      name: "Throne of Bots",
      apiToGetData: ``,
      apiToSendData: ``,
    },

    line_trekker: {
      name: "Line Trekker",
      apiToGetData: ``,
      apiToSendData: ``,
    },

    setu_bandhan: {
      name: "Setu Bandhan",
      apiToGetData: ``,
      apiToSendData: ``,
    },
    track_o_treasure: {
      name: "Track o Treasure",
      apiToGetData: ``,
      apiToSendData: ``,
    },
    mega_arch: {
      name: "Mega Arch",
      apiToGetData: ``,
      apiToSendData: ``,
    },

    electriquest: {
      name: "Electriquest",
      apiToGetData: ``,
      apiToSendData: ``,
    },

    tob8kg: {
      name: "TOB 8kg",
      apiToGetData: ``,
      apiToSendData: ``,
    },
    tob15kg: {
      name: "TOB 15kg",
      apiToGetData: ``,
      apiToSendData: ``,
    },

    table_tennis: {
      name: "Table Tennis",
      apiToGetData: ``,
      apiToSendData: ``,
    },
    binge_quiz: {
      name: "Binge Quiz",
      apiToGetData: ``,
      apiToSendData: ``,
    },
  };
  const event = eventInfo[eventName];

  console.log("TID", event);
  const fetchData = async (tid) => {
    try {
      const response = await axios.get(`https://api/${tid}`);
      // const response = {
      //   id: 123,
      //   teamname: "Team A",
      //   selectedcodingevent: "codequest",
      //   gid1: "abc123",
      //   gid2: "def456",
      //   number1: "9876543210",
      //   tid: "tid123",
      //   played: false,
      //   paid: false,
      // };
      if (response.status === 200) {
        setData(response);
        setPaid(response.paid);
      } else if (response.status === 404) {
        alert("No data found");
      } else {
        alert("Some error occured");
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
    if (tid && data) {
      const updatedData = { ...data, paid: paid };
      console.log("Updated Data to be sent to the backend:", updatedData);
      try {
        // Example: const response = axios.post('/your-backend-endpoint', updatedData)
        if (response.status === 200) {
          alert("Data updated successfully");
        } else if (response.status === 400) {
          alert("some error occured");
        }
      } catch (error) {
        console.error("Error sending data:", error);
      }
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
              <strong>GID 3:</strong> {data.gid3}
            </p>
            <p>
              <strong>GID 4:</strong> {data.gid4}
            </p>
            <p>
              <strong>GID 5:</strong> {data.gid5}
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
            <button
              onClick={(e) => {
                e.preventDefault();
                tidBankendHandler();
              }}
              type="submit"
            >
              Submit
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default TIDshow;
