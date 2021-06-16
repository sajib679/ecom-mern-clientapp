import { searchConstant } from "../actions";

const initState = {
  focused: false,
  searchTermLength: 0,
};

const searchReducer = (state = initState, action) => {
  switch (action.type) {
    case searchConstant.IS_SEARCH_BAR_FOCUSED:
      state = {
        ...state,
        focused: action.payload.focused,
        searchTermLength: action.payload.count,
      };
      break;

    default:
      break;
  }
  return state;
};

export default searchReducer;
