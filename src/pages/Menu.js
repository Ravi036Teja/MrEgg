// import React, { useEffect, useState, useMemo } from 'react';
// import axios from 'axios';
// import { useCart } from '../Context/CartContext';
// import { useAuth } from '../Context/AuthContext';
// import { useNavigate } from 'react-router-dom';
// import { FaShoppingCart, FaSearch, FaFilter, FaStar, FaRegStar, FaSpinner } from 'react-icons/fa';
// import { motion, AnimatePresence } from 'framer-motion';
// import debounce from 'lodash.debounce';

// const Menu = () => {
//   const [items, setItems] = useState([]);
//   const [filteredItems, setFilteredItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [activeFilter, setActiveFilter] = useState('all');
//   const [sortOption, setSortOption] = useState('default');
//   const { addToCart, cartItems } = useCart();
//   const { user } = useAuth();
//   const navigate = useNavigate();

//   // Fetch menu items with error handling
//   useEffect(() => {
//     const fetchMenuItems = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get('https://freshbitezone.onrender.com/api/menu');
//         setItems(response.data);
//         setFilteredItems(response.data);
//       } catch (err) {
//         console.error('Failed to fetch menu items:', err);
//         setError('Failed to load menu. Please try again later.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMenuItems();
//   }, []);

//   // Debounced search and filter function
//   const handleSearchAndFilter = useMemo(() => 
//     debounce((term, filter, sort, items) => {
//       let result = [...items];

//       // Apply search filter
//       if (term) {
//         result = result.filter(item => 
//           item.name.toLowerCase().includes(term.toLowerCase()) || 
//           item.description.toLowerCase().includes(term.toLowerCase())
//         );
//       }

//       // Apply category filter
//       if (filter !== 'all') {
//         result = result.filter(item => item.category === filter);
//       }

//       // Apply sorting
//       switch(sort) {
//         case 'price-asc':
//           result.sort((a, b) => a.price - b.price);
//           break;
//         case 'price-desc':
//           result.sort((a, b) => b.price - a.price);
//           break;
//         case 'rating':
//           result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
//           break;
//         case 'popular':
//           result.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
//           break;
//         default:
//           // Default sorting (perhaps by menu order)
//           break;
//       }

//       setFilteredItems(result);
//     }, 300),
//     []
//   );

//   // Apply filters when dependencies change
//   useEffect(() => {
//     handleSearchAndFilter(searchTerm, activeFilter, sortOption, items);
//   }, [searchTerm, activeFilter, sortOption, items, handleSearchAndFilter]);

//   const handleAddToCart = (item) => {
//     if (!user) {
//       navigate('/login', { state: { from: '/menu' } });
//       return;
//     }
//     if (!item._id || !item.name || !item.price) return;

//     addToCart(item);

//     // Animation feedback
//     const button = document.getElementById(`add-to-cart-${item._id}`);
//     if (button) {
//       button.classList.add('animate-ping');
//       setTimeout(() => button.classList.remove('animate-ping'), 500);
//     }
//   };

//   // Extract unique categories for filter
//   const categories = useMemo(() => {
//     const uniqueCategories = new Set(items.map(item => item.category));
//     return ['all', ...Array.from(uniqueCategories)];
//   }, [items]);

//   if (error) {
//     return (
//       <div className="flex flex-col items-center justify-center h-screen">
//         <div className="bg-red-100 border border-amber-500 text-rose-600 px-4 py-3 rounded">
//           <strong>Error:</strong> {error}
//         </div>
//         <button 
//           onClick={() => window.location.reload()} 
//           className="mt-4 px-4 py-2  bg-gradient-to-r from-rose-600 to-amber-500 text-white rounded hover:bg-rose-700"
//         >
//           Retry
//         </button>
//       </div>
//     );
//   }

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <FaSpinner className="animate-spin text-rose-600 text-4xl" />
//       </div>
//     );
//   }

//   return (
//     <div className="px-4 py-6 max-w-7xl mx-auto">
//       {/* Header Section */}
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
//         <div>
//           <h1 className="text-4xl font-bold text-gray-900">Our Delicious Menu</h1>
//           <p className="text-gray-600 mt-2">Fresh ingredients, authentic flavors</p>
//         </div>

