import React from 'react'

export const Traveltop = () => {
    return (
        <div className='pt-4'>
            <div className="container border mt-5 mx-auto text-center rounded-pill bg-light shadow section0">
                <div className="container d-flex justify-content-center gap-5 p-2">
                    <div className="row m-auto">
                        <div className="col">
                            <i className="fa-solid fa-plane fs-3 pe-2  navText"> <p style={{fontSize:'12px'}}> Flights</p></i>
                        </div>
                        <div className="col">
                            <i className="fa-solid fa-hotel fs-3 pe-2  navText"> <p style={{fontSize:'12px'}}> Hotels</p></i>
                        </div>
                        <div className="col">
                            <i className="fa-solid fa-house fs-3 pe-2  navText"> <p style={{fontSize:'12px'}}> HomeStyles</p></i>
                        </div>
                        <div className="col">
                            <i className="fa-solid fa-gifts fs-3 pe-2 d-none d-md-block  navText"> <p style={{fontSize:'12px'}}> Holiday Packages</p></i>
                        </div>
                        <div className="col">
                            <i className="fa-solid fa-bus fs-3 pe-2 d-none d-lg-block  navText"> <p style={{fontSize:'12px'}}> Buses</p></i>
                        </div>
                        <div className="col">
                            <i className="fa-solid fa-train fs-3 pe-2 d-none d-xl-block  navText"> <p style={{fontSize:'12px'}}> Train</p></i>
                        </div>
                        <div className="col">
                            <i className="fa-solid fa-car fs-4 pe-2 d-none d-xxl-block navText"> <p style={{fontSize:'12px'}}> Cabs</p></i>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
