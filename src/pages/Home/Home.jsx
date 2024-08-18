import { Helmet } from "react-helmet-async";
import Banner from "./Banner";

import { useLoaderData } from "react-router-dom"
import { useState } from "react"
import LocationMap from "../LocationMap/LocationMap";

import { Fade, Slide } from "react-awesome-reveal";
import HeadingBanner from "./HeadingBanner";
import OurTeam from "../OurTeam/OurTeam";
import QueryCard from "../../../QueryCard/QueryCard";



const Home = () => {
    const loadedQueries = useLoaderData()
    const[queries, setQueries] = useState(loadedQueries) 

    // const handleHideUnhide=() =>{
    //     const toggleButton = document.getElementById('toggleButton');
    //     const myDiv = document.getElementById('myDiv');

    //     myDiv.classList.toggle('hidden')
    //     toggleButton.textContent = myDiv.classList.contains('hidden') ? 'Show Div' : 'Hide Div'
    // }


    return (
        <div className="">
            <Helmet>
                <title>The Alt Products | Home</title>
            </Helmet>
            <Banner></Banner>
            <HeadingBanner></HeadingBanner>



            {/* <button onClick={handleHideUnhide}
            id="toggleButton" className="btn btn-secondary">Show Div</button>
            
            <div id="myDiv" className="hidden" >
            <HeadingBanner></HeadingBanner>
            </div> */}






        {/* Recent Queries Section */}

            <div className="py-16">
                <p className="text-center text-2xl font-bold  text-blue-600 ">
                    <Slide>
                        <h1>Recent Queries</h1>
                    </Slide>
                </p>


                
                {/* Show All Queries  
                এখানে কার্ড গুলো সমান হয় নায়, তাই এই কোড কমেন্ট করে নিচের কোড ব্যবহার করেছি* সেইম কোড, কিন্তু কারন বুঝলাম না, বুঝতে হবে  */}
                {/* ডিফল্ট ভাবেই ডিসেন্ডিং দেখাচ্ছে কেন?  ভাল করে কারন বুঝতে হবে , নীচের কোডে sorting করলে এখানেও আটো সর্টিং হয় কেন? */}
            
                {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto  ">
                        {
                            queries.map(query => <QueryCard
                            key={query._id}
                            query={query}
                            queries={queries}
                            setQueries={setQueries}
                            ></QueryCard>)
                        }
                </div>  */}



                {/* Show  Recent/ Latest 6 Queries */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto "> 
                                            
                        {
                            // queries.map((query, index) => (
                            queries.sort((a, b) => new Date(b.currentDateAndTime) - new Date(a.currentDateAndTime)).slice(0, 6).map((query, index) => (

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
                                    </div>
                                </div>
                            ))                                                     
                        }
                </div>




            </div>




            <OurTeam></OurTeam>
            <LocationMap></LocationMap>
            

        </div>
    );
};

export default Home;