
import { Link } from 'react-router-dom';


const HeadingBanner = () => {
    return (
       
        <div className='container mx-auto my-10'>
            <h2 className='text-2xl font-bold text-blue-600 text-center'>Find Your Alternative Products</h2>

            <div className='pt-5'>
                <div className="hero w-full h-[400px] " 
            style={{backgroundImage: 'url(https://i.postimg.cc/YC0TftFN/16.jpg)'}}
                >
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Looking for Alternative Products? </h1>
                        <p className="mb-5">You are not satisfied with your current products? Are Look for Alternative for any reason? Then click on the following button & search alternative products.</p>
                        <Link to="/queries"><button className="btn btn-info">Click Here</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default HeadingBanner;