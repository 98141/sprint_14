import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    // customClassName es una función que acepta un objeto como su parámetro.
  // Este objeto tiene una propiedad isActive que es verdadera si el enlace está activo.
  const customClassName = ({ isActive }) =>
    "menu__link" + (isActive ? " menu__link_active" : "");
  return (
    <nav className="menu">
      <NavLink to="/" className={customClassName}>Inicio</NavLink>
      <NavLink to="/reviews" className={customClassName}>Reseñas de emojis</NavLink>
      <NavLink to="/about-me" className={customClassName}>Sobre mí</NavLink>
      <NavLink to="/about-us" className={customClassName}>Sobre nosotros</NavLink>
    </nav>
  )
}

export default NavBar;