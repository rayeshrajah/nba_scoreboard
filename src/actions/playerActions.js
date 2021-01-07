import axios from "axios";
import { headers } from "../config/headers"
import { GET_PLAYERS } from "../constants/types";

export const getPlayers = (pageNumber, pageSize) => {
    return (dispatch) => {
       axios.get('https://free-nba.p.rapidapi.com/players', 
       { 
        params:{
            page: pageNumber,
            per_page: pageSize
        },    
        headers 
        }).then(response => {
            const data = response.data;
            dispatch({
                type: GET_PLAYERS,
                payload: data
            })
        }).catch(function(error) {
            console.log(error);
        })
    }
};

