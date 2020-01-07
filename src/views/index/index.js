import React from "react";
import { connect } from "react-redux";
import Tab from "../../common/component/tab";
import Course from "./course";
import Vip from "./vip";
import Miaov from "./miaov";

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
            <section className="index_content">
                <Course />
                <Vip />
                <Miaov />
            </section>
        </div>
    )
};


export default connect(res => {
    return res;
})(Index);