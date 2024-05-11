import { useState, useEffect } from "react";
import axios from "axios";
import "./TidStyle.css";
import { useParams, useNavigate } from "react-router-dom";
import { set } from "firebase/database";

const TIDshow = () => {
  const navigate = useNavigate();
  const [tid, setTid] = useState(null);
  const [data, setData] = useState(null);
  const [paid, setPaid] = useState(false);
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
      domain: "coding",
      name: "Web Minds",
      apiToGetData: `check-tid/coding/web-minds`,
      apiToSendData: `update-tid/coding/web-minds`,
    },
    code_quest: {
      domain: "coding",
      name: "Code Quest",
      apiToGetData: `check-tid/coding/code-quest`,
      apiToSendData: `update-tid/coding/code-quest`,
    },
    codezen: {
      domain: "coding",
      name: "CodeZen",
      apiToGetData: `check-tid/coding/codezen`,
      apiToSendData: `update-tid/coding/codezen`,
    },
    roboKlassiker: {
      domain: "robotics",
      name: "Robo Klassiker",
      apiToGetData: `check-tid/robotics/robo-klassiker`,
      apiToSendData: `update-tid/robotics/robo-klassiker`,
    },
    triathlon: {
      domain: "robotics",
      name: "Triathlon",
      apiToGetData: `check-tid/robotics/triathlon`,
      apiToSendData: `update-tid/robotics/triathlon`,
    },
    throne_of_bots_8kg: {
      domain: "robotics",
      name: "Throne of Bots",
      apiToGetData: `check-tid/robotics/war-8kg`,
      apiToSendData: `check-tid/robotics/war-8kg`,
    },
    throne_of_bots_15kg: {
      domain: "robotics",
      name: "Throne of Bots",
      apiToGetData: `check-tid/robotics/war-15kg`,
      apiToSendData: `update-tid/robotics/war-15kg`,
    },

    line_trekker: {
      domain: "robotics",
      name: "Line Trekker",
      apiToGetData: `check-tid/robotics/line-trekker`,
      apiToSendData: `update-tid/robotics/line-trekker`,
    },

    setu_bandhan: {
      domain: "civil",
      name: "Setu Bandhan",
      apiToGetData: `check-tid/civil/setu-bandhan`,
      apiToSendData: `update-tid/civil/setu-bandhan`,
    },
    track_o_treasure: {
      domain: "civil",
      name: "Track o Treasure",
      apiToGetData: `check-tid/civil/tot`,
      apiToSendData: `update-tid/civil/tot`,
    },
    mega_arch: {
      domain: "civil",
      name: "Mega Arch",
      apiToGetData: `check-tid/civil/mega-arch`,
      apiToSendData: `update-tid/civil/mega-arch`,
    },

    electriquest: {
      domain: "electrical",
      name: "Electriquest",
      apiToGetData: `check-tid/electrical/electri-quest`,
      apiToSendData: `update-tid/electrical/electri-quest`,
    },

    table_tennis: {
      domain: "general",
      name: "Table Tennis",
      apiToGetData: `check-tid/general/table-tennis`,
      apiToSendData: `update-tid/general/table-tennis`,
    },
    binge_quiz: {
      domain: "general",
      name: "Binge Quiz",
      apiToGetData: `check-tid/general/binge-quiz`,
      apiToSendData: `update-tid/general/binge-quiz`,
    },
    carrom: {
      domain: "general",
      name: "Carrom",
      apiToGetData: `check-tid/general/carrom`,
      apiToSendData: `update-tid/general/carrom`,
    },
  };
  const events = eventInfo[eventName];

  const fetchData = async (tid) => {
    try {
      const response = await axios.get(
        `${apiUrl}/${events.apiToGetData}/${tid}`
      );

      if (response.status === 200) {
        setData(response.data);
        setPaid(response.data.paid);
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
      console.log(
        "URL  to send tid paid >>",
        `${apiUrl}/${events.apiToSendData}/${updatedData.tid}/${updatedData.paid}`
      );
      try {
        const response = axios
          .put(
            `${apiUrl}/${events.apiToSendData}/${updatedData.tid}/${updatedData.paid}`
          )
          .then((res) => {
            console.log("this is response >>", res);
            if (res.status === 200) {
              alert("Data updated successfully");
              setData(null);
              setPaid(false);
              setTid(null);
            } else if (res.status === 400) {
              alert("some error occured");
            }
          });
        console.log(response);
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
      <h4>{events.name}</h4>
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
              <strong>Selected Event:</strong> {events.name}
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
                  className="paid"
                />
                <span>Paid</span>
              </label>
            </div>
            <button
              onClick={(e) => {
                handleSubmit(e);
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
