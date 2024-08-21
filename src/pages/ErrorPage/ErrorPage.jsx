import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="bg-green-100 text-center text-2xl text-green-600 flex flex-col justify-center items-center py-10">
            <img className="w-96 rounded-lg" src="https://i.postimg.cc/DwjPQdGF/404-natural-agro.avif" alt="" />
            <h1>Oops!!!</h1>
            <h3>Page not found.</h3>
            <>Sorry, an unexpected error has occurred.</>
            <p>
                {/* {error.statusText || error.message} */}
                {
                    error.status === 404 && <div>
                        {/* <h3>Page not found</h3> */}
                        <p>Go back where you form.</p>
                        <Link to ="/"><button className="btn btn-success text-white text-2xl  mt-5">Go to Home</button></Link>
                    </div>
                }
            </p>
        </div>
    );
};

export default ErrorPage;