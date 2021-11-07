import React from "react";
import styled from "styled-components";

function DishesMap() {
  return (
    <MapContainer>
      <MapHeader>THE MEANING OF OUR ICONS</MapHeader>
      <IconsContainer>
        <IconContainer>
          <SpicyIcon src="assets/icons/spicy.svg"></SpicyIcon>
          <IconName>Spicy</IconName>
        </IconContainer>
        <IconContainer>
          <VegitarianIcon src="assets/icons/Vegitarian.svg"></VegitarianIcon>
          <IconName>Vegitarian</IconName>
        </IconContainer>
        <IconContainer>
          <VeganIcon src="assets/icons/Vegan.svg"></VeganIcon>
          <IconName>Vegan</IconName>
        </IconContainer>
      </IconsContainer>
    </MapContainer>
  );
}

export default DishesMap;

const MapContainer = styled.div`
  background-color: #fafafa;
  height: 134px;
  margin-top: 80px;
`;
const MapHeader = styled.div`
  padding: 12px;
  font-size: 14px;
  text-align: center;
`;
const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 80%;
  margin: auto;
  padding: 5px;
`;
const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const IconName = styled.div`
  font-size: 14px;
  margin-top: 15px;
`;
const SpicyIcon = styled.img`
  width: 35px;
  height: 35px;
`;
const VegitarianIcon = styled.img`
  width: 35px;
  height: 35px;
`;
const VeganIcon = styled.img`
  width: 35px;
  height: 35px;
`;
