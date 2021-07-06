import React, { useState } from "react";
import "./BookMySeats.css";
import Seats from "./Seats";
import Button from "@material-ui/core/Button";
import {connect } from "react-redux";
import { GET_SEATS ,SET_TICKET} from "../../Redux/actions";
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { useHistory } from "react-router-dom";



const createSeats = (rows, startIndex) => {
  let i = 0;
  let j = startIndex;
  let k = "A";
  const section = [];
  while (i < 6 && j <= rows) {
    if (k > "F") {
      k = "A";
      j++;
    }
    if (j < rows + 1) {
      section.push(j + k);
      k = String.fromCharCode(k.charCodeAt(0) + 1);
    }
  }
  return section;
};

const BookMySeats = (props) => {
  const history = useHistory();
  const Price = 200;
  const premiumSeats = createSeats(2, "1");
  const normalSeats = createSeats(10, "3");
  const [availableSeats, setAvailableSeats] = useState([
    "1A",
    "1B",
    "2A",
    "2B",
    "10A",
    "10B",
  ]);
  const [bookedSeats, setBookedSeats] = useState([]);
  const [bookedStatus, setBookedStatus] = useState("");
  const addSeat = (ev) => {
      ev.preventDefault()
    if (numberOfSeats && !ev.target.className.includes("disabled")) {
      const seatsToBook = parseInt(numberOfSeats, 10);
      if (bookedSeats.length <= seatsToBook) {
        if (bookedSeats.includes(ev.target.innerText)) {
          const newAvailable = bookedSeats.filter(
            (seat) => seat !== ev.target.innerText
          );
          setBookedSeats(newAvailable);
        } else if (bookedSeats.length < numberOfSeats) {
          setBookedSeats([...bookedSeats, ev.target.innerText]);
        } else if (bookedSeats.length === seatsToBook) {
          bookedSeats.shift();
          setBookedSeats([...bookedSeats, ev.target.innerText]);
        }
      }
    }
  };

  const proceedPay = () => {
    history.push({
        pathname: '/ticket',
      });
  }

  const confirmBooking = () => {
    setBookedStatus("You have successfully choosed the following seats:");
    bookedSeats.forEach((seat) => {
      setBookedStatus((prevState) => {
        return prevState + seat + " ";
      });
    });
    const newAvailableSeats = availableSeats.filter(
      (seat) => !bookedSeats.includes(seat)
    );
    setAvailableSeats(newAvailableSeats);
    setBookedSeats([]);
    setNumberOfSeats(0);
    let details = {
        numberOfSeats:numberOfSeats,
        seatNumber: bookedSeats,
        cost: numberOfSeats * Price,
    }
    // let Ticket = {
    //     numberOfSeats:numberOfSeats,
    //     seatNumber: bookedSeats,
    //     cost: numberOfSeats * Price,
    //     timing: props.timing,
    //     date: props.date,
    //     movie: props.movie
    // }
    props.bookTicket(details);
  };
  const [numberOfSeats, setNumberOfSeats] = useState(0);

  return (
    <React.Fragment>
      <p>How many seats would you like to book?</p>
      <input
        value={numberOfSeats}
        onChange={(ev) => setNumberOfSeats(ev.target.value)}
      />
      <Seats
        values={premiumSeats}
        availableSeats={availableSeats}
        bookedSeats={bookedSeats}
        addSeat={addSeat}
      />
      <Seats
        values={normalSeats}
        availableSeats={availableSeats}
        bookedSeats={bookedSeats}
        addSeat={addSeat}
      />

      <Button
        variant="contained"
        color="secondary"
        // startIcon={<AttachMoneyIcon />}
        onClick={confirmBooking}
      >
        Book seats
      </Button>
      {/* <button onClick={confirmBooking}>Book seats</button> */}
      <p>{bookedStatus}</p>
      {bookedStatus && 
      <Button
      variant="contained"
      color="secondary"
      startIcon={<AttachMoneyIcon />}
      onClick={proceedPay}
    >
      Proceed to payment
    </Button>
    }
    </React.Fragment>
  );
};

// const mapStateToProps = (state) =>{
//     return{
//         timing: state.bookingReducer.show,
//         date: state.bookingReducer.date,
//         movie: state.bookingReducer.movie,
//     }
// }

const mapDispatchToProps = (dispatch) => {
    return{
        bookTicket:(Ticket) => {
            dispatch({type:GET_SEATS, payload:Ticket})
        }
    }
}

export default connect(null,mapDispatchToProps)(BookMySeats);
