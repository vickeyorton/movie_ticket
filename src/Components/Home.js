import React from "react";

import BannerCarousel from "./BannerCarousel/BannerCarousel";
import PosterCard1 from "./PosterCard/PosterCard1";

function Home(props) {
  return <div style={{background:"#161616"}}>
    <BannerCarousel/>
    <div style={{color:"#fff"}}>
      <h2>Latest Movies</h2>
      <PosterCard1/>
    </div>
    
  </div>;
}


export default Home;
