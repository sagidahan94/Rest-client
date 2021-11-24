import { useEffect, useState } from "react";
import styled from "styled-components";
import { apiClient, AppBaseUrl, Dish, Rest } from "../../api";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { dishActions } from "../../redux/slice/dish.slice";
import { displayActions } from "../../redux/slice/display-slice";
import DishPage from "../DishModal";
import LoadingPage from "./LoadingPage";
import { openNow } from "../../api";

const RestaurantPage = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.display.isLoading);
  const showDish = useAppSelector((state) => state.display.showDish);
  const [rest, setRest] = useState<Rest>();
  const [breakfastDishes, setBreakfastDishes] = useState<Dish[]>();
  const [lunchtDishes, setLunchtDishes] = useState<Dish[]>();
  const [dinnerDishes, setDinnerDishes] = useState<Dish[]>();
  const [open, setOpen] = useState<boolean>();
  const params = new URLSearchParams(window.location.search);

  useEffect(() => {
    const fetcApi = async () => {
      const id = params.get("id");
      const fetchRest = await apiClient.getItem("restaurants", id);
      setRest(fetchRest);
    };
    fetcApi();
  }, []);

  useEffect(() => {
    if (rest) {
      openNow(rest.openingHours) ? setOpen(true) : setOpen(false);
      const breakfast = rest.dishes.filter((dish) =>
        dish.tags.includes("Breakfast")
      );
      const lunch = rest.dishes.filter((dish) => dish.tags.includes("Lunch"));
      const dinner = rest.dishes.filter((dish) => dish.tags.includes("Dinner"));
      setBreakfastDishes(breakfast);
      setLunchtDishes(lunch);
      setDinnerDishes(dinner);
    }
  }, [rest]);

  const onDishClick = (dish: any) => {
    dispatch(dishActions.setdish(dish));
    dispatch(displayActions.setShowDish(true));
  };

  return (
    <>
      {isLoading ? (
        <PageContainer>
          <RestaurantImage src={AppBaseUrl + rest?.pageImage} />
          <RestaurantName>{rest?.name}</RestaurantName>
          <RestaurantChef>{rest?.chefName}</RestaurantChef>
          <OpenContainer>
            <OpenIcon src={AppBaseUrl + "assets/icons/clock.svg"} />
            <OpenStatus>{open ? "Open now" : "Closed"}</OpenStatus>
          </OpenContainer>
          <TabsContainer>
            <Tab href="#breakfast">Breakfast</Tab>
            <Tab href="#lunch">Lunch</Tab>
            <Tab href="#dinner">Dinner</Tab>
          </TabsContainer>
          <DishesContainer>
            {breakfastDishes?.length ? (
              <Section id="breakfast">
                <SectionText>BREAKFAST</SectionText>
                <Line></Line>
              </Section>
            ) : (
              ""
            )}
            {breakfastDishes?.map((dish, index) => {
              return (
                <DishContainer key={index} onClick={() => onDishClick(dish)}>
                  <DishImage src={AppBaseUrl + dish.image} />
                  <DishDetails>
                    <DishName>{dish.name}</DishName>
                    <DishDescription>{dish.ingredients}</DishDescription>
                    <BottomDetails>
                      <DishIcon
                        src={AppBaseUrl + "assets/icons/spicy-icon@2x.png"}
                      />
                      <DishPrice>₪{dish.price}</DishPrice>
                    </BottomDetails>
                  </DishDetails>
                </DishContainer>
              );
            })}
            {lunchtDishes?.length ? (
              <Section id="lunch">
                <SectionText>LUNCH</SectionText>
                <Line></Line>
              </Section>
            ) : (
              ""
            )}
            {lunchtDishes?.map((dish, index) => {
              return (
                <DishContainer key={index} onClick={() => onDishClick(dish)}>
                  <DishImage src={AppBaseUrl + dish.image} />
                  <DishDetails>
                    <DishName>{dish.name}</DishName>
                    <DishDescription>{dish.ingredients}</DishDescription>
                    <BottomDetails>
                      <DishIcon
                        src={AppBaseUrl + "assets/icons/spicy-icon@2x.png"}
                      />
                      <DishPrice>₪{dish.price}</DishPrice>
                    </BottomDetails>
                  </DishDetails>
                </DishContainer>
              );
            })}
            {dinnerDishes?.length ? (
              <Section id="dinner">
                <SectionText>DINNER</SectionText>
                <Line></Line>
              </Section>
            ) : (
              ""
            )}
            {dinnerDishes?.map((dish, index) => {
              return (
                <DishContainer key={index} onClick={() => onDishClick(dish)}>
                  <DishImage src={AppBaseUrl + dish.image} />
                  <DishDetails>
                    <DishName>{dish.name}</DishName>
                    <DishDescription>{dish.ingredients}</DishDescription>
                    <BottomDetails>
                      <DishIcon
                        src={AppBaseUrl + "assets/icons/spicy-icon@2x.png"}
                      />
                      <DishPrice>₪{dish.price}</DishPrice>
                    </BottomDetails>
                  </DishDetails>
                </DishContainer>
              );
            })}
          </DishesContainer>

          {showDish && <DishPage />}
        </PageContainer>
      ) : (
        <LoadingPage />
      )}
    </>
  );
};

