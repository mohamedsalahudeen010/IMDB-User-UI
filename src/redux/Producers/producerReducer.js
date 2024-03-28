

const initialState={
    loading:true,
    producers:[],
    error:""
}

const producersReducer=(state=initialState,action)=>{
    switch(action.type){
        case "FETCH_PRODUCERS_REQUEST":return{
            loading:true,
            producers:[],
             error:""
        }
        case "FETCH_PRODUCERS_SUCCESS":return{
            loading:false,
            producers:action.payload,
            error:""
        }
        case "FETCH_PRODUCERS_FAILURE":return{
            loading:false,
            producers:[],
            error:action.payload
        }
        default : return state
    }
}


export default producersReducer
