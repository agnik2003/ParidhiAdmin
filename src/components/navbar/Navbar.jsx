import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [showTIDDropdown, setShowTIDDropdown] = useState(false);
  const [showCRDDropdown, setShowCRDDropdown] = useState(false);
  const [showCheckProfileDropdown, setShowCheckProfileDropdown] =
    useState(false);
  const [showCodingDropdown, setShowCodingDropdown] = useState(false);
  const [showProfileCheckCodingDropdown, setShowProfileCheckCodingDropdown] =
    useState(false);
  const [dropdownTimer, setDropdownTimer] = useState(null);

  const handleTIDMouseEnter = () => {
    if (dropdownTimer) {
      clearTimeout(dropdownTimer);
    }
    setShowTIDDropdown(true);
  };

  const handleTIDMouseLeave = () => {
    setDropdownTimer(
      setTimeout(() => {
        setShowTIDDropdown(false);
        setShowCodingDropdown(false);
      }, 1000)
    );
  };

  const handleCRDMouseEnter = () => {
    if (dropdownTimer) {
      clearTimeout(dropdownTimer);
    }
    setShowCRDDropdown(true);
  };

  const handleCRDMouseLeave = () => {
    setDropdownTimer(
      setTimeout(() => {
        setShowCRDDropdown(false);
        setShowCodingDropdown(false);
      }, 1000)
    );
  };

  const handleCheckProfileMouseEnter = () => {
    if (dropdownTimer) {
      clearTimeout(dropdownTimer);
    }
    setShowCheckProfileDropdown(true);
  };

  const handleCheckProfileMouseLeave = () => {
    setDropdownTimer(
      setTimeout(() => {
        setShowCheckProfileDropdown(false);
        setShowCodingDropdown(false);
      }, 1000)
    );
  };

  const handleCodingMouseEnter = () => {
    setShowCodingDropdown(true);
    if (dropdownTimer) {
      clearTimeout(dropdownTimer);
    }
  };

  const handleCodingMouseLeave = () => {
    setDropdownTimer(
      setTimeout(() => {
        setShowCodingDropdown(false);
        setShowProfileCheckCodingDropdown(false);
      }, 1000)
    );
  };

  const handleProfileCheckCodingMouseEnter = () => {
    setShowProfileCheckCodingDropdown(true);
    if (dropdownTimer) {
      clearTimeout(dropdownTimer);
    }
  };

  const handleProfileCheckCodingMouseLeave = () => {
    setDropdownTimer(
      setTimeout(() => {
        setShowProfileCheckCodingDropdown(false);
      }, 1000)
    );
  };

  const handleCloseDropdowns = () => {
    setShowTIDDropdown(false);
    setShowCRDDropdown(false);
    setShowCheckProfileDropdown(false);
    setShowCodingDropdown(false);
    setShowProfileCheckCodingDropdown(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleCloseDropdowns);

    return () => {
      document.removeEventListener("click", handleCloseDropdowns);
      if (dropdownTimer) {
        clearTimeout(dropdownTimer);
      }
    };
  }, [dropdownTimer]);

  return (
    <div className="navbar">
      <NavLink className="cursor" to="/" onClick={handleCloseDropdowns}>
        HOME
      </NavLink>
      <div className="nav-item">
        <NavLink
          className="cursor"
          onMouseEnter={handleTIDMouseEnter}
          onMouseLeave={handleTIDMouseLeave}
          onClick={() => {
            setShowCRDDropdown(false);
            setShowCheckProfileDropdown(false);
            setShowCodingDropdown(false);
          }}
        >
          TID
        </NavLink>
        {showTIDDropdown && (
          <div className="dropdown">
            <div
              className="cursor"
              onMouseEnter={handleCodingMouseEnter}
              onMouseLeave={handleCodingMouseLeave}
            >
              CODING
              {showCodingDropdown && (
                <div className="nested-dropdown">
                  <NavLink
                    className="cursor nested"
                    to="TIDshow/Coding/bugblitz"
                  >
                    Bug Blitz
                  </NavLink>
                  <NavLink
                    className="cursor nested"
                    to="TIDshow/Coding/web_minds"
                  >
                    Web Minds
                  </NavLink>
                  <NavLink
                    className="cursor nested"
                    to="TIDshow/Coding/code_quset"
                  >
                    Code Quest
                  </NavLink>
                  <NavLink
                    className="cursor nested"
                    to="TIDshow/Coding/codezen"
                  >
                    Codezen
                  </NavLink>
                </div>
              )}
            </div>

            <div
              className="cursor"
              onMouseEnter={handleCodingMouseEnter}
              onMouseLeave={handleCodingMouseLeave}
            >
              Manual Robotics
              {showCodingDropdown && (
                <div className="nested-dropdown">
                  <NavLink
                    className="cursor nested"
                    to="TIDshow/manual_robotics/trilathon"
                  >
                    Trilathon
                  </NavLink>
                  <NavLink
                    className="cursor nested"
                    to="TIDshow/manual_robotics/roboKlassers"
                  >
                    Robo Klassers
                  </NavLink>
                  <NavLink
                    className="cursor nested"
                    to="TIDshow/manual_robotics/chakravyuh"
                  >
                    Chakravyuh
                  </NavLink>
                  <NavLink
                    className="cursor nested"
                    to="TIDshow/manual_robotics/striker_clash"
                  >
                    Striker Clash
                  </NavLink>
                  <NavLink
                    className="cursor nested"
                    to="TIDshow/manual_robotics/thron_of_bots"
                  >
                    Throne of Bots
                  </NavLink>
                </div>
              )}
            </div>

            <div
              className="cursor"
              onMouseEnter={handleCodingMouseEnter}
              onMouseLeave={handleCodingMouseLeave}
            >
              Autonomous Robotics
              {showCodingDropdown && (
                <div className="nested-dropdown">
                  <NavLink
                    className="cursor nested"
                    to="TIDshow/autonomous_robotics/line_trekker"
                  >
                    Line Trekker
                  </NavLink>
                </div>
              )}
            </div>

            <div
              className="cursor"
              onMouseEnter={handleCodingMouseEnter}
              onMouseLeave={handleCodingMouseLeave}
            >
              CIVIL
              {showCodingDropdown && (
                <div className="nested-dropdown">
                  <NavLink
                    className="cursor nested"
                    to="TIDshow/civil/setu_bandhan"
                  >
                    Setu Bandhan
                  </NavLink>
                  <NavLink
                    className="cursor nested"
                    to="TIDshow/civil/setu_bandhan"
                  >
                    Track o Treasure
                  </NavLink>
                  <NavLink
                    className="cursor nested"
                    to="TIDshow/civil/cadOmania"
                  >
                    CAD_O_MANIA
                  </NavLink>
                  /
                  <NavLink
                    className="cursor nested"
                    to="TIDshow/civil/mega_arch"
                  >
                    Mega Arch
                  </NavLink>
                </div>
              )}
            </div>

            <div
              className="cursor"
              onMouseEnter={handleCodingMouseEnter}
              onMouseLeave={handleCodingMouseLeave}
            >
              ELECTRICAL
              {showCodingDropdown && (
                <div className="nested-dropdown">
                  <NavLink
                    className="cursor nested"
                    to="TIDshow/electrical/electriquest"
                  >
                    Electriquest
                  </NavLink>
                  <NavLink
                    className="cursor nested"
                    to="TIDshow/electrical/power_blitz"
                  >
                    Power Blitz
                  </NavLink>
                </div>
              )}
            </div>

            <div
              className="cursor"
              onMouseEnter={handleCodingMouseEnter}
              onMouseLeave={handleCodingMouseLeave}
            >
              GAMING
              {showCodingDropdown && (
                <div className="nested-dropdown">
                  <NavLink
                    className="cursor nested"
                    to="TIDshow/gaming/valorant_lan"
                  >
                    Valorant LAN
                  </NavLink>
                  <NavLink className="cursor nested" to="TIDshow/gaming/bgmi">
                    BGMI
                  </NavLink>
                  <NavLink
                    className="cursor nested"
                    to="TIDshow/gaming/eFootball-Pes"
                  >
                    E-Football_PES
                  </NavLink>
                  <NavLink
                    className="cursor nested"
                    to="TIDshow/gaming/efac2024"
                  >
                    EFAC 2024
                  </NavLink>
                  <NavLink
                    className="cursor nested"
                    to="TIDshow/gaming/8_ball_pool"
                  >
                    8 Ball Pool
                  </NavLink>
                </div>
              )}
            </div>

            <div
              className="cursor"
              onMouseEnter={handleCodingMouseEnter}
              onMouseLeave={handleCodingMouseLeave}
            >
              General
              {showCodingDropdown && (
                <div className="nested-dropdown">
                  <NavLink className="cursor nested" to="TIDshow/genral/carrom">
                    Carrom
                  </NavLink>
                  <NavLink
                    className="cursor nested"
                    to="TIDshow/genral/table_tennis"
                  >
                    Table Tennis
                  </NavLink>
                  <NavLink
                    className="cursor nested"
                    to="TIDshow/genral/binge_quiz"
                  >
                    Binge Quiz
                  </NavLink>
                  <NavLink className="cursor nested" to="TIDshow/genral/chess">
                    CHESS
                  </NavLink>
                  <NavLink className="cursor nested" to="TIDshow/genral/darts">
                    DARTS
                  </NavLink>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="nav-item">
        <NavLink
          className="cursor"
          onMouseEnter={handleCRDMouseEnter}
          onMouseLeave={handleCRDMouseLeave}
          onClick={() => {
            setShowTIDDropdown(false);
            setShowCheckProfileDropdown(false);
            setShowCodingDropdown(false);
          }}
        >
          CRD
        </NavLink>
        {showCRDDropdown && (
          <div className="dropdown">
            <div
              className="cursor"
              onMouseEnter={handleCodingMouseEnter}
              onMouseLeave={handleCodingMouseLeave}
            >
              CODING
              {showCodingDropdown && (
                <div className="nested-dropdown">
                  <NavLink
                    className="cursor nested"
                    to="CRDshow/Coding/bugblitz"
                  >
                    Bug Blitz
                  </NavLink>
                  <NavLink
                    className="cursor nested"
                    to="CRDshow/Coding/web_minds"
                  >
                    Web Minds
                  </NavLink>
                  <NavLink
                    className="cursor nested"
                    to="CRDshow/Coding/code_quset"
                  >
                    Code Quest
                  </NavLink>
                  <NavLink className="cursor nested" to="CRDshow/Coding/codezen">
                    Codezen
                  </NavLink>
                </div>
              )}
            </div>

            <div
              className="cursor"
              onMouseEnter={handleCodingMouseEnter}
              onMouseLeave={handleCodingMouseLeave}
            >
              Manual Robotics
              {showCodingDropdown && (
                <div className="nested-dropdown">
                  <NavLink
                    className="cursor nested"
                    to="CRDshow/manual_robotics/trilathon"
                  >
                    Trilathon
                  </NavLink>
                  <NavLink
                    className="cursor nested"
                    to="CRDshow/manual_robotics/roboKlassers"
                  >
                    Robo Klassers
                  </NavLink>
                  <NavLink
                    className="cursor nested"
                    to="CRDshow/manual_robotics/chakravyuh"
                  >
                    Chakravyuh
                  </NavLink>
                  <NavLink
                    className="cursor nested"
                    to="CRDshow/manual_robotics/striker_clash"
                  >
                    Striker Clash
                  </NavLink>
                  <NavLink
                    className="cursor nested"
                    to="CRDshow/manual_robotics/thron_of_bots"
                  >
                    Throne of Bots
                  </NavLink>
                </div>
              )}
            </div>

            <div
              className="cursor"
              onMouseEnter={handleCodingMouseEnter}
              onMouseLeave={handleCodingMouseLeave}
            >
              Autonomous Robotics
              {showCodingDropdown && (
                <div className="nested-dropdown">
                  <NavLink
                    className="cursor nested"
                    to="CRDshow/autonomous_robotics/line_trekker"
                  >
                    Line Trekker
                  </NavLink>
                </div>
              )}
            </div>

            <div
              className="cursor"
              onMouseEnter={handleCodingMouseEnter}
              onMouseLeave={handleCodingMouseLeave}
            >
              CIVIL
              {showCodingDropdown && (
                <div className="nested-dropdown">
                  <NavLink
                    className="cursor nested"
                    to="CRDshow/civil/setu_bandhan"
                  >
                    Setu Bandhan
                  </NavLink>
                  <NavLink
                    className="cursor nested"
                    to="CRDshow/civil/setu_bandhan"
                  >
                    Track o Treasure
                  </NavLink>
                  <NavLink
                    className="cursor nested"
                    to="CRDshow/civil/cadOmania"
                  >
                    CAD_O_MANIA
                  </NavLink>
                  <NavLink
                    className="cursor nested"
                    to="CRDshow/civil/mega_arch"
                  >
                    Mega Arch
                  </NavLink>
                </div>
              )}
            </div>

            <div
              className="cursor"
              onMouseEnter={handleCodingMouseEnter}
              onMouseLeave={handleCodingMouseLeave}
            >
              ELECTRICAL
              {showCodingDropdown && (
                <div className="nested-dropdown">
                  <NavLink
                    className="cursor nested"
                    to="CRDshow/electrical/electriquest"
                  >
                    Electriquest
                  </NavLink>
                  <NavLink
                    className="cursor nested"
                    to="CRDshow/electrical/power_blitz"
                  >
                    Power Blitz
                  </NavLink>
                </div>
              )}
            </div>

            <div
              className="cursor"
              onMouseEnter={handleCodingMouseEnter}
              onMouseLeave={handleCodingMouseLeave}
            >
              GAMING
              {showCodingDropdown && (
                <div className="nested-dropdown">
                  <NavLink
                    className="cursor nested"
                    to="CRDshow/gaming/valorant_lan"
                  >
                    Valorant LAN
                  </NavLink>
                  <NavLink className="cursor nested" to="CRDshow/gaming/bgmi">
                    BGMI
                  </NavLink>
                  <NavLink
                    className="cursor nested"
                    to="CRDshow/gaming/eFootball-Pes"
                  >
                    E-Football_PES
                  </NavLink>
                  <NavLink
                    className="cursor nested"
                    to="CRDshow/gaming/efac2024"
                  >
                    EFAC 2024
                  </NavLink>
                  <NavLink
                    className="cursor nested"
                    to="CRDshow/gaming/8_ball_pool"
                  >
                    8 Ball Pool
                  </NavLink>
                </div>
              )}
            </div>

            <div
              className="cursor"
              onMouseEnter={handleCodingMouseEnter}
              onMouseLeave={handleCodingMouseLeave}
            >
              General
              {showCodingDropdown && (
                <div className="nested-dropdown">
                  <NavLink className="cursor nested" to="CRDshow/genral/carrom">
                    Carrom
                  </NavLink>
                  <NavLink
                    className="cursor nested"
                    to="CRDshow/genral/table_tennis"
                  >
                    Table Tennis
                  </NavLink>
                  <NavLink
                    className="cursor nested"
                    to="CRDshow/genral/binge_quiz"
                  >
                    Binge Quiz
                  </NavLink>
                  <NavLink className="cursor nested" to="CRDshow/genral/chess">
                    CHESS
                  </NavLink>
                  <NavLink className="cursor nested" to="CRDshow/genral/darts">
                    DARTS
                  </NavLink>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <NavLink className="cursor" to="/GIDshow" onClick={handleCloseDropdowns}>
        GID
      </NavLink>

      <div className="nav-item">
        <NavLink
          className="cursor"
          to="CheckProfile_TID"
          onMouseEnter={handleCheckProfileMouseEnter}
          onMouseLeave={handleCheckProfileMouseLeave}
          onClick={() => {
            setShowTIDDropdown(false);
            setShowCRDDropdown(false);
            setShowCodingDropdown(false);
          }}
        >
          CheckProfile_TID
        </NavLink>
        {showCheckProfileDropdown && (
          <div className="dropdown">
            <div
              className="cursor"
              onMouseEnter={handleCodingMouseEnter}
              onMouseLeave={handleCodingMouseLeave}
            >
              CODING
              {showCodingDropdown && (
                <div className="nested-dropdown">
                  <NavLink className="cursor nested" to="/CheckProfile_TID">
                    Bug Blitz
                  </NavLink>
                  <NavLink className="cursor nested" to="/CheckProfile_TID">
                    Web Minds
                  </NavLink>
                  <NavLink className="cursor nested" to="/CheckProfile_TID">
                    Code Quest
                  </NavLink>
                  <NavLink className="cursor nested" to="/CheckProfile_TID">
                    Codezen
                  </NavLink>
                </div>
              )}
            </div>

            <div
              className="cursor"
              onMouseEnter={handleCodingMouseEnter}
              onMouseLeave={handleCodingMouseLeave}
            >
              Manual Robotics
              {showCodingDropdown && (
                <div className="nested-dropdown">
                  <NavLink className="cursor nested" to="/CheckProfile_TID">
                    Trilathon
                  </NavLink>
                  <NavLink className="cursor nested" to="/CheckProfile_TID">
                    Robo Klassers
                  </NavLink>
                  <NavLink className="cursor nested" to="/CheckProfile_TID">
                    Chakravyuh
                  </NavLink>
                  <NavLink className="cursor nested" to="/CheckProfile_TID">
                    Striker Clash
                  </NavLink>
                  <NavLink className="cursor nested" to="/CheckProfile_TID">
                    Throne of Bots
                  </NavLink>
                </div>
              )}
            </div>

            <div
              className="cursor"
              onMouseEnter={handleCodingMouseEnter}
              onMouseLeave={handleCodingMouseLeave}
            >
              Autonomous Robotics
              {showCodingDropdown && (
                <div className="nested-dropdown">
                  <NavLink className="cursor nested" to="/CheckProfile_TID">
                    Line Trekker
                  </NavLink>
                </div>
              )}
            </div>

            <div
              className="cursor"
              onMouseEnter={handleCodingMouseEnter}
              onMouseLeave={handleCodingMouseLeave}
            >
              CIVIL
              {showCodingDropdown && (
                <div className="nested-dropdown">
                  <NavLink className="cursor nested" to="/CheckProfile_TID">
                    Setu Bandhan
                  </NavLink>
                  <NavLink className="cursor nested" to="/CheckProfile_TID">
                    Track o Treasure
                  </NavLink>
                  <NavLink className="cursor nested" to="/CheckProfile_TID">
                    CAD_O_MANIA
                  </NavLink>
                  <NavLink className="cursor nested" to="/CheckProfile_TID">
                    Mega Arch
                  </NavLink>
                </div>
              )}
            </div>

            <div
              className="cursor"
              onMouseEnter={handleCodingMouseEnter}
              onMouseLeave={handleCodingMouseLeave}
            >
              ELECTRICAL
              {showCodingDropdown && (
                <div className="nested-dropdown">
                  <NavLink className="cursor nested" to="/CheckProfile_TID">
                    Electriquest
                  </NavLink>
                  <NavLink className="cursor nested" to="/CheckProfile_TID">
                    Power Blitz
                  </NavLink>
                </div>
              )}
            </div>

            <div
              className="cursor"
              onMouseEnter={handleCodingMouseEnter}
              onMouseLeave={handleCodingMouseLeave}
            >
              GAMING
              {showCodingDropdown && (
                <div className="nested-dropdown">
                  <NavLink className="cursor nested" to="/CheckProfile_TID">
                    Valorant LAN
                  </NavLink>
                  <NavLink className="cursor nested" to="/CheckProfile_TID">
                    BGMI
                  </NavLink>
                  <NavLink className="cursor nested" to="/CheckProfile_TID">
                    E-Football_PES
                  </NavLink>
                  <NavLink className="cursor nested" to="/CheckProfile_TID">
                    EFAC 2024
                  </NavLink>
                  <NavLink className="cursor nested" to="/CheckProfile_TID">
                    8 Ball Pool
                  </NavLink>
                </div>
              )}
            </div>

            <div
              className="cursor"
              onMouseEnter={handleCodingMouseEnter}
              onMouseLeave={handleCodingMouseLeave}
            >
              General
              {showCodingDropdown && (
                <div className="nested-dropdown">
                  <NavLink className="cursor nested" to="/CheckProfile_TID">
                    Carrom
                  </NavLink>
                  <NavLink className="cursor nested" to="/CheckProfile_TID">
                    Table Tennis
                  </NavLink>
                  <NavLink className="cursor nested" to="/CheckProfile_TID">
                    Binge Quiz
                  </NavLink>
                  <NavLink className="cursor nested" to="/CheckProfile_TID">
                    CHESS
                  </NavLink>
                  <NavLink className="cursor nested" to="/CheckProfile_TID">
                    DARTS
                  </NavLink>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <NavLink
        className="cursor"
        to="CheckProfile_GID"
        onClick={handleCloseDropdowns}
      >
        CheckProfile_GID
      </NavLink>
    </div>
  );
};

export default Navbar;