//         <div className="flex gap-3">
//           <button
//             onClick={() => navigate('/')}
//             className="px-5 py-2.5 bg-gray-100 text-gray-800 rounded-xl hover:bg-gray-200 transition-all flex items-center gap-2"
//           >
//             ← Back to Home
//           </button>
//           <button
//             onClick={() => navigate('/cart')}
//             className="relative px-5 py-2.5  bg-gradient-to-r from-rose-600 to-amber-500 text-white rounded-xl hover:bg-rose-700 transition-all flex items-center gap-2"
//           >
//             <FaShoppingCart />
//             My Cart
//             {cartItems.length > 0 && (
//               <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
//                 {cartItems.length}
//               </span>
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Search and Filter Section */}
//       <div className="bg-white rounded-xl shadow-md p-4 mb-8 sticky top-2 z-10">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {/* Search Input */}
//           <div className="relative">
//             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//               <FaSearch className="text-gray-400" />
//             </div>
//             <input
//               type="text"
//               placeholder="Search dishes..."
//               className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>

//           {/* Category Filter */}
//           <div className="relative">
//             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//               <FaFilter className="text-gray-400" />
//             </div>
//             <select
//               className="pl-10 w-full p-3 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
//               value={activeFilter}
//               onChange={(e) => setActiveFilter(e.target.value)}
//             >
//               {categories.map(category => (
//                 <option key={category} value={category}>
//                   {category === 'all' ? 'All Categories' : category}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Sort Options */}
//           <div className="relative">
//             <select
//               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
//               value={sortOption}
//               onChange={(e) => setSortOption(e.target.value)}
//             >
//               <option value="default">Sort by: Recommended</option>
//               <option value="price-asc">Price: Low to High</option>
//               <option value="price-desc">Price: High to Low</option>
//               <option value="rating">Highest Rated</option>
//               <option value="popular">Most Popular</option>
//             </select>
//           </div>
//         </div>
//       </div>

//       {/* Menu Items Grid */}
//       {filteredItems.length === 0 ? (
//         <div className="text-center py-12">
//           <h3 className="text-xl font-medium text-gray-700">No items found</h3>
//           <p className="text-gray-500 mt-2">Try adjusting your search or filters</p>
//           <button 
//             onClick={() => {
//               setSearchTerm('');
//               setActiveFilter('all');
//               setSortOption('default');
//             }}
//             className="mt-4 px-4 py-2 bg-rose-600 text-white rounded hover:bg-rose-700"
//           >
//             Reset Filters
//           </button>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           <AnimatePresence>
//             {filteredItems.map((item, i) => (
//               <motion.div
//                 key={item._id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, scale: 0.9 }}
//                 transition={{ duration: 0.3 }}
//                 layout
//                 className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
//               >
//                 {/* Item Image with possible badge */}
//                 <div className="relative h-48 bg-gray-100 flex items-center justify-center">
//                   {item.imageUrl ? (
//                     <img 
//                       src={item.imageUrl} 
//                       alt={item.name} 
//                       className="w-full h-full object-cover"
//                       loading="lazy"
//                     />
//                   ) : (
//                     <span className="text-gray-400 text-lg">Image Coming Soon</span>
//                   )}
//                   {item.isPopular && (
//                     <div className="absolute top-2 left-2 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded">
//                       Popular
//                     </div>
//                   )}
//                 </div>

//                 {/* Item Details */}
//                 <div className="p-4 flex-grow">
//                   <div className="flex justify-between items-start">
//                     <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
//                     <span className="text-lg font-bold text-rose-600">₹{item.price}</span>
//                   </div>

//                   <p className="text-sm text-gray-600 mt-1">{item.description}</p>

//                   {/* Rating */}
//                   {item.rating && (
//                     <div className="flex items-center mt-2">
//                       {[...Array(5)].map((_, i) => (
//                         i < Math.floor(item.rating) ? 
//                           <FaStar key={i} className="text-amber-400" /> : 
//                           <FaRegStar key={i} className="text-amber-400" />
//                       ))}
//                       <span className="text-xs text-gray-500 ml-1">({item.ratingCount || 0})</span>
//                     </div>
//                   )}

//                   {/* Dietary Info */}
//                   {item.tags && item.tags.length > 0 && (
//                     <div className="flex flex-wrap gap-1 mt-3">
//                       {item.tags.map(tag => (
//                         <span 
//                           key={tag} 
//                           className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600"
//                         >
//                           {tag}
//                         </span>
//                       ))}
//                     </div>
//                   )}
//                 </div>

