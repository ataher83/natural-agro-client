import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet-async";


const Register = () => {
    const { user, createUser, logOut } = useContext(AuthContext);

    const [regError, setRegError] = useState(''); 
    const [success, setSuccess] = useState(''); 
    const [showPassword, setShowPassword] = useState(false); 

    // const userName = user.displayName;

    const handleRegister = e => {
        e.preventDefault(); 

        const form = new FormData(e.currentTarget);

        const name = form.get('name')
        const email = form.get('email')
        const photoURL = form.get('photoURL')
        const password = form.get('password')

        const accepted = form.get('terms')
        // console.log(name, photoURL, email, password, accepted)

        //reset error & success message
        setRegError('');
        setSuccess('');


        if (password.length < 6) {
            setRegError('Password should be minimum 6 characters');
            toast.error('Password should be minimum 6 characters');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegError('Password should be at least 1 Upper case character');
            toast.error('Password should be at least 1 Upper case character');
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setRegError('Password should be at least 1 lower case character');
            toast.error('Password should be at least 1 lower case character');
            return;
        }
        else if (!accepted) {
            setRegError('Please accept our Terms & Conditions!');
            toast.error('Please accept our Terms & Conditions!');
            return;
        }




        // create user
        createUser(email, password)
            .then(result => {
                console.log(result.user) 
                setSuccess('User Created Successfully.')
                toast.success('User Created Successfully.');
                //new user has been create


                const createdAt = result.user?.metadata?.creationTime;
                const userName = name;
                // const userName = result.user?.auth?.displayName;
                const user = { userName, email, createdAt: createdAt };  
                // const user = { userName, email, createdAt: createdAt };  
                fetch('https://art-gallery-server-one.vercel.app/user', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            console.log('user added to the database') 
                        }  
                    })



                // update profile 
                updateProfile(result.user, {
                    displayName: name, 
                    photoURL: photoURL
                    // photoURL: "https://example.com/jane-q-user/profile.jpg"
                })
                .then(()=> console.log('Profile updated'))
                .catch() 

                return logOut();
                

            })
            .catch(error => {
                console.error(error)
                setRegError(error.message);
                toast.error(error.message);
            })   
    }


    return (
        <div>
            <Helmet>
                <title>The Alt Products | Register</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col w-3/4 lg:w-1/2">

                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-orange-600">Please Register!</h1>
                    </div>

                    <div className="card  w-full  shadow-2xl bg-orange-300">

                        <form onSubmit={handleRegister}
                        className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="text" name="photoURL" placeholder="photoURL" className="input input-bordered" required />
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="flex items-center w-full">
                                    <input type={showPassword? "text" : "password"}
                                    name="password" placeholder="password" className="input input-bordered w-full relative" required /> 
                                    <span onClick={()=>{setShowPassword(!showPassword)}} 
                                    className="text-2xl flex ml-[60%] lg:ml-[80%] absolute">
                                        {
                                            showPassword? <IoEyeOff /> : <IoEye/>
                                        }
                                    </span>
                                </div>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="my-2">
                                <input type="checkbox" name="terms" id="terms" />
                                <label className="ml-2" htmlFor="terms">Accept <a href="#">Terms and Conditions</a></label>
                            </div>


                            <div className="form-control mt-6">

                                <button 
                                // onClick={handleSignOut}
                                className="btn bg-orange-600 font-bold text-black ">Register</button>
                            </div>

                        </form>

                        {/* <div className="text-center -mt-5">
                            {
                                regError && <p className="text-red-600">{regError}</p>
                            }
                            {
                                success && <p className="text-green-500">{success}</p>
                            }
                        </div> */}

                        <p className="text-center text-lg py-4">Already have an account? <Link className="text-blue-600 font-bold" to="/login">Login</Link></p>

                    </div>
                </div>
            </div>

      </div>
    );
};

export default Register;