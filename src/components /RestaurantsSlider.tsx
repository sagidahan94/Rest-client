import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
};

function RestaurantsSlider() {
  return (
    <SliderContainer>
      <SliderHeader>Yossi's restaurants :</SliderHeader>
      <Slider {...settings}>
        <RestaurantContainer>
          <RestaurantImage src="assets/rest/claro.png" />
          <RestaurantNameContainer>
            <RestaurantName>Onza</RestaurantName>
          </RestaurantNameContainer>
        </RestaurantContainer>
        <RestaurantContainer>
          <RestaurantImage src="assets/rest/claro.png" />
          <RestaurantNameContainer>
            <RestaurantName>Onza</RestaurantName>
          </RestaurantNameContainer>
        </RestaurantContainer>
        <RestaurantContainer>
          <RestaurantImage src="assets/rest/claro.png" />
          <RestaurantNameContainer>
            <RestaurantName>Onza</RestaurantName>
          </RestaurantNameContainer>
        </RestaurantContainer>
        <RestaurantContainer>
          <RestaurantImage src="assets/rest/claro.png" />
          <RestaurantNameContainer>
            <RestaurantName>Onza</RestaurantName>
          </RestaurantNameContainer>
        </RestaurantContainer>
      </Slider>
    </SliderContainer>
  );
}

export default RestaurantsSlider;

const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SliderHeader = styled.div`
  font-size: 13.5px;
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
  background: beige;
  width: 90%;
  height: 80px;
  text-align: center;
`;

const RestaurantName = styled.div`
  margin-top: 10px;
  font-size: 18px;
  font-weight: 500;
`;
