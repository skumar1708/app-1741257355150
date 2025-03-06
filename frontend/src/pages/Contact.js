import React from 'react';

function Contact() {
  return (
    <div className="contact-page">
      <h1>Contact</h1>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;