import { useDispatch, useSelector } from "react-redux";

export default function PizzaAdmin() {
  const adminList = useSelector((store) => store.adminReducer);
  

  // functiong to format timestime into readable date and time
  function formatDate(timestamp){
    const createdAt = new Date(timestamp)
    const time = createdAt.toLocaleTimeString();
    const date= createdAt.toLocaleDateString();
    return `${date} ${time}`;
  }
  return (
    <>
      <div className="order-list">
        <h2>Select your Pizza</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Time of Order</th>
              <th>Type</th>
              <th>Cost</th>
            </tr>
          </thead>
          {adminList.map((order, index) => (
            <tbody key={index} className="order-table">
              <tr>
                <td>{order.customer_name}</td>
                <td>{formatDate(order.time)}</td>
                <td>{order.type}</td>
                <td>{order.total}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
}
