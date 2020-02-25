import axios from "axios";

export function loadColor(){
    return(dispatch)=>{
        dispatch(changeLoading(true));
        return axios.get("https://jsonplaceholder.typicode.com/photos/1")
        .then((response)=>{
            dispatch(changeColor(response.data.url));
        })
    }
}

export function changeColor(url){
    return{
        type:"CHANGE_COLOR",
        url: url,
        loading: false
    }
}

export function changeLoading(loading) {
    return {
        type: "CHANGE_LOADING",
        loading: loading
    }
}
