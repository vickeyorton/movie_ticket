import React from 'react';
import {connect} from "react-redux";
import './TicketPage.css';
import QRImage from "react-qr-image";

function TicketPage(props) {
    return (
        <div className="ticket-page">
            
            <div className="ticket-page-tick">
                <div className="ticket">
                    <div className="ticket-side">
                        <div className="event-date">{new Date(props.date).toDateString()}</div>
                        <div className="event-time">{props.timing}</div>
                        <div className="cut-out"></div>
                    </div>
                    <div className="event-body">
                        <div className="event-image">
                            
                            <QRImage text={props.movie.title ? props.movie.title : props.original_title} color="red" />
                        </div>
                        <div className="event-detail">
                            <div class="event-location">Cost : {props.cost}</div>
                            <div className="event-title">
                                <h3>{props.movie.title ? props.movie.title : props.original_title}</h3>
                            </div>
                            <div class="event-details">Your seats : {props.seatNumber.map(seat => <span>{seat} </span>)}</div>
                        </div>
                    </div>
                </div>

            </div>
            {/* <rgb(16 23 36)
            #5eef7b
            #0bece5 */}
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        state,
        timing: state.BookingReducer.show,
        date: state.BookingReducer.date,
        movie: state.BookingReducer.movie,
        cost:state.BookingReducer.seats.cost,
        numberOfSeats:state.BookingReducer.seats.numberOfSeats,
        seatNumber:state.BookingReducer.seats.seatNumber,
        ticket:{
            timing: state.BookingReducer.show,
            date: new Date(state.BookingReducer.date).toDateString(),
            movie: state.BookingReducer.movie.title ? state.BookingReducer.movie.title : state.BookingReducer.movie.original_title,
            cost:state.BookingReducer.seats.cost,
            numberOfSeats:state.BookingReducer.seats.numberOfSeats,
            seatNumber:state.BookingReducer.seats.seatNumber,
        }
    }
    // console.log(state);
}


export default connect(mapStateToProps,null)(TicketPage);
