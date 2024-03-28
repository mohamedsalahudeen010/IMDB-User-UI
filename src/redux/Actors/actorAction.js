
export const fetchActorsRequest=()=>{
    return{
        type:"FETCH_ACTOR_REQUEST"
    }
}

export const fetchActorsSuccess=(data)=>{
    return{
        type:"FETCH_ACTOR_SUCCESS",
        payload:data
    }
}

export const fetchActorsFailure=(error)=>{
    return{
        type:"FETCH_ACTOR_FAILURE",
        payload:error
    }
}

export const fetchActors=(baseUrl)=>{
    return async (dispatch)=>{
        dispatch(fetchActorsRequest())
        try {
            const response=await fetch(`${baseUrl}/actor`,{
                method:"GET",
            })
            const data=await response.json()
            console.log(data)
            dispatch(fetchActorsSuccess(data))
        } catch (error) {
            console.log(error)
            dispatch(fetchActorsFailure(error))
        }
    }
}


