import React, { useEffect, useRef } from 'react';
import BScroll from 'better-scroll';

function LecturerAlert(props) {
    let { data, hideAlert } = props;
    let wrapRef = useRef(null);
    let startPoint = {};
    useEffect(()=>{
        let bscroll = new BScroll(wrapRef.current,{
            scrollbar: true
        });
    })
    return (
        <aside 
            className="elastic"
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
                    hideAlert(false)
                }   
            }}
        >
            <div 
                className="elastic_box"
                onTouchStart={(e)=>{
                    e.stopPropagation()
                }}
            >
                <span
                    className="close"
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
                            hideAlert(false)
                        }   
                    }}
                >关闭</span>
                <div className="elastic_img">
                    <img src={data.icon} alt="" />
                </div>
                <div className="elastic_txt">
                    <h3>{data.title}-妙味课堂 全职讲师</h3>
                    <div className="elastic_content" ref={wrapRef} >
                        <div dangerouslySetInnerHTML={{
                            __html: data.content
                        }}>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
};

export default LecturerAlert;