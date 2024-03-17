import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { useForm } from "react-hook-form";
import facebookImage from '../../images/facebook.png';
import googleImage from '../../images/google.png';
import githubImage from '../../images/github.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {

    let navigate = useNavigate();
    let location = useLocation();

    let from = location?.state?.from?.pathname || '/products';

    const {user, signInWithGoogle, signInWithGithub, signInWithFacebook, login, error} = useAuth();

    user.email && navigate(from, {replace: true});

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
      const onSubmit = (data) => {
        login(data.email, data.password);
       
    };

    return (
        <section className="bg-brand bg-brand-container">
            <Navbar/>
                <div className="container">
                    <h1 className='fs-4 text-center mt-5'>Sign In</h1>
                    <div className="col-md-6 col-sm-8 justify-content-center align-items-center mx-auto d-block">
                        <form onSubmit={handleSubmit(onSubmit)}>

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
                        
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                <input onClick={login} className="btn btn-dark" type="submit" value="Sign In"/>
                        </form>

                        {
                            {error} && <p className="text-danger my-2">You've entered wrong password!</p>
                        }

                        <div className="mt-4">
                             <Link to="/register" className="text-decoration-none text-black">Don't have an account? <span className="text-decoration-underline text-primary">Click here to register</span></Link>
                        </div>
                     
                    </div>

                   
                    

                    <div className="d-flex align-items-center justify-content-center mt-4">
                        <div className="col-sm-2">
                            <hr />
                        </div>
                        <p className="mt-3 px-2">Or sign in using</p>
                        <div className="col-sm-2">
                            <hr />
                        </div>
                    </div>

                    <div className="d-flex justify-content-center align-items-center mt-4">

                            <button onClick={signInWithGoogle} style={{minHeight:"60px"}} className="btn d-flex justify-content-center align-items-center">
                                <img src={googleImage} className="img-fluid mx-auto d-block" alt="" />
                                <p className="mt-3">Google</p>
                            </button>
                        
                            <button onClick={signInWithFacebook} style={{minHeight:"60px"}} className="btn d-flex justify-content-center align-items-center">
                                <img src={facebookImage} className="img-fluid mx-auto d-block" width={33} alt="" />
                                <p className="mt-3 ms-2">Facebook</p>
                            </button>

                            <button onClick={signInWithGithub} style={{minHeight:"60px"}} className="btn d-flex justify-content-center align-items-center">
                                <img src={githubImage} width={35} className="img-fluid mx-auto d-block" alt="" />
                                <p className="mt-3">GitHub</p>
                            </button>
                    </div>
                </div>
                
        </section>
    );
};

export default Login;