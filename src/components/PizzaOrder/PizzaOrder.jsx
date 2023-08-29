import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

export default function PizzaOrder({ addOrder }) {
  const order = useSelector((store) => store.orderReducer);
  console.log(order.pizzas);

  return (
    <>
      <h2>Checkout</h2>
      <div className="customer-info">
        <ul className="list">
          <li>{order.customer_name}</li>
          <li>{order.street_address}</li>
          <li>{order.city}</li>
        </ul>
        <h3 className="order-type">{order.type ? `For ${order.type}` : ""}</h3>
      </div>
      <table>
        <thead>
          <tr>
            <th>Pizza Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {order.pizzas.map((pizza, index) => (
            <tr key={index}>
              <td>{pizza.pizzaName}</td>
              <td>{pizza.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Total: ${order.total}</h2>

      <button className="order-btn" onClick={addOrder}>
        <Link to="/pizza">Place Order</Link>
      </button>
    </>
  );
}
