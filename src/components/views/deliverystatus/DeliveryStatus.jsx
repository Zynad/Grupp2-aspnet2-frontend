import React, { useState } from 'react';
import '../../views/deliverystatus/deliverystatus.css';
import TrackOrderImage from './../../../assets/images/TrackOrder.png';

const DeliveryStatus = () => {
  const [currentStep] = useState(1);

  return (
    <div className="main_container">
      <h1>Track your order</h1>
      <div className='TrackOrdaer.Png'>
        <img src={TrackOrderImage} alt="Order tracking" style={{ width: '200px', height: '300px' }} />
      </div>
      <div className="container">
        <div className="card">
          <div className="card-header">
            <span className="tracking-label">Your order:</span>
            <span className="tracking-number">#100349</span>
          </div>
          <div className="card-body">
            <div className="progress-steps">
              <div className={`step ${currentStep >= 1 ? 'completed' : ''}`}>
                <div className="step-icon">
                  <i className="pe-7s-cart"></i>
                </div>
                <div className="step-content">
                  <h4 className="step-title">Order created</h4>                 
                  <p className="step-paragraph">We have received your order</p>
                </div>
              </div>
              <div className={`step ${currentStep >= 2 ? 'completed' : ''}`}>
                <div className="step-icon">
                  <i className="pe-7s-config"></i>
                </div>
                <div className="step-content">
                  <h4 className="step-title">Order confirmed</h4>
                  <p className="step-paragraph" style={{ fontSize: '14px' }}>Your order has been confirmed</p>
                </div>
              </div>
              <div className={`step ${currentStep >= 3 ? 'completed' : ''}`}>
                <div className="step-icon">
                  <i className="pe-7s-medal"></i>
                </div>
                <div className="step-content">
                  <h4 className="step-title">Order shipping</h4>
                  <p className="step-paragraph" style={{ fontSize: '14px' }}>Estimated for July 20, 2023</p>
                </div>
              </div>
              <div className={`step ${currentStep >= 4 ? 'completed' : ''}`}>
                <div className="step-icon">
                  <i className="pe-7s-car"></i>
                </div>
                <div className="step-content">
                  <h4 className="step-title">Courier delivering</h4>
                  <p className="step-paragraph" style={{ fontSize: '14px' }}>Estimated for July 20, 2023</p>
                </div>
              </div>
              <div className={`step ${currentStep >= 5 ? 'completed' : ''}`}>
                <div className="step-icon">
                  <i className="pe-7s-home"></i>
                </div>
                <div className="step-content">
                  <h4 className="step-title">Receiving</h4>
                  <p className="step-paragraph" style={{ fontSize: '14px' }}>Estimated for July 20, 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryStatus;
