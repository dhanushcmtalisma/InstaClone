import React, { useState } from 'react';
import { Facebook } from 'lucide-react';
import Insta from '../assets/insta.png';
import Ms from '../assets/ms.png'
import Playstore from '../assets/play.png'

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
      <div className="min-h-screen bg-gray-50">
        {/* Profile content (keeping the same as before) */}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-5 px-4">
      <div className="flex flex-col items-center w-full max-w-sm">
        {/* Main Login Container */}
        <div className="bg-white w-full border border-gray-300 rounded-sm p-6 mb-3">
          {/* Instagram Logo */}
          <div className="flex justify-center">
            <img 
            src={Insta}
            alt=""
            className="h-20" 
            />
          </div>

          <form onSubmit={handleSubmit} className="space-y-2">
            <div>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="w-full px-2 py-[7px] text-xs border border-gray-300 rounded bg-gray-50 focus:outline-none focus:border-gray-400"
                placeholder="Phone number, username, or email"
                value={formData.username}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full px-2 py-[7px] text-xs border border-gray-300 rounded bg-gray-50 focus:outline-none focus:border-gray-400"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>

            <button
              type="submit"
              disabled={isLoading || !formData.username || !formData.password}
              className={`w-full py-[6px] rounded text-sm font-semibold mt-4
                ${(formData.username && formData.password)
                  ? 'bg-[#0095f6] text-white hover:bg-[#1877f2]'
                  : 'bg-[#0095f6]/70 text-white cursor-not-allowed'
              }`}
            >
              {isLoading ? 'Loading...' : 'Log in'}
            </button>

            <div className="flex items-center my-4">
              <div className="flex-1 h-px bg-gray-300"></div>
              <div className="px-4 text-sm text-gray-500 font-semibold">OR</div>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            <button
              type="button"
              className="w-full flex items-center justify-center space-x-2 py-2 text-sm font-semibold text-[#385185]"
            >
              <Facebook className="w-5 h-5" />
              <span>Log in with Facebook</span>
            </button>

            <div className="text-center mt-4">
              <a href="#" className="text-xs text-[#385185]">
                Forgot password?
              </a>
            </div>
          </form>
        </div>

        {/* Sign Up Container */}
        <div className="bg-white w-full border border-gray-300 rounded-sm p-4 text-center">
          <p className="text-sm">
            Don't have an account?{' '}
            <a href="#" className="text-[#0095f6] font-semibold">
              Sign up
            </a>
          </p>
        </div>

        {/* Get the app */}
        <div className="mt-4 text-center">
          <p className="text-sm">Get the app.</p>
          <div className="flex space-x-2 mt-4">
            <button>
            <img
              src={Playstore}
              alt="Get it on Google Play"
              className="h-10"
            />
            </button>
            <button>
            <img
              src={Ms}
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