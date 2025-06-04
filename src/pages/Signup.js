// // src/components/Register.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Signup = () => {
//   const [name, setName] = useState('');
//   const [phone, setPhone] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .post('https://freshbitezone.onrender.com/api/auth/register', { name, phone, email, password })
//       .then(() => {
//         alert('Registration successful!');
//         navigate('/login');
//       })
//       .catch((error) => {
//         console.error(error);
//         alert('Registration failed');
//       });
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-600 to-blue-500">
//       <div className=" bg-white  px-8 py-2 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">Create Account</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="name" className="block text-sm font-medium text-gray-600">
//               Full Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full p-4 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               placeholder="Enter your full name"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
//               Phone Number
//             </label>
//             <input
//               type="number"
//               id="phone"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               className="w-full p-4 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               placeholder="Enter your Number"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-medium text-gray-600">
//               Email
//             </label>
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
//             <label htmlFor="password" className="block text-sm font-medium text-gray-600">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full p-4 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               placeholder="Create a password"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300"
//           >
//             Sign Up
//           </button>
//         </form>
//         <div className="mt-4 text-center">
//           <p className="text-sm text-gray-600">
//             Already have an account?{' '}
//             <button
//               onClick={() => navigate('/login')}
//               className="text-indigo-600 hover:text-indigo-700"
//             >
//               Log In
//             </button>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';
// import { FaUser, FaPhone, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaArrowRight } from 'react-icons/fa';
// import { motion } from 'framer-motion';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Signup = () => {
//   const [name, setName] = useState('');
//   const [phone, setPhone] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
    
//     try {
//       await axios.post('https://freshbitezone.onrender.com/api/auth/register', { 
//         name, 
//         phone, 
//         email, 
//         password 
//       });
      
//       toast.success('Registration successful! Redirecting to login...', {
//         position: "top-center",
//         autoClose: 2000,
//         hideProgressBar: true,
//       });
      
//       setTimeout(() => navigate('/login'), 2200);
//     } catch (error) {
//       console.error(error);
//       toast.error(error.response?.data?.msg || 'Registration failed. Please try again.', {
//         position: "top-center"
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="h-screen flex items-center justify-center bg-gradient-to-br from-rose-500/10 via-amber-100/20 to-rose-500/10 p-4">
//       {/* Split-screen layout */}
//       <div className="w-full max-w-6xl flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-2xl">
//         {/* Left side - Graphic/Illustration */}
//         <motion.div 
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="hidden md:flex md:w-1/2  bg-gradient-to-r from-indigo-600 to-blue-500 items-center justify-center p-12"
//         >
//           <div className="text-white text-center space-y-6">
//             <h1 className="text-4xl font-bold">Join FreshBiteZone</h1>
//             <p className="text-xl font-light opacity-90">
//               Discover fresh and delicious meals
//             </p>
//             <div className="mt-8">
//               <div className="w-64 h-64 mx-auto bg-white/20 rounded-full flex items-center justify-center">
//                 <div className="w-48 h-48 bg-white/30 rounded-full flex items-center justify-center">
//                   <div className="w-32 h-32 bg-white/40 rounded-full flex items-center justify-center">
//                     <FaUser className="text-white text-5xl" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <p className="mt-8 text-sm opacity-80">
//               Already have an account?{' '}
//               <Link 
//                 to="/login" 
//                 className="font-semibold underline hover:text-white/90 transition"
//               >
//                 Sign in
//               </Link>
//             </p>
//           </div>
//         </motion.div>

//         {/* Right side - Registration Form */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="w-full md:w-1/2 bg-white p-8 md:p-12 flex flex-col justify-center"
//         >
//           <div className="text-center md:text-left mb-8">
//             <h2 className="text-3xl font-bold text-gray-800">Create Account</h2>
//             <p className="text-gray-500 mt-2">Fill in your details to get started</p>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Name Field */}
//             <div className="space-y-2">
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                 Full Name
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <FaUser className="text-gray-400" />
//                 </div>
//                 <input
//                   type="text"
//                   id="name"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
//                   placeholder="John Doe"
//                   required
//                 />
//               </div>
//             </div>

//             {/* Phone Field */}
//             <div className="space-y-2">
//               <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
//                 Phone Number
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <FaPhone className="text-gray-400" />
//                 </div>
//                 <input
//                   type="tel"
//                   id="phone"
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                   className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
//                   placeholder="1234567890"
//                   required
//                 />
//               </div>
//             </div>

//             {/* Email Field */}
//             <div className="space-y-2">
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                 Email Address
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <FaEnvelope className="text-gray-400" />
//                 </div>
//                 <input
//                   type="email"
//                   id="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
//                   placeholder="your@email.com"
//                   required
//                 />
//               </div>
//             </div>

//             {/* Password Field */}
//             <div className="space-y-2">
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                 Password
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <FaLock className="text-gray-400" />
//                 </div>
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   id="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
//                   placeholder="••••••••"
//                   required
//                   minLength="6"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-indigo-600 transition"
//                 >
//                   {showPassword ? <FaEyeSlash /> : <FaEye />}
//                 </button>
//               </div>
//               <p className="text-xs text-gray-500 mt-1">Minimum 6 characters</p>
//             </div>

