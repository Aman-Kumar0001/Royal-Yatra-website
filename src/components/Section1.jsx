import React from 'react'

const Section1 = () => {
    return (
        <>
            <div className='container py-4 mx-auto text-center  bg-light section1'>
                <nav aria-label="...">
                    <ul className="pagination mt-5">
                        <li className="page-item border border-danger"><a className="page-link text-danger" href="#">One Way</a></li>
                        <li className="page-item active border border-danger" aria-current="page">
                            <span className="page-link bg-danger">Round Trip</span>
                        </li>
                        <li className="page-item border border-danger">
                            <a className="page-link text-danger" href="#">Multi City</a>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="container bg-light d-flex flex-md-column">
                <div className="row">
                    <div className="col border pt-2 pb-2">
                        Form
                        <h2> Delhi</h2>
                        DEL,Delhi Airport India
                    </div>
                    <div className="col border pt-2 pb-2">
                        To
                        <h2>Bengaluru</h2>
                        BLR, Bengaluru International Airport India
                    </div>
                    <div className="col border pt-2 pb-2">
                        <div className="dropdown open">
                            <button
                                className="btn btn-light dropdown-toggle"
                                type="button"
                                id="triggerId"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Departure
                            </button>
                            <div className="dropdown-menu" aria-labelledby="triggerId">
                                <button className="dropdown-item" href="#"><input type="date" name="" id="" /></button>

                            </div>
                        </div>


                        <h2>20 jun'24</h2>
                        Wednesday
                    </div>
                    <div className="col">
                    <div className="dropdown open">
                            <button
                                className="btn btn-light dropdown-toggle"
                                type="button"
                                id="triggerId"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Travellers & Class
                            </button>
                            <div className="dropdown-menu" aria-labelledby="triggerId">
                                <button className="dropdown-item" href="#">
                                    <h3>ADULTS (12Y + 1)</h3>
                                    <p>on the day of travel</p>
                                    <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                            <button type="button" className="btn border border-danger">1</button>
                                            <button type="button" className="btn border border-danger">2</button>
                                            <button type="button" className="btn border border-danger">3</button>
                                            <button type="button" className="btn border border-danger">4</button>
                                            <button type="button" className="btn border border-danger">5</button>
                                            <button type="button" className="btn border border-danger">6</button>
                                            <button type="button" className="btn border border-danger">7</button>
                                            <button type="button" className="btn border border-danger">8</button>
                                    </div>
                                </button>

                                <button className="dropdown-item" href="#">
                                    <h3>CHILDREN (2Y + 12Y)</h3>
                                    <p>on the day of travel</p>
                                    <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                            <button type="button" className="btn border border-danger">1</button>
                                            <button type="button" className="btn border border-danger">2</button>
                                            <button type="button" className="btn border border-danger">3</button>
                                            <button type="button" className="btn border border-danger">4</button>
                                            <button type="button" className="btn border border-danger">5</button>
                                    </div>
                                </button>
                            </div>
                            <div className="dropdown-menu" aria-labelledby="triggerId">
                                <button className="dropdown-item" href="#"><input type="date" name="" id="" /></button>

                            </div>
                        </div>
                        <h2>19 Travellers</h2>
                        Economy/Premium Economy
                    </div>
                </div>

                <div className="row">
                    <div className="col border pt-2 pb-2">
                        Form
                        <h2> Delhi</h2>
                        DEL,Delhi Airport India
                    </div>
                    <div className="col border pt-2 pb-2">
                        To
                        <h2>Bengaluru</h2>
                        BLR, Bengaluru International Airport India
                    </div>
                    <div className="col border pt-2 pb-2">
                        <div className="dropdown open">
                            <button
                                className="btn btn-light dropdown-toggle"
                                type="button"
                                id="triggerId"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Departure
                            </button>
                            <div className="dropdown-menu" aria-labelledby="triggerId">
                                <button className="dropdown-item" href="#"><input type="date" name="" id="" /></button>

                            </div>
                        </div>
                        <h2>20 jun'24</h2>
                        Wednesday
                    </div>
                    <div className="col mt-5">
                        <div className="dropdown open">
                            <button
                                className="btn btn-light dropdown-toggle"
                                type="button"
                                id="triggerId"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Travellers & Class
                            </button>
                            <div className="dropdown-menu" aria-labelledby="triggerId">
                                <button className="dropdown-item" href="#">
                                    <h3>ADULTS (12Y + 1)</h3>
                                    <p>on the day of travel</p>
                                    <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                            <button type="button" className="btn border border-danger">1</button>
                                            <button type="button" className="btn border border-danger">2</button>
                                            <button type="button" className="btn border border-danger">3</button>
                                            <button type="button" className="btn border border-danger">4</button>
                                            <button type="button" className="btn border border-danger">5</button>
                                            <button type="button" className="btn border border-danger">6</button>
                                            <button type="button" className="btn border border-danger">7</button>
                                            <button type="button" className="btn border border-danger">8</button>
                                    </div>
                                </button>

                                <button className="dropdown-item" href="#">
                                    <h3>CHILDREN (2Y + 12Y)</h3>
                                    <p>on the day of travel</p>
                                    <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                            <button type="button" className="btn border border-danger">1</button>
                                            <button type="button" className="btn border border-danger">2</button>
                                            <button type="button" className="btn border border-danger">3</button>
                                            <button type="button" className="btn border border-danger">4</button>
                                            <button type="button" className="btn border border-danger">5</button>
                                    </div>
                                </button>
                            </div>
                            <div className="dropdown-menu" aria-labelledby="triggerId">
                                <button className="dropdown-item" href="#"><input type="date" name="" id="" /></button>
                            </div>
                        </div>
                        <div className="btn btn-danger">+ADD ANOTHER CITY</div>
                    </div>
                </div>
            </div>
            <div className="container bg-secondary">
                <form className='d-flex gap-4 py-4'>
                    <label htmlFor="">Select A Fare Type</label>

                    <span>
                        <input type="radio" name="passenger" id="" />Ragular faress
                    </span>

                    <span>
                        <input type="radio" name="passenger" id="" />Armed Forces Fares
                    </span>

                    <span className='d-none d-md-block'>
                        <input type="radio" name="passenger" id="" />Student Fars
                    </span>

                    <span className='d-none d-md-block'>
                        <input type="radio" name="passenger" id="" />Senior Citizen Fars
                    </span>

                    <span className='d-none d-md-block'>
                        <input type="radio" name="passenger" id="" />Doctor & Nurses Fares
                    </span>
                </form>
            </div>
            <br /><br /><br />
            <form className="d-flex">
                <button className="btn btn-outline-danger fs-5 px-3 rounded mx-auto text-light fw-bold" type="submit">Search</button>
            </form>
            <br /><br />
        </>
    )
}

export default Section1