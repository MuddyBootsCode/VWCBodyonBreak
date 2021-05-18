import React from "react";
import working_out from "../images/working_out.svg";

const TrainingInfoBlock = () => {
  return (
    <div className="TrainingInfoBlock slide">
      <img
        src={working_out}
        alt="person working out"
        style={{ height: "300px", width: "300px" }}
      />{" "}
      {/*placeholder svg image*/}
      <div>
        <h2>Training</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
          delectus velit voluptatum enim nam. Mr. Curl is a hoe. Unde neque
          temporibus assumenda rerum quo eos, ducimus voluptatibus voluptatum ad
          itaque porro.
        </p>
      </div>
    </div>
  );
};

export default TrainingInfoBlock;
