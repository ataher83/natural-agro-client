import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import  { useContext, useEffect, useState } from 'react';
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";



const MyQueries = () => {

    const { user } = useContext(AuthContext); 
    const [queries, setQueries] = useState([])


    useEffect(()=>{
        fetch('http://localhost:3000/queries')
        // fetch('http://localhost:3000/queries')
                .then(res => res.json())
                .then(data => setQueries(data))
    }, [])

    // console.log(queries)

    const myQueries = queries.filter(query => query.userEmail == user.email)

    
    // console.log(myQueries)


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


                fetch(`http://localhost:3000/queries/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Query has been deleted.',
                                'success'
                            )
                            const remaining = queries.filter(r => r._id !== _id);
                            setQueries(remaining);
                        }
                    })

            }
        })
    }



    return (
        <div>
            <Helmet>
                <title>The Alt Products | My Queries</title>
            </Helmet>


            {/* Banner section */}
            <div className='container mx-auto my-10'>

                <div className='pt-5'>
                    <div className="hero w-full h-[400px] " style={{backgroundImage: 'url(https://i.postimg.cc/dVQJMMyD/4.jpg)'}}>
                        {/* নিচের ডিভ শুধুমাত্র ব্যকগ্রাউন্ড অপাসিটির জন্য */}
                        <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-md">
                                    <h1 className="mb-5 text-5xl font-bold">Explore the Alternative Products </h1>
                                    <p className="mb-5">Are you in search of better options for your current products? Seeking alternatives for any reason? Click the button below to embark on a quest for alternative products.</p>
                                    {/* <Link to="/queries"><button className="btn btn-info">Click Here</button></Link> */}
                                    <Link to="/addQueries"><button className="btn btn-info">Add Queries</button></Link>
                                </div>
                            </div>
                    </div>
                </div>
            </div>



            {/* My Query Section */}
            <div>
               
                    <div>
                        <h1 className='text-2xl font-semibold text-center text-blue-600 '>MY All Queries</h1>

                        <div className="text-base font-medium text-center">
                            { myQueries.length < 1 ? (<p className="text-orange-600 font-medium text-xl ">Sorry! No Query Found, <br /> You have not added any Query yet. Please add your Query now.</p>) : (<p>(Total Queries: {myQueries.length})</p>) }
                            { myQueries.length < 1 && ( <Link to="/addQueries"><button className="btn btn-info w-1/3 my-5">Add Query</button></Link> ) }
                        </div>

                       
                        <div  className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"> 
                        {
                            myQueries.sort((a, b) => new Date(b.currentDateAndTime) - new Date(a.currentDateAndTime)).map(myQuery =>

                            <div>
    
                                <div className="card bg-base-100 shadow-xl mt-4">
                        
                                        <figure><img className="w-full h-72" src={myQuery.productImage} alt="Query Image" />
                                        </figure>
                        
                                        <div className="flex justify-between px-2 pt-1 font-semibold">
                                            <p className=" bg-orange-400 rounded capitalize px-1">{myQuery.productName}</p>
                                            <p className="bg-orange-400 rounded capitalize px-1"><span>{myQuery.productBrand}</span></p>
                                        </div>
                        
                                        <div className="card-body px-1">
                                            <div className="flex gap-2 items-center justify-center">
                                                
                                                <h2 className=" lg:card-title text-center text-orange-600">
                                                    {myQuery.queryTitle}
                                                   
                                                </h2>
                                            </div>
                                                
                                                
                                            <p className="text-center pb-2">{myQuery.boycottingReasonDetails}</p>
                        
                                           
                                            <div className="card-actions justify-center items-center">
                                                <div className="badge badge-outline bg-blue-400 font-semibold text-white border-blue-500">Posted at: {myQuery.currentDateAndTime}</div>
                                                <div className="badge badge-outline  bg-blue-400 font-semibold text-white border-blue-500">Posted by: {myQuery.userName}</div>  
                                            </div>

                                            <div className="card-actions justify-center items-center">
                                                <div className="badge badge-outline  bg-blue-400 font-semibold text-white border-blue-500">Recommendation: {myQuery.recommendationCount}</div> 
                                            </div>
                        
                                          
                                            {/* Just Show User Image */}
                                            <div className="flex justify-center" >
                                                <img className="w-24 rounded-2xl" src={myQuery.userImage} />   
                                            </div>
                        
                       
                                          <div className="text-center mt-5">
                                                <Link to={`/queryDetails/${myQuery._id}`}><button className="btn btn-info w-1/3 ">View Details</button></Link>
                                            </div>

                                            <div className="text-center py-5 space-x-5">

                                                <Link to={`../updateQuery/${myQuery._id}`}>
                                                    <button className="btn btn-info w-1/3 ">Update</button>
                                                </Link>

                                                <button
                                                    onClick={() => handleDelete(myQuery._id)}
                                                    className="btn btn-info w-1/3 ">Delete
                                                </button>
                                                    
                                            </div>
                                                               
                                        </div>
                                </div>
                                                
                            </div>
                                
                            )
                        }
                        </div>
                    </div>
                        
            </div>

        </div>
    );
};

export default MyQueries;