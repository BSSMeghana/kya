import React from 'react';
import { useTranslation } from 'react-i18next';
import NotificationCard from './NotificationCard';
import './NotificationStack.css';

const NotificationStack = () => {
  const { t } = useTranslation();

  const notifications = [
    {
      title: t("notifications.hem.title"),
      message: t("notifications.hem.message"),
      date: "6:25 AM · 6/3/25",
      borderColor: "border-green-500",
      icon: "🍏"
    },
    {
      title: t("notifications.nag.title"),
      message: t("notifications.nag.message"),
      date: "7:15 AM · 6/3/25",
      borderColor: "border-blue-500",
      icon: "🍚"
    },
    {
      title: t("notifications.meg.title"),
      message: t("notifications.meg.message"),
      date: "8:05 AM · 6/3/25",
      borderColor: "border-pink-500",
      icon: "🥦"
    }
  ];

  return (
    <div className="notification-stack-wrapper">
      <h2 className="notification-title">{t('notifications.title')}</h2>
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
