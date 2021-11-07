import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

function RestaurantsPage() {
  const history = useHistory();

  const onRestClicked = () => {
    history.push("/restaurant");
  };

  return (
    <PageContainer>
      <PageHeader>RESTAURANTS</PageHeader>
      <TabsContainer>
        <Tab>All</Tab>
        <Tab>New</Tab>
        <Tab>Most Popular</Tab>
        <Tab>Open Now</Tab>
      </TabsContainer>
      <RestaurantsContainer>
        <RestaurantContainer onClick={() => onRestClicked()}>
          <RestaurantImage src="assets/rest/claro.png"></RestaurantImage>
          <RestaurantDetails>
            <RestaurantName>Claro</RestaurantName>
            <RestaurantChef>Ran Shmueli</RestaurantChef>
          </RestaurantDetails>
        </RestaurantContainer>
        <RestaurantContainer>
          <RestaurantImage src="assets/rest/claro.png"></RestaurantImage>
          <RestaurantDetails>
            <RestaurantName>Claro</RestaurantName>
            <RestaurantChef>Ran Shmueli</RestaurantChef>
          </RestaurantDetails>
        </RestaurantContainer>
        <RestaurantContainer>
          <RestaurantImage src="assets/rest/claro.png"></RestaurantImage>
          <RestaurantDetails>
            <RestaurantName>Claro</RestaurantName>
            <RestaurantChef>Ran Shmueli</RestaurantChef>
          </RestaurantDetails>
        </RestaurantContainer>
        <RestaurantContainer>
          <RestaurantImage src="assets/rest/claro.png"></RestaurantImage>
          <RestaurantDetails>
            <RestaurantName>Claro</RestaurantName>
            <RestaurantChef>Ran Shmueli</RestaurantChef>
          </RestaurantDetails>
        </RestaurantContainer>
      </RestaurantsContainer>
    </PageContainer>
  );
}

export default RestaurantsPage;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  gap: 20px;
`;

const PageHeader = styled.div`
  font-size: 20px;
  letter-spacing: 1px;
`;

const TabsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  justify-content: space-between;
`;

const Tab = styled.a`
  font-size: 16px;
  letter-spacing: 1px;
  cursor: pointer;
`;

const RestaurantsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 10px;
`;

const RestaurantContainer = styled.div`
  width: 48%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
`;

const RestaurantImage = styled.img`
  width: 100%;
  height: 100px;
`;

const RestaurantDetails = styled.div`
  height: 70px;
  width: 100%;
  background: beige;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const RestaurantName = styled.h2`
  margin-top: 0px;
  margin-bottom: 0;
  font-size: 17.3px;
`;

const RestaurantChef = styled.div`
  font-size: 13.3px;
`;
