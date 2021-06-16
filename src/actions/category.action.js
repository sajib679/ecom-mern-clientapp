import axios from "../helpers/axios";
import { categoryConstants } from "./constant";

export const getAllCategory = () => {
  return async (dispatch) => {
    dispatch({
      type: categoryConstants.GET_CATEGORY_REQUEST,
    });
    const res = await axios.get(`category/get`);
    if (res.status === 200) {
      const { categoryList } = res.data;
      dispatch({
        type: categoryConstants.GET_CATEGORY_SUCCESS,
        payload: { categories: categoryList },
      });
    } else {
      dispatch({
        type: categoryConstants.GET_CATEGORY_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};
