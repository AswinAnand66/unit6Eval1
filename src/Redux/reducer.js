import { filterByGenre } from "./actions"
import { FILTER_BY_GENRE, GET_MOVIE_DATA, GOT_DATA, IS_ERR, IS_LOADING } from "./actionTypes"


const initState = {
    data:[],
    filterData:[],
    isLoading:false,
    isError:false
}

export const Reducer = (state=initState,action)=>{
    // add the switch statement for different actions
    console.log(state)
    switch(action.type){
        case IS_ERR:
            return{
                ...state,
                isError:true
            }

        case IS_LOADING:
            return{
                ...state,
                isLoading:true,

            } 
            
        case GOT_DATA:
            return{
                ...state,
                data:action.payload
            }
          case GET_MOVIE_DATA:
              return{
                  ...state,
                  data:action.payload
              }
          case FILTER_BY_GENRE:
              return{
                  ...state,
                  filterData:action.payload
              }

        default :
        return state
    }
}


export default Reducer;