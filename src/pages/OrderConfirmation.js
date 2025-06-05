import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import { 
  FaCheckCircle, 
  FaClock, 
  FaMapMarkerAlt, 
  FaShoppingBag, 
  FaCreditCard, 
  FaHome, 
  FaStore,
  FaUser,
  FaPhone,
  FaEnvelope,
  FaBoxOpen,
  FaMotorcycle,
  FaCheck,
  FaTimes
} from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

const OrderConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { width, height } = useWindowSize();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const orderId = location.state?.orderId;
        if (!orderId) {
          toast.error('Order not found');
          navigate('/');
          return;
        }

        const token = localStorage.getItem('token');
        const response = await axios.get(`https://freshbitezone.onrender.com/api/orders/${orderId}`, {
          headers: { 
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        
        setOrder(response.data);
        
        // Show confetti only for new orders (first 5 seconds)
        setTimeout(() => setShowConfetti(false), 5000);
      } catch (err) {
        console.error('Error fetching order:', err);
        
        let errorMessage = 'Failed to load order details';
        if (err.response) {
          if (err.response.status === 404) {
            errorMessage = 'Order not found';
            navigate('/orders');
          } else if (err.response.status === 401) {
            errorMessage = 'Please login to view this order';
            navigate('/login');
          }
        } else if (err.code === 'ECONNRESET') {
          errorMessage = 'Connection to server failed. Please try again.';
        }
      
        setError(errorMessage);
        toast.error(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [location.state, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-rose-50 to-white">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-rose-600 mb-4"></div>
        <p className="text-gray-600">Loading your order details...</p>
      </div>
    );
  }

  if (error || !order) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-rose-50 to-white text-center p-6">
        <div className="bg-rose-100 p-6 rounded-full mb-6">
          <FaTimes className="text-rose-600 text-4xl" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Not Found</h1>
        <p className="text-gray-600 mb-8 max-w-md">
          {error || 'We couldn\'t find your order details. Please check your order history or contact support.'}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => navigate('/orders')}
            className="bg-gradient-to-r from-rose-600 to-rose-500 text-white px-6 py-3 rounded-lg hover:from-rose-700 hover:to-rose-600 transition shadow-lg"
          >
            View Order History
          </button>
          <button
            onClick={() => navigate('/menu')}
            className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition"
          >
            Back to Menu
          </button>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const options = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString('en-IN', options);
  };

  const formatOrderId = (orderId) => {
    if (!orderId) return 'N/A';
    
    // Extract only numbers from the order ID
    const numbersOnly = orderId.replace(/\D/g, '');
    
    // Get the last 4 digits
    const lastFourDigits = numbersOnly.slice(-4);
    
    // If we have at least 4 digits, format with #
    if (lastFourDigits.length >= 4) {
      return `#${lastFourDigits}`;
    }
    
    // Fallback for shorter IDs
    return `#${orderId.slice(-4)}`;
  };

  const getStatusDetails = (status) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return {
          color: 'bg-green-100 text-green-800',
          icon: <FaCheckCircle className="text-green-500" />,
          message: 'Your order has been delivered!'
        };
      case 'cancelled':
        return {
          color: 'bg-red-100 text-red-800',
          icon: <FaTimes className="text-red-500" />,
          message: 'Your order has been cancelled'
        };
      case 'processing':
        return {
          color: 'bg-blue-100 text-blue-800',
          icon: <FaBoxOpen className="text-blue-500" />,
          message: 'We\'re preparing your order'
        };
      case 'out for delivery':
        return {
          color: 'bg-purple-100 text-purple-800',
          icon: <FaMotorcycle className="text-purple-500" />,
          message: 'Your food is on the way!'
        };
      default:
        return {
          color: 'bg-amber-100 text-amber-800',
          icon: <FaClock className="text-amber-500" />,
          message: 'Your order is being processed'
        };
    }
  };

  const statusDetails = getStatusDetails(order.status);

  const getEstimatedTime = () => {
    const orderTime = new Date(order.createdAt);
    if (order.deliveryOption === 'delivery') {
      orderTime.setMinutes(orderTime.getMinutes() + 45);
      return `Estimated delivery by ${orderTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    } else {
      orderTime.setMinutes(orderTime.getMinutes() + 30);
      return `Ready for pickup by ${orderTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    }
  };

  const renderTimeline = () => {
    const steps = [
      { id: 'pending', label: 'Order Placed' },
      { id: 'processing', label: 'Preparing' },
      { id: order.deliveryOption === 'delivery' ? 'out for delivery' : 'ready for pickup', 
        label: order.deliveryOption === 'delivery' ? 'Out for Delivery' : 'Ready for Pickup' },
      { id: 'completed', label: 'Delivered' }
    ];

    const currentStepIndex = steps.findIndex(step => step.id === order.status);
    
    return (
      <div className="relative pt-2 pb-8">
        <div className="absolute h-full w-0.5 bg-gray-200 left-4 top-0 z-0"></div>
        
        {steps.map((step, index) => {
          const isCompleted = index < currentStepIndex || order.status === 'completed';
          const isCurrent = index === currentStepIndex;
          const isPending = index > currentStepIndex;
          
          return (
            <div key={step.id} className="relative flex items-start mb-8 z-10">
              <div className={`rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 ${
                isCompleted ? 'bg-green-500 text-white' :
                isCurrent ? 'bg-rose-600 text-white' :
                'bg-gray-200 text-gray-600'
              }`}>
                {isCompleted ? <FaCheck size={14} /> : index + 1}
              </div>
              <div className="ml-4">
                <p className={`font-medium ${
                  isCompleted ? 'text-green-600' :
                  isCurrent ? 'text-rose-600' :
                  'text-gray-500'
                }`}>
                  {step.label}
                </p>
                {isCurrent && (
                  <p className="text-sm text-gray-500 mt-1">{statusDetails.message}</p>
                )}
                {isCompleted && index === steps.length - 1 && (
                  <p className="text-sm text-gray-500 mt-1">Enjoy your meal!</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-rose-50 to-white"
    >
      {showConfetti && (
        <Confetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={500}
          gravity={0.2}
        />
      )}

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Order Confirmation Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="inline-block mb-6"
          >
            <div className="bg-white p-4 rounded-full shadow-lg border-4 border-green-100">
              <FaCheckCircle className="text-green-500 text-5xl" />
            </div>
          </motion.div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Order Confirmed!</h1>
          <p className="text-lg text-gray-600 mb-6">
            Thank you for your order! Here are your order details.
          </p>
          
          <div className="bg-white rounded-xl shadow-sm p-6 max-w-2xl mx-auto mb-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left">
                <h2 className="text-xl font-semibold text-gray-900">
                  Order ID : <span className="text-rose-600">{formatOrderId(order.orderId)}</span>
                </h2>
                <p className="text-gray-600">Placed on {formatDate(order.createdAt)}</p>
              </div>
              
              <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${statusDetails.color}`}>
                <span className="mr-2">{statusDetails.icon}</span>
                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
              </div>
            </div>
            
            <div className="mt-4 bg-amber-50 p-3 rounded-lg border border-amber-100">
              <p className="text-amber-800 flex items-center">
                <FaClock className="mr-2" /> {getEstimatedTime()}
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Delivery/Pickup Information */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              {order.deliveryOption === 'delivery' ? (
                <>
                  <FaHome className="mr-2 text-rose-600" /> Delivery Information
                </>
              ) : (
                <>
                  <FaStore className="mr-2 text-rose-600" /> Pickup Information
                </>
              )}
            </h2>
            
            {order.deliveryOption === 'delivery' ? (
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-900 mb-2 flex items-center">
                    <FaUser className="mr-2 text-rose-500" /> Delivery Address
                  </h3>
                  <div className="space-y-2">
                    <p className="text-gray-700">{order.deliveryAddress?.street}</p>
                    <p className="text-gray-700">{order.deliveryAddress?.city}, {order.deliveryAddress?.state} - {order.deliveryAddress?.pincode}</p>
                  </div>
                </div>
                
                {order.deliveryAddress?.instructions && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium text-gray-900 mb-2 flex items-center">
                      <FaMapMarkerAlt className="mr-2 text-rose-500" /> Special Instructions
                    </h3>
                    <p className="text-gray-700">{order.deliveryAddress.instructions}</p>
                  </div>
                )}
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-900 mb-2 flex items-center">
                    <FaPhone className="mr-2 text-rose-500" /> Contact Information
                  </h3>
                  <p className="text-gray-700">{order.userDetails?.phone || 'Not provided'}</p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-900 mb-2 flex items-center">
                    <FaStore className="mr-2 text-rose-500" /> Pickup Location
                  </h3>
                  <div className="space-y-2">
                    <p className="text-gray-700">Near Akashvani, Nekar Colony 4th Cross</p>
                    <p className="text-gray-700">Hospet - 583201</p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-900 mb-2 flex items-center">
                    <FaClock className="mr-2 text-rose-500" /> Pickup Time
                  </h3>
                  <p className="text-gray-700">Ready in 20-30 minutes</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-900 mb-2 flex items-center">
                    <FaPhone className="mr-2 text-rose-500" /> Contact
                  </h3>
                  <p className="text-gray-700">+91 9380609674</p>
                </div>
              </div>
            )}
          </div>

          {/* Payment Summary */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <FaCreditCard className="mr-2 text-rose-600" /> Payment Summary
            </h2>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">Payment Method</h3>
                <p className="capitalize text-gray-700">
                  {order.paymentMethod === 'cash' ? 'Cash on Delivery' : 
                   order.paymentMethod === 'card' ? 'Credit/Debit Card' : 
                   order.paymentMethod.toUpperCase()}
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">Payment Status</h3>
                <p className={`font-medium ${
                  order.paymentStatus === 'paid' ? 'text-green-600' : 
                  order.paymentStatus === 'failed' ? 'text-red-600' : 'text-amber-600'
                }`}>
                  {order.paymentStatus.charAt(0).toUpperCase() + order.paymentStatus.slice(1)}
                </p>
              </div>
              
              <div className="border-t border-gray-200 pt-4 mt-2">
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Subtotal ({order.items.length} items)</span>
                  <span className="font-medium">₹{order.items.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}</span>
                </div>
                
                {/* <div className="flex justify-between py-2">
                  <span className="text-gray-600">Tax (18%)</span>
                  <span className="font-medium">₹{(order.totalAmount * 0.18).toFixed(2)}</span>
                </div> */}
                
                {order.deliveryOption === 'delivery' && (
                  <div className="flex justify-between py-2">
                    <span className="text-gray-600">Delivery Fee</span>
                    <span className="font-medium">₹50.00</span>
                  </div>
                )}
                
                <div className="flex justify-between py-3 border-t border-gray-200 mt-2 font-bold text-lg">
                  <span className="text-gray-900">Total Amount</span>
                  <span className="text-rose-600">₹{order.totalAmount.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Order Items */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <FaShoppingBag className="mr-2 text-rose-600" /> Order Items
          </h2>
          
          <div className="divide-y divide-gray-100">
            {order.items.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="py-4 flex items-center hover:bg-gray-50 rounded-lg px-2"
              >
                <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden mr-4 flex-shrink-0">
                  {item.imageUrl ? (
                    <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <FaShoppingBag size={24} />
                    </div>
                  )}
                </div>
                <div className="flex-grow">
                  <h3 className="font-medium text-gray-900">{item.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">Quantity: {item.quantity}</p>
                </div>
                <div className="ml-4 text-right">
                  <p className="font-medium">₹{(item.price * item.quantity).toFixed(2)}</p>
                  <p className="text-sm text-gray-500">₹{item.price.toFixed(2)} each</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Order Status Timeline */}
        {/* <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <FaClock className="mr-2 text-rose-600" /> Order Status Timeline
          </h2>
          {renderTimeline()}
        </div> */}

        {/* Help Section */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Need help with your order?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2 flex items-center">
                <FaPhone className="mr-2 text-rose-500" /> Contact Information
              </h3>
              <p className="text-gray-700">Phone: +91 9380609674</p>
              <p className="text-gray-700 mt-1">Email: freshbitezone24@gmail.com</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2 flex items-center">
                <FaEnvelope className="mr-2 text-rose-500" /> Order Support
              </h3>
              <p className="text-gray-700">
                If you need to modify or cancel your order, please contact us immediately.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => navigate('/menu')}
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition flex items-center justify-center"
          >
            <FaShoppingBag className="mr-2" /> Order Again
          </button>
          <button
            onClick={() => navigate('/orders')}
            className="px-6 py-3 bg-gradient-to-r from-rose-600 to-rose-500 text-white rounded-lg hover:from-rose-700 hover:to-rose-600 transition flex items-center justify-center"
          >
            View All Orders
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default OrderConfirmation;