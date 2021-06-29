const HomePageReducer = (state = [], action) => {
    console.log("Reducer-State", state);
    switch (action.type) {
      case "GET_TRENDING":
        return {
          ...state,
          trend: action.payload,
        };
        case "FETCH_TRENDING":
        return {
          ...state,
          trend: action.payload,
        }
  
      default:
        return {
          state,
        };
    }
  };
  
  export default HomePageReducer;