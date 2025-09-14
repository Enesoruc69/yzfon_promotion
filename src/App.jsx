import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Team from "./components/Team";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-800 scroll-smooth w-full min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
