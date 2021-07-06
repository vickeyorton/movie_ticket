import React,{useEffect} from "react";
import "./Booking.css";
import Button from "@material-ui/core/Button";
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import BookingSteps from "../BookingSteps/BookingSteps";
import {connect} from "react-redux";
import {GET_MOVIE} from '../../Redux/actions';

function Booking(props) {
  const imageBase = "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces";

  useEffect(() => {
    props.fetchMovie(props.location.movie);
  }, []);

  return (
    <div className="booking-container">
      {props.location.movie ? (
        <div>
          <div className="booking-movie-img">
            <img
              src={imageBase + props.location.movie.backdrop_path}
              alt={props.location.movie.title}
            />
          </div>
          <div className="booking-movie-detail">
            <div className="booking-movie-detail-block">
              <div className="booking-movie-title">
                {props.location.movie.title
                  ? props.location.movie.title
                  : props.location.movie.name}
              </div>
              <div className="booking-movie-subinfo">
                <span>
                  Language :{" "}
                  {props.location.movie.original_language === "en"
                    ? "English"
                    : props.location.movie.original_language}{" "}
                  .
                </span>
                <span>
                  Popularity : {props.location.movie.popularity}K .
                </span>

                {/* {props.location.movie.data.release_date ? (
                  <span>
                    ReleaseDate :{props.location.movie.data.release_date}
                  </span>
                ) : (
                  ""
                )} */}
                <span className="movie-genre">
                  {props.location.movie.genre_ids
                    ? props.location.movie.genre_ids.map((val) => (
                        <span key={val}>
                          {val === 28
                            ? "Action"
                            : val === 12
                            ? "Adventure"
                            : val === 16
                            ? "Animation"
                            : val === 35
                            ? "Comedy"
                            : val === 80
                            ? "Crime"
                            : val === 99
                            ? "Documentry"
                            : val === 18
                            ? "Drama"
                            : val === 10751
                            ? "Family"
                            : val === 14
                            ? "Fantasy"
                            : val === 36
                            ? "History"
                            : val === 27
                            ? "Horror"
                            : val === 10402
                            ? "Music"
                            : val === 9648
                            ? "Mystery"
                            : val === 10749
                            ? "Romance"
                            : val === 878
                            ? "ScienceFiction"
                            : val === 10770
                            ? "TV"
                            : val === 53
                            ? "Thriller"
                            : val === 10752
                            ? "War"
                            : val === 37
                            ? "Western"
                            : ""}
                        </span>
                      ))
                    : ""}
                </span>
              </div>
              <div className="booking-movie-info">
                {props.location.movie.overview}
              </div>
              <div className="booking-price">
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<AttachMoneyIcon />}
                >
                  Book RS:200
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <BookingSteps/>
    </div>
  );
}

const mapDispatchToProps = (dispatch) =>{
  // let movie = props.location.movie.data;
    return{
      fetchMovie:(movie) =>{
        dispatch({type:GET_MOVIE, payload:movie})
      }
    }
}

export default connect(null,mapDispatchToProps)(Booking);
