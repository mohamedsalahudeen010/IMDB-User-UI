

const initialState={
    loading:true,
    actors:[],
    error:""
}

const actorReducer=(state=initialState,action)=>{
    switch(action.type){
        case "FETCH_ACTOR_REQUEST":return{
            loading:true,
            actors:[],
             error:""
        }
        case "FETCH_ACTOR_SUCCESS":return{
            loading:false,
            actors:action.payload,
            error:""
        }
        case "FETCH_ACTOR_FAILURE":return{
            loading:false,
            actors:[],
            error:action.payload
        }
        default : return state
    }
}


export default actorReducer
