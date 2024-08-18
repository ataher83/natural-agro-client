import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import  { useContext, useEffect, useState } from 'react';
import { AuthContext } from "../../providers/AuthProvider";



const RecommendationsForMe = () => {

    const { user } = useContext(AuthContext); 
    const [recommendations, setRecommendations] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/recommendations')
                .then(res => res.json())
                .then(data => setRecommendations(data))
    }, [])

    const forMeRecommendations = recommendations.filter(recommendation => recommendation.queryCreatorEmail == user.email)
    console.log(forMeRecommendations)




    return (
        <div>
            <Helmet>
                <title>The Alt Products | Recommendations For Me</title>
            </Helmet>


            <h1 className='text-2xl font-semibold text-center text-blue-600 '>Recommendations For Me</h1>

            <div className="text-base font-medium text-center">
                { forMeRecommendations.length < 1 ? (<p className="text-orange-600 font-medium text-xl ">Sorry!! No Recommendations Found. <br /> No one may have added any recommendations for you yet. <br /> Please wait a little more...</p>) : (<p>(Total Recommendation: {forMeRecommendations.length})</p>) }
                { forMeRecommendations.length < 1 && ( 
                <div>
                    <Link to="/addQueries"><button className="btn btn-info w-1/3 my-5 mx-5">Add Query</button></Link> 
                    <Link to="/queries"><button className="btn btn-info w-1/3 my-5 mx-5">View Queries & Recommend Now</button></Link>
                </div>
                 ) }
            </div>




            {/* Showing All Recommendations For Me */}


            {
                forMeRecommendations.map(forMeRecommendation => 

                    <div className="overflow-x-auto">
                        
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>
                                        <div className=" md:flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="rounded-lg md:w-48 md:h-24 ">
                                                    <img src={forMeRecommendation.recommendedProductImage} />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold text-base">{forMeRecommendation.recommendedProductName}</div>
                                                <div className="text-sm opacity-50 font-bold">By: {forMeRecommendation.recommenderName}</div>
                                            </div>
                                        </div>
                                    </td>

                                    <td>
                                        <span className="font-semibold">{forMeRecommendation.recommendationTitle}</span>
                                        <br/>
                                        <span className="badge badge-ghost badge-sm">{forMeRecommendation.recommendationReason}</span>
                                    </td>

                                    <td>{forMeRecommendation.recommendationDateTime}</td>

                                    {/* <th>
                                        <button onClick={() => handleDelete(myRecommendation._id)}
                                        className="btn btn-info btn-xs">Delete</button>
                                    </th> */}

                                </tr>
                            </tbody>
                        </table>

                    </div>









                )
            }
            
        </div>
    );
};

export default RecommendationsForMe;