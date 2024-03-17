import React, { useEffect, useState } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import products from '../../data/productsData.json';
import { deleteShoppingCart, getStoredCart, removeFromDB } from '../utilities/localDB';
import Swal from 'sweetalert2';
import './Cart.css';

const Cart = () => {

    const navigate = useNavigate();

    const[disabled, setDisabled] = useState(true);

    let savedCart = getStoredCart();
    let cart = [];
    for (let key in savedCart) {
        cart.push({
            ...products.find(pd => pd.id === key),
            quantity: savedCart[key]
        })
    }
  

    useEffect(() => {
        if(cart.length > 0) {
            setDisabled(false);
            document.getElementById('btn_checkout').className="btn btn-dark mx-auto d-block p-2";
            document.getElementById('btn_checkout').style.cursor = "pointer";
        }
        // eslint-disable-next-line
    },[])

    const handleClick = () => {
        if (cart.length > 0) {
            navigate('/shipping');
        } else {
            Swal.fire({
                title: "Your cart is empty!",
                text: `No products`,
                icon: "error"
              });
        }
    }
    
    return (
        <section className="bg-brand bg-brand-container">
            <Navbar/>
            <div className="container mt-5">

                <div className="row">

                    <div className="cart-container col-lg-9">

                        <h1 className="fs-4">Shopping Cart</h1>

                        <div className="table-responsive p-2">

                            {
                                cart?.length > 0 ?

                                <div className="">
                                     <table style={{border: "1px solid lightgrey"}} className="table table-striped">

                                        <thead>

                                            <tr>
                                                <th>Image</th>
                                                <th>Product</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Sub Total</th>
                                                <th>Remove</th>
                                            </tr>

                                        </thead>

                                        <tbody>

                                            {
                                                cart.map((product, index) => (
                                                    <tr key={index + 1}>
                                                        <td><img className="img-fluid" width={40} src={product.image} alt={product.name} /></td>
                                                        <td>{product.name}</td>
                                                        <td>{product.price}</td>
                                                        <td>{product.quantity}</td>
                                                        <td>{product.price * product.quantity}</td>
                                                        <td><button onClick={() => removeFromDB(product.id)} className="btn btn-danger">Remove</button></td>
                                                    </tr>
                                                ))
                                            }

                                        </tbody>

                                    </table>
                                    <button onClick={()=> deleteShoppingCart()} className="btn btn-outline-danger">Remove All Products</button>
                                </div>

                               
                          
                             :
                            <p style={{maxWidth:"500px", backgroundColor: "#E9EEF4", borderRadius: "4px"}} className="p-2">Your cart is empty. <Link className="text-decoration-none" to="/products">Go back.</Link></p>
                            }

                        </div>
                    
                    </div>

                    {/* Show on bigger screen */}
                    <div style={{boxShadow: "0 3px 10px 3px #f2f2f2"}} className="col-lg-3 mt-5 d-large-block">

                        <div style={{border:"1px solid lightgrey"}} className="p-2">
                            <h2 className="fs-5 text-center">Sub Total: {cart.reduce((a,b) => {return a + b.quantity}, 0)} Item(s)</h2>
                            <h3 className="fs-5 text-center">Price: {cart.reduce((a,b) => {return a + b.quantity * b.price}, 0)} Taka</h3>
                        </div>
                     
                        <div style={{border: '1px solid lightgrey'}}  onClick={() => handleClick()} className="py-2">
                            <button id="btn_checkout" className="btn btn-secondary mx-auto d-block" disabled={disabled}>Proceed to Checkout</button>
                        </div>
                    </div>

                    {/* Show on larger screen */}
                    {/* <div className="col-lg-3 mt-5 d-large-none fixed-bottom">

                        <div style={{border:"1px solid lightgrey"}} className="p-2">
                            <h2 className="fs-5 text-center">Sub Total: {cart.reduce((a,b) => {return a + b.quantity}, 0)} Item(s)</h2>
                            <h3 className="fs-5 text-center">Price: {cart.reduce((a,b) => {return a + b.quantity * b.price}, 0)} Taka</h3>
                        </div>
                     
                        <div style={{border: '1px solid lightgrey'}}  onClick={() => handleClick()} className="py-2">
                            <button id="btn_checkout" className="btn btn-secondary mx-auto d-block" disabled={disabled}>Proceed to Checkout</button>
                        </div>
                    </div> */}
                    
                </div>
               
            </div>
            <Footer/>
        </section>
    );
};

export default Cart;