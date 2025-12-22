import React from 'react';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { useCart } from '@/components/CartContext';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        
        <div className="pt-24 sm:pt-32 pb-12 sm:pb-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4 sm:space-y-6"
            >
              <ShoppingBag className="w-12 h-12 sm:w-16 sm:h-16 mx-auto text-gray-300" />
              <h1 className="text-2xl sm:text-3xl md:text-4xl tracking-widest font-light text-gray-900">
                YOUR CART IS EMPTY
              </h1>
              <p className="text-sm sm:text-base text-gray-600 tracking-wide font-light">
                Add some items to get started
              </p>
              <Link to={createPageUrl('Shop')}>
                <Button className="mt-4 sm:mt-6 bg-gray-900 text-white hover:bg-gray-800 tracking-widest px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base">
                  CONTINUE SHOPPING
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-24 sm:pt-32 pb-12 sm:pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 sm:mb-12"
          >
            <h1 className="text-2xl sm:text-3xl md:text-5xl tracking-widest font-light text-gray-900 mb-3 sm:mb-4">
              SHOPPING CART
            </h1>
            <div className="flex justify-between items-center flex-wrap gap-2">
              <p className="text-sm sm:text-base text-gray-600 tracking-wide font-light">
                {cart.length} Item{cart.length !== 1 ? 's' : ''}
              </p>
              <button
                onClick={clearCart}
                className="text-xs sm:text-sm text-gray-500 hover:text-red-600 transition-colors underline"
              >
                Clear Cart
              </button>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item, index) => (
                <motion.div
                  key={`${item.id}-${item.selectedSize}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white border border-gray-200 p-3 sm:p-4"
                >
                  <div className="flex gap-3 sm:gap-4">
                    {/* Product Image */}
                    <div className="w-20 h-28 sm:w-24 sm:h-32 flex-shrink-0 bg-gray-100 overflow-hidden">
                      <img
                        src={item.images?.[0]}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 flex flex-col justify-between min-w-0">
                      <div>
                        <h3 className="text-xs sm:text-sm tracking-wide text-gray-900 mb-1 truncate">
                          {item.name}
                        </h3>
                        <p className="text-xs text-gray-500 mb-2">
                          Size: {item.selectedSize}
                        </p>
                        <p className="text-xs sm:text-sm font-light text-gray-900">
                          {item.price.toFixed(2)} PLN
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 sm:gap-3 mt-3 sm:mt-4">
                        <div className="flex items-center border border-gray-300">
                          <button
                            onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity - 1)}
                            className="p-1.5 sm:p-2 hover:bg-gray-100 transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 sm:px-4 text-xs sm:text-sm">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity + 1)}
                            className="p-1.5 sm:p-2 hover:bg-gray-100 transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        
                        <button
                          onClick={() => removeFromCart(item.id, item.selectedSize)}
                          className="text-gray-400 hover:text-red-600 transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Item Total */}
                    <div className="text-right flex-shrink-0">
                      <p className="text-xs sm:text-sm font-light text-gray-900">
                        {(item.price * item.quantity).toFixed(2)} PLN
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1"
            >
              <div className="bg-gray-50 p-4 sm:p-6 lg:sticky lg:top-32">
                <h2 className="text-lg sm:text-xl tracking-widest font-light text-gray-900 mb-4 sm:mb-6">
                  ORDER SUMMARY
                </h2>
                
                <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-gray-900">{getCartTotal().toFixed(2)} PLN</span>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-gray-600">Shipping</span>
                    <span className="text-gray-900 text-right">Calculated at checkout</span>
                  </div>
                  <div className="border-t border-gray-300 pt-3 sm:pt-4">
                    <div className="flex justify-between">
                      <span className="text-base sm:text-lg tracking-wide text-gray-900">Total</span>
                      <span className="text-base sm:text-lg font-medium text-gray-900">
                        {getCartTotal().toFixed(2)} PLN
                      </span>
                    </div>
                  </div>
                </div>

                <Link to={createPageUrl('Checkout')}>
                  <Button className="w-full bg-gray-900 text-white hover:bg-gray-800 tracking-widest py-4 sm:py-6 mb-3 sm:mb-4 text-xs sm:text-sm">
                    PROCEED TO CHECKOUT
                  </Button>
                </Link>
                
                <Link to={createPageUrl('Shop')}>
                  <Button variant="outline" className="w-full tracking-widest py-4 sm:py-6 text-xs sm:text-sm">
                    CONTINUE SHOPPING
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