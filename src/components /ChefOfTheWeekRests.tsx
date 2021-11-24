import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { AppBaseUrl, Chef, Restaurants } from "../api";

interface props {
  rests: Restaurants[];
  chefOfTheWeek: Chef;
}

const ChefOfTheWeekRests: React.FC<props> = ({ rests, chefOfTheWeek }) => {
  const history = useHistory();

  const onRestClicked = (id: string) => {
    history.push("/restaurant" + "/?id=" + id);
  };

  return (
    <RestaurantsDisplayContainer>
      <Header>{chefOfTheWeek.name} restaurants :</Header>
      <RestaurantsContainer>
        {rests.map((rest, index) => {
          return (
            <RestaurantContainer
              key={index}
              onClick={() => {
                onRestClicked(rest._id);
              }}
            >
              <RestaurantImage src={AppBaseUrl + rest.image} />
              <DetailsContainer>
                <RestaurantName>{rest.name}</RestaurantName>
                <RestaurantChef>{rest.chefName}</RestaurantChef>
              </DetailsContainer>
            </RestaurantContainer>
          );
        })}
      </RestaurantsContainer>
    </RestaurantsDisplayContainer>
  );
};

export default ChefOfTheWeekRests;

const RestaurantsDisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75%;
  max-width: 1100px;
  margin: auto;
  margin-top: 80px;
  gap: 20px;
  @media (max-width: 1000px) {
    width: 85%;
  }
`;

const Header = styled.div`
  font-size: 30px;
  letter-spacing: 1px;
  align-self: flex-start;
  @media (max-width: 1100px) {
    font-size: 20px;
  }
`;

const RestaurantsContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
`;

const RestaurantContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 32.5%;
  height: 320px;
  cursor: pointer;
  @media (min-width: 800px) {
    height: 370px;
  }
`;

const RestaurantImage = styled.img`
  height: 70%;
  @media (max-width: 800px) {
    height: 150px;
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 30%;
  background-color: beige;
  gap: 5px;
  padding: 10px;
`;

const RestaurantName = styled.div`
  font-size: 22px;
  font-weight: 500;
  letter-spacing: 0.5px;
  @media (min-width: 1000px) {
    font-size: 30px;
  }
`;

const RestaurantChef = styled.div`
  font-size: 16px;
  letter-spacing: 0.5px;
  @media (min-width: 1000px) {
    font-size: 20px;
  }
`;
