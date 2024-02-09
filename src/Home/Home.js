import React from 'react';
import './Home.css'
import Navbar from '../Components/Shared/Navbar/Navbar';
import Hero from '../Components/Hero/Hero';
import TopProducts from '../Components/TopProducts/TopProducts';

const Home = (props) => {
    console.log(props);
    return (

        <div className="bg-brand bg-brand-container">
           <Navbar/>
           <div style={{maxHeight: "400px"}} className="container hero-container my-5">
                <Hero/>
           </div>

            <div className="container">
                
                <TopProducts/>
                
            </div>
        </div>
    );
};

export default Home;