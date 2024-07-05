import React from 'react'

export const Section5 = () => {
    return (
        <>
            <div className="container mt-5 border d-flex flex-column flex-md-row gap-3 ">
                <div className="row">
                    <div className='d-flex'>
                        <img src="https://img.freepik.com/free-vector/appointment-booking-design_23-2148557730.jpg?size=626&ext=jpg" alt="" width={"100px"} />

                        <div className="sec5text">
                            <h1>Download App Now</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </div>
                    </div>

                    <input type="number" name="" id="" placeholder='Enter your number' /><br />

                    <button className="btn btn-outline-danger sec5btn mb-5 " type="submit">GET APP LINK</button>
                </div>

                <div className="row">
                    <div className="col">
                        <button className='px-4 mb-4 sec5img'>
                            <p>GET IT ON</p>
                            <img src="https://img.freepik.com/free-icon/google-play_318-566073.jpg?size=626&ext=jpg" alt="" width={"40px"} /> <br />
                            <strong>Google</strong>Play
                        </button>
                        <br />
                        <button className='px-4 sec5img'>
                            <p>GET IT ON</p>
                            <img src="https://img.freepik.com/free-icon/app-store_318-631416.jpg?size=626&ext=jpg" width={"30px"} alt="" />
                            <strong>App</strong>Store
                        </button>
                    </div>
                    <div className="col">
                        <img src="https://ganeshdutt100.github.io/Flight-Booking-Website/the_ganesh_dutt_qr%20(1).png" alt="" width={"150px"} />
                    </div>
                </div>
            </div>

        </>
    )
}
