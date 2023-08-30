import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HashRouter as Router, Route, Link, useHistory } from "react-router-dom";
 
export default function PizzaList() {
  const history=useHistory();
  const pizzaList = useSelector((store) => store.pizzaReducer);
  const order = useSelector((store) => store.orderReducer);
  const dispatch = useDispatch();

  const [id, setId] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const total = order.total;
  const nextPage = () =>{
    history.push("/form")
  }

  const removeCart = (id, price) => {
    let obj = {
      id: id,
      total: price,
    };
    dispatch({ type: "REMOVE_PIZZA", payload: obj });
  };

  const handleAddToCart = (id, quantity, price, name) => {
    setId(id);
    setQuantity(quantity);
    setPrice(Number(price));
    setName(name);

    let obj1 = {
      id: id,
      quantity: quantity,
      price: price,
      name: name,
    };

    dispatch({ type: "HANDLE_PIZZA", payload: obj1 });
  };

  return (
    <>
      <header>
        <h2>Select Your Pizza!</h2>
        <h2>Total: ${total ? total : 0}</h2>
      </header>
      <div className="pizza-list">
        {pizzaList.map((pizza, index) => (
          <div key={index} className="pizza-card">
            <img src={pizza.image_path} alt="" className="pizza-img" />
            <h2>{pizza.name}</h2>
            <p>{pizza.description}</p>
            <h2>Price: {pizza.price}</h2>
            <button
              onClick={() =>
                handleAddToCart(pizza.id, 1, pizza.price, pizza.name)
              }
            >
              Add to Cart
            </button>
            <button onClick={() => removeCart(pizza.id, pizza.price)}>
              Remove from Cart
            </button>
          </div>
        ))}
      </div>
      <button className="order-btn" onClick={nextPage}> 
        <Link to="/form">Next</Link>
      </button>
    </>
  );
}


