import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom"
import { useState } from "react"
import { Fade, Slide } from "react-awesome-reveal";
// import QueryCard from "../../../QueryCard/QueryCard";

const Queries = () => {

    const loadedQueries = useLoaderData()
    const[queries, setQueries] = useState(loadedQueries)


    // const [gridLayout, setGridLayout] = useState("grid-cols-2");

    // const toggleGridLayout = () => {
    //     setGridLayout(gridLayout === "grid-cols-2" ? "grid-cols-3" : "grid-cols-2");
    // };

    const [gridLayout, setGridLayout] = useState("sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3");

    const [searchQuery, setSearchQuery] = useState("");



    const toggleGridLayout = () => {
        setGridLayout(gridLayout === "md:grid-cols-2 lg:grid-cols-3" ? "md:grid-cols-3 lg:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3");
    };



    const handleSearch = (event) => {
        const value = event.target.value;
        setSearchQuery(value);
        const filteredQueries = loadedQueries.filter((query) => query.productName.toLowerCase().includes(value.toLowerCase()));
        setQueries(filteredQueries);
    };







    return (
        <div>
            <Helmet>
                <title>The Alt Products | Queries</title>
            </Helmet>





            {/* Queries Section */}
            <div className="py-16">
                <p className="text-center text-2xl font-semibold  text-blue-600 ">
                    <Slide>
                        <h1>All Queries</h1>
                    </Slide>
                </p>
                <h2 className="text-center font-semibold">(Total Queries: {queries.length})</h2>



                {/* Toggle Grid Layout Button */}
                <div className="text-center mt-4 hidden md:block">
                    <button
                        className="btn btn-info"
                        onClick={toggleGridLayout}
                    >
                        Toggle Grid Layout
                    </button>
                </div>



                {/* Search Input */}
                <div className="
                flex justify-center items-center 
                text-center mt-4 
                ">
                    <input
                        type="text"
                        placeholder="Search by product name"
                        className="border border-blue-600 px-10 py-2 rounded-md"
                        value={searchQuery}
                        onChange={handleSearch}
                        
                    />

                    {/* <button className="btn btn-ghost btn-circle ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button> */}

                    <span className="-ml-8"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="blue"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg></span>



                </div>







                
            {/* Show All Queries */}  
            {/* এখানে কার্ড গুলো সমান হয় নায়, তাই এই কোড কমেন্ট করে নিচের কোড ব্যবহার করেছি* সেইম কোড, কিন্তু কারন বুঝলাম না, বুঝতে হবে  */}
            {/* নীচের কোডে sorting করলে এখানেও আটো সর্টিং হয় কেন? */}
            
                {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto  ">
                        {
                            queries.map(query => 

                            <div>
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
                                            </div>
                        
                        

                                            <div className="flex justify-center" >
                                                <img className="w-24 rounded-2xl" src={query.userImage} />   
                                            </div>
                        
                        
                      
                                            <div className="text-center mt-5">
                                                <Link to={`/queryDetails/${query._id}`}><button className="btn btn-info w-1/3 ">Recommend</button></Link>
                                            </div>

                        
                                        </div>
                                </div>
                                                  
                            </div>
         
                        )
                        }
                </div> */}





                {/* Show All Queries by Descending order base on date-time */}

                <div className={`grid ${gridLayout} gap-5 container mx-auto`}>
                {/* <div className={`grid ${gridLayout} md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto`}>  */}
                {/* <div className={`grid ${gridLayout} gap-5 container mx-auto`}>  */}
                {/* <div className="grid
                 md:grid-cols-2 lg:grid-cols-3 
                 gap-5 container mx-auto
                 ${gridLayout} 
                 ">  */}
                                            
                        {
                            queries.sort((a, b) => new Date(b.currentDateAndTime) - new Date(a.currentDateAndTime)).map((query, index) => (

                                <div key={index} className="card bg-base-100 shadow-xl mt-4">

                                    <figure><img className="w-full h-72" src={query.productImage} alt="Query Image" /></figure>

                                    <div className="flex justify-between px-2 pt-1 font-semibold">
                                        <p className="bg-orange-400 rounded capitalize px-1">{query.productName}</p>
                                        <p className="bg-orange-400 rounded capitalize px-1"><span>{query.productBrand}</span></p>
                                    </div>

                                    <div className="card-body px-1">
                                        <div className="flex gap-2 items-center justify-center">

                                            <h2 className="lg:card-title text-center text-orange-600">{query.queryTitle}</h2>
                                        </div>
                                        <p className="text-center pb-2">{query.boycottingReasonDetails}</p>

                                        <div className="card-actions justify-center items-center">
                                            <div className="badge badge-outline bg-blue-400 font-semibold text-white border-blue-500">
                                                Posted at: {query.currentDateAndTime}
                                            </div>
                                        </div>

                                        <div className="card-actions justify-center items-center">
                                            <div className="badge badge-outline bg-blue-400 font-semibold text-white border-blue-500">
                                                Posted by: {query.userName}
                                            </div>
                                        </div>

                                        <div className="flex justify-center">
                                            <img className="w-24 rounded-2xl" src={query.userImage} />
                                        </div>

                                        <div className="text-center mt-5">
                                            <Link to={`/queryDetails/${query._id}`}><button className="btn btn-info w-1/3 ">Recommend</button></Link>
                                        </div>
                                    </div>
                                </div>
                            ))                                                     
                        }
                </div>









            </div>




        </div>
    );
};

export default Queries;