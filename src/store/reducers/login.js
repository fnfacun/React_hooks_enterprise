export default function getUser(state="",action) {
    switch (action.type) {
        case "LOGIN":   // 登录成功
            return action.user;
        case "LOGOUT":  // 登录失败
            return ""; 
    }
    return state
};