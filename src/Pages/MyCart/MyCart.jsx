import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const MyCart = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-5xl text-center">HI thi is My Cart But it's empty please <Link to="/" className="btn btn-info">Click</Link> </h2>
        </div>
    );
};

export default MyCart;