//                 {/* Add to Cart Button */}
//                 <div className="px-4 pb-4">
//                   <motion.button
//                     id={`add-to-cart-${item._id}`}
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                     onClick={() => handleAddToCart(item)}
//                     className="w-full bg-gradient-to-r from-rose-500 to-rose-600 text-white py-2.5 rounded-lg hover:from-rose-600 hover:to-rose-700 transition shadow-md"
//                   >
//                     Add to Cart
//                   </motion.button>
//                 </div>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </div>
//       )}

//       {/* Floating Cart Button (for mobile) */}
//       <div className="fixed bottom-5 right-5 z-50 md:hidden">
//         <motion.button
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           onClick={() => navigate('/cart')}
//           className="relative  bg-gradient-to-r from-rose-600 to-amber-500 text-white p-4 rounded-full shadow-xl hover:bg-rose-700 transition"
//         >
//           <FaShoppingCart size={24} />
//           {cartItems.length > 0 && (
//             <motion.span 
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               className="absolute -top-1 -right-1 bg-black text-white text-xs w-6 h-6 flex items-center justify-center rounded-full"
//             >
//               {cartItems.length}
//             </motion.span>
//           )}
//         </motion.button>
//       </div>
//     </div>
//   );
// };

// export default Menu;

// working code below

// import React, { useEffect, useState, useMemo, useCallback, useRef } from 'react';
// import axios from 'axios';
// import { useCart } from '../Context/CartContext';
// import { useAuth } from '../Context/AuthContext';
// import { useNavigate } from 'react-router-dom';
// import { FaShoppingCart, FaSearch, FaFilter, FaStar, FaRegStar, FaSpinner } from 'react-icons/fa';
// import { motion, AnimatePresence } from 'framer-motion';
// import debounce from 'lodash.debounce';

// // Skeleton Loader Component
// const SkeletonLoader = ({ count = 4 }) => (
//   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//     {[...Array(count)].map((_, i) => (
//       <div key={`skeleton-${i}`} className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col animate-pulse">
//         <div className="h-48 bg-gray-200" />
//         <div className="p-4 space-y-3">
//           <div className="h-4 bg-gray-200 rounded w-3/4" />
//           <div className="h-4 bg-gray-200 rounded w-1/4" />
//           <div className="h-3 bg-gray-200 rounded w-full" />
//           <div className="h-3 bg-gray-200 rounded w-2/3" />
//           <div className="h-8 bg-gray-200 rounded-lg" />
//         </div>
//       </div>
//     ))}
//   </div>
// );

// const Menu = () => {
//   const [items, setItems] = useState([]);
//   const [filteredItems, setFilteredItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [activeFilter, setActiveFilter] = useState('all');
//   const [sortOption, setSortOption] = useState('default');
//   const [visibleItems, setVisibleItems] = useState([]);
//   const [hasMore, setHasMore] = useState(true);
//   const loaderRef = useRef(null);
//   const observerRef = useRef(null);
//   const { addToCart, cartItems } = useCart();
//   const { user } = useAuth();
//   const navigate = useNavigate();

//   // Fetch menu items with caching
//  const fetchMenuItems = useCallback(async (retries = 3) => {
//   try {
//     setLoading(true);
//     const cache = sessionStorage.getItem('menuCache');

//     if (cache) {
//       const cachedData = JSON.parse(cache);
//       setItems(cachedData);
//       setFilteredItems(cachedData);
//     }

//     const response = await axios.get('https://freshbitezone.onrender.com/api/menu', {
//       timeout: 10000,
//       withCredentials: true, // Add this for CORS cookies
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//       }
//     });

//     if (!cache || JSON.stringify(response.data) !== cache) {
//       setItems(response.data);
//       setFilteredItems(response.data);
//       sessionStorage.setItem('menuCache', JSON.stringify(response.data));
//     }
//   } catch (err) {
//     console.error('Failed to fetch menu items:', err);

//     if (retries > 0) {
//       console.log(`Retrying... (${retries} attempts left)`);
//       await new Promise(resolve => setTimeout(resolve, 2000));
//       return fetchMenuItems(retries - 1);
//     }

