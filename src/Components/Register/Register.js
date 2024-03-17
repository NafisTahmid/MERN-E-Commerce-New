import React from 'react';
import Navbar from '../../Components/Shared/Navbar/Navbar';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
const Register = () => {
    const {registerUser, user,  error} = useAuth();
    const {register, handleSubmit, watch, formState: { errors }} = useForm();
    const onSubmit = (data) => {
        registerUser(data.name, data.image, data.email, data.password);
     
    };

    let navigate = useNavigate();
    let location = useLocation();
    let from = location?.state?.from?.pathname || '/profile';
    user.email && navigate(from, {replace: true});

    return (
        <section className="bg-brand bg-brand-container">
            <Navbar/>
            <div className="container mt-5">
                <h1 className="fs-4 text-center">Register</h1>
                <div className="col-md-6 col-sm-8 justify-content-center align-items-center mx-auto d-block">
                        <form onSubmit={handleSubmit(onSubmit)}>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label p-2">Name</label>
                                    <input type="text" className="form-control p-2" id="name" {...register("name", { required: true })}/>
                                    {errors.name && <span className="text-danger">Email is required</span>}
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label p-2">Copy your Profile Picture Image from the Internet</label>
                                    <input type="text" className="form-control p-2" id="image" {...register("image", { required: true })}/>
                                    {errors.image && <span className="text-danger">Image is required</span>}
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label p-2">Email address</label>
                                    <input type="email" className="form-control p-2" id="email" {...register("email", { required: true })}/>
                                    {errors.email && <span className="text-danger">Email is required</span>}
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label p-2">Password</label>
                                    <input type="password" className="form-control p-2" id="password" {...register("password", { required: true })}/>
                                    {errors.password && <span className="text-danger">Password is required</span>}
                                </div>

                                <div id="emailHelp" className="form-text my-2">We'll never share your email with anyone else.</div>
                                <input className="btn btn-dark" type="submit" value="Register"/>
                                <p>{error}</p>
                        </form>
                        <div className="mt-4">
                             <Link to="/login" className="text-decoration-none text-black">Already have an account? <span className="text-decoration-underline text-primary">Click here to login</span></Link>
                        </div>
                     
                    </div>
            </div>
            
        </section>
    );
};

export default Register;