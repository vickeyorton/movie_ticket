const BookingReducer = (state=[],action) =>{
    switch(action.type){
        case "GET_MOVIE" :
            return{
                ...state,
                movie:action.payload
            };
        case "GET_DATE" :
            return{
                ...state,
                date:action.payload
            };
        case "GET_SHOW" : 
            return{
                ...state,
                show:action.payload
            }
        case "GET_SEATS":
            return{
                ...state,
                seats:action.payload
            }
        case "SET_TICKET":
            return{
                ...state,
                ticket:action.payload
            }

        default:
            return{
                state
            }
    }
}

export default BookingReducer;