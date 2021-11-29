import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { apiClient, AppBaseUrl, PAGE_SIZE, Rest } from "../../api";

const RestaurantsPage: React.FC = () => {
  const history = useHistory();
  const [selectedTab, setselectedTab] = useState<string>("All");
  const [restToShow, setRestToShow] = useState<Rest[]>();
  const [page, setPage] = useState<number>(1);
  const [maxPages, setMaxPages] = useState<number>();
  const params = new URLSearchParams(window.location.search);

  // initialize
  useEffect(() => {
    const fetcApi = async () => {
      const filter = params.get("f");
      const skip = parseInt(params.get("skip")!);
      const rests = await apiClient.getFilterRestaurants(
        "restaurants",
        skip,
        PAGE_SIZE,
        filter
      );
      setRestToShow(rests.data);
      setMaxPages(Math.ceil(rests.numsOfItems / PAGE_SIZE));
    };
    fetcApi();
  }, []);

  // After Page clicked
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    const fetcApi = async () => {
      const filter = params.get("f");
      const skip = parseInt(params.get("skip")!);
      const rests = await apiClient.getFilterRestaurants(
        "restaurants",
        skip,
        PAGE_SIZE,
        filter
      );
      setRestToShow(rests.data);
    };
    fetcApi();
  }, [page]);

  // After Tab clicked
  useEffect(() => {
    setPage(1);
    const fetcApi = async () => {
      const filter = params.get("f");
      const rests = await apiClient.getFilterRestaurants(
        "restaurants",
        0,
        PAGE_SIZE,
        filter
      );
      setRestToShow(rests.data);
      setMaxPages(Math.ceil(rests.numsOfItems / PAGE_SIZE));
    };
    fetcApi();
  }, [selectedTab]);

  // Restaurants click handler
  const onRestClicked = (id: string) => {
    history.push("/restaurant" + "/?id=" + id);
  };

  // Tab click handler
  const onTabClicked = (tab: string) => {
    setselectedTab(tab);
    history.push(`/restaurants/?skip=${0}&limit=${PAGE_SIZE}&f=${tab}`);
  };

  // Page click handler
  const onPageClicked = (page: number) => {
    setPage(page);
    history.push(
      `/restaurants/?skip=${
        (page - 1) * PAGE_SIZE
      }&limit=${PAGE_SIZE}&f=${selectedTab}`
    );
  };

  // PAGING SECTION
  const arr: any[] = [];
  if (page > 1) {
    arr.push(
      <PageNumber isSelected={false} onClick={() => onPageClicked(page - 1)}>
        Prev
      </PageNumber>
    );
  }

  for (let i = 1; i <= maxPages!; i++) {
    if (page - 3 < i && i < page + 3) {
      arr.push(
        <PageNumber
          key={i}
          isSelected={i === page}
          onClick={() => onPageClicked(i)}
        >
          {i}
        </PageNumber>
      );
    }
  }

  if (page < maxPages!) {
    arr.push(
      <PageNumber isSelected={false} onClick={() => onPageClicked(page + 1)}>
        Next
      </PageNumber>
    );
  }

  return (
    <PageContainer>
      <PageHeader>RESTAURANTS</PageHeader>
      <TabsContainer>
        <Tab
          title={"All"}
          isSelected={selectedTab === "All"}
          onClick={() => onTabClicked("All")}
        >
          All
        </Tab>
        <Tab
          title={"New"}
          isSelected={selectedTab === "New"}
          onClick={() => onTabClicked("New")}
        >
          New
        </Tab>
        <Tab
          title={"Most Popular"}
          isSelected={selectedTab === "Popular"}
          onClick={() => onTabClicked("Popular")}
        >
          Most Popular
        </Tab>
        <Tab
          title={"Open Now"}
          isSelected={selectedTab === "Open"}
          onClick={() => onTabClicked("Open")}
        >
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
      <PagingContainer>{arr}</PagingContainer>
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
  min-height: 700px;
  @media (min-width: 800px) {
    width: 85%;
    min-height: 1176px;
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

const Tab = styled.div`
  font-size: 16px;
  font-weight: ${(props: { isSelected: boolean }) =>
    props.isSelected ? "700" : ""};
  letter-spacing: 1px;
  cursor: pointer;
  text-align: center;
  ::after {
    display: block;
    content: attr(title);
    font-weight: 700;
    height: 1px;
    color: transparent;
    overflow: hidden;
    visibility: hidden;
    letter-spacing: 1px;
  }
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

const PagingContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const PageNumber = styled.li`
  list-style: none;
  font-size: 15px;
  font-weight: ${(props: { isSelected: boolean }) =>
    props.isSelected ? "700" : ""};
  cursor: pointer;
  @media (min-width: 600px) {
    font-size: 25px;
  }
`;
