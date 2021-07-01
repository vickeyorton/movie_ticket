const HomePageReducer = (state = [], action) => {
  console.log("Reducer-State", state);
  switch (action.type) {
    case "GET_TRENDING":
      return {
        ...state,
        trend: action.payload,
      };
    case "GET_LATEST":
      return {
        ...state,
        latest: action.payload,
      };
    case "GET_TOPRATED":
      return {
        ...state,
        upcoming: action.payload,
      };
    case "GET_ACTION":
      return {
        ...state,
        action: action.payload,
      };
    case "GET_HORROR":
      return {
        ...state,
        horror: action.payload,
      };
    case "GET_KIDS":
      return {
        ...state,
        kids: action.payload,
      };
    case "GET_FICTION":
      return {
        ...state,
        fiction: action.payload,
      };
    case "GET_POPULAR":
      return {
        ...state,
        recommend: action.payload,
      };

    default:
      return {
        state,
      };
  }
};

export default HomePageReducer;
