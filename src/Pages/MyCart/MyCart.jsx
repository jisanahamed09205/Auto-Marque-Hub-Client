import Navbar from "../Navbar/Navbar";

const MyCart = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-5xl">HI thi is My Cart</h2>
            <img src="https://live.staticflickr.com/65535/53271644310_112e8b9b86_z.jpg" alt="" />
            <div className="carousel w-full">
              <div id="slide1" className="carousel-item relative w-full">
                <img src="https://live.staticflickr.com/65535/53271644310_112e8b9b86_z.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide3" className="btn btn-circle">❮</a>
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
                  <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
              </div>
            </div>
        </div>
    );
};

export default MyCart;