import { useState } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { useDispatch } from "react-redux";

export default function PizzaForm() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [deliveryOption, setDeliveryOption] = useState("");
  const dispatch = useDispatch();

  const newCustomerInfo = {
    customer_name: name,
    street_address: address,
    city: city,
    zip: zip,
    type: deliveryOption,
  };

  // Change state for delivery option on button click
  const onDeliveryOptionChange = (event) => {
    setDeliveryOption(event.target.value);
    console.log("delivery option is:", event.target.value);
  };

  // Dispatch customer info when selecting next
  function handleCustomerInfo() {
    if (!name || !address || !city || !zip || !deliveryOption) {
      console.log("Please fill out all required fields before proceeding.");
      return; 
    }
  
    console.log("in handleCustomerInfo");
    dispatch({ type: "HANDLE_INFO", payload: newCustomerInfo });
    history.push("/order");
  }
  
  return (
    <form>
    <>
      <div id="form-container">
        <h2>Step 2: Customer Information</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        ></input>
        <br />
        <br />
        <input
          type="text"
          placeholder="Street Address"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
          required
        ></input>
        <br />
        <br />
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(event) => setCity(event.target.value)}
          required
        ></input>
        <br />
        <br />
        <input
          type="number"
          placeholder="Zip"
          value={zip}
          onChange={(event) => setZip(event.target.value)}
          required
        ></input>
        <br />
        <br />
        <div id="radio-field">
          <label>
            <input
              type="radio"
              name="order"
              value="Pickup"
              checked={deliveryOption === "Pickup"}
              onChange={onDeliveryOptionChange}
              required
            />
            Pickup
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="order"
              value="Delivery"
              checked={deliveryOption === "Delivery"}
              onChange={onDeliveryOptionChange}
              required
            />
            Delivery
          </label>
        </div>
        <div>
          <button className="order-btn" type="submit" onClick={handleCustomerInfo}>
            Next
          </button>
        </div>
      </div>
    </>
      </form>
  );
}
