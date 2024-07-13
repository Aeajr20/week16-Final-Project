// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });



import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import MatchingGame from './Pages/MatchingGame'; // Assuming MatchingGame is in Pages folder
import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Container>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/matching-game" element={<MatchingGame />} />
          {/* Add more routes for other pages as needed */}
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
