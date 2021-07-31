import { combineReducers } from "redux";
import categoryReducer from "./category.reducers";
import productReducer from "./product.reducer";
import authReducer from "./auth.reducers";
import userReducer from "./user.reducers";
import cartReducer from "./cart.reducer";
import searchReducer from "./search.reducers";
import bannerReducer from "./banner.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  category: categoryReducer,
  product: productReducer,
  cart: cartReducer,
  search: searchReducer,
  banner: bannerReducer,
});

export default rootReducer;
