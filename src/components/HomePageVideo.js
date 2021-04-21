import React from 'react';
import workoutVideo from '../video/workout_video.mp4';

const HomePageVideo = () => {
    return (
      
      <div className='homePageVideoDiv'>
          <video className="homePageVideo" autoPlay loop muted>
            <source src={workoutVideo} type='video/mp4' />
          </video>
      </div>
    );
  };
  
  export default HomePageVideo;