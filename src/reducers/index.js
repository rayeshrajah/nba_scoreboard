import { combineReducers } from "redux";

import playerReducers from "../reducers/playerReducers";

export default combineReducers({
    playerReducers: playerReducers,
})