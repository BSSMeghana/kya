import React from 'react';
import NotificationCard from './NotificationCard';
import './NotificationStack.css';

const NotificationStack = () => {
  return (
    <section className="bg-yellow-50 py-6 px-4">
      <h2 className="text-xl font-bold text-center text-yellow-800 mb-4">Store Notifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        <NotificationCard
          title="HEM's Store"
          message="6:25 - 6/3/25 : Fresh Fuji Apples and Alphonso Mangoes just arrived! 10% off on seasonal fruits this week."
         
          borderColor="border-green-500"
          textColor="text-green-700"
        />
        <NotificationCard
          title="NAG's Store"
          message=" 9:45 - 6/3/25 : New stock of Rose Bouquets & Jasmine Garlands! Buy 1 Get 1 Free till Friday."
          borderColor="border-pink-500"
          textColor="text-pink-700"
        />
        <NotificationCard
          title="MEG's Store"
          message="12:03 - 6/3/25 : Fresh arrivals of organic baby wipes & formula. Flat 15% off on select brands!"
          borderColor="border-blue-500"
          textColor="text-blue-700"
        />
      </div>
    </section>
  );
};

export default NotificationStack;
