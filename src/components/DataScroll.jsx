import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"


// Scrolling list on Browser Page of Arrays block by twenty elements
const DataScroll = (props) => {
    
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div className="App">
            <h1>Solt</h1>

            <div>{props.first}
            </div>
            <div data-aos="fade-up">{props.second}
            </div>
            <div data-aos="zoom-in"
                 data-aos-easing="linear"
                 data-aos-duration="2000">{props.third}
            </div>
            <div data-aos="zoom-in-up"
                 data-aos-duration="3000">{props.fourth}
            </div>
            <div data-aos="zoom-in"
                 data-aos-duration="5000">{props.fifth}
            </div>

        </div>
    )
}


export default DataScroll;
