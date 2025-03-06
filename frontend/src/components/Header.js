import React from 'react';

function Header() {
  return (
    <header className="header">
      <h1>Travel Blog</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/blog">Blog</a>
        <a href="/destinations">Destinations</a>
        <a href="/gallery">Gallery</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;