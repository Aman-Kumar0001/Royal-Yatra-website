import React from 'react'

export const Accordion = () => {
    return (
        <>
            <div className='container mt-5 pt-5 mb-5'>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <img src="https://img.freepik.com/free-photo/air-ticket-flight-booking-concept_53876-133973.jpg?w=740&t=st=1689139720~exp=1689140320~hmac=fa193a430529bed6250da4def00418fd9c0a8a6893c906448d43be39828f642b" alt="" width={"50px"} />
                                <span className='text-success fw-bold'>Trip OneWay</span>
                                <span className='fw-bold text-dark'>Forex</span>
                                <span className='text-dark'>Lorem ipsum dolor sit amet consectetur adipisicing.</span>

                                <button className="btn btn-outline-primary ms-5" type="submit">Order--&gt; </button>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
