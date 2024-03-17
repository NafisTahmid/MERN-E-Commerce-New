import React from 'react';
import Navbar from '../../Components/Shared/Navbar/Navbar';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

const Shipping = () => {
    const {register,handleSubmit,watch,  formState: { errors }} = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        localStorage.setItem('shipping', JSON.stringify(data));
        navigate('/payment');
    };

    const shippingDetails = localStorage.getItem('shipping') ? JSON.parse(localStorage.getItem('shipping')) : {};
    
    return (
        <section className="bg-brand bg-brand-container">
            <Navbar/>
            <div className="container mt-5">
                <h1 className='text-center fs-4'>Shipping Details</h1>
                <div className="col-md-6 col-sm-8 justify-content-center align-items-center mx-auto d-block">
                        <form onSubmit={handleSubmit(onSubmit)}>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label p-2">Address</label>
                                    <input type="text" className="form-control p-2" value={shippingDetails.address} id="address" {...register("address", { required: true })}/>
                                    {errors.address && <span className="text-danger">Address is required</span>}
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label p-2">City</label>
                                    <input type="text" className="form-control p-2"  value={shippingDetails.city} id="city" {...register("city", { required: true })}/>
                                    {errors.city && <span className="text-danger">City is required</span>}
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label p-2">Postal Code</label>
                                    <input type="text" className="form-control p-2"  value={shippingDetails.postalCode} id="postalCode" {...register("postalCode", { required: true })}/>
                                    {errors.postalCode && <span className="text-danger">Postal Code is required</span>}
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label p-2">Country</label>
                                    <input type="text" className="form-control p-2"  value={shippingDetails.country} id="country" {...register("country", { required: true })}/>
                                    {errors.country && <span className="text-danger">Country is required</span>}
                                </div>
                        
                                <div id="emailHelp" className="form-text my-2">We'll never share your email with anyone else.</div>
                                <input className="btn btn-dark" type="submit" value="Continue" />
                        </form>
                    </div>
            </div>
            
        </section>
    );
};

export default Shipping;