import React from "react";
import styled from "styled-components";

const GIDBoxOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GIDBoxContainer = styled.div`
  background-color: rgb(0,0,0);
  color: white;
  border: 1px solid rgb(255 , 255 , 255);
  font-family: "Jost", sans-serif;
  font-size: large;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  position: relative; /* Ensure close button is positioned relative to the container */
  /* width: 20%; */
  text-align: center;
`;

const CloseButton = `
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  transition: 0.2s;

  &:hover{
    color: grey;
  }
`;

const GIDDisplayBox = ({ gid, onClose }) => {
  return (
    <GIDBoxOverlay>
      <GIDBoxContainer>
        <CloseButton onClick={onClose}><i className="ri-close-large-fill"></i></CloseButton>
        <h2>Your GID</h2>
        <p style={{fontSize:'1.5rem'}}>{gid}</p>
        <p style={{fontSize:'0.85rem',
      fontWeight:'bold', margin:'1rem',
      color:'rgb(178, 178, 178)'}}>*Please visit the college to complete your registration payment</p>
      </GIDBoxContainer>
    </GIDBoxOverlay>
  );
};

export default GIDDisplayBox;