import * as types from "./actionTypes";

export const get_data = (route)=>(dispatch)=>{
    dispatch({type:types.GET_DATA_REQUEST})
   fetch(`https://morning-ravine-80669.herokuapp.com/${route}`)
   .then((res)=> res.json())
   .then((data)=> dispatch({type:types.GET_DATA_SUCCESS,payload:data}))
   .catch((err)=> dispatch({type:types.GET_DATA_FAILURE,payload:err}))
};
