import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout/Layout';
import login from '../assets/Login.png';
import { BiSolidHide } from 'react-icons/bi';
import { BiShowAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const formSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <Layout>
      <div className="min-h-[90vh] flex items-center  justify-center bg-gray-100">
        <div className="max-w-4xl w-full flex gap-2">
          {/* Left Side (Image) */}
          <div className="hidden lg:block w-full">
            <img
              src={login}
              alt="Login"
              className="w-full h-auto object-cover rounded-l-md"
            />
          </div>

          {/* Right Side (Form) */}
          <div className="w-full lg:w-2/3 p-8 bg-white shadow-md rounded-r-md mx-4 lg:mx-0">
            <div className="mb-8 text-center mt-10">
              <h1 className="text-3xl mt-4 font-bold text-gray-800">
                Welcome Back!
              </h1>
              <h3 className="text-1xl mt-5 font-semibold">
                Login to book your appointments easily
              </h3>
            </div>
            <form onSubmit={formSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="example@example.com"
                  onChange={handleEmailChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-600"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    className="w-full p-3 border border-gray-300 rounded-md pr-10"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                  {showPassword ? (
                    <BiSolidHide
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                      onClick={handleTogglePasswordVisibility}
                    />
                  ) : (
                    <BiShowAlt
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                      onClick={handleTogglePasswordVisibility}
                    />
                  )}
                </div>
              </div>
              <button className="w-full py-3 text-md bg-btnColor mb-3 font-bold text-white rounded-md hover:bg-blue-600">
                Login
              </button>
              <div className="text-md text-center mb-4">
                Don't have an Account?
                <span className=" ml-2 text-darkBlue">
                  <Link to="/register">Create a new Account</Link>
                </span>
              </div>
              <div className="text-center text-md text-darkBlue">
                Forgot Password?
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
