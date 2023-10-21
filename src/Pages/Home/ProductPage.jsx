import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import ProductCard from "./ProductCard";

const ProductPage = () => {

    const products = useLoaderData();
    // console.log(products);

    return (
        <div>
            <Navbar></Navbar>
            <div>
                <div className="carousel w-full max-h-[30vh] md:max-h-[60vh] lg:max-h-[80vh]">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://live.staticflickr.com/65535/53271174926_775fa4a1dc_h.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide6" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://live.staticflickr.com/65535/53271175111_2e469e079d_h.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://live.staticflickr.com/65535/53270280887_325a8bcb58_h.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="https://live.staticflickr.com/65535/53271644310_112e8b9b86_z.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide5" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide5" className="carousel-item relative w-full">
                        <img src="https://live.staticflickr.com/65535/53271174956_cbb4e6ed22_c.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide6" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide6" className="carousel-item relative w-full">
                        <img src="https://live.staticflickr.com/65535/53271530314_489197d5be_z.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide5" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-6">
                {
                    products.length? products.map(product => <ProductCard key={product._id} product={product}></ProductCard>) :
                    <div className=" flex justify-center items-center h-screen text-center">
                        <p className="text-xl lg:text-3xl font-medium lg:font-bold"><span className=" text-red-700 text-5xl">Oops!!</span> Sorry, This Brand <br /> Product are not Available Now</p>
                    </div>
                }
            </div>
        </div>
    );
};

export default ProductPage;