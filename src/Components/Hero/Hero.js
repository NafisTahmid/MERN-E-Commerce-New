import React from 'react';
import camera from '../../images/hero/camera.jpg'
import smartwatch from '../../images/hero/smartwatch.jpg'
import earphone from '../../images/hero/earphone.jpg'

const Hero = () => {
    return (
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">

            {/* <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div> */}

            <div className="carousel-inner">

                <div className="carousel-item active" data-bs-interval="1000">

                        <h2 style={{fontSize:"24px", color:"#212529", fontWeight:"700"}} className="text-center my-3">Polaroid Camera</h2>
                        <img src={camera} className="img-fluid mx-auto d-block" width={500} alt="Camera"/>
                        <h3 style={{fontSize:"18px", color:"#212529"}} className="text-center my-3 fw-bold">Price: 22000 Taka</h3>
                    
                </div>

                <div className="carousel-item" data-bs-interval="2000">

                        <h2 style={{fontSize:"24px", color:"#212529", fontWeight:"700"}} className="text-center my-3">Apple Watch</h2>
                        <img src={smartwatch} className="img-fluid mx-auto d-block" width={500} alt="SmartWatch"/>
                        <h3 style={{fontSize:"18px", color:"#212529"}} className="text-center my-3 fw-bold">Price: 16000 Taka</h3>
                    
                </div>

                <div className="carousel-item" data-bs-interval="3000">

                        <h2 style={{fontSize:"24px", color:"#212529", fontWeight:"700"}} className="text-center my-3">Apple Airpods Pro</h2>
                        <img src={earphone} className="img-fluid mx-auto d-block" width={500} alt="Earphone"/>
                        <h3 style={{fontSize:"18px", color:"#212529"}} className="text-center my-3 fw-bold">Price: 16000 Taka</h3>
                    
                </div>

            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
            </button>
      </div>
    );
};

export default Hero;