import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Banner from "./Banner";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <h2 id="brandSection" className="mb-6 text-purple-600 text-2xl md:text-5xl font-bold text-center">Our Brands</h2>
            <Footer></Footer>
        </div>
    );
};

export default Home;