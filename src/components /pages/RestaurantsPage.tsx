import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { apiClient, AppBaseUrl, Rest } from "../../api";
import { NewDate, openNow } from "../../api";

const RestaurantsPage = () => {
  const history = useHistory();
  const [rests, setRests] = useState<Rest[]>();
  const [selectedTab, setselectedTab] = useState<string>("All");
  const [restToShow, setRestToShow] = useState<Rest[]>();

  const onRestClicked = (id: string) => {
    history.push("/restaurant" + "/?id=" + id);
  };

  useEffect(() => {
    const fetcApi = async () => {
      const rests = await apiClient.getAllItems("restaurants");
      setRests(rests);
      setRestToShow(rests);
    };
    fetcApi();
  }, []);

  const onNewClicked = () => {
    const newRests = rests?.filter((rest) => new Date(rest.since) > NewDate);
    setRestToShow(newRests);
    setselectedTab("New");
  };

  const onOpenClicked = () => {
    const newRests = rests?.filter((rest) => openNow(rest.openingHours));
    setRestToShow(newRests);
    setselectedTab("Open");
  };

  const onPopularClicked = () => {
    const newRests = rests?.filter((rest) => rest.popular);
    console.log(newRests);
    setRestToShow(newRests);
    setselectedTab("Popular");
  };

  const onAllClicked = () => {
    setRestToShow(rests);
    setselectedTab("All");
  };

  return (
    <PageContainer>
      <PageHeader>RESTAURANTS</PageHeader>
      <TabsContainer>
        <Tab isSelected={selectedTab === "All"} onClick={onAllClicked}>
          All
        </Tab>
        <Tab isSelected={selectedTab === "New"} onClick={onNewClicked}>
          New
        </Tab>
        <Tab isSelected={selectedTab === "Popular"} onClick={onPopularClicked}>
          Most Popular
        </Tab>
        <Tab isSelected={selectedTab === "Open"} onClick={onOpenClicked}>
          Open Now
        </Tab>
      </TabsContainer>
      <RestaurantsContainer>
        {restToShow?.map((rest: any, index) => {
          return (
            <RestaurantContainer
              key={index}
              onClick={() => {
                onRestClicked(rest._id);
              }}
            >
              <RestaurantImage src={AppBaseUrl + rest.image}></RestaurantImage>
              <RestaurantDetails>
                <RestaurantName>{rest.name}</RestaurantName>
                <RestaurantChef>{rest.chefName}</RestaurantChef>
              </RestaurantDetails>
            </RestaurantContainer>
          );
        })}
      </RestaurantsContainer>
    </PageContainer>
  );
};

export default RestaurantsPage;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  gap: 20px;
  width: 90%;
  max-width: 1100px;
  @media (min-width: 800px) {
    width: 85%;
    @media (min-width: 1720px) {
      max-width: none;
    }
  }
`;

const PageHeader = styled.div`
  font-size: 20px;
  letter-spacing: 1px;
  @media (min-width: 600px) {
    display: none;
  }
`;

const TabsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  @media (min-width: 600px) {
    justify-content: center;
    width: 60%;
    margin-top: 20px;
    gap: 25px;
  }
`;

const Tab = styled.a`
  font-size: 16px;
  font-weight: ${(props: { isSelected: boolean }) =>
    props.isSelected ? "700" : ""};
  letter-spacing: 1px;
  cursor: pointer;
  @media (min-width: 600px) {
    font-size: 16px;
    @media (min-width: 800px) {
      font-size: 18px;
    }
    @media (min-width: 1000px) {
      font-size: 20px;
    }
  }
`;

const RestaurantsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 10px;
  @media (min-width: 600px) {
    @media (min-width: 800px) {
      gap: 20px;
    }
  }
`;

const RestaurantContainer = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 48%;
  max-width: 350px;
  @media (min-width: 600px) {
    width: 31%;
    height: 250px;
    @media (min-width: 800px) {
      height: 300px;
    }
    @media (min-width: 1000px) {
      height: 340px;
    }
  }
`;

const RestaurantImage = styled.img`
  width: 100%;
  height: 63%;
  @media (min-width: 600px) {
    height: 63%;
  }
`;

const RestaurantDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 70px;
  width: 100%;
  background: beige;
  @media (min-width: 600px) {
    height: 37%;
  }
`;

const RestaurantName = styled.div`
  margin-top: 0px;
  margin-bottom: 0;
  font-size: 17.3px;
  font-weight: 500;
  @media (min-width: 600px) {
    font-size: 20px;
    @media (min-width: 800px) {
      font-size: 25px;
    }
    @media (min-width: 1000px) {
      font-size: 30px;
    }
  }
`;

const RestaurantChef = styled.div`
  font-size: 13.3px;
  @media (min-width: 600px) {
    @media (min-width: 800px) {
      font-size: 20px;
    }
    @media (min-width: 1000px) {
      font-size: 25px;
    }
  }
`;
