import React, { useEffect } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { AppBaseUrl, Restaurants } from "../api";

interface props {
  rests: Restaurants[];
}

const RestaurantsHomeDesktop: React.FC<props> = ({ rests }) => {
  const history = useHistory();

  const onAllRestClicked = () => {
    history.push("/restaurants");
  };

  const onRestClicked = (id: string) => {
    history.push("/restaurant" + "/?id=" + id);
  };

  useEffect(() => {}, []);

  return (
    <RestaurantsDisplayContainer>
      <Header>THE POPULAR RESTAURANTS IN EPICURE :</Header>
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
      <ButtonContainer onClick={onAllRestClicked}>
        <AllRestButton>All Restaurants</AllRestButton>
        <ArrowIcon src={AppBaseUrl + "assets/icons/arrow.svg"} />
      </ButtonContainer>
    </RestaurantsDisplayContainer>
  );
};

export default RestaurantsHomeDesktop;

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
  justify-content: center;
  align-items: center;
  height: 30%;
  background-color: beige;
  gap: 5px;
  padding: 10px;
`;

const RestaurantName = styled.div`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.5px;
  @media (min-width: 1000px) {
    font-size: 30px;
  }
`;

const RestaurantChef = styled.div`
  font-size: 15px;
  letter-spacing: 0.5px;
  @media (min-width: 1000px) {
    font-size: 20px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-self: end;
  align-items: center;
  margin-top: 10px;
  gap: 10px;
  cursor: pointer;
`;

const AllRestButton = styled.div`
  font-size: 22px;
  letter-spacing: 1px;
  @media (max-width: 1100px) {
    font-size: 18px;
  }
`;

const ArrowIcon = styled.img`
  width: 18px;
  height: 24px;
`;
