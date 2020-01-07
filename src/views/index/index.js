import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Tab from "../../common/component/tab";
import Course from "./course";
import Vip from "./vip";
import Miaov from "./miaov";
import Works from "../../common/component/works";
import Frame from '../../common/component/frame';
import getWorks from '../../store/action/getWorks';

const ImageData = [
    require("../../common/images/tab/img1.png"),
    require("../../common/images/tab/img2.png"),
    require("../../common/images/tab/img3.png"),
    require("../../common/images/tab/img4.png")
]

function Index(props) {
    let { dispatch } = props;
    let [page, setPage] = useState(1);
    function getWorkData() {
        dispatch(getWorks(page));
    }
    useEffect(() => {
        getWorkData();
    }, [])
    return (
        <Frame>
            <div>
                <Tab
                    data={ImageData}
                    render={(ImageData) => {
                        return <img src={ImageData} />
                    }}
                />
                <section className="index_content">
                    <Course />
                    <Vip />
                    <Miaov />
                    <Works {...props} />
                </section>
            </div>
        </Frame>
    )
};


export default connect(props => ({ ...props.works }))(Index);