import React from 'react';
import useAuth from '../hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import Field from '../components/shared/Field';
import { useForm } from "react-hook-form"
import axios from 'axios';


const Login = () => {
    const { setAuth } = useAuth()
    const { register, handleSubmit, formState: { errors }, setError } = useForm()

    const navigate = useNavigate()
    const submitForm = async (formdata) => {
        try {
            const res = await axios.post("http://localhost:3000/auth/login", formdata)
            if (res.status === 200) {
                console.log("login res", res);
                const { token, user } = res.data
                if (token) {
                    const authToken = token?.accessToken
                    const refreshToken = token?.refreshToken
                    console.log(`Login time auth token ${authToken}`);
                    setAuth({ user, authToken, refreshToken })
                    navigate("/")
                }
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <main>
            <section className="container">
                {/* Login Form into a box center of the page */}
                <div className="w-full md:w-1/2 mx-auto bg-[#030317] p-8 rounded-md mt-12">
                    <h2 className="text-2xl font-bold mb-6">Login</h2>
                    <form onSubmit={handleSubmit(submitForm)}>

                        <Field label={"Email"} htmlFor={"email"} error={errors.email}>
                            <input
                                {...register("email", { required: "Email is required" })}
                                type="email"
                                id="email"
                                name="email"
                                className="w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500"
                            />

                        </Field>
                        {/* <div className="mb-6">
                            <label htmlFor="email" className="block mb-2">
                                Email
                            </label>

                        </div> */}

                        <Field label={"Password"} htmlFor={"password"} error={errors.password}>
                            <input
                                {...register("password", { required: "Password is required" })}
                                type="password"
                                id="password"
                                name="password"
                                className="w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500"
                            />
                        </Field>
                        {/* <div className="mb-6">
                            <label htmlFor="password" className="block mb-2">
                                Password
                            </label>

                        </div> */}
                        <div className="mb-6">
                            <button
                                type="submit"
                                className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
                            >
                                Login
                            </button>
                        </div>
                        <p className="text-center">
                            Don't have an account?
                            <Link to={"/register"} className="text-indigo-600 hover:underline">
                                {" "}  Register
                            </Link>
                        </p>
                    </form>
                </div>
            </section>
        </main>

    );
};

export default Login;