import React from 'react';
import './NotificationCard.css';

const NotificationCard = ({ title, message, date, borderColor, icon }) => (
  <div className={`notification-card ${borderColor}`}>
    <div className="notification-header">
      <span className="notification-icon">{icon}</span>
      <h3 className="notification-title">{title}</h3>
    </div>

    <div className="scrolling-text-wrapper">
      <div className="scrolling-text">
        <p className="notification-message">{message}</p>
      </div>
    </div>

    <p className="notification-time">{date}</p>
  </div>
);

export default NotificationCard;
