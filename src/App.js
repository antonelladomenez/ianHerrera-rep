import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./home";
import Portfolio from "./portfolio";
import Contact from "./Contact";
import ContentPage from "./components/contentPage";
import Services from "./services";
import Gallery from "./gallery";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project/:id" element={<Gallery />} />
        <Route path="/" element={<Navigate to="/content/terms" />} />
        <Route path="/content/:page" element={<ContentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
