import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import MatchingGame from './Pages/MatchingGame'; // Adjust import path if necessary
import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Container>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/matching-game" element={<MatchingGame />} />
          {/* Other routes here */}
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
