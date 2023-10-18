import { Link, NavLink } from "react-router-dom";
import defaultUser from "../../assets/user.png"
import logo from "../../assets/logo.svg"

const Navbar = () => {

    const navLinks = <>
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#3a5ae6] underline hover:text-red-800" : ""
                }
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/addProduct"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#3a5ae6] underline hover:text-red-800" : ""
                }
            >
                Add Product
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/myCart"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#3a5ae6] underline hover:text-red-800" : ""
                }
            >
                My Cart
            </NavLink>
        </li>
    </>

    return (
        <div className="navbar bg-base-100 pt-4 text-white" style={{backgroundImage: 'url(/navbg.svg)'}}>
            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabIndex={0} className=" lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-red-200 text-black rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="flex items-center font-bold normal-case md:text-2xl h-[30%] w-[30%]"><img src={logo} alt="" />Hub</a>

            </div>
            <div className="navbar-center hidden lg:flex font-medium">
                <ul className=" text-xl menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img src={defaultUser} />
                    </div>
                </label>
                {/* {
                    user && <span>{user.displayName}</span>
                }
                {
                    user ?
                    <button className="btn normal-case">SignOut</button>
                    :
                        <Link to='/login'>
                            <button className="btn normal-case">Login</button>
                        </Link>
                } */}
                        <Link to='/login'>
                            <button className="btn normal-case">Login</button>
                        </Link>
            </div>
        </div>
    );
};

export default Navbar;