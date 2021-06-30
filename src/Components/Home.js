import React from "react";

import BannerCarousel from "./BannerCarousel/BannerCarousel";
import LatestMovie from "./LatestMovie/LatestMovie";

function Home(props) {
  return <div style={{background:"#161616"}}>
    <BannerCarousel/>
    <LatestMovie/>
    
  </div>;
}


export default Home;
