import React from 'react'

const Card = ({ myObj }) => {   //myObj = array of objects
    const handleClick = () => {
        alert("order placed")
    }
    return (
        <div className="c2">
            {myObj.map((ele) => {   //map method runs for each element of the array i.e myObj
                const { image, name, price } = ele; //destructuring //ele = each element of myObj
                return (
                    <div className="card my-2" style={{ width: "18rem" }}>
                        <img src={image} className="card-img-top" alt="..." style={{ width: '100%' }} />
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <span>Price Rs. {price}/-</span>
                            <button type="button" className="btn btn-primary my-3" onClick={() => handleClick()}>order now</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Card
