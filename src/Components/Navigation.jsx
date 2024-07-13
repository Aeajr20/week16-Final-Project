// import React from 'react';
// import { Link } from 'react-router-dom';

// function Navigation() {
//   return (
//     <nav className="navbar">
//       <Link to="/">Home</Link>
//       <Link to="/matching-game">Matching Game</Link>
//       {/* <Link to="/tic-tac-toe">Tic Tac Toe</Link> */}
//     </nav>
//   );
// }

// export default Navigation;





import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Nav className="justify-content-center">
      <Nav.Item>
        <Link to="/" className="nav-link">Home</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/matching-game" className="nav-link">Matching Game</Link>
      </Nav.Item>
      {/* Add more navigation links for other pages */}
    </Nav>
  );
}

export default Navigation;
