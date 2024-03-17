import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import useFirebase from '../../hooks/useFirebase';
import useAuth from '../../hooks/useAuth';

const Profile = () => {
    const {logOut, user} = useAuth();
    const {displayName, photoURL, email} = user;

    const shippingDetails = JSON.parse(localStorage.getItem("shipping"));
    console.log(shippingDetails);

    return (
        <section className="bg-brand bg-brand-container">
            <Navbar/>
            <div className="container mt-5">
                <h1 className="fs-4 text-center">Profile</h1>

                <div className="my-3">

                    <h2 className="fs-5">Customer's Information</h2>

                    <table class="table table-light table-hover">
                        <thead>
                            <tr>
                                <th className="text-center fs-6">Photo</th>
                                <th className="fs-6 p-2">Name</th>
                                <th className="fs-6">Email</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td><img style={{borderRadius:"5px"}} src={photoURL} className="img-fluid mx-auto d-block" width={150} alt="" /></td>
                                <td className="fs-6 p-2">{displayName}</td>
                                <td className="fs-6 p-2">{email}</td>
                            </tr>

                            
                        </tbody>
                    
                    </table>

                    {shippingDetails && <p className="fw-bold text-center">{shippingDetails.address} {shippingDetails.city} {shippingDetails.postalCode} {shippingDetails.country}</p>}

                </div>

                <div className="align-items-center justify-content-center mt-3">
                    <button onClick = {logOut} className="btn btn-danger btn-sm me-1">Log Out</button>
                </div>
            </div>
            <Footer/>
        </section>
    );
};

export default Profile;