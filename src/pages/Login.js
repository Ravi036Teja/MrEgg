// import React, { useState } from 'react';
// import { useAuth } from '../Context/AuthContext';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     try {
//       const res = await axios.post('https://freshbitezone.onrender.com/api/auth/login', {
//         email,
//         password
//       });
  
//       const { token, userId } = res.data;
  
//       // Save token to localStorage
//       localStorage.setItem('token', token);
//       localStorage.setItem('userId', userId);
  
//       login(token); // Update the global auth context with the user info
  
//       // Navigate to the Menu page
//       navigate('/menu');
//     } catch (err) {
//       console.error(err);
//       alert(err.response?.data?.msg || 'Login failed');
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-600 to-blue-500">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">Welcome Back</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full p-4 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               placeholder="Enter your email"
//             />
//           </div>
//           <div className="mb-6">
//             <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full p-4 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               placeholder="Enter your password"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300"
//           >
//             Log In
//           </button>
//         </form>
//         <div className="mt-4 text-center">
//           <p className="text-sm text-gray-600">
//             Don't have an account?{' '}
//             <button
//               onClick={() => navigate('/signup')}
//               className="text-indigo-600 hover:text-indigo-700"
//             >
//               Sign Up
//             </button>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from 'react';
import { useAuth } from '../Context/AuthContext';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { FaUser, FaLock, FaEye, FaEyeSlash, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const res = await axios.post('https://freshbitezone.onrender.com/api/auth/login', {
        email,
        password
      });
  
      const { token, userId } = res.data;
  
      localStorage.setItem('token', token);
      localStorage.setItem('userId', userId);
  
      login(token);
  
      toast.success('Login successful! Redirecting...', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
      });
      
      setTimeout(() => navigate('/menu'), 2200);
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.msg || 'Login failed. Please check your credentials.', {
        position: "top-center"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-rose-500/10 via-amber-100/20 to-rose-500/10 p-4">
      {/* Split-screen layout */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-2xl">
        {/* Left side - Graphic/Illustration */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          // from-indigo-600 to-blue-500 
          className="hidden md:flex md:w-1/2 bg-gradient-to-br from-rose-600 to-amber-500 items-center justify-center p-12"
        >
          <div className="text-white text-center space-y-6">
            <h1 className="text-4xl font-bold">Welcome to FreshBiteZone</h1>
            <p className="text-xl font-light opacity-90">
              Discover fresh and delicious meals
            </p>
            <div className="mt-8">
              <div className="w-64 h-64 mx-auto bg-white/20 rounded-full flex items-center justify-center">
                <div className="w-48 h-48 bg-white/30 rounded-full flex items-center justify-center">
                  <div className="w-32 h-32 bg-white/40 rounded-full flex items-center justify-center">
                    <FaUser className="text-white text-5xl" />
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-8 text-sm opacity-80">
              Not a member yet?{' '}
              <Link 
                to="/signup" 
                className="font-semibold underline hover:text-white/90 transition"
              >
                Create account
              </Link>
            </p>
          </div>
        </motion.div>

        {/* Right side - Login Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 bg-white p-8 md:p-12 flex flex-col justify-center"
        >
          <div className="text-center md:text-left mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Sign In</h2>
            <p className="text-gray-500 mt-2">Access your account to continue</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <Link 
                  to="/forgot-password" 
                  className="text-xs text-indigo-600 hover:text-indigo-700"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                  placeholder="••••••••"
                  required
                  minLength="6"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-indigo-600 transition"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Remember Me & Submit */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-br from-rose-600 to-amber-500  text-white font-medium hover:from-indigo-700 hover:to-blue-600 shadow-lg hover:shadow-indigo-200 transition-all ${isLoading ? 'opacity-80' : ''}`}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Signing In...
                  </>
                ) : (
                  <>
                    Continue <FaArrowRight className="ml-2 " />
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Mobile Sign Up Link */}
          <div className="mt-8 text-center md:hidden">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <Link
                to="/signup"
                className="font-medium text-indigo-600 hover:text-indigo-700"
              >
                Sign up
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;