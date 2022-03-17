import { FILTER_BY_GENRE, GET_MOVIE_DATA, GOT_DATA, IS_ERR, IS_LOADING } from "./actionTypes";

export const isLoading=()=>({
   type:IS_LOADING

})
export const isErr=()=>({
    type:IS_ERR,
})


// thunk call to fetch movie list
export const getMovieData = (payload) =>({
    type:GET_MOVIE_DATA,
    payload:payload
});

// action object for filter  feature

export const filterByGenre = (payload) => ({
    type:FILTER_BY_GENRE,
    payload:payload
});
