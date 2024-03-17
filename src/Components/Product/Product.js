import React from 'react';
import { Navigate, useNavigate, useParams} from 'react-router-dom';
import products from '../../data/productsData.json'
import Navbar from '../Shared/Navbar/Navbar';
import './Product.css'
import Footer from '../Shared/Footer/Footer';
import { useState } from 'react';
import { addToDB } from '../utilities/localDB';
import Swal from 'sweetalert2';
const Product = () => {

    const navigate = useNavigate();
    const {id} = useParams();
    const product = products.find(pd => pd.id === id);
   
    const [cart, setCart] = useState([]);

    const addToCart =(product) => {
        setCart([...cart, product]);
        addToDB(product.id);
        Swal.fire({
            title: "Successful!",
            text: `You've added ${product.name}`,
            icon: "success"
          });
    }

    const shoppingCart = (product) => {
        setCart([...cart, product]);
        addToDB(product.id);
    }

    const handleClick = (product) => {
        shoppingCart(product);
        navigate('/shipping');
    }

    return (
        <section className="bg-brand bg-brand-container">
            <Navbar/>
            <div className="container">
                <h1 className="fs-4 mt-5 text-center">Product Details</h1>

                <div className="row justify-content-center align-items-center">

                    <div className="col-lg-4">
                        <img style={{borderRadius: "1rem", boxShadow: "0 5px 15px #c4c4c44d"}} src={product.image} className="product-image img-fluid mx-auto d-block" width={300} alt={product.name} />

                        <div className="d-flex justify-content-center mt-4 align-items-center">
                            <button onClick={() => addToCart(product)}className="btn btn-dark mt-2">Add to Cart</button>
                            <button onClick={() => handleClick(product)} className="btn btn-success mt-2 ms-2">Buy Now</button>
                        </div>
                      
                    </div>

                    <div className="col-lg-8">
                   
                        <div style={{borderRadius: "1rem", boxShadow: "0 5px 15px #c4c4c44d"}} className="p-5 mt-4 mx-auto d-block bg-white">
                            <h2 className="fs-5 fw-bold">{product.name}</h2>
                            <hr />
                            <p style={{textAlign:"justify"}} className="fs-4">{product.description}</p>
                            <hr />
                            <small className=''>Price: <span className="fs-5 fw-bold">{product.price}</span> Taka</small>
                        </div>    

                    </div>


                </div>
              
            </div>

            <div className="mt-4">
                <Footer/>
            </div>

        </section>
    );
};

export default Product;