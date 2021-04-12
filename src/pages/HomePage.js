import React from 'react';
import TrainingInfoBlock from '../components/Training';
import TrackingInfoBlock from '../components/Tracking';
import SharingInfoBlock from '../components/Sharing';


const HomePage = () => {
  return (
    <div className="PageBody">
        Home Page
        <TrainingInfoBlock />
        <TrackingInfoBlock />
        <SharingInfoBlock />
    </div>
  );
};

export default HomePage;