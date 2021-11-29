import { useEffect, useState } from "react";
import styled from "styled-components";
import { apiClient, AppBaseUrl, Dish, openNow, Rest } from "../../api";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { dishActions } from "../../redux/slice/dish.slice";
import { displayActions } from "../../redux/slice/display-slice";
import DishPage from "../DishModal";
import LoadingPage from "./LoadingPage";

const RestaurantPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.display.isLoading);
  const showDish = useAppSelector((state) => state.display.showDish);
  const [rest, setRest] = useState<Rest>();
  const [displayDishes, setDispalyDishes] = useState<Dish[]>();
  const [selectedTab, setselectedTab] = useState<string>("Breakfast");
  const [open, setOpen] = useState<boolean>();
  const params = new URLSearchParams(window.location.search);

  useEffect(() => {
    const fetcApi = async () => {
      const id = params.get("id");
      const fetchRest = await apiClient.getItem("restaurants", id);
      setRest(fetchRest);
    };
    fetcApi();
    const dishes = rest?.dishes.filter((dish) =>
      dish.tags.includes("Breakfast")
    );
    setDispalyDishes(dishes);
  }, []);

  useEffect(() => {
    const dishes = rest?.dishes.filter((dish) =>
      dish.tags.includes("Breakfast")
    );
    setDispalyDishes(dishes);
    setOpen(openNow(rest?.openingHours));
  }, [rest]);

  const onTabClicked = (tabName: string) => {
    const dishes = rest?.dishes.filter((dish) => dish.tags.includes(tabName));
    setDispalyDishes(dishes);
    setselectedTab(tabName);
  };

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
            <Tab
              isSelected={selectedTab === "Breakfast"}
              onClick={() => onTabClicked("Breakfast")}
            >
              Breakfast
            </Tab>
            <Tab
              isSelected={selectedTab === "Lunch"}
              onClick={() => onTabClicked("Lunch")}
            >
              Lunch
            </Tab>
            <Tab
              isSelected={selectedTab === "Dinner"}
              onClick={() => onTabClicked("Dinner")}
            >
              Dinner
            </Tab>
          </TabsContainer>
          <DishesContainer>
            {displayDishes?.length ? (
              displayDishes?.map((dish, index) => {
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
              })
            ) : (
              <h1>There is no {selectedTab} Dishes</h1>
            )}
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

const Tab = styled.div`
  font-size: 17px;
  letter-spacing: 1px;
  cursor: pointer;
  color: inherit;
  text-decoration: inherit;
  border: none
  border: 2px solid transparent;
  border-bottom: 2px solid orange;
  border: ${(props: { isSelected: boolean }) =>
    props.isSelected ? "" : "hidden"};
  @media (min-width: 800px) {
    font-size: 20px;
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
