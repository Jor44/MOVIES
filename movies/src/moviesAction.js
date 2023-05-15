export const DELETE_MOVIES = 'DELETE_MOVIES';
export const UPDATE_MOVIES = 'UPDATE_MOVIES';

export const updateMovies = (newList) => {
    return{
        type: UPDATE_MOVIES,
        payload: newList
    }
}

export const deleteMovies = () => {
    return{
        type: DELETE_MOVIES
    }
}