import React from 'react';
import workoutPorter from '../video/Porter.mp4';

const HomePageVideo = () => {
    return (
      
      <div className='homePageVideoDiv'>
          <video className="homePageVideo" autoPlay loop muted>
            <source src={workoutPorter} type='video/mp4' />
          </video>
      </div>
    );
  };
  
  export default HomePageVideo;