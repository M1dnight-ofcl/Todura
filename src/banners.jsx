import * as React from 'react';
import { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import * as ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const BannerUI = () => {
    let banners = [
        // example items:
        // { 
        //     "index": 0,
        //     "title": "Hello, World #1",
        //     "status": "success",
        // }, {
        //     "index": 1,
        //     "title": "Hello, World #2",
        //     "status": "fail",
        // }, {
        //     "index": 2,
        //     "title": "Hello, World #3",
        //     "status": "none",
        // },
    ];
    
    const [Banners, setBanners] = useState(
        banners
    );
    const Banner = (prop) => {
        const close = (e, index) => {
            e.preventDefault();
            setBanners(
                Banners.filter(t => 
                    t.index !== index
                )
            )
        }
        return (
            <div className={`banner ${prop.status}`} id={`banner${prop.index}`} >
                <p>{prop.title}</p>
                <div className="closeBanner" id={`closeBanner${prop.index}`} onClick={(e) => close(e, prop.index)}>
                    <FontAwesomeIcon icon={faXmark} />
                </div>
            </div>
        )
    }
    document.getElementById("themes").addEventListener("change", (e) => {
        let debugMode = document.getElementById('debugMode').checked;
        // console.log(debugMode);
        if (debugMode) {
            e.preventDefault();
            let theme = e.currentTarget.value;
            setBanners([
                ...Banners,
                {"index":(Banners.length+1) ,"title":`Changed Theme to: ${theme}`, "status":"success"}
            ]);
        } else {
            // console.log('debug mode disabled')
        }
    });
    document.getElementById("createTask").addEventListener("click", (e) => {
        let debugMode = document.getElementById('debugMode').checked;
        // console.log(debugMode);
        if (debugMode) {
            e.preventDefault();
            let nameElement = document.getElementById("newTaskName");
            let name = nameElement.value;
            setBanners([
                ...Banners,
                {"index":(Banners.length+1) ,"title":`Created new task: ${name}`, "status":"success"}
            ]);
        } else {
            // console.log('debug mode disabled')
        }
    });
    return (
        <>
            {Banners.map((item) => (
                <Banner key={item.index} index={item.index} title={item.title} status={item.status} />
            ))}
        </>
    )
}

const root = createRoot(document.getElementById("banners"));
root.render(<BannerUI />);