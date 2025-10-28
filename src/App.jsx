import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <>
      <Sidebar isOpen={isMenuOpen} />

      {/* Fixed Header - appears only when scrolled */}
      {scrolled && (
        <Header
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          isHero={false}
          isFixed={true}
        />
      )}

      {/* Overlay - click to close menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-30 transition-opacity duration-500"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <div
        style={
          isMenuOpen
            ? {
                perspective: "2000px",
                perspectiveOrigin: "center right",
                overflow: "hidden",
                height: "100vh",
                width: "100vw",
              }
            : {}
        }
      >
        <div
          className="transition-all duration-500 ease-in-out"
          style={{
            width: "100%",
            minHeight: "100vh",
            backfaceVisibility: "hidden",
            transform: isMenuOpen
              ? "translateZ(0px) translateX(10%) rotateY(-25deg)"
              : "translateZ(0px) translateX(0%) rotateY(0deg)",
            transformStyle: "preserve-3d",
            transformOrigin: "center right",
          }}
        >
          {/* Header inside 3D transform - part of the page */}
          <Header
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            isHero={true}
            isFixed={false}
          />
          <HomePage />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
