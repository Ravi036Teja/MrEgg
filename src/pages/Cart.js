import React, { useState } from 'react';
import { useCart } from '../Context/CartContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaTrash, FaPlus, FaMinus, FaArrowLeft, FaShoppingBag, FaCreditCard } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import qrCode from '../assets/Images/QR_CODE.jpeg';

const PHONEPE_DETAILS = {
  upiId: '9380609674@ibl',
  qrCode: qrCode,
  instructions: [
    '1. Open PhonePe app on your phone',
    '2. Go to "Scan & Pay" section',
    '3. Scan the QR code below or enter UPI ID manually',
    '4. Enter the exact amount: ₹{amount}',
    '5. Add order ID in payment note/message',
    '6. Complete the payment and save transaction ID',
    '7. Payment will be verified within 15 minutes'
  ]
};

const CartPage = () => {
  const { cartItems, clearCart, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [deliveryOption, setDeliveryOption] = useState('delivery');
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [showUPIDetails, setShowUPIDetails] = useState(false);
  const [currentOrder, setCurrentOrder] = useState(null);
  const [deliveryAddress, setDeliveryAddress] = useState({
    name: '',
    street: '',
    city: '',
    phone: '',
    instructions: ''
  });

  const calculateSubtotal = () => cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  // const calculateTax = () => calculateSubtotal() * 0.18; // Changed to 18% as shown in the tax display
  const calculateTotal = () => calculateSubtotal() + (deliveryOption === 'delivery' ? 50 : 0);

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    updateQuantity(itemId, newQuantity);
  };

  const handleAddressChange = (e) => {
    setDeliveryAddress({ ...deliveryAddress, [e.target.name]: e.target.value });
  };

  const validateAddress = () => {
    if (deliveryOption === 'delivery') {
      return ['name', 'street', 'city', 'phone'].every(field => deliveryAddress[field]?.trim() !== '');
    }
    return true;
  };

  const handlePlaceOrder = async () => {
    if (cartItems.length === 0) {
      toast.warning('Your cart is empty!', { position: "top-center" });
      return;
    }

    if (!validateAddress()) {
      toast.error('Please fill in all required delivery address fields', { position: "top-center" });
      return;
    }

    setIsProcessing(true);
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    try {
      const orderData = {
        user: userId,
        items: cartItems.map(item => ({
          menuItemId: item._id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
        })),
        totalAmount: calculateTotal(),
        deliveryOption,
        deliveryAddress: deliveryOption === 'delivery' ? deliveryAddress : null,
        paymentMethod,
        status: paymentMethod === 'cash' ? 'pending' : 'payment_pending'
      };

      const res = await axios.post('https://freshbitezone.onrender.com/api/orders', orderData, {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (paymentMethod === 'card') {
        setCurrentOrder(res.data);
        setShowUPIDetails(true);
        toast.info(
          <div>
            <p>Please complete PhonePe payment</p>
            <p>Order ID: {res.data._id}</p>
            <p>Amount: ₹{res.data.totalAmount.toFixed(2)}</p>
          </div>, 
          { position: "top-center", autoClose: false }
        );
      } else {
        toast.success('Order placed successfully! Pay on delivery.', { position: "top-center" });
        clearCart();
        navigate('/order-confirmation', { state: { orderId: res.data._id } });
      }
    } catch (err) {
      console.error('Order failed:', err);
      toast.error(`Order failed: ${err.response?.data?.message || err.message}`, { position: "top-center" });
    } finally {
      setIsProcessing(false);
    }
  };

  const UPIPaymentSection = () => (
    <div className="bg-white rounded-lg p-4 mt-4 border border-rose-200 shadow-sm">
      <h3 className="text-xl font-bold text-rose-700 mb-4">Complete Your Payment</h3>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-rose-50 p-4 rounded-lg">
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Scan QR Code</h4>
            <img 
              src={PHONEPE_DETAILS.qrCode} 
              alt="PhonePe QR Code" 
              className="w-full max-w-[250px] mx-auto border-4 border-white rounded-lg"
            />
          </div>
          <div>
            <h4 className="font-semibold mb-2">OR Use UPI ID</h4>
            <div className="bg-white p-3 rounded border border-rose-200">
              <p className="text-center font-mono text-rose-700 break-all">
                {PHONEPE_DETAILS.upiId}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-3">Payment Instructions</h4>
          <ol className="list-decimal list-inside space-y-3">
            {PHONEPE_DETAILS.instructions.map((step, index) => (
              <li 
                key={index}
                className="text-gray-700 bg-white p-3 rounded border border-gray-200"
              >
                {step.replace('{amount}', currentOrder?.totalAmount.toFixed(2))}
              </li>
            ))}
          </ol>
          <div className="mt-4 p-3 bg-yellow-100 rounded border border-yellow-200">
            <p className="text-sm text-yellow-800">
              Note: Order will be processed only after payment verification. 
              Keep the transaction ID safe for reference.
            </p>
          </div>
          <button
            onClick={() => navigate('/orders')}
            className="mt-4 w-full py-2 bg-rose-600 text-white rounded hover:bg-rose-700"
          >
            View Order Status
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center mb-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-rose-600 hover:text-rose-700 mr-4"
        >
          <FaArrowLeft className="mr-2" /> Back
        </button>
        <h1 className="text-3xl font-bold text-gray-900 flex items-center">
          <FaShoppingBag className="mr-3 text-rose-600" /> Your Shopping Cart
        </h1>
        {cartItems.length > 0 && (
          <button
            onClick={clearCart}
            className="ml-auto flex items-center text-sm text-gray-500 hover:text-rose-600"
          >
            <FaTrash className="mr-1" /> Clear Cart
          </button>
        )}
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-6">
            <FaShoppingBag size={48} className="mx-auto" />
          </div>
          <h3 className="text-xl font-medium text-gray-700 mb-2">Your cart is empty</h3>
          <p className="text-gray-500 mb-6">Looks like you haven't added any items yet</p>
          <button
            onClick={() => navigate('/menu')}
            className="px-6 py-3 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition"
          >
            Browse Menu
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm divide-y divide-gray-100">
              <AnimatePresence>
                {cartItems.map((item) => (
                  <motion.div
                    key={item._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 flex"
                  >
                    <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden mr-4 flex-shrink-0">
                      {item.imageUrl ? (
                        <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                          <FaShoppingBag />
                        </div>
                      )}
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between">
                        <h3 className="font-semibold text-gray-900">{item.name}</h3>
                        <button
                          onClick={() => removeFromCart(item._id)}
                          className="text-gray-400 hover:text-rose-600"
                        >
                          <FaTrash />
                        </button>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-gray-200 rounded-lg">
                          <button
                            onClick={() => handleQuantityChange(item._id, item.quantity - 1)}
                            className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                            disabled={item.quantity <= 1}
                          >
                            <FaMinus size={12} />
                          </button>
                          <span className="px-3 py-1 text-gray-800">{item.quantity}</span>
                          <button
                            onClick={() => handleQuantityChange(item._id, item.quantity + 1)}
                            className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                          >
                            <FaPlus size={12} />
                          </button>
                        </div>
                        <p className="font-semibold text-gray-900">₹{(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-4">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

              <div className="mb-6">
                <h3 className="font-medium text-gray-900 mb-3">Delivery Option</h3>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setDeliveryOption('delivery')}
                    className={`py-2 px-4 rounded-lg border ${deliveryOption === 'delivery' ? 'border-rose-500 bg-rose-50 text-rose-700' : 'border-gray-200'}`}
                  >
                    Delivery
                  </button>
                  <button
                    onClick={() => setDeliveryOption('pickup')}
                    className={`py-2 px-4 rounded-lg border ${deliveryOption === 'pickup' ? 'border-rose-500 bg-rose-50 text-rose-700' : 'border-gray-200'}`}
                  >
                    Pickup
                  </button>
                </div>
              </div>

              {deliveryOption === 'delivery' && (
                <div className="mb-6 space-y-3">
                  <h3 className="font-medium text-gray-900">Delivery Address</h3>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name*"
                    value={deliveryAddress.name}
                    onChange={handleAddressChange}
                    className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    required
                  />
                  <input
                    type="text"
                    name="street"
                    placeholder="Street Address*"
                    value={deliveryAddress.street}
                    onChange={handleAddressChange}
                    className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    required
                  />
                  <input
                    type="text"
                    name="city"
                    placeholder="City*"
                    value={deliveryAddress.city}
                    onChange={handleAddressChange}
                    className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    required
                  />
                    <input
                      type="number"
                      name="phone"
                      placeholder="Phone Number*"
                      value={deliveryAddress.phone}
                      onChange={handleAddressChange}
                      className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      required
                      pattern="[0-9]{10}"
                      maxLength="10"
                    />
                    <input
                      type="text"
                      name="instructions"
                      placeholder="Delivery Instructions"
                      value={deliveryAddress.instructions}
                      onChange={handleAddressChange}
                      className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    />
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-medium text-gray-900 mb-3">Payment Method</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setPaymentMethod('cash')}
                    className={`w-full py-2 px-4 rounded-lg border flex items-center ${paymentMethod === 'cash' ? 'border-rose-500 bg-rose-50 text-rose-700' : 'border-gray-200'}`}
                  >
                    <FaCreditCard className="mr-2" /> Cash on Delivery
                  </button>
                  <button
                    onClick={() => setPaymentMethod('card')}
                    className={`w-full py-2 px-4 rounded-lg border flex items-center ${paymentMethod === 'card' ? 'border-rose-500 bg-rose-50 text-rose-700' : 'border-gray-200'}`}
                  >
                    <FaCreditCard className="mr-2" /> Pay via PhonePe UPI
                  </button>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">₹{calculateSubtotal().toFixed(2)}</span>
                </div>
                {/* <div className="flex justify-between py-2">
                  <span className="text-gray-600">GST (5%)</span>
                  <span className="font-medium">₹{calculateTax().toFixed(2)}</span>
                </div> */}
                {deliveryOption === 'delivery' && (
                  <div className="flex justify-between py-2">
                    <span className="text-gray-600">Delivery Fee</span>
                    <span className="font-medium">₹50.00</span>
                  </div>
                )}
                <div className="flex justify-between py-3 border-t border-gray-200 mt-2">
                  <span className="font-bold text-gray-900">Total</span>
                  <span className="font-bold text-rose-600 text-lg">₹{calculateTotal().toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={handlePlaceOrder}
                disabled={isProcessing}
                className={`w-full py-3 bg-gradient-to-r from-rose-600 to-rose-500 text-white rounded-lg hover:from-rose-700 hover:to-rose-600 transition flex items-center justify-center ${isProcessing ? 'opacity-75 cursor-not-allowed' : ''}`}
              >
                {isProcessing ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {paymentMethod === 'card' ? 'Creating Order...' : 'Placing Order...'}
                  </>
                ) : (
                  paymentMethod === 'card' ? 'Proceed to UPI Payment' : 'Place Order'
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {showUPIDetails && <UPIPaymentSection />}
    </div>
  );
};

export default CartPage;