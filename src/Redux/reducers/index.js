import { combineReducers } from "redux";
import HomePageReducer from "./homePageReducer";
import BookingReducer from "./bookingReducer";

const rootReducer = combineReducers({
HomePageReducer,
BookingReducer
});

export default rootReducer;