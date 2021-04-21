import React from 'react';
import TrainingInfoBlock from '../components/Training';
import TrackingInfoBlock from '../components/Tracking';
import SharingInfoBlock from '../components/Sharing';
import HomePageVideo from '../components/HomePageVideo';


const HomePage = () => {
  return (
    <div className="PageBody">
        <HomePageVideo />
        <TrainingInfoBlock />
        <TrackingInfoBlock />
        <SharingInfoBlock />
    </div>
  );
};

export default HomePage;