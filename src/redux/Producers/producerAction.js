
export const fetchProducersRequest=()=>{
    return{
        type:"FETCH_PRODUCERS_REQUEST"
    }
}

export const fetchProducersSuccess=(data)=>{
    return{
        type:"FETCH_PRODUCERS_SUCCESS",
        payload:data
    }
}

export const fetchProducersFailure=(error)=>{
    return{
        type:"FETCH_PRODUCERS_FAILURE",
        payload:error
    }
}

export const fetchProducers=(baseUrl)=>{
    
    return async (dispatch)=>{
        dispatch(fetchProducersRequest())
        try {
            const response=await fetch(`${baseUrl}/producer`,{
                method:"GET",
            })
            const data=await response.json()
            console.log(data)
            dispatch(fetchProducersSuccess(data))
        } catch (error) {
            console.log(error)
            dispatch(fetchProducersFailure(error))
        }
    }
}


