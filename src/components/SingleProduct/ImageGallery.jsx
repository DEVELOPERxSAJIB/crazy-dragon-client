import React, { useState } from 'react';

const ImageGallery = ({ images, productName }) => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  return (
    <div className="flex flex-col space-y-4">
      
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md">
        <img 
          src={currentImage} 
          alt={`${productName} - Main View`} 
          className="w-full max-h-[400px] object-cover transition-opacity duration-300"
        />
      </div>
      
      <div className="flex space-x-3 overflow-x-auto pb-2">
        {images.map((thumb, index) => (
          <div
            key={index}
            className={`w-20 h-20 shrink-0 border-2 rounded-lg cursor-pointer overflow-hidden transition-all duration-200 ${
              thumb === currentImage ? 'border-pink-600 shadow-lg' : 'border-gray-300 hover:border-pink-300'
            }`}
            onClick={() => setCurrentImage(thumb)}
          >
            <img 
              src={thumb} 
              alt={`${productName} - Thumbnail ${index + 1}`} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;