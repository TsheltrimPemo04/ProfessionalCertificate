import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Achievements from "./pages/Achievements";
import Blog from "./pages/Blog";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen scroll-smooth py-12 p-6 md:px-16 xl:px-24">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          {/* Main one-page sections */}
          <Route 
            path="/" 
            element={
              <div className="space-y-24 md:space-y-64">
                <section id="home"><Home /></section>
                <section id="about"><About /></section>
                <section id="skills"><Skills /></section>
                <section id="contact"><Contact /></section>

              </div>
            } 
          />

          {/* Separate Projects Page */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/blog" element={<Blog />} />

        </Routes>
      </main>

      <Footer />
    </div>
  );
}