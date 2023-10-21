import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import swal from "sweetalert";

const Update = () => {

    const loaderUpdate = useLoaderData();

    const {_id,name,brandName,price,rating,type,shortDescrib,image} = loaderUpdate;

    const handleUpdateProduct = e =>{
        e.preventDefault();
        // console.log('click marceeee');

        const form = e.target;

        const name = form.name.value;
        const brandName = form.brandName.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const type = form.type.value;
        const shortDescrib = form.shortDescrib.value;
        const image = form.image.value;

        const updatedProduct = {name,brandName,price,rating,type,shortDescrib,image}
        // console.log(newProduct);

        // send data to the server
        fetch(`https://auto-marque-hub-server.vercel.app/productsKakus/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
        .then((res)=>res.json())
        .then(data=>{
            // console.log(data);
            if(data.modifiedCount > 0){
                swal("Updated!", "Your Product Updated!", "success")
            }
        })

    }

    return (
        <div>
            <Navbar></Navbar>
            <div className=" bg-red-100 p-24">
                <h2 className=" text-2xl md:text-4xl font-bold text-purple-600 text-center">Update Form</h2>
                <form onSubmit={handleUpdateProduct}>
                    {/* form line-1*/}
                    <div className="md:flex gap-5">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" defaultValue={name} placeholder="Enter New Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="brandName" defaultValue={brandName} placeholder="Enter Brand New Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form line-2*/}
                    <div className="md:flex gap-5">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="price" defaultValue={price} placeholder="Enter New price" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="rating" defaultValue={rating} placeholder="Rating" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form line-3*/}
                    <div className="md:flex gap-5">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="type" defaultValue={type} placeholder="Type" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">New Short Description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="shortDescrib" defaultValue={shortDescrib} placeholder="Short description" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form line-4 image*/}
                    <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="image" defaultValue={image} placeholder="New Img URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Update Product" className="btn btn-block bg-black text-white hover:text-black hover:bg-red-300" />
                </form>
            </div>
        </div>
    );
};

export default Update;