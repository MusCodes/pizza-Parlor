import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




import { Link, useHistory} from "react-router-dom";
import { useState } from "react";

export default function PizzaOrder({ addOrder }) {
  const order = useSelector((store) => store.orderReducer);

  const history=useHistory();
  const [showAlert, setShowAlert]=useState(false);
 
  const handlePlaceOrder = () => {
    addOrder();
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
      history.push('/pizza');
    }, 5000);
  };

  return (
    <>
      <h2>Checkout</h2>
      <div className="customer-info">
        <ul className="list">
          <h1>Customer Information</h1>
          <li>{order.customer_name}</li>
          <li>{order.street_address}</li>
          <li>{order.city}</li>
        </ul>
        <ul className="list">
          <h1>Method</h1>
        <li className="order-type">{order.type ? `For ${order.type}` : ""}</li>

        </ul>
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
      
      {showAlert && (
       
          alert(`Thank you for your order! Redirecting.`)
        
        
      )}

      <button className="order-btn" onClick={handlePlaceOrder}>
        Place order
      </button>
    </>
  );
}
