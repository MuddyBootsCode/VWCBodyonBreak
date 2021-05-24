import React from "react";
import TrainingInfoBlock from "../components/Training";
import TrackingInfoBlock from "../components/Tracking";
import SharingInfoBlock from "../components/Sharing";
import HomePageVideo from "../components/HomePageVideo";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="PageBody">
      <TrainingInfoBlock />
      <TrackingInfoBlock />
      <SharingInfoBlock />
      <Footer />
    </div>
  );
};

export default HomePage;
