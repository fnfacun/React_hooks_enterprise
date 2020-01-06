import React from "react";
import { connect } from "react-redux";
import Tab from "../../common/component/tab";

const ImageData = [
    require("../../common/images/tab/img1.png"),
    require("../../common/images/tab/img2.png"),
    require("../../common/images/tab/img3.png"),
    require("../../common/images/tab/img4.png")
]

function Index(props) {
    return (
        <div>
            <Tab 
                data={ImageData}
                render={(ImageData)=>{
                    return <img src={ImageData} />
                }}
            />
        </div>
    )
};


export default connect(res => {
    return res;
})(Index);