import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import NavbarMobile from "./NavbarMobile";
import HomePage from "./pages/HomePage";
import Footer from "./Footer";
import RestaurantsPage from "./pages/RestaurantsPage";
import RestaurantPage from "./pages/RestaurantPage";
import DishPage from "./pages/DishPage";

const Layout = () => {
  return (
    <BrowserRouter>
      <NavbarMobile />
      <section className="layout">
        <main>
          <Switch>
            <Route path="/home">
              <HomePage />
            </Route>
            <Route path="/restaurants">
              <RestaurantsPage />
            </Route>
            <Route path="/restaurant">
              <RestaurantPage />
            </Route>
            <Route path="/dish">
              <DishPage />
            </Route>
            <Route path="/chefs"></Route>
            <Route path="/dishes"></Route>
            <Redirect from="/" to="/home" exact />
          </Switch>
        </main>
      </section>
      <Footer />
    </BrowserRouter>
  );
};

export default Layout;
