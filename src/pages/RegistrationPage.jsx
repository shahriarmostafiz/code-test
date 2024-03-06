import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Field from '../components/shared/Field';
import axios from 'axios';

const RegistrationPage = () => {
    const { register, handleSubmit, formState: { errors }, setError } = useForm()
    const navigate = useNavigate()
    const submitForm = async (formdata) => {
        console.log(formdata)
        try {
            const res = await axios.post("http://localhost:3000/auth/register", formdata)
            if (res.status === 201) {
                console.log(res.data);
                navigate("/login")
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <main>
            <section className="container">
                <div className="w-full md:w-1/2 mx-auto bg-[#030317] p-8 rounded-md mt-12">
                    <h2 className="text-2xl font-bold mb-6">Register</h2>
                    <form autoComplete="off" onSubmit={handleSubmit(submitForm)}>
                        <Field label={"First Name"} error={errors.firstName} htmlFor={"firstName"}>
                            <input
                                {...register("firstName", { required: "First Name is required" })}
                                type="text"
                                id="firstName"
                                name="firstName"
                                className="w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500"
                            />
                        </Field>
                        {/* <div className="mb-6">
                            <label for="firstName" className="block mb-2">First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                className="w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500"
                            />
                        </div> */}
                        <Field htmlFor={"lastName"} error={errors.lastName} label={"Last Name"}>
                            <input
                                {...register("lastName", { required: "Last Name is required" })}
                                type="text"
                                id="lastName"
                                name="lastName"
                                className="w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500"
                            />

                        </Field>
                        {/* <div className="mb-6">
                            <label for="lastName" className="block mb-2">Last Name</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                className="w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500"
                            />
                        </div> */}
                        <Field label={"Email"} error={errors.email} htmlFor={"email"}>
                            <input
                                {...register("email", { required: "Email is required" })}
                                type="email"
                                id="email"
                                name="email"
                                className="w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500"
                            />
                        </Field>
                        {/* <div className="mb-6">
                            <label for="email" className="block mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500"
                            />
                        </div> */}
                        <Field label={"Password"} htmlFor={"password"} error={errors.password}>
                            <input
                                {...register("password", {
                                    required: "password is required", minLength: {
                                        value: 8,
                                        message: "Password must be minimum 8 characters"
                                    }
                                })}
                                type="password"
                                id="password"
                                name="password"
                                className="w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500"
                            />

                        </Field>
                        {/* <div className="mb-6">
                            <label for="password" className="block mb-2">Password</label>
                            <input

                                type="password"
                                id="password"
                                name="password"
                                className="w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500"
                            />
                        </div> */}
                        <div className="mb-6">
                            <button
                                type="submit"
                                className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
                            >
                                Create Account
                            </button>
                        </div>
                        <p className="text-center">
                            Already have account?
                            <Link to={"/login"} className="text-indigo-600 hover:underline"
                            >{" "}Login</Link>
                        </p>
                    </form>
                </div>
            </section>
        </main>
    );
};

export default RegistrationPage;