import { Link } from "react-router-dom";

const BrandCard = ({ brand }) => {

    const {brandImg,brandName} = brand;
    // console.log(brandName);

    return (
        <Link to={`/productPage/${brandName}`}>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className=" text-center text-4xl text-blue-600 font-extrabold">{brandName}</h2>
                </div>
                <figure><img src={brandImg} alt="Shoes" /></figure>
            </div>
        </Link>
    );
};

export default BrandCard;