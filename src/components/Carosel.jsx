import React from 'react'

export const Carosel = () => {
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner my-auto">
                    <div className="carousel-item active">
                        <img src="https://cdn.pixabay.com/photo/2017/08/10/07/25/airplane-2619434_1280.jpg" className="d-block w-100" alt="..." height={"500px"} />
                        <div className="carousel-caption d-none d-sm-block text-start mb-5 pb-5">
                            <h1>Make life Easy and <span className='text-danger'>Happy</span></h1>
                            <p>Some representative placeholder content for the first slide.</p>
                            <div className="btn btn-danger mb-5 p-2 rounded ">Book Now</div>
                        </div>

                    </div>
                    <div className="carousel-item">
                        <img src="https://cdn.pixabay.com/photo/2020/05/25/17/03/travel-5219496_640.jpg" className="d-block w-100" alt="..." height={"500px"} />
                        <div className="carousel-caption d-none d-sm-block mb-5 pb-5">
                            <h1><span className='text-danger'>5 star</span> luxury <span className='text-danger'>travelling</span> place</h1>
                            <p>Some representative placeholder content for the second slide.</p>
                            <div className="btn btn-danger mb-5 p-2 rounded ">Learn more</div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://cdn.pixabay.com/photo/2017/03/27/13/51/air-force-2178863_640.jpg" className="d-block w-100" alt="..." height={"500px"} />
                        <div className="carousel-caption d-none d-sm-block text-end">
                            <h1>Gold and <span className='text-danger'>boundless</span> travel</h1>
                            <p>Some representative placeholder content for the third slide.</p>
                            <div className="btn btn-danger mb-5 p-2 rounded ">Book Now</div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Carosel