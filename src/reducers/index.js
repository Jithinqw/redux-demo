let defaultState={
    url:"https://via.placeholder.com/600/771796",
    loading: false
}

const mainReducer=(state=defaultState,action)=>{
    if(action.type==="CHANGE_COLOR"){
        return{
            ...state,
            url:action.url,
            loading: false
        }
    } if(action.type==="CHANGE_LOADING") {
        return {
            ...state,
            loading: action.loading
        }
    } else{
        return{
            ...state
        }
    }
}

export default mainReducer;