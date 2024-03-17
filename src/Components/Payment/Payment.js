import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Payment = () => {

    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();
    
    function onSubmit(data) {
        localStorage.setItem('payment_mode', JSON.stringify(data.payment_mode));
        navigate('/order');
    }
    return (
        <section className="bg-brand bg-brand-container">
            <Navbar/>

            <div className="container mt-5">
                <h1 className="fs-4 text-center">Enter You Payment Mode</h1>

                <div className="d-flex justify-content-center align-items-center">

                    

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-group mt-2">

                            <label htmlFor="aamar_pay">
                                <input
                                {...register("payment_mode", { required: true })}
                                type="radio"
                                name="payment_mode"
                                value="Aamar pay"
                                id="aamar_pay"
                                checked
                                />
                                Aamar pay
                            </label>
                        
                        </div>

                        <div className="form-group mt-2">
                            <label htmlFor="cash_on_delivery">

                                <input
                                    {...register("payment_mode", { required: true })}
                                    type="radio"
                                    name="payment_mode"
                                    value="Cash On Delivery"
                                    id="cash_on_delivery"
                                />
                                Cash On Delivery

                            </label>

                        </div>   

                        <button className="btn btn-dark p-2 mt-3" type="submit">Continue</button>

                    </form>

                </div>

            </div>
            
        </section>
    );
};

export default Payment;