import React from 'react';
import NotificationCard from './NotificationCard';
import './NotificationStack.css';

const notifications = [
  {
    title: "HEM's Store",
    message:
      "Fresh Fuji Apples and Alphonso Mangoes just arrived! 10% off on seasonal fruits this week.\nThere's a 20% off on all fruit baskets.",
    date: "6:25 AM · 6/3/25",
    borderColor: "border-green-500",
    icon: "🍏"
  },
  {
    title: "NAG's Store",
    message:
      "Stock Alert! Premium Basmati Rice now available. Plus, 15% off on whole grains.\n Don't miss out on our special offer!",
    date: "7:15 AM · 6/3/25",
    borderColor: "border-blue-500",
    icon: "🍚"
  },
  {
    title: "MEG's Store",
    message:
      "Fresh organic veggies restocked.Get your greens now! 🥬🥕.\nHave a good day!",
    date: "8:05 AM · 6/3/25",
    borderColor: "border-pink-500",
    icon: "🥦"
  }
];

const NotificationStack = () => {
  return (
    <div className="notification-stack-wrapper">
      <h2 className="notification-title">Store Notifications</h2>
      <div className="notification-stack">
        <div className="notification-scroll">
          {notifications.map((note, index) => (
            <NotificationCard key={index} {...note} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationStack;
