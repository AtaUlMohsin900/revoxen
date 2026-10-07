import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import HomeVideo from './pages/HomeVideo.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Team from './pages/Team.jsx';
import PricingPlans from './pages/PricingPlans.jsx';
import Faq from './pages/Faq.jsx';
import Contact from './pages/Contact.jsx';
import Projects3Col from './pages/Projects3Col.jsx';
import Projects4Col from './pages/Projects4Col.jsx';
import ProjectDetails from './pages/ProjectDetails.jsx';
import BlogGrid from './pages/BlogGrid.jsx';
import BlogSingle from './pages/BlogSingle.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-800">
        <Header />
        <main className="pb-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home-video" element={<HomeVideo />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/team" element={<Team />} />
            <Route path="/pricing" element={<PricingPlans />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects-3-col" element={<Projects3Col />} />
            <Route path="/projects-4-col" element={<Projects4Col />} />
            <Route path="/project-details" element={<ProjectDetails />} />
            <Route path="/blog-grid" element={<BlogGrid />} />
            <Route path="/blog-single" element={<BlogSingle />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
