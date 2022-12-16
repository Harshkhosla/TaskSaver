const initialState={

}

const reducer =(state=initialState,action)=>{

    if(action.type==="authtoken"){        
        return {...state ,authtoken:action.payload}        
    }
    return state;

}
export default reducer;