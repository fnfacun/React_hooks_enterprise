import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import Frame from "../../common/component/frame";
import "../../common/css/teacher.css";
import getLecturers from '../../store/action/lecturers';
import LecturerTab from "./lecturerTab";
import Join from "./join";
import Footer from "../../common/component/footer";
import LecturerAlert from "./lecturerAlert";

function Lecturer(props) {
    let { data, dispatch } = props;
    let [show, setShow] = useState(false);
    let [alertData, setAlertData] = useState(null);
    let newData = [];
    useEffect(() => {
        dispatch(getLecturers());
    }, []);
    for (let i = 0; i < data.length; i += 3) {
        let newArr = [];
        let end = i + 3;
        end = end.length > data.length ? data.length : end;
        for (let j = i; j < i + 3; j++) {
            newArr.push(data[j]);
        };
        newData.push(newArr);
    };
    function showAlert(data) {
        setShow(true);
        setAlertData(data);
    };
    function hideAlert(){
        setShow(false);
    }
    return (
        <div>
            <Frame>
                <div className="teacher_banner">
                    <h2><span>妙味团队</span></h2>
                    <LecturerTab
                        data={data}
                        newData={newData}
                        showAlert={showAlert}
                    />
                </div>
                <Join />
                <Footer />
            </Frame>
            {show ? 
                <LecturerAlert 
                    data={alertData}
                    hideAlert={hideAlert}
                /> 
            : ""}
        </div>
    )
};


export default connect(state => state.lecturers)(Lecturer);