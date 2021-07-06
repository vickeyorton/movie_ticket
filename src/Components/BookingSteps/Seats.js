import React from 'react';
import './BookMySeats.css';

const Seats = (props) => {
    
    return (
      <div className="section">
          {props.values.map(seat => {
              const isAvailable = props.availableSeats.includes(seat);
              const isBooked = props.bookedSeats.includes(seat);
              let seatClass;
              if(!isAvailable) {
                  seatClass = 'disabled';
              }
              if(isBooked) {
                  seatClass = 'booked';
              }
              return (
                <label className={`MuiFormControlLabel-root ${seatClass}`} onClick={props.addSeat} key={seat}>
                    <div >{seat}</div>
                </label>);
          })}
      </div>
    );
}
export default Seats;