//     setError(err.response?.status === 403 
//       ? 'Access forbidden. Please check CORS configuration.'
//       : 'Failed to load menu. Please try again later.');
//   } finally {
//     setLoading(false);
//   }
// }, []);
//   // Filter and sort logic
//   const handleSearchAndFilter = useMemo(() => 
//     debounce((term, filter, sort, items) => {
//       let result = [...items];

//       if (term) {
//         result = result.filter(item => 
//           item.name.toLowerCase().includes(term.toLowerCase()) || 
//           item.description.toLowerCase().includes(term.toLowerCase())
//         );
//       }

//       if (filter !== 'all') {
//         result = result.filter(item => item.category === filter);
//       }

//       switch(sort) {
//         case 'price-asc': result.sort((a, b) => a.price - b.price); break;
//         case 'price-desc': result.sort((a, b) => b.price - a.price); break;
//         case 'rating': result.sort((a, b) => (b.rating || 0) - (a.rating || 0)); break;
//         case 'popular': result.sort((a, b) => (b.popularity || 0) - (a.popularity || 0)); break;
//         default: break;
//       }

//       setFilteredItems(result);
//       setHasMore(true);
//       setVisibleItems(result.slice(0, 4));
//     }, 300),
//     []
//   );

//   // Intersection Observer setup
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         const first = entries[0];
//         if (first.isIntersecting && hasMore) {
//           setVisibleItems(prev => {
//             const nextItems = filteredItems.slice(prev.length, prev.length + 4);
//             if (prev.length + nextItems.length >= filteredItems.length) {
//               setHasMore(false);
//             }
//             return [...prev, ...nextItems];
//           });
//         }
//       },
//       { threshold: 0.1, rootMargin: '100px' }
//     );

//     if (loaderRef.current) observer.observe(loaderRef.current);
//     return () => observer.disconnect();
//   }, [filteredItems, hasMore]);

//   // Initial load and filter dependencies
//   useEffect(() => { fetchMenuItems(); }, [fetchMenuItems]);
//   useEffect(() => { handleSearchAndFilter(searchTerm, activeFilter, sortOption, items); }, 
//     [searchTerm, activeFilter, sortOption, items, handleSearchAndFilter]);

//   // Add to cart function
//   const handleAddToCart = (item) => {
//     if (!user) return navigate('/login', { state: { from: '/menu' } });
//     if (!item._id || !item.name || !item.price) return;

//     addToCart(item);
//     const button = document.getElementById(`add-to-cart-${item._id}`);
//     if (button) {
//       button.classList.add('animate-ping');
//       setTimeout(() => button.classList.remove('animate-ping'), 500);
//     }
//   };

//   // Categories extraction
//   const categories = useMemo(() => 
//     ['all', ...new Set(items.map(item => item.category))], [items]);

//   // Error state
//   if (error) return (
//     <div className="flex flex-col items-center justify-center h-screen">
//       <div className="bg-red-100 border border-amber-500 text-rose-600 px-4 py-3 rounded">
//         <strong>Error:</strong> {error}
//       </div>
//       <button onClick={fetchMenuItems} className="mt-4 px-4 py-2 bg-gradient-to-r from-rose-600 to-amber-500 text-white rounded hover:bg-rose-700">
//         Retry
//       </button>
//     </div>
//   );

//   return (
//     <div className="px-4 py-6 max-w-7xl mx-auto">
//       {/* Header Section */}
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
//         <div>
//           <h1 className="text-4xl font-bold text-gray-900">Our Delicious Menu</h1>
//           <p className="text-gray-600 mt-2">Fresh ingredients, authentic flavors</p>
//         </div>

//         <div className="flex gap-3">
//           <button onClick={() => navigate('/')} className="px-5 py-2.5 bg-gray-100 text-gray-800 rounded-xl hover:bg-gray-200 transition-all flex items-center gap-2">
//             ← Back to Home
//           </button>
//           <button onClick={() => navigate('/cart')} className="relative px-5 py-2.5 bg-gradient-to-r from-rose-600 to-amber-500 text-white rounded-xl hover:bg-rose-700 transition-all flex items-center gap-2">
//             <FaShoppingCart />
//             My Cart
//             {cartItems.length > 0 && (
//               <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
//                 {cartItems.length}
//               </span>
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Search and Filter Section */}
//       <div className="bg-white rounded-xl shadow-md p-4 mb-8 sticky top-2 z-10">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           <div className="relative">
//             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//               <FaSearch className="text-gray-400" />
//             </div>
//             <input
//               type="text"
//               placeholder="Search dishes..."
//               className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>

