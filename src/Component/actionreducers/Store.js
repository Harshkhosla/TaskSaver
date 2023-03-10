// import { bindActionCreators } from "redux";
import { applyMiddleware ,createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/Index";

export *as actionCreators from "./actioncreators/index"
export const store = createStore(reducers,{},applyMiddleware(thunk))