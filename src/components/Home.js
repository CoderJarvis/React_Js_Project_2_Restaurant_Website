import React from 'react'

const Home = () => {
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide my-0" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src='img/bg.jpg' className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h1 className="text-warning bg-dark font-weight-bold ">Welcome to Saswat Restaurant</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
