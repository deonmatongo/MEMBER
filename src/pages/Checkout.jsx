import React from 'react';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { useCart } from '@/components/CartContext';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Truck, Lock } from 'lucide-react';

export default function Checkout() {
  const { cart, getCartTotal } = useCart();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h1 className="text-3xl md:text-5xl tracking-widest font-light text-gray-900 mb-4">
              CHECKOUT
            </h1>
            <p className="text-gray-600 tracking-wide font-light">
              Complete your order
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Checkout Form */}
            <div className="lg:col-span-2 space-y-8">
              {/* Placeholder Notice */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gray-50 border border-gray-200 p-6"
              >
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-gray-900 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-sm tracking-widest text-gray-900 mb-2">
                      CHECKOUT COMING SOON
                    </h3>
                    <p className="text-sm text-gray-600 font-light">
                      Payment processing is currently being set up. You can browse products 
                      and add items to your cart. Full checkout functionality will be available soon.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Shipping Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h2 className="text-xl tracking-widest font-light text-gray-900 mb-6">
                  SHIPPING INFORMATION
                </h2>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs tracking-widest text-gray-700 mb-2">
                        FIRST NAME
                      </label>
                      <Input placeholder="John" disabled />
                    </div>
                    <div>
                      <label className="block text-xs tracking-widest text-gray-700 mb-2">
                        LAST NAME
                      </label>
                      <Input placeholder="Doe" disabled />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-xs tracking-widest text-gray-700 mb-2">
                      EMAIL
                    </label>
                    <Input type="email" placeholder="john@example.com" disabled />
                  </div>
                  
                  <div>
                    <label className="block text-xs tracking-widest text-gray-700 mb-2">
                      ADDRESS
                    </label>
                    <Input placeholder="123 Street Name" disabled />
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs tracking-widest text-gray-700 mb-2">
                        CITY
                      </label>
                      <Input placeholder="New York" disabled />
                    </div>
                    <div>
                      <label className="block text-xs tracking-widest text-gray-700 mb-2">
                        STATE
                      </label>
                      <Input placeholder="NY" disabled />
                    </div>
                    <div>
                      <label className="block text-xs tracking-widest text-gray-700 mb-2">
                        ZIP CODE
                      </label>
                      <Input placeholder="10001" disabled />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Payment Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-xl tracking-widest font-light text-gray-900 mb-6">
                  PAYMENT INFORMATION
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs tracking-widest text-gray-700 mb-2">
                      CARD NUMBER
                    </label>
                    <Input placeholder="1234 5678 9012 3456" disabled />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs tracking-widest text-gray-700 mb-2">
                        EXPIRY DATE
                      </label>
                      <Input placeholder="MM/YY" disabled />
                    </div>
                    <div>
                      <label className="block text-xs tracking-widest text-gray-700 mb-2">
                        CVV
                      </label>
                      <Input placeholder="123" disabled />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <Lock className="w-4 h-4" />
                  <span className="text-xs tracking-wide">Secure Payment</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Truck className="w-4 h-4" />
                  <span className="text-xs tracking-wide">Free Shipping Over $100</span>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1"
            >
              <div className="bg-gray-50 p-6 sticky top-32">
                <h2 className="text-xl tracking-widest font-light text-gray-900 mb-6">
                  ORDER SUMMARY
                </h2>
                
                <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                  {cart.map((item) => (
                    <div key={`${item.id}-${item.selectedSize}`} className="flex gap-3">
                      <div className="w-16 h-20 bg-gray-100 overflow-hidden flex-shrink-0">
                        <img
                          src={item.images?.[0]}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-gray-900 mb-1">{item.name}</p>
                        <p className="text-xs text-gray-500">Size: {item.selectedSize}</p>
                        <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                        <p className="text-xs text-gray-900 mt-1">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-3 border-t border-gray-300 pt-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-gray-900">${getCartTotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Shipping</span>
                    <span className="text-gray-900">TBD</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tax</span>
                    <span className="text-gray-900">TBD</span>
                  </div>
                  <div className="border-t border-gray-300 pt-3">
                    <div className="flex justify-between">
                      <span className="text-lg tracking-wide text-gray-900">Total</span>
                      <span className="text-lg font-medium text-gray-900">
                        ${getCartTotal().toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                <Button 
                  disabled
                  className="w-full bg-gray-400 text-white tracking-widest py-6 mt-6 cursor-not-allowed"
                >
                  PLACE ORDER (COMING SOON)
                </Button>
                
                <Link to={createPageUrl('Cart')}>
                  <Button variant="outline" className="w-full tracking-widest py-6 mt-3">
                    BACK TO CART
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 px-4 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs tracking-widest text-gray-400">
            © 2025 MEMBER. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  );
}