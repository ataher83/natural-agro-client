import { useLoaderData, useParams } from "react-router-dom";
import  { useContext, useEffect, useState } from 'react';
import { Helmet } from "react-helmet-async";
import Swal from 'sweetalert2'
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";

const QueryDetails = () => {
    const { user } = useContext(AuthContext); 
    const queries =useLoaderData();
    const {id} = useParams()
    // console.log(id)
    // console.log( typeof(id) )
    //এখানে প্যারাম এর মাধ্যেমে যে id পাওয়া যায় তা String, তাই একে Integer এ কনভারট করে নিতে হবে, অথবা  == (double equal operator) দিয়ে কম্পেয়ার করতে হবে। 
    //এখানে আমি == (double equal operator) ব্যবহার করেছি 

    // const idInt = parseInt(id)
    // console.log(idInt)
    // console.log( typeof(idInt) )

    const query = queries.find(q => q._id == id) 
    // console.log( id, crafts )








    const [recommendations, setRecommendations] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/recommendations')
                .then(res => res.json())
                .then(data => setRecommendations(data))
    }, [])

    const particularQueryRecommendations = recommendations.filter(recommendation => recommendation.queryId == id)

    console.log(particularQueryRecommendations)








    



    const handleAddRecommendation = event => {
        event.preventDefault();

        const form = event.target;

        const recommendationTitle = form.recommendationTitle.value;
        const recommendedProductName = form.recommendedProductName.value;
        const recommendedProductImage = form.recommendedProductImage.value;
        const recommendationReason = form.recommendationReason.value;


        const queryId = form.queryId.value;

        const queryTitle = form.queryTitle.value;
        const productName = form.productName.value;
        const queryCreatorEmail = form.queryCreatorEmail.value;
        const queryCreatorName = form.queryCreatorName.value;
        const recommenderEmail = form.recommenderEmail.value;
        const recommenderName = form.recommenderName.value;
        const recommendationDateTime = form.recommendationDateTime.value;

        const recommendationCount = form.recommendationCount.value;

        // Parse recommendationCount as integer
        // const recommendationCount = parseInt(form.recommendationCount.value);

        // Increment the recommendation count by 1
        // const updatedRecommendationCount = recommendationCount + 1;


        // const productImage = form.productImage.value;
        // const productBrand = form.productBrand.value;
        // const boycottingReasonDetails = form.boycottingReasonDetails.value;
        // const userImage = form.userImage.value;
        

        const newRecommendation = { recommendationTitle, recommendedProductName, recommendedProductImage, recommendationReason, recommenderEmail, recommenderName, 
        queryId, productName, queryTitle, queryCreatorEmail, queryCreatorName, recommendationDateTime, 
        recommendationCount,
        // recommendationCount: updatedRecommendationCount.toString(), 
        // Convert to string for consistency
     }

        // console.log(newRecommendation);

        // send data to the server
        // fetch('http://localhost:3000/recommendations', {
        fetch('http://localhost:3000/recommendations', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newRecommendation)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    // Recommendation added successfully, update the UI if needed
                    Swal.fire({
                        title: 'Success!',
                        text: 'Recommendation Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Close'
                      })
                      
                }
            })
    }



    // const handleAddRecommendation = event => {
    //     event.preventDefault();
    
    //     const form = event.target;
    
    //     // Extracting recommendation details from the form
    //     const recommendationTitle = form.recommendationTitle.value;
    //     const recommendedProductName = form.recommendedProductName.value;
    //     const recommendedProductImage = form.recommendedProductImage.value;
    //     const recommendationReason = form.recommendationReason.value;
    
    //     // Extracting query details from the form
    //     const queryId = form.queryId.value;
    
    //     // Construct the new recommendation object
    //     const newRecommendation = {
    //         recommendationTitle,
    //         recommendedProductName,
    //         recommendedProductImage,
    //         recommendationReason,
    //         recommenderEmail: form.recommenderEmail.value,
    //         recommenderName: form.recommenderName.value,
    //         queryId,
    //         productName: form.productName.value,
    //         queryTitle: form.queryTitle.value,
    //         queryCreatorEmail: form.queryCreatorEmail.value,
    //         queryCreatorName: form.queryCreatorName.value,
    //         recommendationDateTime: form.recommendationDateTime.value,
    //     };
    
    //     // Send data to the server to add the recommendation
    //     fetch('http://localhost:3000/recommendations', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(newRecommendation)
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         if (data.insertedId) {
    //             // Recommendation added successfully, update the recommendation count in the database
    //             fetch(`http://localhost:3000/queries/${queryId}/incrementRecommendationCount`, {
    //                 method: 'PATCH',
    //                 headers: {
    //                     'content-type': 'application/json'
    //                 },
    //                 body: JSON.stringify({ incrementBy: 1 })
    //             })
    //             .then(res => res.json())
    //             .then(updatedQuery => {
    //                 console.log('Recommendation count updated:', updatedQuery);
    //                 // Optionally, you can update the UI here with the updated recommendation count
    //             })
    //             .catch(error => {
    //                 console.error('Error updating recommendation count:', error);
    //                 // Handle errors if any
    //             });
                
    //             // Show success message or update UI if needed
    //             Swal.fire({
    //                 title: 'Success!',
    //                 text: 'Recommendation Added Successfully',
    //                 icon: 'success',
    //                 confirmButtonText: 'Close'
    //             });
    //         }
    //     })
    //     .catch(error => {
    //         console.error('Error adding recommendation:', error);
    //         // Handle errors if any
    //     });
    // };
    




    // const handleAddARecommendationNow = (buttonId) => {
    //     const button = document.getElementById(buttonId);
    //     const otherButtonId = buttonId === 'addARecommendationNowButton' ? 'showAllRecommendationsButton' : 'addARecommendationNowButton';
    //     const otherButton = document.getElementById(otherButtonId);
        
    //     button.classList.toggle('hidden');
    //     otherButton.classList.remove('hidden');
    // };
    

    const handleAddARecommendationNow=() =>{
        const addARecommendationNowButton = document.getElementById('addARecommendationNowButton');
        const recommendationDiv = document.getElementById('recommendationDiv');

        recommendationDiv.classList.toggle('hidden');
        // addARecommendationNowButton.textContent = recommendationDiv.classList.contains('hidden') ? 'Add A Recommendation Now' : 'No, Will Recommend Later';
        // addARecommendationNowButton.textContent = recommendationDiv.classList.contains('hidden') ? 'Add A Recommendation Now' : '<p>No, Will Recommend Later <br /> Close Now <br /> X</p>';



        // addARecommendationNowButton.innerHTML = recommendationDiv.classList.contains('hidden') ? 'Add A Recommendation Now' : `<p>No, Will Recommend Later.<br />Close Now<br />X</p>`;

        addARecommendationNowButton.innerHTML = recommendationDiv.classList.contains('hidden') ? 'Add A Recommendation Now' : `<p class="text-white text-lg">No, I will Recommend Later. <span class="text-2xl font-bold ml-5 px-3 py-2 rounded-lg bg-black text-white ">X</span></p>`;

    }

    const handleShowAllRecommendations=() =>{     
        const showAllRecommendationsButton = document.getElementById('showAllRecommendationsButton');
        const allRecommendationsDiv = document.getElementById('allRecommendationsDiv');

        allRecommendationsDiv.classList.toggle('hidden');
        // showAllRecommendationsButton.textContent = allRecommendationsDiv.classList.contains('hidden') ? 'Show All Recommendations' : 'Hide All Recommendations';


        showAllRecommendationsButton.innerHTML = allRecommendationsDiv.classList.contains('hidden') ? 'Show All Recommendations' : `<p class="text-white text-lg">No, I will View Later.<span class="text-2xl font-bold ml-5 px-3 py-2 rounded-lg bg-black text-white ">X</span></p>`;
    }



    return (
        <div className="card bg-base-100 shadow-xl mt-4  ">
            <Helmet>
            <title>The Alt Products | Query Details: {query._id}</title>
            </Helmet>

            <h2 className="text-xl font-bold text-center text-blue-600">Details About This Query</h2>

            {/* Show Query Details */}
            <div className="card bg-base-100 shadow-xl mt-4">

                <figure><img className="w-full h-72" src={query.productImage} alt="Query Image" />
                </figure>

                <div className="flex justify-between px-2 pt-1 font-semibold">
                    <p className=" bg-orange-400 rounded capitalize px-1">{query.productName}</p>
                    <p className="bg-orange-400 rounded capitalize px-1"><span>{query.productBrand}</span></p>
                </div>

                <div className="card-body px-1">
                    <div className="flex gap-2 items-center justify-center">
                        
                        <h2 className=" lg:card-title text-center text-orange-600">
                            {query.queryTitle}
                        
                        </h2>
                    </div>
                                                
                    <p className="text-center pb-2">{query.boycottingReasonDetails}</p>

                    <div className="card-actions justify-center items-center">
                        <div className="badge badge-outline bg-blue-400 font-semibold text-white border-blue-500">Posted at: {query.currentDateAndTime}</div> 
                        <div className="badge badge-outline  bg-blue-400 font-semibold text-white border-blue-500">Posted by: {query.userName}</div> 
                    </div>
                    
                    <div className="card-actions justify-center items-center">
                        <div className="badge badge-outline  bg-blue-400 font-semibold text-white border-blue-500">Recommendation: {query.recommendationCount}</div>

                        <div className="badge badge-outline  bg-blue-400 font-semibold text-white border-blue-500">Email: {query.userEmail}</div>                          
                    </div>
                   

                    {/* Just Show User Image */}
                    <div className="flex justify-center" >
                        <img className="w-24 rounded-2xl" src={query.userImage} />   
                    </div>


{/* <button 
id="addARecommendationNowButton" 
onclick="handleAddARecommendationNow('addARecommendationNowButton')"
>Add A Recommendation Now</button>

<button id="showAllRecommendationsButton" onclick="handleAddARecommendationNow('showAllRecommendationsButton')">Show All Recommendations</button> */}



                    <div className="flex justify-center gap-10 mt-5">
                        {/* <Link to={`/queryDetails/${query._id}`}><button className="btn btn-info w-1/3 ">Recommend</button></Link> */}
                        <button 
                        onClick={handleAddARecommendationNow}
                        id="addARecommendationNowButton"
                        className="btn btn-info w-1/3 ">Add A Recommendation Now</button>

                        <button onClick={handleShowAllRecommendations}
                        id="showAllRecommendationsButton"
                         className="btn btn-info w-1/3">Show All Recommendations</button>
                    </div>            

                </div>
            </div>





            {/* Add Recommendation Section */}
            <div id="recommendationDiv" className="hidden bg-[#F4F3F0] px-24 py-5">
                <h2 className="text-2xl font-extrabold text-center text-blue-600 py-5">Add A Recommendation</h2>

                <form onSubmit={handleAddRecommendation}  className="bg-blue-200 rounded-xl p-5 font-semibold">


                {/* Recommendation Part */}

                    {/* Recommendation Text */}
                    <div className="flex justify-center" >
                        <h3 className="text-xl font-semibold">Write Your Recommendation Here</h3>  
                    </div>

                    {/*  Recommendation Title */}
                    <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Recommendation Title</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="recommendationTitle" placeholder="Recommendation Title" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/*  Recommended product Name */}
                    <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Recommended Product Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="recommendedProductName" placeholder="Recommended Product Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/*  Recommended Product Image */}
                    <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Recommended Product Image</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="recommendedProductImage" placeholder="Recommended Product Image" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/*  Recommendation Reason */}
                    <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Recommendation Reason</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="recommendationReason" placeholder="Recommendation Reason" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>


                {/* Query Part */}

                    {/* Query Text */}
                    <div className="flex justify-center" >
                        <h3 className="text-xl font-semibold">You are Recommending For:</h3>  
                    </div>

                    {/*  Query Id and Product Name */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Query Id</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="queryId" placeholder="Query Id" defaultValue={id} disabled className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="productName" defaultValue={query.productName} disabled  placeholder="Product Name" className="input input-bordered w-full" />
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
                                <input type="text" name="queryTitle" defaultValue={query.queryTitle} disabled placeholder="Query Title" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>                   


                    {/* Query-Creator Email and Query-Creator Name */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Query-Creator Email</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="queryCreatorEmail" placeholder="Query-Creator Email" defaultValue={query.userEmail} disabled className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Query-Creator Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="queryCreatorName" placeholder="Query-Creator Name" defaultValue={query.userName} disabled className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/* Recommender Email and Recommender Name */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Recommender Email</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="recommenderEmail" placeholder="Recommender Email" defaultValue={user.email} disabled className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Recommender Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="recommenderName" placeholder="Recommender Name" defaultValue={user.displayName} disabled className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/* Total Recommendation (Recommendation Count) and  Recommendation Time (Current Date and Time) */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Recommendation Date & Time</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="recommendationDateTime" placeholder="Recommendation Date & Time" defaultValue={new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) + ', ' + new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' })} disabled className="input input-bordered w-full" />
                            </label>
                        </div>
                   
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Total Recommendation</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="recommendationCount" placeholder="Total Recommendation" defaultValue={query.recommendationCount} disabled className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>


                    <input type="submit" value="Add Recommendation" className="btn btn-block btn-info text-xl" />

                </form>

            </div>




            {/* Show All the Recommendations Section */}
            <div id="allRecommendationsDiv" className="hidden">
                <h1 className='text-2xl font-semibold text-center text-blue-600 '>Particular Query Recommendations</h1>

                <div className="text-base font-medium text-center py-10">

                    { particularQueryRecommendations.length < 1 ? (<p className="text-orange-600 font-medium text-xl ">Sorry!! No Recommendations Found. <br /> No one may have added any recommendations for this Query yet. <br /> Please try again later...</p>) : (<p>(Total Recommendation: {particularQueryRecommendations.length})</p>) }

                    {/* { particularQueryRecommendations.length < 1 && ( 
                    <div>
                        <Link to="/addQueries"><button className="btn btn-info w-1/3 my-5 mx-5">Add Query</button></Link> 
                        <Link to="/queries"><button className="btn btn-info w-1/3 my-5 mx-5">View Queries & Recommend Now</button></Link>
                    </div>
                    ) } */}

                </div>





                {
                    particularQueryRecommendations.map( particularQueryRecommendation => (

                        <div className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
                        {/* <div className="flex justify-between pb-4 border-bottom">
                            <div className="flex items-center">
                                <a rel="noopener noreferrer" href="#" className="mb-0 capitalize dark:text-gray-800">Photography</a>
                            </div>
                            <a rel="noopener noreferrer" href="#">See All</a>
                        </div> */}
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <img src={particularQueryRecommendation.recommendedProductImage} />
                                <div className=" text-xs">
                                    <p> {particularQueryRecommendation.recommendationDateTime}</p>
                                    <p> {particularQueryRecommendation.recommenderName}</p>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <a rel="noopener noreferrer" href="#" className="block">
                                    <h3 className="text-xl font-bold dark:text-violet-600">{particularQueryRecommendation.recommendedProductName}</h3>
                                </a>
                                <a rel="noopener noreferrer" href="#" className="block">
                                    <h3 className="text-lg font-semibold dark:text-violet-600">{particularQueryRecommendation.recommendationTitle}</h3>
                                </a>
                                <p className="leading-snug dark:text-gray-600">{particularQueryRecommendation.recommendationReason}</p>
                            </div>
                        </div>
                    </div>

                    ) )
                }








            </div>











        </div>
    );
};

export default QueryDetails;