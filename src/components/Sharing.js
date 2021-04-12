import React from 'react';
import sharing from '../images/sharing.svg'


const SharingInfoBlock = () => {
  return (
    <div className="SharingInfoBlock">
        <img src={sharing} alt="person working out" style={{height:'300px', width:'300px'}}/>
            <div>
                <h2>Sharing</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae delectus velit voluptatum enim nam. Nobis soluta iure unde neque temporibus assumenda rerum quo eos, ducimus voluptatibus voluptatum ad itaque porro.</p>
            </div>
    </div>
  );
};

export default SharingInfoBlock;