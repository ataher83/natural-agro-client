import { useLoaderData, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from 'react';
import { Helmet } from "react-helmet-async";
import Swal from 'sweetalert2';
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";

const QueryDetails = () => {
    const { user } = useContext(AuthContext); 
    const queries = useLoaderData();
    const { id } = useParams();

    const query = queries.find(q => q._id == id);

    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/recommendations')
            .then(res => res.json())
            .then(data => setRecommendations(data));
    }, []);

    const particularQueryRecommendations = recommendations.filter(recommendation => recommendation.queryId == id);

    const handleAddRecommendation = event => {
        event.preventDefault();

        const form = event.target;

        const recommendationTitle = form.recommendationTitle.value;
        const recommendedProductName = form.recommendedProductName.value;
        const recommendedProductImage = form.recommendedProductImage.value;
        const recommendationReason = form.recommendationReason.value;
        const queryId = form.queryId.value;
        const productName = form.productName.value;
        const queryTitle = form.queryTitle.value;

        fetch(`http://localhost:3000/queries/${queryId}`)
            .then(res => res.json())
            .then(queryData => {
                const updatedRecommendationCount = queryData.recommendationCount + 1;

                const newRecommendation = {
                    recommendationTitle,
                    recommendedProductName,
                    recommendedProductImage,
                    recommendationReason,
                    recommenderEmail: form.recommenderEmail.value,
                    recommenderName: form.recommenderName.value,
                    queryId,
                    productName,
                    queryTitle,
                    recommendationDateTime: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) + ', ' + new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }),
                    recommendationCount: updatedRecommendationCount.toString(), 
                };

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
                        Swal.fire({
                            title: 'Success!',
                            text: 'Recommendation Added Successfully',
                            icon: 'success',
                            confirmButtonText: 'Close'
                        });

                        form.recommendationCount.value = updatedRecommendationCount;
                    }
                })
                .catch(error => {
                    console.error('Error adding recommendation:', error);
                });
            })
            .catch(error => {
                console.error('Error fetching query data:', error);
            });
    };

    const handleAddARecommendationNow = () => {
        const addARecommendationNowButton = document.getElementById('addARecommendationNowButton');
        const recommendationDiv = document.getElementById('recommendationDiv');

        recommendationDiv.classList.toggle('hidden');

        addARecommendationNowButton.innerHTML = recommendationDiv.classList.contains('hidden') ? 'Add A Recommendation Now' : `<p class="text-white text-lg">No, I will Recommend Later. <span class="text-2xl font-bold ml-5 px-3 py-2 rounded-lg bg-black text-white ">X</span></p>`;
    };

    const handleShowAllRecommendations = () => {     
        const showAllRecommendationsButton = document.getElementById('showAllRecommendationsButton');
        const allRecommendationsDiv = document.getElementById('allRecommendationsDiv');

        allRecommendationsDiv.classList.toggle('hidden');

        showAllRecommendationsButton.innerHTML = allRecommendationsDiv.classList.contains('hidden') ? 'Show All Recommendations' : `<p class="text-white text-lg">No, I will View Later.<span class="text-2xl font-bold ml-5 px-3 py-2 rounded-lg bg-black text-white ">X</span></p>`;
    };

    return (
        <div className="card bg-base-100 shadow-xl mt-4">
            <Helmet>
                <title>The Alt Products | Query Details: {query._id}</title>
            </Helmet>
            <h2 className="text-xl font-bold text-center text-blue-600">Details About This Query</h2>

            {/* Show Query Details */}
            <div className="card bg-base-100 shadow-xl mt-4">
                <figure><img className="w-full h-72" src={query.productImage} alt="Query Image" /></figure>
                <div className="flex justify-between px-2 pt-1 font-semibold">
                    <p className=" bg-orange-400 rounded capitalize px-1">{query.productName}</p>
                    <p className="bg-orange-400 rounded capitalize px-1"><span>{query.productBrand}</span></p>
                </div>
                <div className="card-body px-1">
                    <div className="flex gap-2 items-center justify-center">
                        <h2 className="lg:card-title text-center text-orange-600">{query.queryTitle}</h2>
                    </div>
                    <p className="text-center pb-2">{query.boycottingReasonDetails}</p>
                    <div className="card-actions justify-center items-center">
                        <div className="badge badge-outline bg-blue-400 font-semibold text-white border-blue-500">Posted at: {query.currentDateAndTime}</div> 
                        <div className="badge badge-outline bg-blue-400 font-semibold text-white border-blue-500">Posted by: {query.userName}</div> 
                    </div>
                    <div className="card-actions justify-center items-center">
                        <div className="badge badge-outline bg-blue-400 font-semibold text-white border-blue-500">Recommendation: {query.recommendationCount}</div>
                        <div className="badge badge-outline bg-blue-400 font-semibold text-white border-blue-500">Email: {query.userEmail}</div>                          
                    </div>
                    <div className="flex justify-center">
                        <img className="w-24 rounded-2xl" src={query.userImage} />   
                    </div>
                    <div className="flex justify-center gap-10 mt-5">
                        <button onClick={handleAddARecommendationNow} id="addARecommendationNowButton" className="btn btn-info w-1/3">Add A Recommendation Now</button>
                        <button onClick={handleShowAllRecommendations} id="showAllRecommendationsButton" className="btn btn-info w-1/3">Show All Recommendations</button>
                    </div>
                </div>
            </div>

            {/* Add Recommendation Section */}
            <div id="recommendationDiv" className="hidden bg-[#F4F3F0] px-24 py-5">
                <h2 className="text-2xl font-extrabold text-center text-blue-600 py-5">Add A Recommendation</h2>
                <form onSubmit={handleAddRecommendation} className="space-y-4">
                    <input type="hidden" name="queryId" value={id} />
                    <input type="hidden" name="productName" value={query.productName} />
                    <input type="hidden" name="queryTitle" value={query.queryTitle} />
                    <input type="hidden" name="recommenderName" value={user.displayName} />
                    <input type="hidden" name="recommenderEmail" value={user.email} />
                    <input type="hidden" name="recommendedProductImage" value={query.productImage} />
                    <label className="block">
                        <span className="text-gray-700">Recommendation Title</span>
                        <input type="text" name="recommendationTitle" placeholder="Enter Recommendation Title" className="mt-1 block w-full rounded-md bg-[#EFEFEF] border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" required />
                    </label>
                    <label className="block">
                        <span className="text-gray-700">Recommended Product Name</span>
                        <input type="text" name="recommendedProductName" placeholder="Enter Product Name" className="mt-1 block w-full rounded-md bg-[#EFEFEF] border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" required />
                    </label>
                    <label className="block">
                        <span className="text-gray-700">Reason for Recommendation</span>
                        <textarea name="recommendationReason" placeholder="Enter Reason for Recommendation" className="mt-1 block w-full rounded-md bg-[#EFEFEF] border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" rows="3" required></textarea>
                    </label>
                    <input type="hidden" name="recommendationCount" />
                    <div className="flex justify-center">
                        <button type="submit" className="btn btn-info w-1/3">Add Recommendation</button>
                    </div>
                </form>
            </div>

            {/* Show All Recommendations Section */}
            <div id="allRecommendationsDiv" className="hidden bg-[#F4F3F0] px-24 py-5">
                <h2 className="text-2xl font-extrabold text-center text-blue-600 py-5">All Recommendations</h2>
                {particularQueryRecommendations.length > 0 ? (
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                        {particularQueryRecommendations.map((recommendation, index) => (
                            <div key={index} className="p-4 rounded-lg shadow-lg bg-white">
                                <h3 className="text-lg font-semibold mb-2">{recommendation.recommendationTitle}</h3>
                                <p className="text-gray-700 mb-4">{recommendation.recommendationReason}</p>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-sm text-gray-500">Recommended by: {recommendation.recommenderName}</p>
                                        <p className="text-sm text-gray-500">Product: {recommendation.recommendedProductName}</p>
                                        <p className="text-sm text-gray-500">Recommended at: {recommendation.recommendationDateTime}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-lg font-semibold text-center text-red-600">No recommendations found for this query.</p>
                )}
            </div>
        </div>
    );
};

export default QueryDetails;
