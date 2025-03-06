import React from 'react';
import PhotoGallery from '../components/PhotoGallery';

function Destinations({ destinations }) {
  return (
    <div className="destinations-page">
      <h1>Destinations</h1>
      {destinations.map((destination, index) => (
        <section key={index}>
          <h2>{destination.name}</h2>
          <PhotoGallery images={destination.images} />
          <div className="map">
            <h3>Interactive Map</h3>
            <iframe
              src={destination.mapUrl}
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </section>
      ))}
    </div>
  );
}

export default Destinations;