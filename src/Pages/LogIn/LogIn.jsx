import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import swal from "sweetalert";

const LogIn = () => {

    const {login,signInWithGoogle} = useContext(AuthContext);

    const location = useLocation();

    const navigate = useNavigate();

    const handleLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email,password);

        //login user
        login(email,password)
        .then(result=>{
            console.log(result.user);
            swal("Successful!", "Your Login Success!", "success")


            navigate(location?.state ? location.state : '/');

        })

        .catch(error=>{
            console.error(error);
            swal("Invalid!", "Check Your Email or Password!", "warning");
        })
    }
    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.error(error)
        })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200" style={{backgroundImage: 'url(/loginbg.svg)'}}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-white">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                {/* <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label> */}
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                                Don not have an account?
                                <Link
                                    to='/register'
                                    className="font-medium text-pink-500 transition-colors hover:text-blue-700"
                                    href="#"
                                >
                                    Register
                                </Link>
                            </p>
                        </form>
                        <p className="text-center"><button onClick={handleGoogleSignIn} className='btn btn-secondary w-80 mb-5'>Sign in With Google</button></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;