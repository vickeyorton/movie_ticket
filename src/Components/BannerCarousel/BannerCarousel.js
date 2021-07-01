import React, { useEffect } from "react";
import { connect } from "react-redux";
import {FETCH_TRENDING } from "../../Redux/actions";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import './BannerCarousel.css';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "90%",
    flexGrow: 1,
    margin:"auto",
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 400,
    paddingLeft: theme.spacing(4),
    backgroundColor: "rgba(18,18,18,.7)",
    color: "#fff",
    width: '40%',
    position: "absolute",
    top: 63,
  },
  img: {
    height: 400,
    display: "block",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
  },
  BannerCarousel_btn_right: {
    top: "-200px",
    color: "#fff",
    fontSize: "large",
    right:'-82px'
  },
  BannerCarousel_btn_left: {
    top: "-200px",
    color: "#fff",
    fontSize: "large",
    left: '-82px'
  },
  BannerCarousel_indicator: {
    background: "rgb(18 18 18 / 0%)",
    top: "-50px",
    position: "relative",
    color: "#fff",
  },
  Banner_Title: {
    fontSize: "2rem",
  },
}));

function BannerCarousel(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const tutorialSteps = props.carousel;
  //   const maxSteps = tutorialSteps.length;
  const baseURL = "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces";

  useEffect(() => {
    props.fetchCarousel();
  }, []);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      {props.carousel !== undefined ? (
        <div style={{height:"400px"}}>
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {/* {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img
                className={classes.img}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))} */}
            {props.carousel.map((step, index) => (
              <div key={step.id}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <img
                    className={classes.img}
                    src={baseURL + step.backdrop_path}
                    alt={step.title}
                  />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          <Paper square elevation={0} className={classes.header}>
            <div>
              <p className={classes.Banner_Title}>
                {tutorialSteps[activeStep].title ? tutorialSteps[activeStep].title : tutorialSteps[activeStep].name}
              </p>
              <p>Rating :{tutorialSteps[activeStep].vote_average}</p>
              <p>{tutorialSteps[activeStep].overview}</p>
            </div>
          </Paper>
          <MobileStepper
            className={classes.BannerCarousel_indicator}
            steps={tutorialSteps.length}
            position="static"
            variant="text"
            activeStep={activeStep}
            nextButton={
              <Button
                className={classes.BannerCarousel_btn_right}
                size="small"
                onClick={handleNext}
                disabled={activeStep === tutorialSteps.length - 1}
              >
                {/* Next */}
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                className={classes.BannerCarousel_btn_left}
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                {/* Back */}
              </Button>
            }
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCarousel: () => {
      dispatch({ type: FETCH_TRENDING });
    },
  };
};

const mapStateToProps = (state) => {
  return {
    state,
    carousel: state.HomePageReducer.trend,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BannerCarousel);
