import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
    
      <NavLink className="navbar" to="/">Home</NavLink> 
      <NavLink className="navbar"
to="/actors">Actors</NavLink>
      <NavLink className="navbar" 
to="/directors">Directors</NavLink>
      <NavLink className="navbar" to="/movie">Movie</NavLink>
    </nav>
    );
};

export default NavBar;