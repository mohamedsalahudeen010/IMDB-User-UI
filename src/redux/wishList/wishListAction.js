
export const fetchWishListRequest=()=>{
    return{
        type:"FETCH_WISHLIST_REQUEST"
    }
}

export const fetchWishListSuccess=(data)=>{
    return{
        type:"FETCH_WISHLIST_SUCCESS",
        payload:data
    }
}

export const fetchWishListFailure=(error)=>{
    return{
        type:"FETCH_WISHLIST_FAILURE",
        payload:error
    }
}

export const addItemToWishList=(data)=>{
   return {
    type:"ADD_1_ITEM_WISHLIST",
    payload:data
}
}


export const addToWishList=(data)=>{
   
    return{
        type:"ADD_TO_WISHLIST",
        payload:data
    }
}


export const deleteOneWishList=(id)=>{

    return{
        type:"DELETE_ONE_FROM_WISHLIST",
        payload:id
    }
}

export const deleteAllWishList=()=>{
    return{
        type:"DELETE_ALL_FROM_WISHLIST",
        
    }
}


//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Fetch WishList User>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//

export const fetchWishList=(baseUrl,email)=>{
    console.log(email)
    return async (dispatch)=>{
        dispatch(fetchWishListRequest())
        
        try {
            const response=await fetch(`${baseUrl}/wishList?email=${email}`,{
                method:"GET",
                headers:{
                    "Content-Type":"application/json",
                    "x-auth-token":localStorage.getItem("token")
                 }
            })
            const data=await response.json()
            dispatch(fetchWishListSuccess(data))
          
        } 
        catch (error) {
            console.log(error)
            dispatch(fetchWishListFailure(error))
        }
    }
}


//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Add Wishlist >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
export const addWishList=(baseUrl,updatedWishList)=>{
  
    updatedWishList=updatedWishList[0]
   
    const order={
        name:localStorage.getItem("name"),
        email:localStorage.getItem("email"),
        movies:updatedWishList,
        
    }
    return async (dispatch)=>{
        // dispatch(addToWishList(order))
        
        try {
            const response=await fetch(`${baseUrl}/wishList`,{
                method:"POST",
                body:JSON.stringify(order),
                headers:{
                    "Content-Type":"application/json",
                    "x-auth-token":localStorage.getItem("token")
                 }
            })
            const data=await response.json()
            console.log("POST",data)
            localStorage.setItem("orders",JSON.stringify(data.cart))
        } catch (error) {
            console.log(error)
           
        }
    }
}


export const deleteWishList=(baseUrl,id)=>{
    const order={
        name:localStorage.getItem("name"),
        email:localStorage.getItem("email") 
    }
    return async (dispatch)=>{
        dispatch(deleteOneWishList(id))
        
        try {
            const response=await fetch(`${baseUrl}/wishList/delete/${id}`,{
                method:"POST",
                body:JSON.stringify(order),
                headers:{
                    "Content-Type":"application/json",
                    "x-auth-token":localStorage.getItem("token")
                 }
            })
            const data=await response.json()
            console.log("POST",data)
            localStorage.setItem("orders",JSON.stringify(data.cart))
        } catch (error) {
            console.log(error)
           
        }
    }
}


//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Update Items To Orders >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//

export const addOneToWishList=(product,varient,quantity)=>{
    const orders={
        userMail:localStorage.getItem("email"),
         productName:product.name,
         productImage:product.image,
         productVarient:varient,
         productQuantity:quantity+1,
         productPricePerItem:varient*product.prize,
        totalPrice:varient*product.prize*quantity
       
    }
    const id=product._id
    return async (dispatch)=>{
        dispatch(addToWishList(orders))
        
        try {
            const response=await fetch(`https://shine-traders-back-end.vercel.app/order/${id}`,{
                method:"PUT",
                body:JSON.stringify(orders),
                headers:{
                    "Content-Type":"application/json",
                    "x-auth-token":localStorage.getItem("token")
                 }
            })
            const data=await response.json()
            console.log("PUT",data)
            localStorage.setItem("cartItems",JSON.stringify(data.cart))
        } catch (error) {
            console.log(error)
           
        }
    }
}

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Fetch Orders User>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//

export const fetchAllWishList=()=>{
    return async (dispatch)=>{
        dispatch(fetchWishListRequest())
        
        try {
            const response=await fetch(`https://shine-traders-back-end.vercel.app/orders/admin`,{
                method:"GET",
                headers:{
                    "Content-Type":"application/json",
                    "x-auth-token":localStorage.getItem("token-admin")
                 }
            })
            const data=await response.json()
            console.log(data)
            dispatch(fetchWishListSuccess(data))
          
        } 
        catch (error) {
            console.log(error)
            dispatch(fetchWishListFailure(error))
        }
    }
}



//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Delete Items In Orders >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
export const deleteWholeWishList=()=>{
    
    
    return async (dispatch)=>{
        try {
           dispatch(deleteAllWishList())
            const response=await fetch(`https://shine-traders-back-end.vercel.app/order`,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json",
                    "x-auth-token":localStorage.getItem("token-admin")
                 }
            })
            const data=await response.json()
            
            console.log(data)
        } catch (error) {
            console.log(error)
           
        }
    }
}

