

const initialState={
    loading:true,
    movies:[],
    error:""
}

const moviesReducer=(state=initialState,action)=>{
    switch(action.type){
        case "FETCH_MOVIES_REQUEST":return{
            loading:true,
            movies:[],
             error:""
        }
        case "FETCH_MOVIES_SUCCESS":return{
            loading:false,
            movies:action.payload,
            error:""
        }
        case "FETCH_MOVIES_FAILURE":return{
            loading:false,
            movies:[],
            error:action.payload
        }
        default : return state
    }
}


export default moviesReducer
