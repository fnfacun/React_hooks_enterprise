<<<<<<< HEAD
import React, { useEffect } from "react";
import { connect } from 'react-redux';
import Frame from "../../common/component/frame";
import '../../common/css/miiaov.css';
import getWork from '../../store/action/getWork';
import Skeleton from "../../common/component/skeleton";
import Tab from "../../common/component/tab";

function Work(props) {
    let { data, loading, dispatch, match } = props;
    let { id } = match.params;
    console.log(data, loading)
    useEffect(() => {
        dispatch(getWork(id));
        return ()=>{
            dispatch({
                type: "WORK_RESET"
            })
        };
    },[]);
    return (
        <div>
            <Frame>
                {loading?<Skeleton />:(<div className="workDetails">
                    <Tab 
                        data={data.image_path.map(item=>item.path)}
                        render={src=><img src={src} />}
                    />
                </div>)
                }
            </Frame>
            <footer className="miiapv_footer">回复本帖</footer>
        </div>
    )
};


export default connect(state => ({ ...state.work }))(Work);
=======
import React from "react";
import Frame  from "../../common/component/frame";

function Work() {
    return (
        <Frame>
            <h2>作品</h2>
        </Frame>
    )
};


export default Work;
>>>>>>> e8d0ca238a055d7708796568835ac8f6daf79c88
