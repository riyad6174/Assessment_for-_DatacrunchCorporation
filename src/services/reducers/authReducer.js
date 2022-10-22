import { initialState } from "../actions/authAction";

const authReducer=(state=initialState,action)=>{

    switch (action.type) {
        case "LOGIN":
         return{
            ...state,
            isLoggedIn:true
         }
        case "REGISTER":
         return{
            ...state,
            users:[...state.users,action.payload]
         }
        case "LOGOUT":
         return{
            ...state,
            isLoggedIn:false
         }
    
        default:
          return state;
    }
}

export default authReducer