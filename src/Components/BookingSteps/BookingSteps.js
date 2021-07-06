import "date-fns";
import React from "react";
import "./BookingSteps.css";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import BookingSeats from "./BookingSeat";
import {connect} from 'react-redux';
import {GET_DATE,GET_SHOW} from "../../Redux/actions";

function BookingSteps(props) {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2021-08-18T21:11:54")
  );
  const [value, setValue] = React.useState("12:30pm");

  const handleDateChange = (date) => {
    setSelectedDate(date);
    props.fetchDate(date);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
    props.fetchShow(event.target.value);
  };

  const shows = [
    "12:30pm",
    "1:00pm",
    "2:30pm",
    "3:00pm",
    "3:30pm",
    "6:00pm",
    "6:30pm",
    "7:00pm",
    "7:30pm",
    "9:30pm",
    "10:00pm",
    "10:30pm",
  ];

  

  return (
    <div className="bookingStep-bg">
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="Select Date"
            format="MM/dd/yyyy"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>

      <FormControl component="fieldset">
        <FormLabel component="legend">Show Timing</FormLabel>
        <RadioGroup
          aria-label="timing"
          name="timing"
          value={value}
          onChange={handleChange}
          className="show-flex"
        >
          {shows.map((data,index)=>(
            <FormControlLabel value={data} control={<Radio small/>} label={data} key={index} />
          ))}
        </RadioGroup>
      </FormControl>

      <BookingSeats/>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return{
    fetchDate:(date) =>{
      dispatch({type:GET_DATE, payload:date})
    },
    fetchShow:(time) =>{
      dispatch({type:GET_SHOW, payload:time})
    }
  }
}

export default connect(null,mapDispatchToProps)(BookingSteps);