import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="h-screen flex justify-center items-center ">
                <h1 className="text-4xl text-center"><span className=" text-orange-500 font-bold">Ooops</span> <br /> You caught an <span className=" text-red-500 font-semibold">Error !!</span><br /> <br /><span><Link to='/'><button className="btn btn-error font-semibold">Go Home</button></Link></span></h1>
        </div>
    );
};

export default ErrorPage;