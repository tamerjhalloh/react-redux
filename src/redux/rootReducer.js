import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import honeyReducer from "./honey/honeyReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";

const rootReducer = combineReducers({
    cake : cakeReducer,
    iceCream : iceCreamReducer,
    honey : honeyReducer
});

export default rootReducer;