//             {/* Submit Button */}
//             <div className="pt-2">
//               <button
//                 type="submit"
//                 disabled={isLoading}
//                 className={`w-full flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-medium hover:from-indigo-700 hover:to-blue-600 shadow-lg hover:shadow-indigo-200 transition-all ${isLoading ? 'opacity-80' : ''}`}
//               >
//                 {isLoading ? (
//                   <>
//                     <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                     </svg>
//                     Creating Account...
//                   </>
//                 ) : (
//                   <>
//                     Sign Up <FaArrowRight className="ml-2" />
//                   </>
//                 )}
//               </button>
//             </div>
//           </form>

//           {/* Terms and Conditions */}
//           <div className="mt-4 text-center text-xs text-gray-500">
//             By signing up, you agree to our Terms and Conditions
//           </div>

//           {/* Mobile Sign In Link */}
//           <div className="mt-8 text-center md:hidden">
//             <p className="text-sm text-gray-600">
//               Already have an account?{' '}
//               <Link
//                 to="/login"
//                 className="font-medium text-indigo-600 hover:text-indigo-700"
//               >
//                 Sign in
//               </Link>
//             </p>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Signup;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { FaUser, FaPhone, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await axios.post('https://freshbitezone.onrender.com/api/auth/register', { 
        name, 
        phone, 
        email, 
        password 
      });
      
      toast.success('Registration successful! Redirecting to login...', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
      });
      
      setTimeout(() => navigate('/login'), 2200);
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.msg || 'Registration failed. Please try again.', {
        position: "top-center"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-500/10 via-amber-100/20 to-rose-500/10 p-2 sm:p-4">
      <div className="w-full max-w-5xl mx-4 flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-2xl">
        {/* Left Graphic Section */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden md:flex md:w-1/2 bg-gradient-to-r from-indigo-600 to-blue-500 items-center justify-center p-6 lg:p-8"
        >
          <div className="text-white text-center space-y-4">
            <h1 className="text-3xl lg:text-4xl font-bold">Join FreshBiteZone</h1>
            <p className="text-lg lg:text-xl font-light opacity-90">
              Discover fresh and delicious meals
            </p>
            <div className="mt-6">
              <div className="w-56 h-56 mx-auto bg-white/20 rounded-full flex items-center justify-center">
                <div className="w-40 h-40 bg-white/30 rounded-full flex items-center justify-center">
                  <div className="w-28 h-28 bg-white/40 rounded-full flex items-center justify-center">
                    <FaUser className="text-white text-4xl" />
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-6 text-sm opacity-80">
              Already have an account?{' '}
              <Link 
                to="/login" 
                className="font-semibold underline hover:text-white/90 transition"
              >
                Sign in
              </Link>
            </p>
          </div>
        </motion.div>

        {/* Right Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 bg-white p-4 sm:p-6 md:p-8 flex flex-col justify-center max-h-[90vh]"
        >
          <div className="text-center md:text-left mb-4 md:mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Create Account</h2>
            <p className="text-sm md:text-base text-gray-500 mt-1 md:mt-2">Fill in your details to get started</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-2 md:space-y-3">
            {/* Name Field */}
            <div className="space-y-1.5">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="text-gray-400 text-sm" />
                </div>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                  placeholder="John Doe"
                  required
                />
              </div>
            </div>

            {/* Phone Field */}
            <div className="space-y-1.5">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaPhone className="text-gray-400 text-sm" />
                </div>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                  placeholder="1234567890"
                  required
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-1.5">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="text-gray-400 text-sm" />
                </div>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="text-gray-400 text-sm" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-9 pr-10 py-2.5 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                  placeholder="••••••••"
                  required
                  minLength="6"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-indigo-600 transition"
                >
                  {showPassword ? <FaEyeSlash className="text-sm" /> : <FaEye className="text-sm" />}
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-0.5">Minimum 6 characters</p>
            </div>

            {/* Submit Button */}
            <div className="pt-1">
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full flex items-center justify-center px-4 py-2.5 md:py-3 text-sm rounded-lg bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-medium hover:from-indigo-700 hover:to-blue-600 shadow-lg hover:shadow-indigo-200 transition-all ${isLoading ? 'opacity-80' : ''}`}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Creating Account...
                  </>
                ) : (
                  <>
                    Sign Up <FaArrowRight className="ml-2" />
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Terms and Conditions */}
          <div className="mt-2 text-center text-[0.7rem] md:text-xs text-gray-500">
            By signing up, you agree to our Terms and Conditions
          </div>

          {/* Mobile Sign In Link */}
          <div className="mt-4 md:mt-6 text-center md:hidden">
            <p className="text-xs md:text-sm text-gray-600">
              Already have an account?{' '}
              <Link
                to="/login"
                className="font-medium text-indigo-600 hover:text-indigo-700"
              >
                Sign in
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Signup;