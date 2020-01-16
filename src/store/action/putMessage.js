import HTTP from "./http";

function putMessage(info) {
    return function (dispatch) {
        return HTTP.post("/lecturer/addcomment",info).then(res => {
            if(res.data.code !== 0){
                alert(res.data.msg);
            };
            return true;
        })
    }
}

export default putMessage;