//           <div className="relative">
//             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//               <FaFilter className="text-gray-400" />
//             </div>
//             <select
//               className="pl-10 w-full p-3 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
//               value={activeFilter}
//               onChange={(e) => setActiveFilter(e.target.value)}
//             >
//               {categories.map(category => (
//                 <option key={category} value={category}>
//                   {category === 'all' ? 'All Categories' : category}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div className="relative">
//             <select
//               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
//               value={sortOption}
//               onChange={(e) => setSortOption(e.target.value)}
//             >
//               <option value="default">Sort by: Recommended</option>
//               <option value="price-asc">Price: Low to High</option>
//               <option value="price-desc">Price: High to Low</option>
//               <option value="rating">Highest Rated</option>
//               <option value="popular">Most Popular</option>
//             </select>
//           </div>
//         </div>
//       </div>

//       {/* Content Section */}
//       {loading ? (
//         <SkeletonLoader count={4} />
//       ) : filteredItems.length === 0 ? (
//         <div className="text-center py-12">
//           <h3 className="text-xl font-medium text-gray-700">No items found</h3>
//           <p className="text-gray-500 mt-2">Try adjusting your search or filters</p>
//           <button 
//             onClick={() => { setSearchTerm(''); setActiveFilter('all'); setSortOption('default'); }}
//             className="mt-4 px-4 py-2 bg-rose-600 text-white rounded hover:bg-rose-700"
//           >
//             Reset Filters
//           </button>
//         </div>
//       ) : (
//         <>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             <AnimatePresence>
//               {visibleItems.map((item) => (
//                 <motion.div
//                   key={item._id}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, scale: 0.9 }}
//                   transition={{ duration: 0.3 }}
//                   className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
//                 >
//                   <div className="relative h-48 bg-gray-100 flex items-center justify-center">
//                     {item.imageUrl ? (
//                       <img 
//                         src={item.imageUrl} 
//                         alt={item.name} 
//                         className="w-full h-full object-cover"
//                         loading="lazy"
//                         decoding="async"
//                       />
//                     ) : (
//                       <span className="text-gray-400 text-lg">Image Coming Soon</span>
//                     )}
//                     {item.isPopular && (
//                       <div className="absolute top-2 left-2 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded">
//                         Popular
//                       </div>
//                     )}
//                   </div>

//                   <div className="p-4 flex-grow">
//                     <div className="flex justify-between items-start">
//                       <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
//                       <span className="text-lg font-bold text-rose-600">₹{item.price}</span>
//                     </div>

//                     <p className="text-sm text-gray-600 mt-1">{item.description}</p>

//                     {item.rating && (
//                       <div className="flex items-center mt-2">
//                         {[...Array(5)].map((_, i) => (
//                           i < Math.floor(item.rating) ? 
//                             <FaStar key={i} className="text-amber-400" /> : 
//                             <FaRegStar key={i} className="text-amber-400" />
//                         ))}
//                         <span className="text-xs text-gray-500 ml-1">({item.ratingCount || 0})</span>
//                       </div>
//                     )}

//                     {item.tags?.length > 0 && (
//                       <div className="flex flex-wrap gap-1 mt-3">
//                         {item.tags.map(tag => (
//                           <span key={tag} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">
//                             {tag}
//                           </span>
//                         ))}
//                       </div>
//                     )}
//                   </div>

//                   <div className="px-4 pb-4">
//                     <motion.button
//                       id={`add-to-cart-${item._id}`}
//                       whileHover={{ scale: 1.02 }}
//                       whileTap={{ scale: 0.98 }}
//                       onClick={() => handleAddToCart(item)}
//                       className="w-full bg-gradient-to-r from-rose-500 to-rose-600 text-white py-2.5 rounded-lg hover:from-rose-600 hover:to-rose-700 transition shadow-md"
//                     >
//                       Add to Cart
//                     </motion.button>
//                   </div>
//                 </motion.div>
//               ))}
//             </AnimatePresence>
//           </div>

//           {hasMore && (
//             <div ref={loaderRef} className="text-center py-4">
//               <FaSpinner className="animate-spin text-rose-600 text-2xl mx-auto" />
//             </div>
//           )}
//         </>
//       )}

