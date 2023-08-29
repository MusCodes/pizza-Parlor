import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

// Reducers
const pizzaReducer = (state = [], action) => {
  if (action.type === "GET_PIZZA") {
    return action.payload;
  }
  return state;
};

// Order reducer with a GET_ORDER AND ADD_ORDER action types
const orderReducer = (state = { pizzas: [], total: 0 }, action) => {
  if (action.type === "HANDLE_PIZZA") {
    return {
      ...state,
      pizzas: [
        ...state.pizzas,
        {
          id: action.payload.id,
          quantity: action.payload.quantity,
          price: action.payload.price,
          pizzaName: action.payload.name,
        },
      ],
      total: (Number(state.total) + Number(action.payload.price)).toFixed(2),
    };
  } else if (action.type === "HANDLE_INFO") {
    return { ...state, ...action.payload };
  } else if (action.type === "CLEAR") {
    return  { pizzas: [], total: 0 }; ;
  } else if (action.type === "REMOVE_PIZZA") {
    let newState = [...state.pizzas];
    let index = newState.findIndex((el) => el.id === action.payload.id);
    console.log(index);
    if (index !== -1) {
      newState.splice(index, 1);
      return {
        ...state,
        pizzas: newState,
        total: (Number(state.total) - Number(action.payload.total)).toFixed(2),
      };
    }
  }
  return state;
};

const adminReducer = (state = [], action) => {
  if (action.type === "GET_ORDER") {
    return action.payload;
  }
  return state;
};

// This is our store.
const storeInstance = createStore(
  combineReducers({
    pizzaReducer,
    orderReducer,
    adminReducer,
  }),
  applyMiddleware(logger)
);
window.store = storeInstance;

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);
