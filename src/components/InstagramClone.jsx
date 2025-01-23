import React, { useState } from 'react';
import { Facebook } from 'lucide-react';
import Insta from '../assets/insta.png';
import Play from '../assets/play.png';
import MS from '../assets/ms.png';

const InstagramClone = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsLoggedIn(true);
    }, 2000);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="max-w-xl mx-auto bg-white rounded-lg shadow p-6">
          <h1 className="text-2xl font-semibold text-center mb-4">Welcome to Instagram</h1>
          <p className="text-center text-gray-600">You are now logged in!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center w-full max-w-sm">
        {/* Main Login Container */}
        <div className="bg-white w-full border border-gray-300 rounded-lg p-8 mb-4 shadow-sm">
          {/* Instagram Logo */}
          <div className="flex justify-center mb-8">
           { <img
              src={Insta}
              alt="Instagram"
              className="h-12 w-auto"
            />}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <input
                id="username"
                name="username"
                type="text"
                required
                className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-colors"
                placeholder="Phone number, username, or email"
                value={formData.username}
                onChange={handleInputChange}
              />

              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-colors"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>

            <button
              type="submit"
              disabled={isLoading || !formData.username || !formData.password}
              className={`w-full py-2 rounded-md text-sm font-semibold transition-colors
                ${(formData.username && formData.password)
                  ? 'bg-[#0095f6] text-white hover:bg-[#1877f2]'
                  : 'bg-[#0095f6]/70 text-white cursor-not-allowed'
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0095f6]`}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Loading...
                </span>
              ) : 'Log in'}
            </button>

            <div className="flex items-center my-6">
              <div className="flex-1 h-px bg-gray-300"></div>
              <div className="px-4 text-sm text-gray-500 font-semibold">OR</div>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            <button
              type="button"
              className="w-full flex items-center justify-center space-x-2 py-2 text-sm font-semibold text-[#385185] hover:text-[#1877f2] transition-colors"
            >
              <Facebook className="w-5 h-5" />
              <span>Log in with Facebook</span>
            </button>

            <div className="text-center mt-4">
              <a href="#" className="text-xs text-[#385185] hover:underline">
                Forgot password?
              </a>
            </div>
          </form>
        </div>

        {/* Sign Up Container */}
        <div className="bg-white w-full border border-gray-300 rounded-lg p-6 text-center shadow-sm">
          <p className="text-sm">
            Don't have an account?{' '}
            <a href="#" className="text-[#0095f6] font-semibold hover:text-[#1877f2] transition-colors">
              Sign up
            </a>
          </p>
        </div>

        {/* Get the app */}
        <div className="mt-8 text-center">
          <p className="text-sm mb-4">Get the app.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="transform hover:scale-105 transition-transform">
              <img
                src={Play}
                alt="Get it on Google Play"
                className="h-10"
              />
            </button>
            <button className="transform hover:scale-105 transition-transform">
              <img
                src={MS}
                alt="Get it from Microsoft"
                className="h-10"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramClone;