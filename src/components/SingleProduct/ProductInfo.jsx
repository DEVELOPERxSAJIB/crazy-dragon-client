import React, { useState } from 'react';
import Ratings from '../Ratings/Ratings';

const ProductInfo = ({ data }) => {
  const [quantity, setQuantity] = useState(1);
  const pinkColor = 'text-pink-600';

  return (
    <>
      <div className="border-b border-gray-200 pb-4">
        <p className="text-sm text-gray-500 mb-1">
          Product # {data.id}
        </p>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {data.name}
        </h1>
        
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <div className="flex items-center">
            {/* Star Icons Placeholder */}
            <Ratings size='md' />
          </div>
          <span className="text-gray-700">({data.reviews} Reviewed)</span>
        </div>
      </div>

      <div className="py-4 border-b border-gray-200">
        <h2 className="text-4xl font-extrabold text-gray-900">
          €{data.price}
        </h2>
      </div>
      
      <div className="flex items-center space-x-4 py-4">
        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
          <button 
            className="px-3 py-2 text-lg font-semibold text-gray-600 hover:bg-gray-100"
            onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
          >
            -
          </button>
          <input 
            type="text" 
            value={quantity} 
            readOnly 
            className="w-10 text-center text-lg font-semibold outline-none" 
          />
          <button 
            className="px-3 py-2 text-lg font-semibold text-gray-600 hover:bg-gray-100"
            onClick={() => setQuantity(prev => prev + 1)}
          >
            +
          </button>
        </div>
        
        {/* Add to Cart Button */}
        <button className="bg-[#491648] text-white font-bold py-2 px-6 rounded-md shadow-md hover:bg-[#3A0F3A] transition-colors duration-200 flex-grow">
          Add to Cart
        </button>
      </div>

      {/* Status and Category */}
      <div className="flex space-x-6 text-sm">
        <p className="font-medium">
          <span className="text-gray-500">Status:</span> 
          <span className="ml-1 font-bold text-green-600">{data.status}</span>
        </p>
        <p className="font-medium">
          <span className="text-gray-500">Category:</span> 
          <span className="ml-1 font-bold text-gray-800">{data.category}</span>
        </p>
      </div>

      <hr className="my-4" />

      {/* Description */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Description:</h3>
        <p className="text-gray-700 leading-relaxed text-sm">
          {data.description}
        </p>
      </div>

      {/* Sold By */}
      <div className="mt-4">
        <p className="text-sm font-medium">
          <span className="text-gray-500">Sold by:</span> 
          <span className={`ml-1 font-bold ${pinkColor}`}>{data.soldBy}</span>
        </p>
      </div>

      {/* Review Login Prompt */}
      <div className="mt-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
        <p className="font-semibold text-sm">
          Login in to submit your review
        </p>
      </div>
    </>
  );
};

export default ProductInfo;