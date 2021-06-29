import React, { useEffect } from "react";
import { connect } from "react-redux";
import { GET_TRENDING, FETCH_TRENDING } from "../../Redux/actions";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

// const tutorialSteps = [
//   {
//     label: "San Francisco – Oakland Bay Bridge, United States",
//     imgPath:
//       "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
//   },
//   {
//     label: "Bird",
//     imgPath:
//       "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
//   },
//   {
//     label: "Bali, Indonesia",
//     imgPath:
//       "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
//   },
//   {
//     label: "NeONBRAND Digital Marketing, Las Vegas, United States",
//     imgPath:
//       "https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60",
//   },
//   {
//     label: "Goč, Serbia",
//     imgPath:
//       "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
//   },
// ];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    flexGrow: 1,
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 400,
    paddingLeft: theme.spacing(4),
    backgroundColor: "rgba(18,18,18,.7)",
    color: "#fff",
    width: 500,
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
  BannerCarousel_btn: {
    top: "-250px",
    color: "#fff",
    fontSize: "large",
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
        <div>
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
                    src={baseURL + step.poster_path}
                    alt={step.title}
                  />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          <Paper square elevation={0} className={classes.header}>
            <Typography>
              <p className={classes.Banner_Title}>
                {tutorialSteps[activeStep].title}
              </p>
              <p>Rating :{tutorialSteps[activeStep].vote_average}</p>
              <p>{tutorialSteps[activeStep].overview}</p>
            </Typography>
          </Paper>
          <MobileStepper
            className={classes.BannerCarousel_indicator}
            steps={tutorialSteps.length}
            position="static"
            variant="text"
            activeStep={activeStep}
            nextButton={
              <Button
                className={classes.BannerCarousel_btn}
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
                className={classes.BannerCarousel_btn}
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
