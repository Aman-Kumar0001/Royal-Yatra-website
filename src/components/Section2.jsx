import React from 'react'

const Section2 = () => {
    return (
        <>
            <div className='container mt-5'>
                <div className="row">
                    <div className="col text-center">
                        <h1>
                            Welcome to Royal<span className='text-danger'>Yatra</span>
                        </h1>
                    </div>
                </div>

                <div className="row px-5 text-center gap-5">
                    <div className="col">
                        <div className="img1">
                            <img src="https://img.freepik.com/free-psd/flat-design-leisure-wildlife-template_23-2149849209.jpg?w=740&t=st=1689130937~exp=1689131537~hmac=5823952d88f516e9097cbc5c50350241f97efc6be240fc2de9d61a0ed9166ae0" alt="" width={"120px"} className='rounded-circle' />

                            <img src="https://img.freepik.com/free-vector/airplane-sky_1308-31202.jpg?size=626&ext=jpgr-to-Streamline-Airline-Operations.jpg" alt="" width={"100px"} height={"100px"} className='rounded-circle sec2img1' />
                        </div>

                        <h3>Your Trip</h3>
                        <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
                        <button className="learn-more">
                            <span className="circle" aria-hidden="true">
                                <span className="icon arrow"></span>
                            </span>
                            <span className="button-text">Learn More</span>
                        </button>
                    </div>

                    <div className="col">
                        <div className="img2">
                            <img src="https://cdn.pixabay.com/photo/2019/05/28/00/15/indoors-4234071_640.jpg" alt="" width={"120px"} height={"120px"} className='rounded-circle'/>

                            <img src="https://img.freepik.com/free-vector/airplane-sky_1308-31202.jpg?size=626&ext=jpgr-to-Streamline-Airline-Operations.jpg" alt="" width={"100px"} height={"100px"} className='rounded-circle sec2img2' />
                        </div>

                        <h3>Your Trip</h3>
                        <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
                        <button className="learn-more">
                            <span className="circle" aria-hidden="true">
                                <span className="icon arrow"></span>
                            </span>
                            <span className="button-text">Learn More</span>
                        </button>
                    </div>

                    <div className="col">
                        <div className="img3">
                            <img src="https://img.freepik.com/free-photo/full-shot-smiley-woman-traveling-with-baggage_23-2149272182.jpg?size=626&ext=jpg" alt="" width={"120px"} height={"120px"} className='rounded-circle' />

                            <img src="https://img.freepik.com/free-vector/airplane-sky_1308-31202.jpg?size=626&ext=jpgr-to-Streamline-Airline-Operations.jpg" alt="" className='rounded-circle sec2img3'/>
                        </div>

                        <h3>Your Trip</h3>
                        <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
                        <button className="learn-more">
                            <span className="circle" aria-hidden="true">
                                <span className="icon arrow"></span>
                            </span>
                            <span className="button-text">Learn More</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section2