
const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://live.staticflickr.com/65535/53275034940_583631a607.jpg)' }}>
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-neutral-content">
                <div className="max-w-6xl">
                    <h1 data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" 
                    className="mb-5 text-2xl md:text-3xl lg:text-5xl font-bold ">Embark on a Journey of Automotive Excellence with AutoMarqueHub</h1>
                    <p data-aos="fade-left"
                         data-aos-anchor="#example-anchor"
                         data-aos-offset="500"
                         data-aos-duration="500"
                    className="mb-5">Welcome to AutoMarqueHub, where passion meets precision. Immerse yourself in a world of automotive excellence, from iconic classics to cutting-edge marvels. Discover in-depth guides, expert reviews, and a vibrant community of fellow enthusiasts. Let's embark on a journey where every drive is an experience in perfection.</p>
                    <br />
                    <br />
                    <div className=" text-center">
                        <a href="#brandSection"><button  className="btn btn-primary">Our Brands</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;