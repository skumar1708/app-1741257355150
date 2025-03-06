import React from 'react';

function PhotoGallery({ images }) {
  return (
    <div className="photo-gallery">
      {images.map((img, index) => (
        <img key={index} src={img} alt={`Gallery ${index}`} />
      ))}
    </div>
  );
}

export default PhotoGallery;