/* eslint-disable import/no-anonymous-default-export */
import { productConstants, pageConstants } from "../actions/constant";

const initialState = {
  products: [],
  productsByPrice: {
    under5k: [],
    under10k: [],
    under15k: [],
    under20k: [],
    above20k: [],
  },
  productDetails: [],
  loading: true,
  pageReguest: false,
  page: {},
  error: null,
  searchedProduct: [],
  message: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case productConstants.GET_PRODUCT_BY_SLUG_REQUEST:
      state = {
        ...state,
      };

      break;
    case productConstants.GET_PRODUCT_BY_SLUG_FAILURE:
      state = {
        ...state,
        loading: false,
      };

      break;
    case productConstants.GET_PRODUCT_BY_SLUG_SUCCESS:
      state = {
        ...state,
        loading: false,
        products: action.payload.products,
        productsByPrice: { ...action.payload.productsByPrice },
      };

      break;

    case pageConstants.GET_PAGE_REQUEST:
      state = {
        ...state,
        pageReguest: true,
      };

      break;
    case pageConstants.GET_PAGE_FAILURE:
      state = {
        ...state,
        loading: false,
        pageReguest: false,
      };

      break;
    case pageConstants.GET_PAGE_SUCCESS:
      state = {
        ...state,
        loading: false,
        page: action.payload.page,
        pageReguest: false,
      };
      break;

    case productConstants.GET_PRODUCT_BY_ID_REQUEST:
      state = {
        ...state,
      };

      break;
    case productConstants.GET_PRODUCT_BY_ID_FAILURE:
      state = {
        ...state,
        loading: false,
      };

      break;
    case productConstants.GET_PRODUCT_BY_ID_SUCCESS:
      state = {
        ...state,
        loading: false,
        productDetails: action.payload,
      };

      break;

    case productConstants.GET_PRODUCT_BY_NAME_REQUEST:
      state = {
        ...state,
      };

      break;
    case productConstants.GET_PRODUCT_BY_NAME_FAILURE:
      state = {
        ...state,
        loading: false,
        message: action.payload,
        searchedProduct: initialState.searchedProduct,
      };

      break;
    case productConstants.GET_PRODUCT_BY_NAME_SUCCESS:
      state = {
        ...state,
        loading: false,
        searchedProduct: action.payload,
      };

      break;

    default:
      break;
  }
  return state;
};
