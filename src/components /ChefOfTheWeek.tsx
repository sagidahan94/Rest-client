import React from "react";
import styled from "styled-components";
import { AppBaseUrl, Chef } from "../api";

interface props {
  chefOfTheWeek: Chef;
}

const ChefOfTheWeek: React.FC<props> = ({ chefOfTheWeek }) => {
  return (
    <ChefOfTheWeekContainer>
      <ChefOfTheWeekHeader>CHEF OF THE WEEK :</ChefOfTheWeekHeader>
      <ChefContainer>
        <ChefImageContainer>
          <ChefImage src={AppBaseUrl + chefOfTheWeek.image} />
          <ChefNameBackground>
            <ChefName>{chefOfTheWeek.name}</ChefName>
          </ChefNameBackground>
        </ChefImageContainer>
        <ChefDescription>{chefOfTheWeek.description}</ChefDescription>
      </ChefContainer>
    </ChefOfTheWeekContainer>
  );
};

export default ChefOfTheWeek;

const ChefOfTheWeekContainer = styled.div`
  width: 75%;
  max-width: 1100px;
  margin: auto;
  margin-top: 60px;
  @media (max-width: 1000px) {
    width: 85%;
  }
`;
const ChefOfTheWeekHeader = styled.div`
  text-align: center;
  font-size: 16px;
  margin-bottom: 15px;
  letter-spacing: 1px;
  @media (min-width: 600px) {
    font-size: 25px;
  }
`;

const ChefContainer = styled.div`
  @media (min-width: 600px) {
    display: flex;
    width: 100%;
    gap: 30px;
    margin-top: 40px;
    @media (min-width: 800px) {
      gap: 50px;
    }
  }
`;

const ChefDescription = styled.div`
  text-align: center;
  margin-top: 20px;
  font-size: 13.5px;
  letter-spacing: 1px;
  word-spacing: 1px;
  @media (min-width: 600px) {
    font-size: 16px;
    width: 55%;
    text-align: left;
    margin-top: 0px;
    @media (min-width: 800px){
      font-size:18px
    }
    @media (min-width: 1100px){
      font-size:23px
    }
`;

const ChefImageContainer = styled.div`
  min-width: 270px;
  @media (min-width: 600px) {
    width: 45%;
  }
`;

const ChefImage = styled.img`
  width: 100%;
  @media (min-width: 600px) {
  }
`;

const ChefName = styled.div`
  text-align: center;
  font-size: 24px;
  letter-spacing: 1px;
`;

const ChefNameBackground = styled.div`
  background-color: white;
  height: 50px;
  margin-top: -53px;
  opacity: 0.8;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
