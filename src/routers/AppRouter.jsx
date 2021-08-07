import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import PokemonScreen from "../components/pokemon/PokemonScreen";
import Header from "../components/ui/Header";
import NotFoundScreen from "../components/notfound/NotFoundScreen";
import DetailScreen from "../components/detail/DetailScreen";
import Footer from "../components/ui/Footer";

const AppRouter = () => {
  return (
    <>
      <Header />
      <div className="container mb-4">
        <div className="row">
          <HashRouter>
            <Switch>
              <Route exact path="/" component={PokemonScreen} />
              <Route exact path="/pokemon" component={PokemonScreen} />
              <Route exact path="/detail/:pokemonId" component={DetailScreen} />
              <Route exact path="/404" component={NotFoundScreen} />
              <Redirect to="/404" />
            </Switch>
          </HashRouter>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AppRouter;
