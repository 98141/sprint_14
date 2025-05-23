import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Dashboard/Dashboard";
import Header from "./Header/Header";
import Reviews from "./Reviews/Reviews";

//rutas padre e hijos
import AboutMe from "./AboutMe/AboutMe"; //ruta padre
import Contact from "./AboutMe/about-me-files/Contact";
import Hobbies from "./AboutMe/about-me-files/Hobbies";
import MyStory from "./AboutMe/about-me-files/MyStory";

import AboutUs from "./AboutUs/AboutUs"; //ruta padre
import SiteHistory from "./AboutUs/about-us-files/SiteHistory";
import SiteMission from "./AboutUs/about-us-files/SiteMission";
import { useEffect, useState } from "react";
import Review from "./Review/Review";

function App() {
  const [reviews, setReviews] = useState([]); // Nueva variable useState

  useEffect(() => {
    // Obtiene los datos de reseñas del servidor.
    fetch("https://emoji-critic.es.tripleten-services.com/v1/reviews")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // Pasa el cuerpo de la respuesta analizada a la función setter.
        setReviews(data);
      })
      .catch(console.error);
    // Un array de dependencia vacío significa que el hook sólo se ejecuta cuando
    // se carga el componente.
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/reviews" element={<Reviews reviews={reviews} />}/>
          <Route
            path="/reviews/:reviewId"
            element={<Review reviews={reviews} />}
          />
        
        <Route path="/about-me" element={<AboutMe />}>
          <Route path="contact" element={<Contact />} />
          <Route path="hobbies" element={<Hobbies />} />
          <Route path="my-story" element={<MyStory />} />
        </Route>
        <Route path="/about-us" element={<AboutUs />}>
          <Route path="histori" element={<SiteHistory />} />
          <Route path="mission" element={<SiteMission />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
