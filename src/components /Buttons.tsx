import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { PAGE_SIZE } from "../api";

const Buttons: React.FC = () => {
  const history = useHistory();

  const onChefsClicked = () => {
    history.push("/chefs");
  };

  const onRestsClicked = () => {
    history.push(`/restaurants/?skip=${0}&limit=${PAGE_SIZE}&f=All`);
  };

  return (
    <ButtonsContainer>
      <Button onClick={() => onChefsClicked()}>CHEFS</Button>
      <Button onClick={() => onRestsClicked()}>RESTAURANTS</Button>
    </ButtonsContainer>
  );
};

export default Buttons;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
  height: 125px;
  background: #fafafa;
`;

const Button = styled.button`
  font-size: 15px;
  padding: 15px 20px;
  background-color: rgba(232, 196, 122, 0.8);
  border: none;
`;
