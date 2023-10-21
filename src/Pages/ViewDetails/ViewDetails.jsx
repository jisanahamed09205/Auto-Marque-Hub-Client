import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import swal from "sweetalert";

const ViewDetails = () => {

    const loadDetails = useLoaderData();
    // console.log(loadDetails);
    const {_id,name,brandName,price,rating,type,description,image} = loadDetails;

    const handleAddCart = e =>{
        e.preventDefault();
        // console.log('Cart add kor vai');
        swal("Added!", "This cart add to Your Cart", "success")
    }

    return (
        <div>
            <Navbar></Navbar>
            <h1 className=" my-2 text-2xl md:text-5xl font-bold text-center">{brandName}</h1>
            <div className="image_wrapper hero h-96 md:min-h-screen" style={{backgroundImage:`url(${image})`}}>
            </div>
            <div className=" mt-14 flex justify-evenly items-center">
                
                <h1 className=" text-xl md:text-3xl font-bold">Model: {name}</h1>
                <div className="rating">
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                </div>
            </div>
            <div className=" mt-6 flex justify-evenly items-center">
                <p className="mt-6 md:tex-xl"><span className="font-bold text-blue-600">Price</span>: {price}</p>
                <button onClick={handleAddCart} className="btn btn-primary normal-case text-white border-none">Add to Cart</button>
            </div>
            <p className=" mx-auto  mt-6 mb-32 px-10">{description}</p>
        </div>
    );
};

export default ViewDetails;