export default RestaurantPage;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  max-width: 1100px;
  @media (min-width: 600px) {
    width: 95%;
    margin: auto;
    @media (min-width: 800px) {
      width: 90%;
      margin: auto;
    }
    @media (min-width: 1000px) {
      width: 85%;
      margin: auto;
    }
  }
`;

const RestaurantImage = styled.img`
  width: 100%;
  height: 254px;
  @media (min-width: 600px) {
    height: 390px;
  }
`;

const RestaurantName = styled.div`
  font-size: 25px;
  letter-spacing: 2px;
  font-weight: 400;
  margin-top: 10px;
  @media (min-width: 600px) {
    font-size: 35px;
    margin-top: 25px;
  }
`;

const RestaurantChef = styled.div`
  font-size: 18px;
  letter-spacing: 1px;
  @media (min-width: 600px) {
    font-size: 24px;
  }
`;

const OpenContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 7px;
  margin: 15px 0px;
`;

const OpenIcon = styled.img`
  width: 13px;
  height: 13px;
`;

const OpenStatus = styled.div`
  font-size: 12px;
  letter-spacing: 0.5px;
  @media (min-width: 800px) {
    font-size: 15px;
  }
`;

const TabsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%;
  justify-content: center;
  gap: 30px;
  @media (min-width: 600px) {
    margin-top: 15px;
  }
`;

const Tab = styled.a`
  font-size: 17px;
  letter-spacing: 1px;
  cursor: pointer;
  color: inherit;
  text-decoration: inherit;
  @media (min-width: 800px) {
    font-size: 20px;
    :hover {
      border-bottom: 2px solid orange;
    }
  }
`;

const DishesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 90%;
  gap: 20px;
  margin-top: 20px;
  @media (min-width: 600px) {
    margin-top: 30px;
    width: 100%;
    gap: 43px;
  }
`;

const DishContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 45%;
  height: 300px;
  cursor: pointer;
  @media (min-width: 400px) {
    height: 360px;
  }
  @media (min-width: 600px) {
    height: 380px;
  }
  @media (min-width: 800px) {
    height: 400px;
    width: 22%;
  }
`;

const DishImage = styled.img`
  width: 100%;
  height: 35%;
  @media (min-width: 800px) {
    height: 35%;
  }
`;

const DishDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 65%;
  gap: 5px;
  background: beige;
  @media (min-width: 600px) {
    gap: 10px;
  }
`;

const DishName = styled.div`
  width: 85%;
  height: 25%;
  font-size: 15px;
  text-align: center;
  letter-spacing: 0.5px;
  font-weight: 500;
  margin-top: 5px;
  @media (min-width: 400px) {
    font-size: 20px;
    width: 75%;
  }
  @media (min-width: 600px) {
    font-size: 22px;
    width: 60%;
    margin-top: 15px;
  }
`;

const DishDescription = styled.div`
  font-size: 12px;
  text-align: center;
  letter-spacing: 1px;
  width: 95%;
  height: 50%;
  @media (min-width: 400px) {
    font-size: 14px;
  }
  @media (min-width: 600px) {
    font-size: 16px;
    width: 90%;
  }
  @media (min-width: 1000px) {
    font-size: 18px;
    width: 80%;
  }
`;

const BottomDetails = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 20%;
  gap: 5px;
  margin-bottom: 5px;
  @media (min-width: 400px) {
    gap: 10px;
  }
`;

const DishIcon = styled.img`
  width: 17px;
  height: 17px;
  @media (min-width: 600px) {
    width: 25px;
    height: 25px;
  }
`;

const DishPrice = styled.div`
  font-size: 14px;
  @media (min-width: 600px) {
    font-size: 18px;
  }
`;

const Section = styled.div`
  width: 100%;
  text-align: center;
  margin: 20px 0;
`;

const Line = styled.div`
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #000;
  line-height: 0.1em;
  margin: auto;
  margin-top: -10px;
`;

const SectionText = styled.div`
  font-size: 14px;
  letter-spacing: 1px;
  width: 30%;
  background: white;
  margin-bottom: -10px;
  margin: auto;
  padding: 0px 10px;
  position: relative;
  margin-bottom: -10px;
  @media (min-width: 600px) {
    font-size: 20px;
  }
`;
