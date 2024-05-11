import { useState,useEffect } from "react";
import axios from "axios";
import "./CheckProfile_TID.css";
import { useParams, useNavigate } from "react-router-dom";

const ProfileCheck_TID = () => {
  const navigate = useNavigate();
  const [tid, setTid] = useState(null);
  const [data, setData] = useState(null);
  const { eventName } = useParams();

  const apiUrl = String(import.meta.env.VITE_API_ADMIN);

  useEffect(() => {
    if (!sessionStorage.getItem("isLoggedIn")) {
      navigate("/login");
    } else {
      
    }
  }, []);
  

  const eventInfo = {
    web_minds: {
      name: "Web Minds",
      api: `check-tid/coding/web-minds`,
    },
    code_quest: {
      name: "Codezen",
      api: `check-tid/coding/code-quest`,
    },
    codezen: {
      name: "Code Quest",
      api: `check-tid/coding/codezen`,
    },

    roboKlassiker: {
      name: "Robo Klassiker",
      api: `check-tid/robotics/robo-klassiker`,
    },

    line_trekker: {
      name: "Line Trekker",
      api: `check-tid/robotics/line-trekker`,
    },

    setu_bandhan: {
      name: "Setu Bandhan",
      api: `check-tid/civil/setu-bandhan`,
    },
    track_o_treasure: {
      name: "Track o Treasure",
      api: `check-tid/civil/tot`,
    },
    mega_arch: {
      name: "Mega Arch",
      api: `check-tid/civil/mega-arch`,
    },

    electriquest: {
      name: "Electriquest",
      api: `check-tid/electrical/electri-quest`,
    },

    throne_of_bots_8kg: {
      name: "TOB 8kg",
      api: `check-tid/robotics/war-8kg`,
    },
    throne_of_bots_15kg: {
      name: "TOB 15kg",
      api: `check-tid/robotics/war-15kg`,
    },

    table_tennis: {
      name: "Table Tennis",
      api: `check-tid/general/table-tennis`,
    },
    binge_quiz: {
      name: "Binge Quiz",
      api: `check-tid/general/binge-quiz`,
    },
     binge_quiz: {
      name: "Carrom",
      api: `check-tid/general/carrom`,
    },
  };
  const event = eventInfo[eventName];

  const fetchData = async (tid) => {
    try {
      const response = await axios.get(`${apiUrl}/${event.api}/${tid}`);
      if (response.status === 200) {
        setData(response.data);
        console.log(response);
      } else if (response.status === 404) {
        alert("No data found");
      } else {
        alert("Some error occured");
      }
    } catch (error) {
      console.log("Error", error);
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
            <strong>Number 1:</strong> {data.number1}
          </p>
          <p>
            <strong>GID 1:</strong> {data.gid1?data.gid1:"-"}
          </p>
          <p>
            <strong>GID 2:</strong> {data.gid2?data.gid2:"-"}
          </p>
          <p>
            <strong>GID 3:</strong> {data.gid3?data.gid3:"-"}
          </p>
          <p>
            <strong>GID 4:</strong> {data.gid4?data.gid4:"-"}
          </p>
          <p>
            <strong>GID 5:</strong> {data.gid5?data.gid5:"-"}
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

export default ProfileCheck_TID;
