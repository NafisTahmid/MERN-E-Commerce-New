import React from 'react';
import './Navbar.css'
import Logo from '../../../images/logo.png'
const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg bg-body-tertiary customize-navbar">
        <div className="container">
          <a className="navbar-brand" href="/">
                <img className="img-fluid" src={Logo} width={50} alt="" />MERN E-Commerce</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

            <div className="navbar-nav ms-auto text-center">

                <a className="nav-link" href="/home">Home</a>
                <a className="nav-link" href="/products">Products</a>
                <a className="nav-link" href="/cart">Cart</a>
                <a className="nav-link" href="/login">Login</a>
                <a className="nav-link" href="/profile">Profile</a>
                <a className="nav-link" href="/dashboard">Dashboard</a>
              
            </div>

          </div>

        </div>

      </nav>

    );
};

export default Navbar;