//       {/* Mobile Cart Button */}
//       <div className="fixed bottom-5 right-5 z-50 md:hidden">
//         <motion.button
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           onClick={() => navigate('/cart')}
//           className="relative bg-gradient-to-r from-rose-600 to-amber-500 text-white p-4 rounded-full shadow-xl hover:bg-rose-700 transition"
//         >
//           <FaShoppingCart size={24} />
//           {cartItems.length > 0 && (
//             <motion.span 
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               className="absolute -top-1 -right-1 bg-black text-white text-xs w-6 h-6 flex items-center justify-center rounded-full"
//             >
//               {cartItems.length}
//             </motion.span>
//           )}
//         </motion.button>
//       </div>
//     </div>
//   );
// };

// export default Menu;


// new code
import React, { useEffect, useState, useMemo, useCallback, useRef } from 'react';
import axios from 'axios';
import { useCart } from '../Context/CartContext';
import { useAuth } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FaShoppingCart, FaSearch, FaFilter, FaStar, FaRegStar, FaSpinner } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import debounce from 'lodash.debounce';

// Skeleton Loader (no changes needed, it's good for UX)
const SkeletonLoader = ({ count = 8 }) => ( // Increased default count for better initial fill
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(count)].map((_, i) => (
            <div key={`skeleton-${i}`} className="bg-white rounded-2xl overflow-hidden shadow-lg animate-pulse">
                <div className="h-48 bg-gray-200" />
                <div className="p-4 space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-3/4" />
                    <div className="h-4 bg-gray-200 rounded w-1/4" />
                    <div className="h-3 bg-gray-200 rounded w-full" />
                    <div className="h-3 bg-gray-200 rounded w-2/3" />
                    <div className="h-8 bg-gray-200 rounded-lg" />
                </div>
            </div>
        ))}
    </div>
);

