import React, { useState } from 'react'
import Card from './Card'
import Menu from './myApi'

const Services = () => {
    const [myObj, setMyObj] = useState(Menu);
    const [itemsHeading, setItemsHeading] = useState("ALL ITEMS");

    const handleClick = (myCat) => {
        if (myCat === "all items") {
            setItemsHeading(myCat.toUpperCase());
            setMyObj(Menu);
        }
        else {
            setItemsHeading(myCat.toUpperCase());
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
                <button type="button" className="btn btn-danger" onClick={() => handleClick("all items")}>All Items</button>
                <button type="button" className="btn btn-danger" onClick={() => handleClick("breakfast")}>Brakefast</button>
                <button type="button" className="btn btn-danger" onClick={() => handleClick("lunch")}>Lunch</button>
                <button type="button" className="btn btn-danger" onClick={() => handleClick("evening snacks")}>Evening Snacks</button>
                <button type="button" className="btn btn-danger" onClick={() => handleClick("dinner")}>Dinner</button>
            </div>
            <Card myObj={myObj} itemsHeading={itemsHeading} />

        </>
    )
}

export default Services
