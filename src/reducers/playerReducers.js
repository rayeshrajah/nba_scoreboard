import { GET_PLAYERS } from "../constants/types";

const intialState = {
    allPlayers: []
};

export default function (state = intialState, action){
    switch (action.type) {
        case GET_PLAYERS:
            return {
                ...state,
                allPlayers: action.payload
            };
        default:
            return state;
    }
}