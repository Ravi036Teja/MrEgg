import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  FaShoppingBag,
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
  FaSpinner,
  FaBoxOpen,
  FaChevronDown,
  FaChevronUp,
  FaRupeeSign
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const MyOrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedOrder, setExpandedOrder] = useState(null);
  const userId = localStorage.getItem('userId');
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const toggleOrderExpand = (orderId) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId);
  };

  const getStatusIcon = (status) => {
    const statusValue = status?.toLowerCase() || 'pending';
    switch (statusValue) {
      case 'completed':
      case 'paid': return <FaCheckCircle className="text-green-500 mr-2" />;
      case 'cancelled':
      case 'failed': return <FaTimesCircle className="text-red-500 mr-2" />;
      default: return <FaClock className="text-amber-500 mr-2" />;
    }
  };

  const getStatusColor = (status) => {
    const statusValue = status?.toLowerCase() || 'pending';
    switch (statusValue) {
      case 'completed':
      case 'paid': return 'bg-green-100 text-green-800';
      case 'cancelled':
      case 'failed': return 'bg-red-100 text-red-800';
      case 'processing': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const fetchOrders = async () => {
    try {
      if (!userId || !token) {
        navigate('/login');
        return;
      }

      const response = await axios.get(
        `https://freshbitezone.onrender.com/api/orders/user/${userId}`,
        {
          headers: { 
            Authorization: `Bearer ${token}`,
            // 'Cache-Control': 'no-cache'
          }
        }
      );

      const processedOrders = (response.data || []).map(order => ({
        ...order,
        paymentStatus: order.paymentStatus?.toLowerCase() || 'pending',
        status: order.status?.toLowerCase() || 'processing',
        items: order.items?.map(item => ({
          ...item,
          price: item.price || 0,
          quantity: item.quantity || 1,
          name: item.name || 'Unnamed Item'
        })) || []
      }));

      setOrders(processedOrders);
      setError(null);
    } catch (err) {
      if (err.response?.status === 404) {
        setOrders([]);
        setError(null);
      } else {
        setError(err.response?.data?.message || err.message || 'Failed to load orders');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
    const interval = setInterval(fetchOrders, 30000);
    return () => clearInterval(interval);
  }, [userId, token, navigate]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <FaSpinner className="animate-spin text-4xl text-rose-600 mb-4 mx-auto" />
          <p>Loading your orders...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          {error}
        </div>
        <button
          onClick={() => navigate('/menu')}
          className="px-6 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition"
        >
          Back to Menu
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900 flex items-center">
          <FaShoppingBag className="mr-3 text-rose-600" /> My Orders
        </h1>
        <button
          onClick={() => navigate('/menu')}
          className="px-5 py-2 bg-gray-100 text-gray-800 rounded-xl hover:bg-gray-200 transition-all"
        >
          Back to Menu
        </button>
      </div>

      {orders.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-6">
            <FaBoxOpen size={48} className="mx-auto" />
          </div>
          <h3 className="text-xl font-medium text-gray-700 mb-2">No orders found</h3>
          <p className="text-gray-500 mb-6">You haven't placed any orders yet</p>
          <button
            onClick={() => navigate('/menu')}
            className="px-6 py-3 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition"
          >
            Browse Menu
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <AnimatePresence>
            {orders.map((order) => (
              <motion.div
                key={order._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <div
                  className="p-4 cursor-pointer flex justify-between items-center hover:bg-gray-50"
                  onClick={() => toggleOrderExpand(order._id)}
                >
                  <div className="flex items-center">
                    {getStatusIcon(order.paymentStatus)}
                    <div>
                      <h3 className="font-semibold">
                        Order #{order.orderId?.slice(-6).toUpperCase() || order._id.slice(-6).toUpperCase()}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {formatDate(order.createdAt)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.paymentStatus)}`}>
                      {order.paymentStatus || 'Pending'}
                    </span>
                    <span className="ml-4 font-bold text-lg flex items-center">
                      <FaRupeeSign className="mr-1" />
                      {order.totalAmount?.toFixed(2) || '0.00'}
                    </span>
                    {expandedOrder === order._id ? (
                      <FaChevronUp className="ml-4 text-gray-500" />
                    ) : (
                      <FaChevronDown className="ml-4 text-gray-500" />
                    )}
                  </div>
                </div>

                {expandedOrder === order._id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-100"
                  >
                    <div className="p-4">
                      <h4 className="font-medium text-gray-900 mb-3">Items Ordered</h4>
                      
                      <div className="mb-4">
                        <h4 className="font-medium text-gray-900 mb-2">Order Status</h4>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          order.status === 'completed' ? 'bg-green-100 text-green-800' :
                          order.status === 'cancelled' ? 'bg-red-100 text-red-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {order.status}
                        </span>
                      </div>

                      <div className="space-y-3">
                        {order.items.map((item, idx) => (
                          <div key={idx} className="flex justify-between py-2 border-b border-gray-100 last:border-0">
                            <div className="flex items-start">
                              <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden mr-4 flex-shrink-0">
                                {item.image ? (
                                  <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover"
                                  />
                                ) : (
                                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                                    <FaShoppingBag />
                                  </div>
                                )}
                              </div>
                              <div>
                                <h5 className="font-medium">{item.name}</h5>
                                <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="font-medium flex items-center justify-end">
                                <FaRupeeSign className="mr-1" />
                                {(item.price || 0).toFixed(2)}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="border-t border-gray-200 mt-4 pt-4">
                        <div className="flex justify-between py-1">
                          <span className="text-gray-600">Subtotal</span>
                          <span className="font-medium flex items-center">
                            <FaRupeeSign className="mr-1" />
                            {order.items.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}
                          </span>
                        </div>
                        <div className="flex justify-between py-1">
                          <span className="text-gray-600">Delivery</span>
                          <span className="font-medium flex items-center">
                            <FaRupeeSign className="mr-1" />
                            {order.deliveryOption === 'delivery' ? '50.00' : '0.00'}
                          </span>
                        </div>
                        <div className="flex justify-between py-3 border-t border-gray-200 mt-2">
                          <span className="font-bold text-gray-900">Total</span>
                          <span className="font-bold text-rose-600 text-lg flex items-center">
                            <FaRupeeSign className="mr-1" />
                            {order.totalAmount.toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default MyOrdersPage;