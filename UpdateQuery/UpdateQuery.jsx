import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const UpdateQuery = () => {

    const query = useLoaderData();
    const { _id, productImage, productName, productBrand, queryTitle, boycottingReasonDetails, userEmail, userName, userImage, currentDateAndTime, recommendationCount } = query;


    const handleUpdateQuery = event => {
        event.preventDefault();

        const form = event.target;

        const productImage = form.productImage.value;
        const productName = form.productName.value;
        const productBrand = form.productBrand.value;
        const queryTitle = form.queryTitle.value;
        const boycottingReasonDetails = form.boycottingReasonDetails.value;
        const userEmail = form.userEmail.value;
        const userName = form.userName.value;
        const userImage = form.userImage.value;
        const currentDateAndTime = form.currentDateAndTime.value;
        const recommendationCount = form.recommendationCount.value;

        const updatedQuery = { productImage, productName, productBrand, queryTitle, boycottingReasonDetails, userEmail, userName, userImage, currentDateAndTime, recommendationCount  }

        console.log(updatedQuery);

        // send data to the server
        fetch(`http://localhost:3000/queries/${_id}`, {
            method: 'PUT',
            
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedQuery)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Query Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Close'
                    })
                }
            })
    }



    return (
        <div>
            <Helmet>
                <title>The Alt Products | Update Query</title>
            </Helmet>
            
            <div className="bg-[#F4F3F0] p-24">
                <h2 className="text-2xl font-extrabold text-center text-green-600">Update Query</h2>

                <form onSubmit={handleUpdateQuery}  className="bg-green-200 rounded-xl p-5 font-semibold">

                    {/*  Product Image-URL */}
                    <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Product Image</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="productImage" defaultValue={productImage} placeholder="Product Image-URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/* Product Name and  Product Brand */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="productName" defaultValue={productName} placeholder="Product Name" className="input input-bordered w-full" />
                            </label>
                        </div>


                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Product Brand</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="productBrand" defaultValue={productBrand} placeholder="Product Brand" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/* Query TItle */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2 lg:w-full">
                            <label className="label">
                                <span className="label-text">Query Title</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="queryTitle" defaultValue={queryTitle} placeholder="Query Title" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/* Boycotting Reason Details */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2 lg:w-full">
                            <label className="label">
                                <span className="label-text">Boycotting Reason Details</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="boycottingReasonDetails" defaultValue={boycottingReasonDetails} placeholder="Boycotting Reason Details" className="input input-bordered w-full" />
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
                                <input type="text" name="userEmail" placeholder="User Email" defaultValue={userEmail} disabled className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="userName" placeholder="User Name" defaultValue={userName} disabled className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>


                    {/* Just Show User Image */}
                    <div className="flex justify-center" >
                        <img className="w-24 rounded-2xl" src={userImage} />   
                    </div>

                    {/* User Image and Current Date and Time */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2" >
                            <label className="label">
                                <span className="label-text">User Image</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="userImage" placeholder="User Image" defaultValue={userImage} disabled className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Current Date and Time</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="currentDateAndTime" placeholder="Current Date and Time" defaultValue={currentDateAndTime} disabled className="input input-bordered w-full" />
                            </label>
                        </div>




                    </div>

                    {/* Recommendation Count */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2 lg:w-full">
                            <label className="label">
                                <span className="label-text">Recommendation Count</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="recommendationCount" placeholder="Recommendation Count" defaultValue={recommendationCount} disabled className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>


                    <input type="submit" value="Update Query" className="btn btn-block btn-info text-xl" />

                </form>


            </div>
        </div>
    );
};

export default UpdateQuery;