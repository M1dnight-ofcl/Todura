import * as React from 'react';
import { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import * as ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const BannerUI = () => {
    let banners = [
        // example item:
        // {
        //     "index": 0,
        //     "title": "Hello, World #1",
        //     "status": true,
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
            <div className='banner'id={`banner${prop.index}`} >
                <p>{prop.title}</p>
                <div class="closeBanner" id={`closeBanner${prop.index}`} onClick={(e) => close(e, prop.index)}>
                    <FontAwesomeIcon icon={faXmark} />
                </div>
            </div>
        )
    }
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