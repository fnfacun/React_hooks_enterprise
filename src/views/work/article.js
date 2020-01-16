import React,{ useEffect, useRef } from 'react';

function Article(props) {
    let { data } = props;
    let wrapRef = useRef(null);
    useEffect(()=>{
        let imgs = wrapRef.current.querySelectorAll("img");
        imgs.forEach(img => {
            img.onload = function(){
                window.pageScroll.refresh();
            }
        });
        console.log(imgs)
    },[data]);
    return (
        <article className="miiaov_article" ref={wrapRef}>
            <h3>{data.title}</h3>
            <div className="miiaov_txt">
                <div dangerouslySetInnerHTML={{
                    __html: data.content
                }}></div>
            </div>
        </article>
    )
};

export default Article;