import { Helmet } from "react-helmet-async";
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Slide } from "react-awesome-reveal";
import { IoLogoUsd } from "react-icons/io";
import { FcRating } from "react-icons/fc";


const fetchProducts = async () => {
  const response = await axios.get('http://localhost:3000/products');
  return response.data;
};

const Home = () => {
    const { data: products, isLoading, error } = useQuery({
      queryKey: ['products'],
      queryFn: fetchProducts,
    });
  
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading products</div>;

    return (
        <div>
            <Helmet>
                <title>Natural Agro | Home</title>
            </Helmet>

            {/* Recent Product Section */}
            <div className="py-16">
                <p className="text-center text-2xl font-bold text-green-600">
                    <Slide>
                        <h1>Natural Products</h1>
                    </Slide>
                </p>

                {/* Show Recent/ Latest 6 products */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto">
                    {
                        // products.sort((a, b) => new Date(b.currentDateAndTime) - new Date(a.currentDateAndTime)).slice(0, 6).map((product, index) => (
                        products.sort((a, b) => new Date(b.currentDateAndTime) - new Date(a.currentDateAndTime)).map((product, index) => (
                            <div key={index} className="card bg-base-100 shadow-xl mt-4">
                                <figure><img className="w-full h-72" src={product.productImage} alt="Product Image" /></figure>

                                <div className="flex justify-between px-2 pt-1 font-semibold">
                                    <p className="flex items-center"><FcRating className="text-blue-400" /> {product.productRating}</p>
                                    <p className="flex items-center"><IoLogoUsd className="text-green-500" /> {product.productPrice}</p>
                                    <p className="bg-green-200 rounded capitalize px-1"><span>{product.productCategory}</span></p>
                                </div>

                                <div className="card-body px-1">
                                    <div className="flex gap-2 items-center justify-center">
                                        <h2 className="lg:card-title text-center text-green-500">{product.productName}</h2>
                                    </div>

                                    <p className="text-center text-green-500">{product.productBrand}</p>
                                    <p className="text-center pb-2">{product.productDescription}</p>

                                    <div className="card-actions justify-center items-center">
                                        <div className="badge badge-outline bg-green-400 font-semibold text-white border-green-500">
                                            Product Created at: {product.currentDateAndTime}
                                        </div>
                                    </div>

                                    <div className="card-actions justify-center items-center">
                                        <div className="badge badge-outline bg-green-400 font-semibold text-white border-green-500">
                                            Created by: {product.userName}
                                        </div>
                                    </div>

                                    <div className="flex justify-center">
                                        <img className="w-16 rounded-full" src={product.userImage} />
                                    </div>

                                    <div className="text-center mt-5">
                                        <button className="btn btn-success text-s w-1/3">View Details</button>
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

export default Home;
