import { Outlet, Link } from 'react-router-dom';

// import all images
import { images } from './constants';

// import components
import { Header, Navbar, Footer } from './components'

function App() {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav>
        
        {/* logo image */}
        <img className="logo" src={images.logo} alt="" />

        {/* Pages - Outlet component outputs respective page */}
      <div className="nav-links"
        style={{
          padding: "20px",
          display: "flex",
          gap: "10px"
        }}
      >
        {/* Navigation  Links */}
        <Link to="/" >Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
