import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import honeyReducer from "./honey/honeyReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
    cake : cakeReducer,
    iceCream : iceCreamReducer,
    honey : honeyReducer,
    userData : userReducer
});

export default rootReducer;