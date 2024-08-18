import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import  { useContext, useEffect, useState } from 'react';
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const MyRecommendations = () => {

    const { user } = useContext(AuthContext); 
    const [recommendations, setRecommendations] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/recommendations')
                .then(res => res.json())
                .then(data => setRecommendations(data))
    }, [])

    const myRecommendations = recommendations.filter(recommendation => recommendation.recommenderEmail == user.email)
    // console.log(myRecommendations)


    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:3000/recommendations/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Recommendation has been deleted.',
                                'success'
                            )
                            const remaining = recommendations.filter(r => r._id !== _id);
                            setRecommendations(remaining);
                        }
                    })

            }
        })
    }







    return (
        <div>
            <Helmet>
                <title>The Alt Products | My Recommendations</title>
            </Helmet>


            <h1 className='text-2xl font-semibold text-center text-green-600 '>MY All Recommendations</h1>

            <div className="text-base font-medium text-center">
                { myRecommendations.length < 1 ? (<p className="text-orange-600 font-medium text-xl ">Sorry! No Recommendation Found, <br /> You may not have added any Recommendation yet. Please View Queries add your Recommendation.</p>) : (<p>(Total Recommendation: {myRecommendations.length})</p>) }
                { myRecommendations.length < 1 && ( <Link to="/queries"><button className="btn btn-info w-1/3 my-5">View Queries & Recommend Now</button></Link> ) }
            </div>




            {/* Showing My All Recommendations */}


            {
                myRecommendations.map(myRecommendation => 

                    <div className="overflow-x-auto">
                        
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>
                                        <div className=" md:flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="rounded-lg md:w-48 md:h-24 ">
                                                    <img src={myRecommendation.recommendedProductImage} />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold text-base">{myRecommendation.recommendedProductName}</div>
                                                <div className="text-sm opacity-50 font-bold">For: {myRecommendation.queryCreatorName}</div>
                                            </div>
                                        </div>
                                    </td>

                                    <td>
                                        <span className="font-semibold">{myRecommendation.recommendationTitle}</span>
                                        <br/>
                                        <span className="badge badge-ghost badge-sm">{myRecommendation.recommendationReason}</span>
                                    </td>

                                    <td>{myRecommendation.recommendationDateTime}</td>

                                    <th>
                                        <button onClick={() => handleDelete(myRecommendation._id)}
                                        className="btn btn-info btn-xs">Delete</button>
                                    </th>
                                </tr>
                            </tbody>
                        </table>

                    </div>









                )
            }
            
        </div>
    );
};

export default MyRecommendations;