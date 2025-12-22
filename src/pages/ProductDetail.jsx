import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getProductById } from '@/api/products';
import { useCart } from '@/components/CartContext';
import { motion } from 'framer-motion';
import { ShoppingCart, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export default function ProductDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedImage, setSelectedImage] = useState(0);

  const { data: product, isLoading } = useQuery({
    queryKey: ['product', productId],
    queryFn: () => getProductById(productId),
    enabled: !!productId
  });

  // Set initial size if not selected
  React.useEffect(() => {
    if (!selectedSize && product?.sizes && product.sizes.length > 0) {
      setSelectedSize(product.sizes[0]);
    }
  }, [product, selectedSize]);

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error('Please select a size');
      return;
    }
    if (!product.in_stock) return;
    addToCart(product, selectedSize);
    toast.success('Added to cart!');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-32 pb-16 px-4 flex items-center justify-center">
          <p className="text-gray-500 tracking-wide">Loading...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-32 pb-16 px-4 flex items-center justify-center">
          <p className="text-gray-500 tracking-wide">Product not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <Link to={createPageUrl('Shop')} className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Shop
          </Link>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="aspect-[3/4] overflow-hidden bg-gray-100"
              >
                <img
                  src={product.images?.[selectedImage] || product.images?.[0]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Thumbnail Images */}
              {product.images && product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`aspect-square overflow-hidden bg-gray-100 border-2 transition-all ${
                        selectedImage === index ? 'border-gray-900' : 'border-transparent'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {product.featured && (
                <span className="inline-block bg-gray-900 text-white px-3 py-1 text-xs tracking-widest">
                  FEATURED
                </span>
              )}
              
              <div>
                <h1 className="text-3xl md:text-4xl tracking-widest font-light text-gray-900 mb-4">
                  {product.name}
                </h1>
                <p className="text-2xl font-light text-gray-900">
                  {product.price.toFixed(2)} PLN
                </p>
              </div>

              {product.description && (
                <div>
                  <p className="text-gray-600 leading-relaxed font-light">
                    {product.description}
                  </p>
                </div>
              )}

              {/* Size Selection */}
              {product.sizes && product.sizes.length > 0 && (
                <div>
                  <h3 className="text-sm tracking-widest text-gray-900 mb-3">
                    SELECT SIZE
                  </h3>
                  <div className="flex gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-6 py-3 text-sm border transition-all ${
                          selectedSize === size
                            ? 'bg-gray-900 text-white border-gray-900'
                            : 'bg-white text-gray-900 border-gray-300 hover:border-gray-900'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Colors */}
              {product.colors && product.colors.length > 0 && (
                <div>
                  <h3 className="text-sm tracking-widest text-gray-900 mb-3">
                    AVAILABLE COLORS
                  </h3>
                  <div className="flex gap-2">
                    {product.colors.map((color) => (
                      <span
                        key={color}
                        className="px-3 py-1 text-xs border border-gray-300 text-gray-600"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Add to Cart */}
              <div className="pt-4">
                <Button
                  onClick={handleAddToCart}
                  disabled={!product.in_stock}
                  className={`w-full flex items-center justify-center gap-2 py-6 text-sm tracking-widest ${
                    product.in_stock
                      ? 'bg-gray-900 text-white hover:bg-gray-800'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <ShoppingCart className="w-5 h-5" />
                  {product.in_stock ? 'ADD TO CART' : 'SOLD OUT'}
                </Button>
              </div>

              {/* Product Details */}
              <div className="border-t border-gray-200 pt-6 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Category</span>
                  <span className="text-gray-900 uppercase tracking-wide">{product.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Availability</span>
                  <span className="text-gray-900">
                    {product.in_stock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
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