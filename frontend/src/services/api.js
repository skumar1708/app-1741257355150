export const fetchBlogPosts = async () => {
  try {
    const response = await fetch('/api/blog-posts');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    throw error;
  }
};

export const fetchDestinations = async () => {
  try {
    const response = await fetch('/api/destinations');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching destinations:', error);
    throw error;
  }
};

export const fetchGalleryImages = async () => {
  try {
    const response = await fetch('/api/gallery-images');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching gallery images:', error);
    throw error;
  }
};