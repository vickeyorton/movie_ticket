import React,{useEffect} from 'react'
import { connect } from 'react-redux';
import { FETCH_LATEST } from '../../Redux/actions';
import './PosterCard.css';
import Slider from "react-slick";

export const PosterCard1 = (props) => {

    useEffect(() => {
        props.fetchLatest();
    }, []);

    const baseURL= "https://www.themoviedb.org/t/p/w220_and_h330_face";


    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 6
    };
    return (
        <div style={{display:"flex",
            margin: "0px",
            padding: "30px 60px"}}>
            <Slider {...settings} className="poster-card">
            {props.latest &&
            props.latest.map((data,index) =>(
                    <img src={baseURL + data.poster_path}
                        alt={baseURL.title}
                    />
               
            ))}
            </Slider>      
      </div>
    );
  }


  const mapStateToProps = (state) => {
    return {
        state,
        latest: state.HomePageReducer.trend,
      };
}

const mapDispatchToProps = (dispatch)=>{
    return {
        fetchLatest: () => {
          dispatch({ type: FETCH_LATEST });
        },
      };
}

export default connect(mapStateToProps, mapDispatchToProps)(PosterCard1)
