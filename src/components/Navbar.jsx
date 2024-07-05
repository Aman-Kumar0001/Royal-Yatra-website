import React from 'react'

export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand ps-5 fs-2 fw-bold" href="#">Royal<span className='text-danger'>Yatra</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active fs-5 navText" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fs-5 navText" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fs-5 navText" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fs-5 navText" href="#">Offers</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle fs-5 navText" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    What You Want
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Flight</a></li>
                                    <li><a className="dropdown-item" href="#">Hotel</a></li>
                                    <li><a className="dropdown-item" href="#">Homestyle</a></li>
                                    <li><a className="dropdown-item" href="#">Holiday Packages</a></li>
                                    <li><a className="dropdown-item" href="#">Trains</a></li>
                                    <li><a className="dropdown-item" href="#">Buses</a></li>
                                    <li><a className="dropdown-item" href="#">Cabs</a></li>
                                    <li><a className="dropdown-item" href="#">Forex</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex pe-5">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-danger" type="submit">Go</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar