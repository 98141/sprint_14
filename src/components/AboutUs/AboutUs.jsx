import { Link, Outlet } from "react-router-dom";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about-us">
      <p>Aquí puedes encontrar más información sobre nuestro sitio.</p>
      <ul className="links">
        <li>
          <Link to="histori">Historia del sitio</Link>
        </li>
        <li>
          <Link to="mission">Nuestra misión</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default AboutUs;