const Menu = () => {
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [activeFilter, setActiveFilter] = useState('all');
    const [sortOption, setSortOption] = useState('default');
    const [visibleItems, setVisibleItems] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const loaderRef = useRef(null);
    const { addToCart, cartItems } = useCart();
    const { user } = useAuth();
    const navigate = useNavigate();

    // Memoized categories - no change needed, it's good
    const categories = useMemo(() => ['all', ...new Set(items.map(i => i.category))], [items]);

    const handleAddToCart = (item) => {
        if (!user) {
            navigate('/login', { state: { from: '/menu' } });
            return;
        }
        if (!item._id) return;

        addToCart(item);
        const button = document.getElementById(`add-to-cart-${item._id}`);
        if (button) {
            button.classList.add('animate-ping');
            setTimeout(() => button.classList.remove('animate-ping'), 500);
        }
    };

    // **Optimized Fetch Data with Loading State Management**
    const fetchMenuItems = useCallback(async () => {
        setLoading(true); // Always set loading to true when starting a fetch
        const cacheKey = 'menuCache';
        const cachedData = sessionStorage.getItem(cacheKey);

        if (cachedData) {
            const data = JSON.parse(cachedData);
            setItems(data);
            setFilteredItems(data);
            setVisibleItems(data.slice(0, 8)); // Show more initially if cached
            setHasMore(data.length > 8);
            setLoading(false); // Set loading to false immediately if cache is used
        }

        try {
            // Only fetch if no cache or if we explicitly want to refresh (e.g., on a pull-to-refresh)
            // For general page load, try to use cache first, then fetch for update in background
            const res = await axios.get('https://freshbitezone.onrender.com/api/menu', { timeout: 15000 }); // Increased timeout for potentially slow free tier
            const newFetchedData = res.data;

            if (JSON.stringify(newFetchedData) !== cachedData) {
                // Only update state if data has actually changed
                sessionStorage.setItem(cacheKey, JSON.stringify(newFetchedData));
                setItems(newFetchedData);
                setFilteredItems(newFetchedData);
                setVisibleItems(newFetchedData.slice(0, 8)); // Update initial view
                setHasMore(newFetchedData.length > 8);
            }
        } catch (err) {
            console.error('Fetch Error:', err);
            // If there's an error and no cached data, ensure loading is turned off
            if (!cachedData) {
                setLoading(false);
            }
            // Optionally, display an error message to the user
        } finally {
            // Ensure loading is false after the fetch attempt, unless already set by cache hit
            if (loading) { // Check if loading is still true from the initial setting
                 setLoading(false);
            }
        }
    }, [loading]); // Include `loading` in dependency array to avoid stale closure for `if (loading)` check

    // Filter and Sort Handler - no change needed, debounce is good
    const handleSearchAndFilter = useMemo(() => debounce((term, filter, sort, currentItems) => {
        let result = [...currentItems]; // Use currentItems from param to ensure latest state

        if (term) {
            result = result.filter(item => item.name.toLowerCase().includes(term.toLowerCase()) || item.description.toLowerCase().includes(term.toLowerCase()));
        }
        if (filter !== 'all') {
            result = result.filter(item => item.category === filter);
        }
        if (sort === 'price-asc') result.sort((a, b) => a.price - b.price);
        else if (sort === 'price-desc') result.sort((a, b) => b.price - a.price);
        else if (sort === 'rating') result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        else if (sort === 'popular') result.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));

        setFilteredItems(result);
        setVisibleItems(result.slice(0, 8)); // Display more items initially after filter/sort
        setHasMore(result.length > 8);
    }, 300), []);

    // Load more when scrolling - no change needed, it's efficient
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && hasMore) {
                setVisibleItems(prev => {
                    const next = filteredItems.slice(prev.length, prev.length + 8); // Load more per scroll
                    if (prev.length + next.length >= filteredItems.length) setHasMore(false);
                    return [...prev, ...next];
                });
            }
        }, { threshold: 1, rootMargin: '150px' });

        if (loaderRef.current) observer.observe(loaderRef.current);
        return () => observer.disconnect();
    }, [filteredItems, hasMore]);

    // Initial data fetch
    useEffect(() => {
        fetchMenuItems();
    }, [fetchMenuItems]);

    // Apply filter/sort when search term, filter, sort option, or items change
    useEffect(() => {
        handleSearchAndFilter(searchTerm, activeFilter, sortOption, items);
    }, [searchTerm, activeFilter, sortOption, items, handleSearchAndFilter]);


    // Dynamic Schema Markup Generation (as discussed before, assuming this is correct)
    const menuSchema = useMemo(() => {
        if (items.length === 0) return null;

        const overallRating = items.reduce((acc, item) => acc + (item.rating || 0), 0) / (items.length || 1); // Avoid division by zero
        const totalReviews = items.reduce((acc, item) => acc + (item.ratingCount || 0), 0);

        const menuSections = categories.filter(c => c !== 'all').map(category => ({
            "@type": "MenuSection",
            "name": category.charAt(0).toUpperCase() + category.slice(1),
            "hasMenuItem": items
                .filter(item => item.category === category)
                .map(item => ({
                    "@type": "MenuItem",
                    "name": item.name,
                    "description": item.description ? item.description.replace(/"/g, '\\"') : '',
                    "offers": {
                        "@type": "Offer",
                        "price": item.price,
                        "priceCurrency": "INR"
                    },
                    "image": item.imageUrl,
                    ...(item.rating && item.ratingCount > 0 && {
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": item.rating.toString(),
                            "reviewCount": item.ratingCount.toString()
                        }
                    })
                }))
        }));

        return {
            "@context": "http://schema.org",
            "@type": "Restaurant",
            "name": "Mr Egg Hospet",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Your Actual Street Address Here",
                "addressLocality": "Hospet",
                "addressRegion": "Karnataka",
                "postalCode": "583201",
                "addressCountry": "IN"
            },
            "telephone": "+91-XXXXXXXXXX",
            "url": "https://mregg.onrender.com/menu",
            "image": "https://mregg.onrender.com/%PUBLIC_URL%/Mr-Logo1.png",
            "priceRange": "₹₹",
            "servesCuisine": ["Indian", "Egg Dishes", "Fast Food"],
            "menu": "https://mregg.onrender.com/menu",
            "potentialAction": {
                "@type": "OrderAction",
                "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://zomato.onelink.me/xqzv/90nqvalj",
                    "inLanguage": "en-US",
                    "actionPlatform": [
                        "http://schema.org/DesktopWebPlatform",
                        "http://schema.org/MobileWebPlatform"
                    ]
                },
                "deliveryMethod": ["http://schema.org/DeliveryModeMail"],
                "expectsAcceptanceOf": {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "MenuItem"
                    }
                }
            },
            ...(totalReviews > 0 && {
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": overallRating.toFixed(1),
                    "reviewCount": totalReviews.toString()
                }
            }),
            "hasMenu": {
                "@type": "Menu",
                "hasMenuSection": menuSections
            }
        };
    }, [items, categories]);


    return (
        <div className="px-4 py-6 max-w-7xl mx-auto">
            <Helmet>
                <title>Mr Egg Hospet | Full Menu: Rolls, Biryani, Curries, Dosa, Naan & More</title>
                <meta name="description" content="Discover the complete menu at Mr Egg Hospet! Order a wide variety of egg rolls, special egg biryanis, creamy egg curries, crispy dosas, fluffy puris, and soft butter naans. Freshly prepared and available for delivery in Hospet." />
                <meta name="keywords" content="Mr Egg menu, Hospet menu, egg biryani Hospet, egg roll menu, egg curry menu, dosa menu Hospet, puri menu, butter naan Hospet, online food order, cloud kitchen menu" />
                <link rel="canonical" href="https://mregg.onrender.com/menu" />

                {menuSchema && (
                    <script type="application/ld+json">
                        {JSON.stringify(menuSchema)}
                    </script>
                )}
            </Helmet>

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center sm:text-left">
                    Explore Our Menu
                </h1>

                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                    <button
                        onClick={() => navigate('/')}
                        className="w-full sm:w-auto px-4 py-2 bg-gray-100 text-gray-800 rounded-xl hover:bg-gray-200 transition-all flex items-center justify-center gap-2"
                    >
                        ← Back to Home
                    </button>

                    <button
                        onClick={() => navigate('/cart')}
                        className="relative w-full sm:w-auto flex items-center justify-center px-4 py-2 bg-rose-600 text-white rounded-lg"
                    >
                        <FaShoppingCart className="mr-2" />
                        Cart
                        {cartItems.length > 0 && (
                            <span className="ml-2 text-xs bg-black rounded-full px-2 py-0.5">
                                {cartItems.length}
                            </span>
                        )}
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="relative">
                    <FaSearch className="absolute left-3 top-3 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search dishes..."
                        className="w-full pl-10 p-2 border border-gray-300 rounded-lg"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <select value={activeFilter} onChange={(e) => setActiveFilter(e.target.value)} className="p-2 border border-gray-300 rounded-lg">
                    {categories.map(c => <option key={c} value={c}>{c === 'all' ? 'All Categories' : c.charAt(0).toUpperCase() + c.slice(1)}</option>)}
                </select>

                <select value={sortOption} onChange={(e) => setSortOption(e.target.value)} className="p-2 border border-gray-300 rounded-lg">
                    <option value="default">Recommended</option>
                    <option value="price-asc">Price: Low → High</option>
                    <option value="price-desc">Price: High → Low</option>
                    <option value="rating">Top Rated</option>
                    <option value="popular">Popular</option>
                </select>
            </div>

            {loading ? (
                <SkeletonLoader count={8} /> 
            ) : (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        <AnimatePresence>
                            {visibleItems.map(item => (
                                <motion.div
                                    key={item._id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
                                >
                                    <div className="relative h-48 bg-gray-100">
                                        <img
                                            src={item.imageUrl}
                                            alt={item.name}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                        {item.isPopular && (
                                            <span className="absolute top-2 left-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">Popular</span>
                                        )}
                                    </div>
                                    <div className="p-4 flex-grow">
                                        <div className="flex justify-between items-center mb-1">
                                            <h3 className="text-md font-semibold">{item.name}</h3>
                                            <span className="text-rose-600 font-bold">₹{item.price}</span>
                                        </div>
                                        <p className="text-sm text-gray-600">{item.description}</p>
                                        {item.rating && (
                                            <div className="flex mt-2">
                                                {[...Array(5)].map((_, i) =>
                                                    i < item.rating ? <FaStar key={i} className="text-yellow-400" /> : <FaRegStar key={i} className="text-gray-300" />
                                                )}
                                                <span className="text-xs text-gray-500 ml-1">({item.ratingCount || 0})</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="px-4 pb-4">
                                        <button
                                            id={`add-to-cart-${item._id}`}
                                            onClick={() => handleAddToCart(item)}
                                            className="w-full bg-rose-500 hover:bg-rose-600 text-white py-2 rounded-lg transition"
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {hasMore && (
                        <div ref={loaderRef} className="text-center py-6">
                            <FaSpinner className="animate-spin text-2xl text-rose-600 mx-auto" />
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default Menu;