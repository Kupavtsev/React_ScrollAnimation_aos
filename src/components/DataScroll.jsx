import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"

// 1. Genaration of Array with a hundred elements
const Data = () => {
    function createContactsArray(len) {
        let arr = []
        let name;
        let surname;
        for (let i = 1; i <= len; i++) {
            arr.push(
                {
                    name: 'John' + i,
                    surname: 'Doe' + i
                }
            );
        }
        return arr;
    }
    let contacts = createContactsArray(100);

    // Blocks of Array by twenty elements each
    let first = contacts.slice(0, 20).map(el =>  <div>{el.name} {el.surname}</div>)
    let second = contacts.slice(20, 40).map(el => <div>{el.name} {el.surname}</div>)
    let third = contacts.slice(40, 60).map(el => <div>{el.name} {el.surname}</div>)
    let fourth = contacts.slice(60, 80).map(el => <div>{el.name} {el.surname}</div>)
    let fifth = contacts.slice(80, 100).map(el => <div>{el.name} {el.surname}</div>)

    return (
        <div>
            <DataScroll first={first} second={second} third={third} fourth={fourth} fifth={fifth} />
        </div>
    )
};

// Scrolling list on Browser Page of Arrays block by twenty elements
const DataScroll = (props) => {
    
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div className="App">
            <h1>Solt</h1>

            <div>{props.first}</div>
            <div data-aos="fade-up">{props.second}</div>
            <div data-aos="fade-ip" >{props.third}</div>
            <div data-aos="fade-right" >{props.fourth}</div>
            <div data-aos="fade-left">{props.fifth}</div>

        </div>
    )
}


export default Data;
