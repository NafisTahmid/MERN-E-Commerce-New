import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import useAuth from '../../hooks/useAuth';
import { getStoredCart } from '../utilities/localDB';
import products from '../../data/productsData.json';
import Swal from 'sweetalert2';

const Order = () => {

    let savedCart = getStoredCart();
    let cart = [];
    for (let key in savedCart) {
        cart.push({
            ...products.find(pd => pd.id === key),
            quantity: savedCart[key]
        })
    }

    const proceedToCheckout = () => {
        Swal.fire({
            title: "Successful",
            text: "Order done",
            icon: "success"
          });
    }

    const {user} = useAuth();
    const shippingDetails = JSON.parse(localStorage.getItem("shipping"));
    const {displayName, email} = user;
    const paymentMode = JSON.parse(localStorage.getItem("payment_mode"));

    return (
        <section className="bg-brand bg-brand-container">
            <Navbar/>

            <div className="container mt-5">
                <h1 className="text-center fs-4">Order Summary</h1>

                <div className="row">
                    
                    <div className="col-lg-8 col-md-12 px-5 order-container">

                        <h2 className="fs-5 fw-bold">Shipping Details</h2>
                        <h3 className="fs-6">Name: {displayName}</h3>
                        <h3 className="fs-6">Email: {email}</h3>
                        <h3 className="fs-6">{shippingDetails.address} {shippingDetails.city} {shippingDetails.postalCode} {shippingDetails.country}</h3>

                        <hr />

                        <h2 className="fs-5 fw-bold">Payment Mode</h2>
                        <h3 className="fs-6">Method: {paymentMode}</h3>

                        <hr />

                        <h2 className="fs-5 fw-bold">Order Items</h2>

                        {
                            cart.map(item => (

                                <div key={item.id} className="">

                                    <div className="d-flex justify-content-between align-items-center mt-3">

                                        <div className="col-sm-1">
                                            <img src={item.image} className="img-fluid my-2" width={60} alt="" />
                                        </div>

                                        <div className="col-sm-4">
                                            <p className="text-center pt-3">{item.name}</p>
                                        </div>

                                        <div className="col-sm-7 d-flex justify-content-end">
                                            <p className="pt-3">{item.quantity} x {item.price} = {item.quantity * item.price}</p>
                                        </div>

                                    </div>

                                    <div className="">
                                        <hr/>
                                    </div>
                                    
                                </div>
                            ))
                        }
                    </div>

                    {/* Show on bigger screen */}
                    <div 
                    // style={{boxShadow: "0 3px 10px 3px #0003"}}
                     className="bg-brand col-md-4 my-5 px-5 d-lg-block py-3">

                        <div style={{border:"1px solid lightgrey"}} className="p-2">
                            <h2 className="fs-5 text-center">Sub Total: {cart.reduce((a,b) => {return a + b.quantity}, 0)} Item(s)</h2>
                            <h3 className="fs-5 text-center">Price: {cart.reduce((a,b) => {return a + b.quantity * b.price}, 0)} Taka</h3>
                        </div>

                        <div style={{border: '1px solid lightgrey'}}  className="py-2">
                            <button id="btn_checkout" onClick={proceedToCheckout} className="btn btn-dark mx-auto d-block" >Pay Now</button>
                        </div>
                    </div>

                    {/* Show on smaller screen */}
                    <div 
                    // style={{boxShadow: "0 3px 10px 3px #0003"}} 
                    className="bg-brand col-md-4 my-5 px-5 fixed-bottom py-3 d-lg-none">

                        <div style={{border:"1px solid lightgrey"}} className="p-2">
                            <h2 className="fs-5 text-center">Sub Total: {cart.reduce((a,b) => {return a + b.quantity}, 0)} Item(s)</h2>
                            <h3 className="fs-5 text-center">Price: {cart.reduce((a,b) => {return a + b.quantity * b.price}, 0)} Taka</h3>
                        </div>

                        <div style={{border: '1px solid lightgrey'}}  className="py-2">
                            <button id="btn_checkout" onClick={proceedToCheckout} className="btn btn-dark mx-auto d-block" >Pay Now</button>
                        </div>

                    </div>

                </div>

               

            </div>
            
            
        </section>
    );
};

export default Order;