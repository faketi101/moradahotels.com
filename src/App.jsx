import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Sidebar isOpen={isMenuOpen} />

      {/* Overlay - click to close menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 transition-opacity duration-500"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <div
        className={`transition-transform duration-500 ease-in-out relative ${
          isMenuOpen ? "translate-x-80" : "translate-x-0"
        }`}
      >
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} isHero />
        <HomePage />
        <Footer />
      </div>
    </>
  );
}

export default App;
