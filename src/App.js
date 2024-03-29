import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Theme from "./components/theme";
import Extra from "./components/Extra";
import Footer from "./components/Footer";
import DetailPort from "./components/DetailPort";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";



function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
        <Routes>
          <Route path="/" element={[<NavBar />, <Home />, <About />, <Portfolio />, <Experience />, <Extra />, <Contact />, <Footer />, <SocialLinks />, <Theme />]} />
          <Route path="/portfolio" element={[<NavBar />, <DetailPort />, <Footer />, <SocialLinks />, <Theme />]} />
        </Routes>
        {/* <NavBar />
        <Home />
        <About />
        <Portfolio />
        <Experience />
        <Extra />
        <Contact />
        <Footer />
        <SocialLinks />
        <Theme /> */}
    </div>
  );
}

export default App;
