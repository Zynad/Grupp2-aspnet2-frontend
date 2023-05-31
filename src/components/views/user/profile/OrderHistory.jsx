import { useContext, useEffect, useState } from "react";
import { ApiContext } from "../../../../contexts/ApiProvider";
import { NavLink} from 'react-router-dom';
import './orderHistory.css'; // Import the local CSS file

const OrderHistory = () => {

  const {OrderHistoryBySignedIn} = useContext(ApiContext);
  const [orders, setOrders] = useState([])

  useEffect (() => {GetAllOrders()}, []);

  const GetAllOrders = async () =>{
    var list = await OrderHistoryBySignedIn();
    setOrders(list);
  }

  return (
      <div className="order-history-container">
        <div className="top-bar">
          <NavLink to="/profile" className="go-back-link">
            <i className="fas fa-arrow-left"></i>
          </NavLink>
          <h2 className="order-history-heading">Order History</h2>
        </div>
        <div className="order-list">
          {orders.map(order => (
            <div key={order.id} className="order-item">
              <div className="order-info">
                <div className="order-details">
                  <div className="order-id">Order ID: {order.id}</div>
                  <div className="order-date-time">
                    Date: {order.orderDate}
                  </div>
                  <div className="order-date-time">
                    Time: {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
                <div className="order-status-price">
                  <div className={`order-status ${order.status.toLowerCase()}`}>{order.status}</div>
                  <div className="order-price">${order.price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default OrderHistory;
