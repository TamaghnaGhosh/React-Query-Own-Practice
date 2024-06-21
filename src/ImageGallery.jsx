import React from 'react';

const ImageGallery = ({ imageUrls }) => {
  // Ensure we have at least 6 items to display
  const imagesToDisplay = imageUrls.slice(0, 6);

  // Create an array of 6 elements to render placeholders for the rest
  const emptyImages = Array.from({ length: 6 - imagesToDisplay.length }).fill(null);

  return (
    <div className="image-gallery">
      {imagesToDisplay.map((imageUrl, index) => (
        <img key={index} src={imageUrl} alt={`Image ${index}`} />
      ))}
      {emptyImages.map((_, index) => (
        <div key={`empty-${index}`} className="empty-image">
          {/* You can customize the empty placeholder here */}
          Empty
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
