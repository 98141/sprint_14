import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Dashboard/Dashboard";
import Header from "./Header/Header";
import Reviews from "./Reviews/Reviews";
import AboutMe from "./AboutMe/AboutMe";
import AboutUs from "./AboutUs/AboutUs";

//rutas hijos
import Contact from "./AboutMe/about-me-files/Contact";
import Hobbies from "./AboutMe/about-me-files/Hobbies";
import MyStory from "./AboutMe/about-me-files/MyStory";
import SiteHistory from "./AboutUs/about-us-files/SiteHistory";
import SiteMission from "./AboutUs/about-us-files/SiteMission";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/reviews" element={<Reviews />} />
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
