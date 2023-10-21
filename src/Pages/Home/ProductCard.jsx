import { Link } from "react-router-dom";

const ProductCard = ({product}) => {
    // console.log(product);
    const {_id,name,brandName,price,rating,type,shortDescrib,image} = product;
    return (

        <div className="card card-compact bg-base-100 shadow-xl mx-auto">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{brandName}</h2>
                <h2 className=" text-xl font-semibold">{name}</h2>
                <div className=" flex justify-between">
                    <h4 className=" font-medium">{type}</h4>
                    <h4 className=" text-xl text-green-600 font-bold">{price}</h4>
                </div>
                <div className="rating">
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                </div>
                <p>{shortDescrib}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary btn-sm">Details</button>
                </div>
                <Link to={`/update/${_id}`}>
                    <button className="btn btn-info w-full">Update</button>
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;