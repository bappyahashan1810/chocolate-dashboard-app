import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const SignIn = () => {
    const { handleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        handleSignIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                toast.success('Successfully SignIn');
                navigate('/login');
            })
            .then(error => {
                console.error(error)
                toast.error(error.message);
            })

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit}>
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" name='email' className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" name='password' placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">SignIn</button>
                                </div>
                            </div>
                            <p><small>Already you have account?please <Link className='text-blue-500 mb-3' to='/login'>Login</Link></small></p>
                        </form>
                        <button className='btn btn-primary text-2xl mt-4'><FcGoogle></FcGoogle></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;