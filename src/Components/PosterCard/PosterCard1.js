import React from "react";
import "./PosterCard.css";
import Slider from "react-slick";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import {Link,useHistory} from 'react-router-dom';
// import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export const PosterCard1 = (props) => {
  const classes = useStyles();
  const result = props.list;
  const baseURL = "https://www.themoviedb.org/t/p/w220_and_h330_face";
  const history = useHistory();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const booking =(data) =>{
    history.push({
      pathname: '/detail',
      movie: data,
    });
  }

  return (
    <div className="poster-container">
      <Slider {...settings} className="poster-card">
        {result &&
          result.map((data, index) => (
            <Card className={classes.root} key={index}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={data.title}
                  image={baseURL + data.poster_path}
                  title="Contemplative Reptile"
                />
              </CardActionArea>
              <CardActions className="posterButton">
                <Button variant="outlined" color="secondary" onClick={()=>booking(data)}>
                  Books
                </Button>
              </CardActions>
            </Card>
          ))}
      </Slider>
    </div>
  );
};

export default PosterCard1;
