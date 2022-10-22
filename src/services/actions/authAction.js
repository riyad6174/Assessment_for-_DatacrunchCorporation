
export const initialState={
    isLoggedIn:false,
    users:[{username:"admin",password:"test12345"}]
}

export const userLogin=()=>{
    return{
        type:"LOGIN",
        

    }
}
export const userRegister=(users)=>{
    return{
        type:"REGISTER",
        payload:users

    }
}
export const userLogout=()=>{
    return{
        type:"LOGOUT",

    }
}