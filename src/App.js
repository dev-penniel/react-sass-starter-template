import { Outlet, Link, NavLink } from 'react-router-dom';

// import all images
import { images } from './constants';

// import components
import { Header, Navbar, Footer } from './components'

function App() {

  let activeStyle = {
    color: "#1592E6",
  };

  let activeClassName = "underline";

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
        <NavLink 
          to="/" 
          style={({ isActive }) =>
            isActive ? activeStyle : undefined
            }>Home
        </NavLink>

        <NavLink 
          to="/about" 
          style={({ isActive }) =>
            isActive ? activeStyle : undefined
            }>About
        </NavLink>

        <NavLink 
          to="/contact" 
          style={({ isActive }) =>
            isActive ? activeStyle : undefined
            }>Contact
        </NavLink>
      </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
