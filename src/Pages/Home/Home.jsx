import { useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Banner from "./Banner";
import LatestCustomer from "../LatestCustomer/LatestCustomer";
import BrandCard from "./BrandCard";
import ContactUs from "./ContactUs";

const Home = () => {

    const loadedData= useLoaderData();
    // console.log(loadedDAta);

    return (
        <div className=" bg-green-100">
            <Navbar></Navbar>
            <Banner></Banner>
            <h2 id="brandSection" className="mb-6 text-purple-600 text-2xl md:text-5xl font-bold text-center">Our Brands {loadedData.length}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 m-10 lg:m-20 ">
                {
                    loadedData.map(brand => <BrandCard key={brand._id} brand={brand}></BrandCard>)
                }
            </div>
            <LatestCustomer></LatestCustomer>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;