import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  const [showTIDDropdown, setShowTIDDropdown] = useState(false);
  const [showCRDDropdown, setShowCRDDropdown] = useState(false);
  const [showCheckProfileDropdown, setShowCheckProfileDropdown] = useState(false);
  const [showCodingDropdown, setShowCodingDropdown] = useState(false);
  const [showProfileCheckCodingDropdown, setShowProfileCheckCodingDropdown] = useState(false);
  const [dropdownTimer, setDropdownTimer] = useState(null);

  const handleTIDMouseEnter = () => {
    if (dropdownTimer) {
      clearTimeout(dropdownTimer);
    }
    setShowTIDDropdown(true);
  };

  const handleTIDMouseLeave = () => {
    setDropdownTimer(setTimeout(() => {
      setShowTIDDropdown(false);
      setShowCodingDropdown(false);
    }, 1000));
  };

  const handleCRDMouseEnter = () => {
    if (dropdownTimer) {
      clearTimeout(dropdownTimer);
    }
    setShowCRDDropdown(true);
  };

  const handleCRDMouseLeave = () => {
    setDropdownTimer(setTimeout(() => {
      setShowCRDDropdown(false);
      setShowCodingDropdown(false);
    }, 1000));
  };

  const handleCheckProfileMouseEnter = () => {
    if (dropdownTimer) {
      clearTimeout(dropdownTimer);
    }
    setShowCheckProfileDropdown(true);
  };

  const handleCheckProfileMouseLeave = () => {
    setDropdownTimer(setTimeout(() => {
      setShowCheckProfileDropdown(false);
      setShowCodingDropdown(false);
    }, 1000));
  };

  const handleCodingMouseEnter = () => {
    setShowCodingDropdown(true);
    if (dropdownTimer) {
      clearTimeout(dropdownTimer);
    }
  };

  const handleCodingMouseLeave = () => {
    setDropdownTimer(setTimeout(() => {
      setShowCodingDropdown(false);
      setShowProfileCheckCodingDropdown(false);
    }, 1000));
  };

  const handleProfileCheckCodingMouseEnter = () => {
    setShowProfileCheckCodingDropdown(true);
    if (dropdownTimer) {
      clearTimeout(dropdownTimer);
    }
  };

  const handleProfileCheckCodingMouseLeave = () => {
    setDropdownTimer(setTimeout(() => {
      setShowProfileCheckCodingDropdown(false);
    }, 1000));
  };

  const handleCloseDropdowns = () => {
    setShowTIDDropdown(false);
    setShowCRDDropdown(false);
    setShowCheckProfileDropdown(false);
    setShowCodingDropdown(false);
    setShowProfileCheckCodingDropdown(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleCloseDropdowns);

    return () => {
      document.removeEventListener('click', handleCloseDropdowns);
      if (dropdownTimer) {
        clearTimeout(dropdownTimer);
      }
    };
  }, [dropdownTimer]);

  return (
    <div className="navbar">
      <NavLink className="cursor" to="/" onClick={handleCloseDropdowns}>HOME</NavLink>
      <div className="nav-item">
        <NavLink className="cursor" to="/TIDshow" onMouseEnter={handleTIDMouseEnter} onMouseLeave={handleTIDMouseLeave} onClick={() => {setShowCRDDropdown(false); setShowCheckProfileDropdown(false); setShowCodingDropdown(false);}}>TID</NavLink>
        {showTIDDropdown && (
          <div className="dropdown">
            <div className="cursor" onMouseEnter={handleCodingMouseEnter} onMouseLeave={handleCodingMouseLeave}>
              CODING
              {showCodingDropdown && (
                <div className="nested-dropdown">
                  <NavLink className="cursor nested" to="/TIDshow">Bug Blitz</NavLink>
                  <NavLink className="cursor nested" to="/TIDshow">Web Minds</NavLink>
                  <NavLink className="cursor nested" to="/TIDshow">Code Quest</NavLink>
                  <NavLink className="cursor nested" to="/TIDshow">Codezen</NavLink>
                </div>
              )}
            </div>
            
            <div className="cursor" onMouseEnter={handleCodingMouseEnter} onMouseLeave={handleCodingMouseLeave}>
              Manual Robotics
              {showCodingDropdown && (
                <div className="nested-dropdown">
                  <NavLink className="cursor nested" to="/TIDshow">Trilathon</NavLink>
                  <NavLink className="cursor nested" to="/TIDshow">Robo Klassers</NavLink>
                  <NavLink className="cursor nested" to="/TIDshow">Chakravyuh</NavLink>
                  <NavLink className="cursor nested" to="/TIDshow">Striker Clash</NavLink>
                  <NavLink className="cursor nested" to="/TIDshow">Throne of Bots</NavLink>
                </div>
              )}
            </div>

            <div className="cursor" onMouseEnter={handleCodingMouseEnter} onMouseLeave={handleCodingMouseLeave}>
              Autonomous Robotics
              {showCodingDropdown && (
                <div className="nested-dropdown">
                  <NavLink className="cursor nested" to="/TIDshow">Line Trekker</NavLink>
                </div>
              )}
            </div>

            <div className="cursor" onMouseEnter={handleCodingMouseEnter} onMouseLeave={handleCodingMouseLeave}>
              CIVIL
              {showCodingDropdown && (
                <div className="nested-dropdown">
                  <NavLink className="cursor nested" to="/TIDshow">Setu Bandhan</NavLink>
                  <NavLink className="cursor nested" to="/TIDshow">Track o Treasure</NavLink>
                  <NavLink className="cursor nested" to="/TIDshow">CAD_O_MANIA</NavLink>
                  <NavLink className="cursor nested" to="/TIDshow">Mega Arch</NavLink>
                </div>
              )}
            </div>

            <div className="cursor" onMouseEnter={handleCodingMouseEnter} onMouseLeave={handleCodingMouseLeave}>
              ELECTRICAL
              {showCodingDropdown && (
                <div className="nested-dropdown">
                  <NavLink className="cursor nested" to="/TIDshow">Electriquest</NavLink>
                  <NavLink className="cursor nested" to="/TIDshow">Power Blitz</NavLink>
                </div>
              )}
            </div>

            <div className="cursor" onMouseEnter={handleCodingMouseEnter} onMouseLeave={handleCodingMouseLeave}>
              GAMING
              {showCodingDropdown && (
                <div className="nested-dropdown">
                  <NavLink className="cursor nested" to="/TIDshow">Valorant LAN</NavLink>
                  <NavLink className="cursor nested" to="/TIDshow">BGMI</NavLink>
                  <NavLink className="cursor nested" to="/TIDshow">E-Football_PES</NavLink>
                  <NavLink className="cursor nested" to="/TIDshow">EFAC 2024</NavLink>
                  <NavLink className="cursor nested" to="/TIDshow">8 Ball Pool</NavLink>
                </div>
              )}
            </div>

            <div className="cursor" onMouseEnter={handleCodingMouseEnter} onMouseLeave={handleCodingMouseLeave}>
              General
              {showCodingDropdown && (
                <div className="nested-dropdown">
                  <NavLink className="cursor nested" to="/TIDshow">Carrom</NavLink>
                  <NavLink className="cursor nested" to="/TIDshow">Table Tennis</NavLink>
                  <NavLink className="cursor nested" to="/TIDshow">Binge Quiz</NavLink>
                  <NavLink className="cursor nested" to="/TIDshow">CHESS</NavLink>
                  <NavLink className="cursor nested" to="/TIDshow">DARTS</NavLink>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="nav-item">
        <NavLink className="cursor" to="/CRDshow" onMouseEnter={handleCRDMouseEnter} onMouseLeave={handleCRDMouseLeave} onClick={() => {setShowTIDDropdown(false); setShowCheckProfileDropdown(false); setShowCodingDropdown(false);}}>CRD</NavLink>
        {showCRDDropdown && (
          <div className="dropdown">
            <div className="cursor" onMouseEnter={handleCodingMouseEnter} onMouseLeave={handleCodingMouseLeave}>
              CODING
              {showCodingDropdown && (
                <div className="nested-dropdown">
                  <NavLink className="cursor nested" to="/CRDshow">Bug Blitz</NavLink>
                  <NavLink className="cursor nested" to="/CRDshow">Web Minds</NavLink>
                  <NavLink className="cursor nested" to="/CRDshow">Code Quest</NavLink>
                  <NavLink className="cursor nested" to="/CRDshow">Codezen</NavLink>
                </div>
              )}
            </div>
            
            <div className="cursor" onMouseEnter={handleCodingMouseEnter} onMouseLeave={handleCodingMouseLeave}>
              Manual Robotics
              {showCodingDropdown && (
                <div className="nested-dropdown">
                  <NavLink className="cursor nested" to="/CRDshow">Trilathon</NavLink>
                  <NavLink className="cursor nested" to="/CRDshow">Robo Klassers</NavLink>
                  <NavLink className="cursor nested" to="/CRDshow">Chakravyuh</NavLink>
                  <NavLink className="cursor nested" to="/CRDshow">Striker Clash</NavLink>
                  <NavLink className="cursor nested" to="/CRDshow">Throne of Bots</NavLink>
                </div>
              )}
            </div>

            <div className="cursor" onMouseEnter={handleCodingMouseEnter} onMouseLeave={handleCodingMouseLeave}>
              Autonomous Robotics
              {showCodingDropdown && (
                <div className="nested-dropdown">
                  <NavLink className="cursor nested" to="/CRDshow">Line Trekker</NavLink>
                </div>
              )}
            </div>

            <div className="cursor" onMouseEnter={handleCodingMouseEnter} onMouseLeave={handleCodingMouseLeave}>
              CIVIL
              {showCodingDropdown && (
                <div className="nested-dropdown">
                  <NavLink className="cursor nested" to="/CRDshow">Setu Bandhan</NavLink>
                  <NavLink className="cursor nested" to="/CRDshow">Track o Treasure</NavLink>
                  <NavLink className="cursor nested" to="/CRDshow">CAD_O_MANIA</NavLink>
                  <NavLink className="cursor nested" to="/CRDshow">Mega Arch</NavLink>
                </div>
              )}
            </div>

            <div className="cursor" onMouseEnter={handleCodingMouseEnter} onMouseLeave={handleCodingMouseLeave}>
              ELECTRICAL
              {showCodingDropdown && (
                <div className="nested-dropdown">
                  <NavLink className="cursor nested" to="/CRDshow">Electriquest</NavLink>
                  <NavLink className="cursor nested" to="/CRDshow">Power Blitz</NavLink>
                </div>
              )}
            </div>

            <div className="cursor" onMouseEnter={handleCodingMouseEnter} onMouseLeave={handleCodingMouseLeave}>
              GAMING
              {showCodingDropdown && (
                <div className="nested-dropdown">
                  <NavLink className="cursor nested" to="/CRDshow">Valorant LAN</NavLink>
                  <NavLink className="cursor nested" to="/CRDshow">BGMI</NavLink>
                  <NavLink className="cursor nested" to="/CRDshow">E-Football_PES</NavLink>
                  <NavLink className="cursor nested" to="/CRDshow">EFAC 2024</NavLink>
                  <NavLink className="cursor nested" to="/CRDshow">8 Ball Pool</NavLink>
                </div>
              )}
            </div>

            <div className="cursor" onMouseEnter={handleCodingMouseEnter} onMouseLeave={handleCodingMouseLeave}>
              General
              {showCodingDropdown && (
                <div className="nested-dropdown">
                  <NavLink className="cursor nested" to="/CRDshow">Carrom</NavLink>
                  <NavLink className="cursor nested" to="/CRDshow">Table Tennis</NavLink>
                  <NavLink className="cursor nested" to="/CRDshow">Binge Quiz</NavLink>
                  <NavLink className="cursor nested" to="/CRDshow">CHESS</NavLink>
                  <NavLink className="cursor nested" to="/CRDshow">DARTS</NavLink>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <NavLink className="cursor" to="/GIDshow" onClick={handleCloseDropdowns}>GID</NavLink>

      <div className="nav-item">
        <NavLink className="cursor" to="/CheckProfile_TID" onMouseEnter={handleCheckProfileMouseEnter} onMouseLeave={handleCheckProfileMouseLeave} onClick={() => {setShowTIDDropdown(false); setShowCRDDropdown(false); setShowCodingDropdown(false);}}>CheckProfile_TID</NavLink>
        {showCheckProfileDropdown && (
          <div className="dropdown">
            <div className="cursor" onMouseEnter={handleCodingMouseEnter} onMouseLeave={handleCodingMouseLeave}>
              CODING
              {showCodingDropdown && (
                <div className="nested-dropdown">
                  <NavLink className="cursor nested" to="/CheckProfile_TID">Bug Blitz</NavLink>
                  <NavLink className="cursor nested" to="/CheckProfile_TID">Web Minds</NavLink>
                  <NavLink className="cursor nested" to="/CheckProfile_TID">Code Quest</NavLink>
                  <NavLink className="cursor nested" to="/CheckProfile_TID">Codezen</NavLink>
                </div>
              )}
            </div>
            
            <div className="cursor" onMouseEnter={handleCodingMouseEnter} onMouseLeave={handleCodingMouseLeave}>
              Manual Robotics
              {showCodingDropdown && (
                <div className="nested-dropdown">
                  <NavLink className="cursor nested" to="/CheckProfile_TID">Trilathon</NavLink>
                  <NavLink className="cursor nested" to="/CheckProfile_TID">Robo Klassers</NavLink>
                  <NavLink className="cursor nested" to="/CheckProfile_TID">Chakravyuh</NavLink>
                  <NavLink className="cursor nested" to="/CheckProfile_TID">Striker Clash</NavLink>
                  <NavLink className="cursor nested" to="/CheckProfile_TID">Throne of Bots</NavLink>
                </div>
              )}
            </div>

            <div className="cursor" onMouseEnter={handleCodingMouseEnter} onMouseLeave={handleCodingMouseLeave}>
              Autonomous Robotics
              {showCodingDropdown && (
                <div className="nested-dropdown">
                  <NavLink className="cursor nested" to="/CheckProfile_TID">Line Trekker</NavLink>
                </div>
              )}
            </div>

            <div className="cursor" onMouseEnter={handleCodingMouseEnter} onMouseLeave={handleCodingMouseLeave}>
              CIVIL
              {showCodingDropdown && (
                <div className="nested-dropdown">
                  <NavLink className="cursor nested" to="/CheckProfile_TID">Setu Bandhan</NavLink>
                  <NavLink className="cursor nested" to="/CheckProfile_TID">Track o Treasure</NavLink>
                  <NavLink className="cursor nested" to="/CheckProfile_TID">CAD_O_MANIA</NavLink>
                  <NavLink className="cursor nested" to="/CheckProfile_TID">Mega Arch</NavLink>
                </div>
              )}
            </div>

            <div className="cursor" onMouseEnter={handleCodingMouseEnter} onMouseLeave={handleCodingMouseLeave}>
              ELECTRICAL
              {showCodingDropdown && (
                <div className="nested-dropdown">
                  <NavLink className="cursor nested" to="/CheckProfile_TID">Electriquest</NavLink>
                  <NavLink className="cursor nested" to="/CheckProfile_TID">Power Blitz</NavLink>
                </div>
              )}
            </div>

            <div className="cursor" onMouseEnter={handleCodingMouseEnter} onMouseLeave={handleCodingMouseLeave}>
              GAMING
              {showCodingDropdown && (
                <div className="nested-dropdown">
                  <NavLink className="cursor nested" to="/CheckProfile_TID">Valorant LAN</NavLink>
                  <NavLink className="cursor nested" to="/CheckProfile_TID">BGMI</NavLink>
                  <NavLink className="cursor nested" to="/CheckProfile_TID">E-Football_PES</NavLink>
                  <NavLink className="cursor nested" to="/CheckProfile_TID">EFAC 2024</NavLink>
                  <NavLink className="cursor nested" to="/CheckProfile_TID">8 Ball Pool</NavLink>
                </div>
              )}
            </div>

            <div className="cursor" onMouseEnter={handleCodingMouseEnter} onMouseLeave={handleCodingMouseLeave}>
              General
              {showCodingDropdown && (
                <div className="nested-dropdown">
                  <NavLink className="cursor nested" to="/CheckProfile_TID">Carrom</NavLink>
                  <NavLink className="cursor nested" to="/CheckProfile_TID">Table Tennis</NavLink>
                  <NavLink className="cursor nested" to="/CheckProfile_TID">Binge Quiz</NavLink>
                  <NavLink className="cursor nested" to="/CheckProfile_TID">CHESS</NavLink>
                  <NavLink className="cursor nested" to="/CheckProfile_TID">DARTS</NavLink>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <NavLink className="cursor" to="/CheckProfile_GID" onClick={handleCloseDropdowns}>CheckProfile_GID</NavLink>

    </div>
  );
};

export default Navbar;
