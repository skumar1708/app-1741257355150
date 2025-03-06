import React from 'react';
import PhotoGallery from '../components/PhotoGallery';

function Gallery({ images }) {
  return (
    <div className="gallery-page">
      <h1>Photo Gallery</h1>
      <PhotoGallery images={images} />
    </div>
  );
}

export default Gallery;