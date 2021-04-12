import React from 'react';
import tracking from '../images/tracking.svg';


const TrackingInfoBlock = () => {
  return (
    <div className="TrackingInfoBlock">
        <img src={tracking} alt="person working out" style={{height:'300px', width:'300px'}}/> {/*placeholder svg image*/}
            <div>
                <h2>Tracking</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae delectus velit voluptatum enim nam. Mr. Curl is a hoe. unde neque temporibus assumenda rerum quo eos, ducimus voluptatibus voluptatum ad itaque porro.</p>
            </div>
    </div>
  );
};

export default TrackingInfoBlock;