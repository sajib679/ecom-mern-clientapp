import { searchConstant } from "./constant";

export const searchFocused = (focused, count) => {
  return async (dispatch) =>
    dispatch({
      type: searchConstant.IS_SEARCH_BAR_FOCUSED,
      payload: { focused, count },
    });
};
