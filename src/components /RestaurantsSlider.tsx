import React, { useEffect } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { appBaseUrl, Restaurants } from "../api";
import { useHistory } from "react-router-dom";

interface props {
  rests: Restaurants[];
}

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1.5,
  slidesToScroll: 1,
};

const RestaurantsSliderChef: React.FC<props> = ({ rests }) => {
  const history = useHistory();

  const onRestClicked = (id: string) => {
    history.push("/restaurant" + "/?id=" + id);
  };

  useEffect(() => {}, []);
  return (
    <SliderContainer>
      <SliderHeader>THE POPULAR RESTAURANTS IN EPICURE:</SliderHeader>
      <Slider {...settings}>
        {rests.map((rest, index) => {
          return (
            <RestaurantContainer
              key={index}
              onClick={() => {
                onRestClicked(rest._id);
              }}
            >
              <RestaurantDiv>
                <RestaurantImage src={appBaseUrl + rest.image} />
                <RestaurantDetails>
                  <RestaurantName>{rest.name}</RestaurantName>
                  <RestaurantChef>{rest.chefName}</RestaurantChef>
                </RestaurantDetails>
              </RestaurantDiv>
            </RestaurantContainer>
          );
        })}
      </Slider>
    </SliderContainer>
  );
};

export default RestaurantsSliderChef;

const SliderContainer = styled.div`
  margin-top: 50px;
`;

const RestaurantDiv = styled.div`
  margin-top: 15px;
  display: flex !important;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #f7e0b2;
  width: 90%;
  max-width: 280px;
  cursor: pointer;
`;

const SliderHeader = styled.div`
  font-size: 16px;
  letter-spacing: 0.5px;
  text-align: center;
  @media (min-width: 600px) {
    font-size: 25px;
  }
`;

const RestaurantContainer = styled.div`
  display: flex !important;
  align-items: center;
  justify-content: center;
`;

const RestaurantImage = styled.img`
  width: 100%;
  height: 180px;
`;

const RestaurantDetails = styled.div`
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const RestaurantName = styled.div`
  margin-top: 0px;
  margin-bottom: 0;
  font-weight: 500;
  font-size: 25px;
`;

const RestaurantChef = styled.div`
  margin: 0;
  font-size: 20px;
`;
