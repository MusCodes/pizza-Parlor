import React from "react";
import axios from "axios";
import "./App.css";
import {
  HashRouter as Router,
  Route,
  Switch,
  Link,
  useHistory,
} from "react-router-dom";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import PizzaList from "../PizzaList/PizzaList";
import PizzaForm from "../PizzaForm/PizzaForm";
import PizzaOrder from "../PizzaOrder/PizzaOrder";

import PizzaAdmin from "../PizzaAdmin/PizzaAdmin";

import { useSelector } from "react-redux";
function App() {
  useEffect(() => {
    getPizza();
    getOrder();
  }, []);

  const newOrder = useSelector((store) => store.orderReducer);
  console.log(newOrder);

  const dispatch = useDispatch();

  const getPizza = () => {
    axios
      .get("/api/pizza")
      .then((res) => dispatch({ type: "GET_PIZZA", payload: res.data }))
      .catch((err) => console.log(err));
  };

  const getOrder = () => {
    axios
      .get("/api/order")
      .then((res) => dispatch({ type: "GET_ORDER", payload: res.data }))
      .catch((err) => console.log(err));
  };

  const addOrder = () => {
    axios
      .post(`/api/order`, newOrder)
      .then((res) => {
        console.log("In add order");
        getOrder();
        dispatch({ type: "CLEAR" });
      })
      .catch((err) => console.log(err));
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <h1 className="App-title">Iwatani Pizza</h1>
          </Link>
        </header>
        <Switch>
          <Route path="/" exact>
            <main className="home-page">
              <p>Pizza is great! Order Now!</p>
              <button className="nav">
                <Link to="/pizza">Order</Link>
              </button>
              <img src="images/pizza_photo.png" />
            </main>
          </Route>
          <Route path="/pizza">
            <PizzaList />
          </Route>
          <Route path="/form">
            <PizzaForm />
          </Route>
          <Route path="/order">
            <PizzaOrder addOrder={addOrder} />
          </Route>
          <Route path="/admin">
            <PizzaAdmin />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
