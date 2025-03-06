import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Destinations from './pages/Destinations';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import { fetchBlogPosts, fetchDestinations, fetchGalleryImages } from './services/api';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [destinations, setDestinations] = useState([]);
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const postsData = await fetchBlogPosts();
      const destinationsData = await fetchDestinations();
      const galleryImagesData = await fetchGalleryImages();
      setPosts(postsData);
      setDestinations(destinationsData);
      setGalleryImages(galleryImagesData);
    };

    loadData();
  }, []);

  return (
    <Router>
      <div className="app-container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home posts={posts} />} />
            <Route path="/blog" element={<Blog posts={posts} />} />
            <Route path="/destinations" element={<Destinations destinations={destinations} />} />
            <Route path="/gallery" element={<Gallery images={galleryImages} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Newsletter />
        <Footer />
      </div>
    </Router>
  );
}

export default App;