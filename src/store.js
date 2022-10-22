import { createStore } from "redux";
import authReducer from "./services/reducers/authReducer";

const store=createStore(authReducer)
export default store