import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Crdstyle.css";
import { useParams } from "react-router-dom";
import { set } from "firebase/database";

const CRDshow = () => {
  const [players, setPlayers] = useState([]);
  const [running, setrunning] = useState(1);
  const { eventName } = useParams();

  const eventInfo = {
    bugblitz: {
      name: "BugBlitz",
      max: 5,
      teamname: true,
    },
  };
  const event = eventInfo[eventName];

  const listOfParticipants = async () => {
    try {
      setrunning(running + 1);
      console.log("Running", running);
      // const response = await axios.get(`https://api/${eventName}`);

      const response = {
        status: 200,
        data: [
          {
            id: "1",
            GID1: "1234231",
            GID2: "123423sd1",
            GID3: "123423sdf1",
            GID4: "12342sfd31",
            GID5: "123423sdfs1",
            Number: "2727272722",
            Played: false,
          },
        ],
      };
      if (response.status === 200) {
        setPlayers(response.data);
      } else {
        alert("No data found");
      }
    } catch (error) {
      console.error("Error fetching participant list:", error);
    }
  };

  const handleAction = async (player) => {
    try {
      const updatedPlayer = { ...player, Played: true };

      console.log("Player Data with Played true:", updatedPlayer);
      // const response = await axios.put(`https://api/${eventName}`, updatedPlayer);
      const response = { status: 200 };

      if (response.status === 200) {
        listOfParticipants();
      } else if (response.status === 400) {
      }
    } catch (error) {
      console.error("Error performing action:", error);
    }
  };

  useEffect(() => {
    listOfParticipants();
  }, []);

  return (
    <div className="main">
      <div className="heading">
        <h1 style={{ textAlign: "center" }}>
          {event ? event.name : "Event Not Found"}
        </h1>
      </div>
      <div className="table">
        <table style={{ border: "2px solid black" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Number</th>
              <th>GID1</th>
              <th>GID2</th>
              <th>GID3</th>
              <th>GID4</th>
              <th>GID5</th>
              <th>Played</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player) => (
              <tr key={player.id}>
                <td>{player.id}</td>
                <td>{player.Number}</td>
                <td>{player.GID1}</td>
                <td>{player.GID2}</td>
                <td>{player.GID3}</td>
                <td>{player.GID4}</td>
                <td>{player.GID5}</td>
                <td>{player.Played ? "Played" : "Not Played"}</td>
                <td>
                  {!player.Played && (
                    <button onClick={() => handleAction(player)}>Action</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CRDshow;
