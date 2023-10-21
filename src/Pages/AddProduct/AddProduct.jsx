import swal from "sweetalert";
import Navbar from "../Navbar/Navbar";

const AddProduct = () => {

    const handleAddProduct = e =>{
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

        const newProduct = {name,brandName,price,rating,type,shortDescrib,image}
        // console.log(newProduct);

        // send data to the server
        fetch('https://auto-marque-hub-server.vercel.app/products',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then((res)=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                swal("Added!", "Your Product Added!", "success")
            }
        })

    }

    return (
        <div>
            <Navbar></Navbar>
            <div className=" bg-red-100 p-24">
                <h2 className="text-3xl font-bold text-purple-600 text-center">Add New Product</h2>
                <form onSubmit={handleAddProduct}>
                    {/* form line-1*/}
                    <div className="md:flex gap-5">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" placeholder="Enter Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="brandName" placeholder="Enter Brand Name" className="input input-bordered w-full" />
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
                                <input type="text" name="price" placeholder="Enter price" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
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
                                <input type="text" name="type" placeholder="Type" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Short Description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="shortDescrib" placeholder="Short description" className="input input-bordered w-full" />
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
                                <input type="text" name="image" placeholder="Enter photo URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Add Product" className="btn btn-block bg-black text-white hover:text-black hover:bg-red-300" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;