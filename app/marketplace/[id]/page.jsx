'use client';

import React, { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { ShoppingCart, MapPin, Star, Tag, Package, TrendingUp } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, incrementQuantity, decrementQuantity } from '../../../store/cart/cartSlice';
import ClientProvider from '../../component/clientProvider/clientProvider';

const PRODUCTS = [
  {
    id: 1,
    name: 'Fresh Tomatoes',
    price: 1500,
    image: 'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/tomatoes-1296x728-feature.jpg',
    rating: 4.8,
    category: 'Vegetables',
    location: 'Lagos',
    description: 'Freshly harvested tomatoes from Lagos farms. Rich in vitamins and perfect for salads, sauces, and cooking.',
    stock: 150,
    unit: 'kg',
    farmer: 'Green Valley Farms',
  },
  {
    id: 2,
    name: 'Red Apples',
    price: 2000,
    image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce',
    rating: 4.6,
    category: 'Fruits',
    location: 'Ogun',
    description: 'Crisp and juicy red apples from Ogun farms, perfect for snacks and desserts.',
    stock: 100,
    unit: 'kg',
    farmer: 'Sunrise Orchards',
  },
  {
    id: 3,
    name: 'Cucumber',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1574226516831-e1dff420e12b',
    rating: 4.7,
    category: 'Vegetables',
    location: 'Abuja',
    description: 'Fresh cucumbers for salads and pickling, grown organically in Abuja farms.',
    stock: 80,
    unit: 'kg',
    farmer: 'GreenLeaf Farms',
  },
];

const ProductDetails = () => {
  const params = useParams();
  const productId = Number(params.id); // Get ID from URL
  const product = PRODUCTS.find((p) => p.id === productId);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartItem);

  useEffect(() => {
    console.log('Cart updated:', cart);
  }, [cart]);

  if (!product) return <p className="text-center mt-10 text-red-500">Product not found!</p>;

  const productInCart = cart.find((item) => item.id === product.id);
  const quantity = productInCart ? productInCart.quantity : 1;
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-lime-50">
      {/* Header */}
      <div className="bg-white border-b border-green-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-green-800">🌾 AgroMarket</h1>
            <div className="flex gap-4">
              <button className="relative text-green-700 hover:text-green-900">
                <ShoppingCart className="w-6 h-6" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-2 text-sm text-green-600 mb-6">
          <span className="hover:text-green-800 cursor-pointer">Home</span>
          <span>/</span>
          <span className="hover:text-green-800 cursor-pointer">{product.category}</span>
          <span>/</span>
          <span className="text-green-800 font-medium">{product.name}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Section */}
          <div className="space-y-4">
            <div className="relative rounded-2xl overflow-hidden bg-white shadow-lg group">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 lg:h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-300 text-yellow-300" />
                {product.rating}
              </div>
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                Fresh Stock
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-green-900 mb-3">{product.name}</h1>
              <p className="text-lg text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Price Section */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-6 text-white shadow-lg">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-green-100 text-sm mb-1">Price per {product.unit}</p>
                  <p className="text-4xl font-bold">₦{product.price.toLocaleString()}</p>
                </div>
                <div className="text-right">
                  <p className="text-green-100 text-sm mb-1">Available</p>
                  <p className="text-2xl font-semibold">
                    {product.stock} {product.unit}
                  </p>
                </div>
              </div>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-4 shadow-md border border-green-100">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Tag className="w-5 h-5 text-green-700" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Category</p>
                    <p className="font-semibold text-green-900">{product.category}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-md border border-green-100">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <MapPin className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Location</p>
                    <p className="font-semibold text-green-900">{product.location}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-md border border-green-100">
                <div className="flex items-center gap-3">
                  <div className="bg-amber-100 p-2 rounded-lg">
                    <Package className="w-5 h-5 text-amber-700" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Farmer</p>
                    <p className="font-semibold text-green-900">{product.farmer}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-md border border-green-100">
                <div className="flex items-center gap-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-purple-700" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Quality</p>
                    <p className="font-semibold text-green-900">Premium</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="bg-white rounded-xl p-5 shadow-md border border-green-100">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Quantity ({product.unit})
              </label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => dispatch(decrementQuantity(product.id))}
                  className="w-12 h-12 rounded-lg bg-green-100 hover:bg-green-200 text-green-700 font-bold text-xl"
                >
                  -
                </button>
                <span className="w-20 h-12 text-center text-xl font-semibold flex items-center justify-center border-2 border-green-200 rounded-lg">
                  {quantity}
                </span>
                <button
                  onClick={() => dispatch(incrementQuantity(product.id))}
                  className="w-12 h-12 rounded-lg bg-green-100 hover:bg-green-200 text-green-700 font-bold text-xl"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                onClick={() => dispatch(addToCart(product))}
                className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-5 h-5" /> Add to Cart
              </button>
              <button className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                Buy Now
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center justify-center gap-6 pt-4 border-t border-green-100">
              <div className="text-center">
                <p className="text-2xl">🚚</p>
                <p className="text-xs text-gray-600 mt-1">Fast Delivery</p>
              </div>
              <div className="text-center">
                <p className="text-2xl">✓</p>
                <p className="text-xs text-gray-600 mt-1">Quality Assured</p>
              </div>
              <div className="text-center">
                <p className="text-2xl">💯</p>
                <p className="text-xs text-gray-600 mt-1">100% Organic</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Page() {
  return (
    <ClientProvider>
      <ProductDetails />
    </ClientProvider>
  );
}
