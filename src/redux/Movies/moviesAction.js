
export const fetchMoviesRequest=()=>{
    return{
        type:"FETCH_MOVIES_REQUEST"
    }
}

export const fetchMoviesSuccess=(data)=>{
    return{
        type:"FETCH_MOVIES_SUCCESS",
        payload:data
    }
}

export const fetchMoviesFailure=(error)=>{
    return{
        type:"FETCH_MOVIES_FAILURE",
        payload:error
    }
}

export const fetchMovies=(baseUrl)=>{
    return async (dispatch)=>{
        dispatch(fetchMoviesRequest())
        try {
            const response=await fetch(`${baseUrl}/movies`,{
                method:"GET",
            })
            const data=await response.json()
            console.log(data)
            dispatch(fetchMoviesSuccess(data))
        } catch (error) {
            console.log(error)
            dispatch(fetchMoviesFailure(error))
        }
    }
}



export const fetchMoviesWithSearch=(baseUrl,query)=>{
    console.log(query)
    console.log(baseUrl)
    return async (dispatch)=>{
        dispatch(fetchMoviesRequest())
        try {
            const response=await fetch(`${baseUrl}/movies?search=${query}`,{
                method:"GET"
            })
            const data=await response.json()
            console.log(data)
            dispatch(fetchMoviesSuccess(data))
        } catch (error) {
            console.log(error)
            dispatch(fetchMoviesFailure(error))
        }
    }
}


export const fetchMoviesWithQuery=(baseUrl,query)=>{
    return async (dispatch)=>{
        dispatch(fetchMoviesRequest())
       
        try {
            const response=await fetch(`${baseUrl}/movies/one?search=${query}`,{
                method:"GET"
            })
            const data=await response.json()
            dispatch(fetchMoviesSuccess(data))
        } catch (error) {
            console.log(error)
            dispatch(fetchMoviesFailure(error))
        }
    }
}



export const updateRating=(baseUrl,movie,rating)=>{
   console.log(rating)
    const id=movie._id
    console.log(typeof rating)
    
    return async (dispatch)=>{        
        try {
            const response=await fetch(`${baseUrl}/movies/rating/${id}`,{
                method:"PUT",
                body:JSON.stringify(rating),
                headers:{
                    "Content-Type":"application/json",    
                 }
            })   
         const data=await response.json()
            console.log(data)
        } catch (error) {
            console.log(error)
           
        }
    }
}
