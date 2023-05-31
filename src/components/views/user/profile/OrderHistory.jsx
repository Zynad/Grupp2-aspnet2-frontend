import React from 'react';
import { Link, NavLink} from 'react-router-dom';
import './orderHistory.css'; // Import the local CSS file

const OrderHistory = () => {
  // Sample order history data
  const orders = [
    { id: 1, orderNumber: '#1234', date: '2023-05-12', status: 'Delivered' },
    { id: 2, orderNumber: '#5678', date: '2023-05-08', status: 'Shipping' },
    { id: 3, orderNumber: '#0876',date: '2023-05-03', status: 'Cancelled' },
  ];

  return (
      <div className="order-history-container">
        <div className="top-bar">
          <Link to="/profile" className="go-back-link">
            <i className="fas fa-arrow-left"></i>
          </Link>
          <h2 className="order-history-heading">Order History</h2>
        </div>
        <div className="order-list">
          {orders.map(order => (
            <div key={order.id} className="order-item">
              <div className="order-info">
                <div className="order-details">
                  <div className="order-id">Order ID: {order.orderNumber}</div>
                  <div className="order-date-time">
                    Date: {order.date}
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
