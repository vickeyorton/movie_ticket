import React from "react";

import BannerCarousel from "./BannerCarousel/BannerCarousel";
import LatestMovie from "./PosterList/LatestMovie/LatestMovie";
import UpcomingMovie from "./PosterList/UpcomingMovie/UpcomingMovie";
import RecommendedMovie from "./PosterList/RecommendedMovie/RecommendedMovie";
import ActionMovie from "./PosterList/ActionMovie/ActionMovie";
import KidsMovie from "./PosterList/KidsMovie/KidsMovie";
import HorrorMovie from "./PosterList/HorrorMovie/HorrorMovie";
import FictionMovie from "./PosterList/FictionMovie/FictionMovie";

function Home(props) {
  return <div style={{background:"#161616"}}>
    <BannerCarousel/>
    <LatestMovie/>
    <UpcomingMovie/>
    <RecommendedMovie/>
    <ActionMovie/>
    <KidsMovie/>
    <HorrorMovie/>
    <FictionMovie/>
  </div>;
}


export default Home;
