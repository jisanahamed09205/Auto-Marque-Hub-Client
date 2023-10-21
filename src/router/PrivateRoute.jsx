import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { FidgetSpinner } from  'react-loader-spinner'
import { AuthContext } from "../Pages/Provider/AuthProvider";


const PrivateRoute = ({children}) => {

    const {user,loading} = useContext(AuthContext);

    const location = useLocation();
    // console.log(location.pathname);

    const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };

    if(loading){
        return <div style={style}>
        <FidgetSpinner
            visible={true}
            height="200"
            width="200"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
            ballColors={['#ff0000', '#00ff00', '#0000ff']}
            backgroundColor="#F4442E"
        />
    </div>
    }

    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>;
};

export default PrivateRoute;