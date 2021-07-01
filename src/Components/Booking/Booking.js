import React from "react";
import "./Booking.css";
import Button from "@material-ui/core/Button";
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import BookingSteps from "../BookingSteps/BookingSteps";

function Booking(props) {
  const imageBase = "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces";

  return (
    <div className="booking-container">
      {props.location.movie ? (
        <div>
          <div className="booking-movie-img">
            <img
              src={imageBase + props.location.movie.data.backdrop_path}
              alt={props.location.movie.data.title}
            />
          </div>
          <div className="booking-movie-detail">
            <div className="booking-movie-detail-block">
              <div className="booking-movie-title">
                {props.location.movie.data.title
                  ? props.location.movie.data.title
                  : props.location.movie.data.name}
              </div>
              <div className="booking-movie-subinfo">
                <span>
                  Language :{" "}
                  {props.location.movie.data.original_language === "en"
                    ? "English"
                    : props.location.movie.data.original_language}{" "}
                  .
                </span>
                <span>
                  Popularity : {props.location.movie.data.popularity}K .
                </span>

                {/* {props.location.movie.data.release_date ? (
                  <span>
                    ReleaseDate :{props.location.movie.data.release_date}
                  </span>
                ) : (
                  ""
                )} */}
                <span className="movie-genre">
                  {props.location.movie.data.genre_ids
                    ? props.location.movie.data.genre_ids.map((val) => (
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
                {props.location.movie.data.overview}
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

export default Booking;
