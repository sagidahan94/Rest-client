import React from "react";
import styled from "styled-components";
import { AppBaseUrl } from "../api";

const DishesMap: React.FC = () => {
  return (
    <MapContainer>
      <MapHeader>THE MEANING OF OUR ICONS :</MapHeader>
      <IconsContainer>
        <IconContainer>
          <SpicyIcon src={AppBaseUrl + "assets/icons/spicy-icon@2x.png"} />
          <IconName>Spicy</IconName>
        </IconContainer>
        <IconContainer>
          <VegitarianIcon src={AppBaseUrl + "assets/icons/vegetarian@2x.png"} />
          <IconName>Vegitarian</IconName>
        </IconContainer>
        <IconContainer>
          <VeganIcon src={AppBaseUrl + "assets/icons/vegan@2x.png"} />
          <IconName>Vegan</IconName>
        </IconContainer>
      </IconsContainer>
    </MapContainer>
  );
};

export default DishesMap;

const MapContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fafafa;
  height: 134px;
  margin-top: 80px;
  gap: 10px;
  @media (min-width: 800px) {
    height: 230px;
    gap: 25px;
  }
`;
const MapHeader = styled.div`
  font-size: 16px;
  letter-spacing: 2.14px;
  text-align: center;
  @media (min-width: 800px) {
    font-size: 25px;
  }
`;
const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 60px;
`;
const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const IconName = styled.div`
  font-size: 14px;
  letter-spacing: 1px;
  margin-top: 15px;
  @media (min-width: 800px) {
    font-size: 20px;
  }
`;
const SpicyIcon = styled.img`
  width: 35px;
  height: 35px;
  @media (min-width: 800px) {
    width: 40px;
    height: 40px;
  }
`;
const VegitarianIcon = styled.img`
  width: 35px;
  height: 35px;
  @media (min-width: 800px) {
    width: 40px;
    height: 40px;
  }
`;
const VeganIcon = styled.img`
  width: 35px;
  height: 35px;
  @media (min-width: 800px) {
    width: 40px;
    height: 40px;
  }
`;
