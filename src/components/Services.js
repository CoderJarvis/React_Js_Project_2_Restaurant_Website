import React, { useState } from 'react'
import Card from './Card'
import Menu from './myApi'

const Services = () => {
    const [myObj, setMyObj] = useState(Menu);

    const handleClick = (myCat) => {
        if (myCat === "all") {
            setMyObj(Menu);
        }
        else {
            const updatedObj = Menu.filter((ele) => {
                return ele.category === myCat;
            })
            // console.log(updatedObj);
            setMyObj(updatedObj);
        }
    }
    return (
        <>
            <div className="c1 ">
                <button type="button" className="btn btn-danger" onClick={() => handleClick("all")}>All Items</button>
                <button type="button" className="btn btn-danger" onClick={() => handleClick("breakfast")}>Brakefast</button>
                <button type="button" className="btn btn-danger" onClick={() => handleClick("lunch")}>Lunch</button>
                <button type="button" className="btn btn-danger" onClick={() => handleClick("evening")}>Evening Snacks</button>
                <button type="button" className="btn btn-danger" onClick={() => handleClick("dinner")}>Dinner</button>
            </div>
            <div className="container">
                <Card myObj={myObj} />
            </div>
        </>
    )
}

export default Services
