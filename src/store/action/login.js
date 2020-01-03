import HTTP from "./http";

function login(data){
    return function(dispatch){
        HTTP.post("/user/login").then(res=>{
            console.log(res);
        })
    }
}

export default login;