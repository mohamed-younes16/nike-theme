import { useEffect } from "react";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Offer from "./components/Offer";
import Products from "./components/Products";
import Reviews from "./components/Reviews";
import "./index.css";
import Lenis from "@studio-freight/lenis";
function App() {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      document.documentElement.style.backgroundPosition = `${
        (e.animatedScroll / (e.dimensions.scrollHeight - window.innerHeight)) *
        150
      }%`;
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Navbar />
      <Landing />
      <Products />
      <AboutUs />
      <Offer />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
