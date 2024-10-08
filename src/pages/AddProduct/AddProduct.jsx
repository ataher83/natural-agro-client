import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import Swal from 'sweetalert2'
import {  toast } from 'react-toastify';
import { AuthContext } from "../../providers/AuthProvider";


const AddProduct = () => {
    const { user } = useContext(AuthContext); 

    const handleAddProduct = event => {
        event.preventDefault();

        const form = event.target;

        const productImage = form.productImage.value;
        const productName = form.productName.value;
        const productCategory = form.productCategory.value;
        const productBrand = form.productBrand.value;
        const productPrice = form.productPrice.value;
        const productRating = form.productRating.value;
        const productDescription = form.productDescription.value;
        const userEmail = form.userEmail.value;
        const userName = form.userName.value;
        const userImage = form.userImage.value;
        const currentDateAndTime = form.currentDateAndTime.value;

        const newProduct = { productImage, productName, productCategory, productBrand, productPrice, productRating, productDescription, userEmail, userName, userImage, currentDateAndTime }


        // send data to the server
        fetch('http://localhost:3000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Added Successfully !',
                        icon: 'success',
                        confirmButtonText: 'Close'
                      })

                      toast.success('Product Added Successfully.')
                      
                }
            })
    }


    return (
        <div>
            <Helmet>
                <title>Add Product | Natural Agro</title>
            </Helmet>

            {/* Add Product Section */}
            <div className="bg-[#F4F3F0] p-24">
                <h2 className="text-2xl font-extrabold text-center text-green-600">Add a Product</h2>

                <form onSubmit={handleAddProduct}  className="bg-green-200 rounded-xl p-5 font-semibold">

                    {/*  Product Image-URL */}
                    <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Product Image</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="productImage" placeholder="Product Image-URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/* Product Name and  Product Category */}
                    <div className="md:flex mb-8">

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="productName" placeholder="Product Name" className="input input-bordered w-full" />
                            </label>
                        </div>


                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Product Category</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="productCategory" placeholder="Product Category" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>


                    {/* productBrand */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2 lg:w-full">
                            <label className="label">
                                <span className="label-text">Product Brand</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="productBrand" placeholder="Product Brand" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/* Product Price and  Product Rating */}
                    <div className="md:flex mb-8">

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Product Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="productPrice" placeholder="Product Price" className="input input-bordered w-full" />
                            </label>
                        </div>


                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Product Rating</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="productRating" placeholder="Product Rating" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/* productDescription */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2 lg:w-full">
                            <label className="label">
                                <span className="label-text">product Description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="productDescription" placeholder="Product Description" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>


                    {/* User Email and User Name */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">User Email</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="userEmail" placeholder="User Email" defaultValue={user.email} disabled className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="userName" placeholder="User Name" defaultValue={user.displayName} disabled className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>


                    {/* Just Show User Image */}
                    <div className="flex justify-center" >
                        <img className="w-24 rounded-2xl" src={user.photoURL} />   
                    </div>

                    {/* User Image and Current Date and Time */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2" >
                            <label className="label">
                                <span className="label-text">User Image</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="userImage" placeholder="User Image" defaultValue={user.photoURL} disabled className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Current Date and Time</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="currentDateAndTime" placeholder="Current Date and Time" defaultValue={new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) + ', ' + new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' })} disabled className="input input-bordered w-full" />
                            </label>
                        </div>

                    </div>


                    <input type="submit" value="Add Product" className="btn btn-block btn-success text-xl" />

                </form>


            </div>
            
        </div>
    );
};

export default AddProduct;