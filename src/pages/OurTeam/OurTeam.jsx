import { Link } from "react-router-dom";
import { Fade, Slide } from "react-awesome-reveal";

const OurTeam = () => {
    return (
        <div className="flex gap-5  container mx-auto">
            

            <div className="py-16 container mx-auto ">
                <p className="text-center text-2xl font-bold  text-blue-600   ">
                    <Slide>
                        <h1>Our Team</h1>
                    </Slide></p>
                    <p className="text-center text-lg text-blue-500 hidden md:block"> 
                        <Fade delay={1e3} cascade damping={1e-1}> Meet with our professional Team members, who will help you find your right alternative products </Fade>
                    </p>
                


                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 pl-0 md:pl-0   container mx-auto">

                    <div className="card w-96 bg-base-100 shadow-xl card-body items-center text-center">
                        <div className="avatar  ">
                            <div className="w-72 rounded-full  items-center text-center ">
                                <img src="https://i.postimg.cc/FF6QWPbX/team-1.jpg" />
                            </div>
                        </div>

                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-blue-500">Matt Haunz</h2>
                            <p>Consultant, Alternative Tech Products</p>
                            <div className="card-actions">
                            <Link className=" text-blue-500 font-medium">View Profile</Link>
                            </div>
                        </div>

                    </div>


                    <div className="card w-96 bg-base-100 shadow-xl card-body items-center text-center">
                        <div className="avatar  ">
                            <div className="w-72 rounded-full items-center text-center ">
                                <img src="https://i.postimg.cc/NfrvW1b9/team-2.jpg" />
                            </div>
                        </div>

                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-blue-500">Jen Barnes</h2>
                            <p> Consultant, Alternative Products Researcher</p>
                            <div className="card-actions">
                            <Link className=" text-blue-500 font-medium">View Profile</Link>
                            </div>
                        </div>

                    </div>


                    <div className="card :w-96 bg-base-100 shadow-xl card-body items-center text-center">
                        <div className="avatar  ">
                            <div className="w-72 rounded-full  items-center text-center ">
                                <img src="https://i.postimg.cc/C59TR1Mx/team-3.jpg" />
                            </div>
                        </div>

                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-blue-500">Dave Rosevelt</h2>
                            <p>Consultant, Alternative Agro & Foods</p>
                            <div className="card-actions">
                            <Link className=" text-blue-500 font-medium">View Profile</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;