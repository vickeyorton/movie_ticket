import React from 'react';
import './PosterCard.css';
import Slider from "react-slick";

export const PosterCard1 = (props) => {

    
    const result = props.list;
    const baseURL= "https://www.themoviedb.org/t/p/w220_and_h330_face";


    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 6
    };
    return (
        <div className="poster-container">
            <Slider {...settings} className="poster-card">
            {result &&
            result.map((data,index) =>(
                    <img src={baseURL + data.poster_path}
                        alt={baseURL.title}
                    />
               
            ))}
            </Slider>      
      </div>
    );
  }


export default PosterCard1;
