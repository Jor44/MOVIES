import { DELETE_MOVIES, UPDATE_MOVIES } from "./moviesAction";

const initialState = {
    movieList: [
        { name: 'The Hateful Eight', year: '2015', genre: 'western', id: '1', comm:[] },
        { name: 'The Shawshank Redemption', year: '1994', genre: 'drama',  id: '2', comm:[] },
        { name: 'The Pursuit Of Happyness', year: '2006', genre: 'drama', id: '3', comm:[] },
        { name: 'Gladiator', year: '2000', genre: 'history', id: '4', comm:[] },
        { name: 'Apocalipto', year: '2006', genre: 'thriller',  id: '5', comm:[] },
        { name: 'Nobody', year: '2017', genre: 'thriller',  id: '6', comm:[] },
        { name: 'It', year: '2017', genre: 'horror',  id: '7', comm:[] },
        { name: 'Others', year: '2001', genre: 'horror',  id: '8', comm:[] },
        { name: 'Get Out', year: '2017', genre: 'horror', id: '9', comm:[] },
        { name: 'Saving Private Ryan', year: '1998', genre: 'thriller',  id: '10', comm:[] }
    ]
};

export const moviesReducer = (state=initialState, action) => {
    switch (action.type){
        case DELETE_MOVIES:
            return {
                ...state,
                movieList:[]
            }

            case UPDATE_MOVIES:
                return{
                    ...state,
                    movieList: action.payload
                }
                default:
                    return state
    }
}