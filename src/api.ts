import axios from "axios";

export enum collection {
  chefs = "chefs",
  resturants = "resturants",
  dishes = "dishes",
}

export interface Chef {
  _id: number;
  name: string;
  image: string;
  description: string;
  restaurants: Restaurants[];
}

export interface Rest {
  _id: string;
  name: string;
  chefName: string;
  image: string;
  pageImage: string;
  dishes: Dish[];
  openingHours: string;
  popular: boolean;
  since: Date;
}

export interface Restaurants {
  _id: string;
  name: string;
  chefName: string;
  image: string;
  dishes: string[];
}

export interface Dish {
  _id: number;
  name: string;
  price: number;
  image: string;
  ingredients: string[];
  tags: string[];
}

const ServerBaseUrl = "http://localhost:8081";

export const AppBaseUrl = "http://localhost:3000/";

export const NewDate = new Date(2010, 10);

export const PAGE_SIZE = 9;

export const openNow = (hours: string | undefined) => {
  if (hours) {
    const now = new Date();
    const nowHours = now.getHours();
    const nowMinutes = now.getMinutes();
    const hoursParse = hours.split("-");
    const open = hoursParse[0];
    const close = hoursParse[1];
    const openParse = open.split(":");
    const closeParse = close.split(":");
    const openHour = parseInt(openParse[0]);
    const openMinute = parseInt(openParse[1]);
    const closeHour = parseInt(closeParse[0]);
    const closeMinute = parseInt(closeParse[1]);
    if (
      (nowHours >= openHour && nowHours <= closeHour) ||
      (nowHours >= openHour && openHour >= closeHour)
    ) {
      if (
        (nowHours === openHour && nowMinutes < openMinute) ||
        (nowHours === closeHour && nowMinutes > closeMinute)
      ) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }
};

class ApiClient {
  public async getAllItems(collection: string) {
    return axios
      .get(ServerBaseUrl + "/api/v1/" + `${collection}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        return res.data;
      });
  }

  public async getFilterRestaurants(
    collection: string,
    skip: number,
    limit: number,
    filter: any
  ) {
    return axios
      .get(
        ServerBaseUrl +
          "/api/v1/" +
          `${collection}` +
          `?skip=${skip}&limit=${limit}&f=${filter}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        return res.data;
      });
  }

  public async getItem(collection: string, id: string | null) {
    if (id) {
      return axios
        .get(ServerBaseUrl + "/api/v1/" + `${collection}` + "/" + `${id}`, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          return res.data;
        });
    } else {
      console.log("item didnt exist");
    }
  }
}

const apiClient = new ApiClient();

export { apiClient };
