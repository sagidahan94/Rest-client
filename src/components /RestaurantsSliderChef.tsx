import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const RestaurantsSliderChef = () => {
  return (
    <SliderContainer>
      <SliderHeader>THE POPULAR RESTAURANTS IN EPICURE:</SliderHeader>
      <Slider {...settings}>
        <RestaurantContainer>
          <RestaurantDiv>
            <RestaurantImage src="assets/rest/claro.png" />
            <RestaurantDetails>
              <RestaurantName>Claro</RestaurantName>
              <RestaurantChef>Ran Shmueli</RestaurantChef>
            </RestaurantDetails>
          </RestaurantDiv>
        </RestaurantContainer>
        <RestaurantContainer>
          <RestaurantDiv>
            <RestaurantImage src="assets/rest/claro.png" />
            <RestaurantDetails>
              <RestaurantName>Claro</RestaurantName>
              <RestaurantChef>Ran Shmueli</RestaurantChef>
            </RestaurantDetails>
          </RestaurantDiv>
        </RestaurantContainer>
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
  width: 70%;
  cursor: pointer;
`;

const SliderHeader = styled.div`
  font-size: 14px;
  text-align: center;
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

const RestaurantName = styled.h2`
  margin-top: 0px;
  margin-bottom: 0;
  font-size: 25px;
`;

const RestaurantChef = styled.div`
  margin: 0;
  font-size: 20px;
`;
