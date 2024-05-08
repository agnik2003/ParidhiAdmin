import { useState, useEffect } from "react";
import axios from "axios";
import "./Crdstyle.css";
import { useParams } from "react-router-dom";

const CRDshow = () => {
  const [players, setPlayers] = useState([]);
  const [running, setrunning] = useState(1);
  const { eventName } = useParams();

  const eventInfo = {
    web_minds: {
      name: "Web Minds",
      apiToGetList: `http://localhost:6001/megatronix/paridhi/admin/crd/coding/web-minds`,
      apiToSendPlayed: `http://localhost:6001/megatronix/paridhi/admin/crd/coding/web-minds/`,
    },
    code_quest: {
      name: "Code Quest",
      apiToGetList: `http://localhost:6001/megatronix/paridhi/admin/crd/coding/code-quest`,
      apiToSendPlayed: `http://localhost:6001/megatronix/paridhi/admin/crd/coding/code-quest/`,
    },
    codezen: {
      name: "CodeZen",
      apiToGetList: `http://localhost:6001/megatronix/paridhi/admin/crd/coding/code-zen`,
      apiToSendPlayed: `http://localhost:6001/megatronix/paridhi/admin/crd/coding/code-zen/`,
      api: ``,
    },

    roboKlassiker: {
      name: "Robo Klassiker",
      apiToGetList: `http://localhost:6001/megatronix/paridhi/admin/crd/robotics/robo-klassiker`,
      apiToSendPlayed: `http://localhost:6001/megatronix/paridhi/admin/crd/coding/robo-klassiker/`,
    },
    triathlon: {
      name: "Triathlon",
      apiToGetList: `http://localhost:6001/megatronix/paridhi/admin/crd/robotics/triathlon`,
      apiToSendPlayed: `http://localhost:6001/megatronix/paridhi/admin/crd/coding/triathlon/`,
    },

    line_trekker: {
      name: "Line Trekker",
      apiToGetList: `http://localhost:6001/megatronix/paridhi/admin/crd/robotics/line-trekker`,
      apiToSendPlayed: `http://localhost:6001/megatronix/paridhi/admin/crd/coding/line-trekker/`,
    },

    setu_bandhan: {
      name: "Setu Bandhan",
      apiToGetList: `http://localhost:6001/megatronix/paridhi/admin/crd/robotics/setu-bandhan`,
      apiToSendPlayed: `http://localhost:6001/megatronix/paridhi/admin/crd/coding/setu-bandhan/`,
    },
    track_o_treasure: {
      name: "Track o Treasure",
      apiToGetList: `http://localhost:6001/megatronix/paridhi/admin/crd/civil/tot`,
      apiToSendPlayed: `http://localhost:6001/megatronix/paridhi/admin/crd/civil/tot/`,
    },
    mega_arch: {
      name: "Mega Arch",
      api: ``,
    },

    electriquest: {
      name: "Electriquest",
      api: ``,
    },

    tob8kg: {
      name: "TOB 8kg",
      api: ``,
    },
    tob15kg: {
      name: "TOB 15kg",
      api: ``,
    },

    table_tennis: {
      name: "Table Tennis",
      api: ``,
    },
    binge_quiz: {
      name: "Binge Quiz",
      api: ``,
    },
  };
  const event = eventInfo[eventName];

  const listOfParticipants = async () => {
    try {
      setrunning(running + 1);
      console.log("Running", running);
      const response = await axios.get(event.apiToGetList);
      console.log("Response", response);

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
      const updatedPlayer = { ...player, played: true };
      console.log("Player Data with Played true:", updatedPlayer);
      console.log(`${event.apiToSendPlayed}${updatedPlayer.tid}/${updatedPlayer.played}`);
      const response = await axios.put(
        `${event.apiToSendPlayed}${updatedPlayer.tid}/${updatedPlayer.played}`
      );

      // const response = { status: 200 };

      if (response.status === 200) {
        listOfParticipants();
      } else if (response.status === 400) {
        alert("some error occured");
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
            <th>Team Name</th>
            <th>TID</th>
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
          {players?.map((player) => (
            <tr key={player.id}>
              <td>{player.id}</td>
              <td>{player.number1}</td>
              <td>{player.teamname}</td>
              <td>{player.tid}</td>
              <td>{player.gid1}</td>
              <td>{player.gid2}</td>
              <td>{player.gid3}</td>
              <td>{player.gid4}</td>
              <td>{player.gid5}</td>
              <td>{player.played ? "Played" : "Not Played"}</td>
              <td>
                {!player.played && (
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
