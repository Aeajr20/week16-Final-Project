import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Array of video objects containing id, title, and URL
const videos = [
  {
    id: 1,
    title: 'Rick and Morty Short Video 1',
    url: 'https://www.youtube.com/watch?v=I1188GO4p1E&pp=ygUbcmljayBhbmQgbW9ydHkgc2hvcnQgdmlkZW9z',
  },
  {
    id: 2,
    title: 'Rick and Morty Short Video 2',
    url: 'https://www.youtube.com/watch?v=zVvR-h0Bpu8&pp=ygUbcmljayBhbmQgbW9ydHkgc2hvcnQgdmlkZW9z',
  },
  {
    id: 3,
    title: 'Rick and Morty Short Video 3',
    url: 'https://www.youtube.com/watch?v=8RxDVdP2TZ8&pp=ygULcGlja2xlIHJpY2s%3D',
  },
];

const Footer = () => {
  // Generate a random video from the array
  const randomVideo = videos[Math.floor(Math.random() * videos.length)];

  return (
    <footer className="footer mt-auto py-3">
      <Container>
        {/* Display a slogan */}
        <p>LET'S GET SCHWIFTY</p>
        {/* Link to navigate back to the home page */}
        <Link to="/" className="btn btn-primary mr-2">
          Back to Home
        </Link>
        {/* Link to watch a random Rick and Morty short video */}
        <a
          href={randomVideo.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary"
        >
          Watch {randomVideo.title}
        </a>
      </Container>
    </footer>
  );
};

export default Footer;
