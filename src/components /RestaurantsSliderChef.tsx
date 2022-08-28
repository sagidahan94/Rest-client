import React from "react";
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
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2.5,
  slidesToScroll: 1,
};

const RestaurantsSlider: React.FC<props> = ({ rests }) => {
  const history = useHistory();

  const onRestClicked = (id: string) => {
    history.push("/restaurant" + "/?id=" + id);
  };

  return (
    <SliderContainer>
      <SliderHeader>Yossi's restaurants :</SliderHeader>
      <Slider {...settings}>
        {rests.map((rest, index) => {
          return (
            <RestaurantContainer
              key={index}
              onClick={() => {
                onRestClicked(rest._id);
              }}
            >
              <RestaurantImage src={appBaseUrl + rest.image} />
              <RestaurantNameContainer>
                <RestaurantName>{rest.name}</RestaurantName>
              </RestaurantNameContainer>
            </RestaurantContainer>
          );
        })}
      </Slider>
    </SliderContainer>
  );
};

export default RestaurantsSlider;

const SliderContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SliderHeader = styled.div`
  font-size: 16px;
  letter-spacing: 0.5px;
  margin-left: 10px;
`;

const RestaurantContainer = styled.div`
  display: flex !important;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const RestaurantImage = styled.img`
  width: 90%;
  height: 110px;
`;

const RestaurantNameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: beige;
  width: 95%;
  height: 80px;
  text-align: center;
`;

const RestaurantName = styled.div`
  font-size: 20px;
  font-weight: 500;
`;
