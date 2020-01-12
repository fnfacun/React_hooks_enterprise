import React from "react";
import Tab from "../../common/component/tab";

function LecturerTab(props) {
    let { data, newData, showAlert } = props;
    return (
        data.length > 1 ?
            <Tab data={newData} render={(data) => {
                return (
                    <ul className="lecturer_list">
                        {data.map(item => {
                            let startPoint = {}
                            return (
                                <li 
                                    key={item.id}
                                    onTouchStart={(e)=>{
                                        let touch = e.changedTouches[0];
                                        startPoint.x = touch.pageX;
                                        startPoint.y = touch.pageY;
                                    }}
                                    onTouchEnd={(e)=>{
                                        let touch = e.changedTouches[0];
                                        let endPoint = {
                                            x: touch.pageX,
                                            y: touch.pageY
                                        }
                                        if(Math.abs(endPoint.x-startPoint.x) < 5 &&
                                           Math.abs(endPoint.y-startPoint.y) < 5
                                        ){
                                            showAlert(item)
                                        }   
                                    }}
                                >
                                    <img src={item.icon} />
                                    <p>{item.title}</p>
                                </li>
                            )
                        })}
                    </ul>
                )
            }}
            /> : ""
    )
};

export default LecturerTab;